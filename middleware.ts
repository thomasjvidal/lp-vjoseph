import { NextRequest, NextResponse } from 'next/server'

// Rate limiting store (em produção, usar Redis)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

// Configurações de rate limiting
const RATE_LIMIT = {
  windowMs: 15 * 60 * 1000, // 15 minutos
  maxRequests: 100, // máximo 100 requests por IP
  blockDuration: 60 * 60 * 1000 // bloqueio por 1 hora
}

// Lista de IPs suspeitos (em produção, usar banco de dados)
const suspiciousIPs = new Set<string>()

// User agents suspeitos
const suspiciousUserAgents = [
  'sqlmap',
  'nikto',
  'nmap',
  'masscan',
  'zap',
  'burp',
  'w3af',
  'acunetix',
  'nessus',
  'openvas',
  'havij',
  'sqlninja'
]

// Headers de segurança adicionais
const securityHeaders = {
  'X-DNS-Prefetch-Control': 'off',
  'X-Download-Options': 'noopen',
  'X-Permitted-Cross-Domain-Policies': 'none',
  'Cross-Origin-Embedder-Policy': 'require-corp',
  'Cross-Origin-Opener-Policy': 'same-origin',
  'Cross-Origin-Resource-Policy': 'same-origin'
}

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
  const userAgent = request.headers.get('user-agent') || ''
  
  // Log de segurança
  console.log(`[SECURITY] ${new Date().toISOString()} - IP: ${ip} - Path: ${pathname} - UA: ${userAgent}`)

  // Verificar user agent suspeito
  const isSuspiciousUA = suspiciousUserAgents.some(ua => 
    userAgent.toLowerCase().includes(ua.toLowerCase())
  )

  if (isSuspiciousUA) {
    console.log(`[SECURITY] Suspicious User Agent detected: ${userAgent}`)
    return new NextResponse('Forbidden', { status: 403 })
  }

  // Verificar IP suspeito
  if (suspiciousIPs.has(ip)) {
    console.log(`[SECURITY] Blocked suspicious IP: ${ip}`)
    return new NextResponse('Forbidden', { status: 403 })
  }

  // Rate limiting
  const now = Date.now()
  const rateLimitKey = `${ip}:${pathname}`
  const rateLimitData = rateLimitMap.get(rateLimitKey)

  if (rateLimitData) {
    if (now < rateLimitData.resetTime) {
      if (rateLimitData.count >= RATE_LIMIT.maxRequests) {
        console.log(`[SECURITY] Rate limit exceeded for IP: ${ip}`)
        suspiciousIPs.add(ip)
        return new NextResponse('Too Many Requests', { 
          status: 429,
          headers: {
            'Retry-After': '3600'
          }
        })
      }
      rateLimitData.count++
    } else {
      rateLimitData.count = 1
      rateLimitData.resetTime = now + RATE_LIMIT.windowMs
    }
  } else {
    rateLimitMap.set(rateLimitKey, {
      count: 1,
      resetTime: now + RATE_LIMIT.windowMs
    })
  }

  // Verificar tentativas de path traversal
  if (pathname.includes('..') || pathname.includes('~') || pathname.includes('//')) {
    console.log(`[SECURITY] Path traversal attempt: ${pathname}`)
    return new NextResponse('Forbidden', { status: 403 })
  }

  // Verificar tentativas de SQL injection em query params
  const sqlPatterns = [
    /union\s+select/i,
    /drop\s+table/i,
    /insert\s+into/i,
    /delete\s+from/i,
    /update\s+set/i,
    /or\s+1=1/i,
    /and\s+1=1/i
  ]

  const queryString = searchParams.toString()
  const hasSQLInjection = sqlPatterns.some(pattern => pattern.test(queryString))
  
  if (hasSQLInjection) {
    console.log(`[SECURITY] SQL injection attempt: ${queryString}`)
    return new NextResponse('Forbidden', { status: 403 })
  }

  // Verificar tentativas de XSS
  const xssPatterns = [
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /<iframe/i,
    /<object/i,
    /<embed/i
  ]

  const hasXSS = xssPatterns.some(pattern => pattern.test(queryString))
  
  if (hasXSS) {
    console.log(`[SECURITY] XSS attempt: ${queryString}`)
    return new NextResponse('Forbidden', { status: 403 })
  }

  // Bloquear arquivos sensíveis
  const sensitiveFiles = [
    '.env',
    '.git',
    'package.json',
    'package-lock.json',
    'yarn.lock',
    'pnpm-lock.yaml',
    'composer.json',
    'wp-config.php',
    'config.php',
    'database.yml',
    'secrets.yml'
  ]

  const isSensitiveFile = sensitiveFiles.some(file => pathname.includes(file))
  
  if (isSensitiveFile) {
    console.log(`[SECURITY] Sensitive file access attempt: ${pathname}`)
    return new NextResponse('Not Found', { status: 404 })
  }

  // Criar resposta com headers de segurança
  const response = NextResponse.next()
  
  // Adicionar headers de segurança
  Object.entries(securityHeaders).forEach(([key, value]) => {
    response.headers.set(key, value)
  })

  // Limpar cache para requests suspeitos
  if (isSuspiciousUA || hasSQLInjection || hasXSS) {
    response.headers.set('Cache-Control', 'no-cache, no-store, must-revalidate')
    response.headers.set('Pragma', 'no-cache')
    response.headers.set('Expires', '0')
  }

  return response
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}
