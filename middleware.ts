import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// Lista de user agents suspeitos
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
  'sqlninja',
  'pangolin',
  'bsqlbf',
  'jsql',
  'sqlsus',
  'marathon',
  'absinthe',
  'sqldumper',
  'sqlpowerinjector',
  'sqlbf',
  'sqlmap',
  'automated',
  'bot',
  'crawler',
  'spider',
  'scraper'
]

// Lista de paths suspeitos
const suspiciousPaths = [
  '/admin',
  '/wp-admin',
  '/wp-login.php',
  '/administrator',
  '/phpmyadmin',
  '/.env',
  '/config',
  '/backup',
  '/test',
  '/debug',
  '/api/v1/admin',
  '/.git',
  '/.svn',
  '/robots.txt',
  '/sitemap.xml',
  '/crossdomain.xml',
  '/clientaccesspolicy.xml'
]

// Lista de IPs bloqueados (exemplo - adicione IPs suspeitos)
const blockedIPs = [
  // Adicione IPs suspeitos aqui se necessário
]

export function middleware(request: NextRequest) {
  const { pathname, search } = request.nextUrl
  const userAgent = request.headers.get('user-agent') || ''
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
  
  // Log de requisições suspeitas
  const logSuspiciousActivity = (reason: string) => {
    console.log(`[SECURITY] ${new Date().toISOString()} - ${ip} - ${reason} - ${pathname} - ${userAgent}`)
  }

  // Verificar IPs bloqueados
  if (blockedIPs.includes(ip)) {
    logSuspiciousActivity('BLOCKED_IP')
    return new NextResponse('Access Denied', { status: 403 })
  }

  // Verificar user agents suspeitos
  const isSuspiciousUA = suspiciousUserAgents.some(ua => 
    userAgent.toLowerCase().includes(ua.toLowerCase())
  )
  
  if (isSuspiciousUA) {
    logSuspiciousActivity('SUSPICIOUS_USER_AGENT')
    return new NextResponse('Access Denied', { status: 403 })
  }

  // Verificar paths suspeitos
  const isSuspiciousPath = suspiciousPaths.some(path => 
    pathname.toLowerCase().includes(path.toLowerCase())
  )
  
  if (isSuspiciousPath) {
    logSuspiciousActivity('SUSPICIOUS_PATH')
    return new NextResponse('Not Found', { status: 404 })
  }

  // Verificar tentativas de SQL injection
  const sqlInjectionPatterns = [
    /union\s+select/i,
    /drop\s+table/i,
    /insert\s+into/i,
    /delete\s+from/i,
    /update\s+set/i,
    /or\s+1=1/i,
    /and\s+1=1/i,
    /'or'1'='1/i,
    /"or"1"="1/i,
    /script\s*>/i,
    /<script/i,
    /javascript:/i,
    /vbscript:/i,
    /onload=/i,
    /onerror=/i
  ]

  const fullUrl = pathname + search
  const hasSQLInjection = sqlInjectionPatterns.some(pattern => 
    pattern.test(fullUrl)
  )

  if (hasSQLInjection) {
    logSuspiciousActivity('SQL_INJECTION_ATTEMPT')
    return new NextResponse('Bad Request', { status: 400 })
  }

  // Rate limiting básico (simplificado)
  const rateLimitKey = `rate_limit_${ip}`
  // Em produção, use Redis ou similar para rate limiting real

  // Headers de segurança adicionais
  const response = NextResponse.next()
  
  // Adicionar timestamp para cache busting
  response.headers.set('X-Timestamp', Date.now().toString())
  
  // Adicionar nonce para scripts inline (se necessário)
  const nonce = Buffer.from(crypto.randomUUID()).toString('base64')
  response.headers.set('X-Nonce', nonce)

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
