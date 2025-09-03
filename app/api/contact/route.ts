import { NextRequest, NextResponse } from 'next/server'
import { validateContactData, sanitizeFormData, logSecurityEvent } from '@/lib/security'

// Rate limiting simples (em produção use Redis)
const rateLimitMap = new Map<string, { count: number; resetTime: number }>()

function checkRateLimit(ip: string): boolean {
  const now = Date.now()
  const windowMs = 15 * 60 * 1000 // 15 minutos
  const maxRequests = 5 // 5 requests por 15 minutos

  const current = rateLimitMap.get(ip)
  
  if (!current || now > current.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + windowMs })
    return true
  }

  if (current.count >= maxRequests) {
    return false
  }

  current.count++
  return true
}

export async function POST(request: NextRequest) {
  try {
    const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
    
    // Verificar rate limiting
    if (!checkRateLimit(ip)) {
      logSecurityEvent('RATE_LIMIT_EXCEEDED', { ip }, ip)
      return NextResponse.json(
        { error: 'Muitas tentativas. Tente novamente em 15 minutos.' },
        { status: 429 }
      )
    }

    // Verificar Content-Type
    const contentType = request.headers.get('content-type')
    if (!contentType || !contentType.includes('application/json')) {
      return NextResponse.json(
        { error: 'Content-Type deve ser application/json' },
        { status: 400 }
      )
    }

    // Verificar tamanho da requisição
    const contentLength = request.headers.get('content-length')
    if (contentLength && parseInt(contentLength) > 1024 * 10) { // 10KB max
      return NextResponse.json(
        { error: 'Requisição muito grande' },
        { status: 413 }
      )
    }

    const body = await request.json()
    
    // Sanitizar dados
    const sanitizedData = sanitizeFormData(body)
    
    // Validar dados
    const validation = validateContactData(sanitizedData)
    
    if (!validation.isValid) {
      logSecurityEvent('INVALID_CONTACT_DATA', { 
        errors: validation.errors,
        data: sanitizedData 
      }, ip)
      
      return NextResponse.json(
        { error: 'Dados inválidos', details: validation.errors },
        { status: 400 }
      )
    }

    // Log da tentativa de contato
    logSecurityEvent('CONTACT_FORM_SUBMISSION', {
      name: sanitizedData.name,
      email: sanitizedData.email,
      hasPhone: !!sanitizedData.phone,
      messageLength: sanitizedData.message?.length || 0
    }, ip)

    // Aqui você integraria com seu serviço de email (Resend, SendGrid, etc.)
    // Por enquanto, apenas simulamos o sucesso
    
    // Simular delay para prevenir timing attacks
    await new Promise(resolve => setTimeout(resolve, 100 + Math.random() * 200))

    return NextResponse.json(
      { 
        success: true, 
        message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.' 
      },
      { 
        status: 200,
        headers: {
          'Cache-Control': 'no-cache, no-store, must-revalidate',
          'X-Content-Type-Options': 'nosniff'
        }
      }
    )

  } catch (error) {
    logSecurityEvent('CONTACT_FORM_ERROR', { 
      error: error instanceof Error ? error.message : 'Unknown error' 
    }, request.ip || 'unknown')
    
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

// Bloquear outros métodos HTTP
export async function GET() {
  return NextResponse.json(
    { error: 'Método não permitido' },
    { status: 405 }
  )
}

export async function PUT() {
  return NextResponse.json(
    { error: 'Método não permitido' },
    { status: 405 }
  )
}

export async function DELETE() {
  return NextResponse.json(
    { error: 'Método não permitido' },
    { status: 405 }
  )
}
