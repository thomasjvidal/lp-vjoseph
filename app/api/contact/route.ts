import { NextRequest, NextResponse } from 'next/server'
import { validateContactForm, logSecurityEvent, detectSuspiciousPatterns } from '@/lib/security'

// Rate limiting store (em produção, usar Redis)
const contactRateLimit = new Map<string, { count: number; resetTime: number }>()

export async function POST(request: NextRequest) {
  const startTime = Date.now()
  const ip = request.ip || request.headers.get('x-forwarded-for') || 'unknown'
  
  try {
    // Rate limiting para contato
    const now = Date.now()
    const rateLimitKey = `contact:${ip}`
    const rateLimitData = contactRateLimit.get(rateLimitKey)

    if (rateLimitData && now < rateLimitData.resetTime) {
      if (rateLimitData.count >= 5) { // máximo 5 contatos por hora
        logSecurityEvent('contact_rate_limit_exceeded', { ip })
        return new NextResponse('Too Many Requests', { 
          status: 429,
          headers: { 'Retry-After': '3600' }
        })
      }
      rateLimitData.count++
    } else {
      contactRateLimit.set(rateLimitKey, {
        count: 1,
        resetTime: now + (60 * 60 * 1000) // 1 hora
      })
    }

    // Parse do body
    const body = await request.json()
    
    // Verificar se há padrões suspeitos
    const bodyString = JSON.stringify(body)
    if (detectSuspiciousPatterns(bodyString)) {
      logSecurityEvent('suspicious_contact_attempt', { ip, body: bodyString })
      return new NextResponse('Forbidden', { status: 403 })
    }

    // Validar formulário
    const validation = validateContactForm(body)
    
    if (!validation.isValid) {
      logSecurityEvent('invalid_contact_form', { 
        ip, 
        errors: validation.errors,
        data: validation.sanitizedData 
      })
      
      return NextResponse.json({
        success: false,
        errors: validation.errors
      }, { status: 400 })
    }

    // Log do contato válido
    logSecurityEvent('valid_contact_submission', {
      ip,
      email: validation.sanitizedData.email,
      responseTime: Date.now() - startTime
    })

    // Aqui você integraria com seu serviço de email
    // Por exemplo: await sendEmail(validation.sanitizedData)
    
    // Simular envio de email
    await new Promise(resolve => setTimeout(resolve, 100))

    return NextResponse.json({
      success: true,
      message: 'Mensagem enviada com sucesso! Entraremos em contato em breve.',
      responseTime: Date.now() - startTime
    })

  } catch (error) {
    console.error('[CONTACT] Error processing contact form:', error)
    
    logSecurityEvent('contact_form_error', {
      ip,
      error: error instanceof Error ? error.message : 'Unknown error'
    })

    return NextResponse.json({
      success: false,
      message: 'Erro interno do servidor. Tente novamente mais tarde.'
    }, { status: 500 })
  }
}

// Bloquear outros métodos
export async function GET() {
  return new NextResponse('Method Not Allowed', { status: 405 })
}

export async function PUT() {
  return new NextResponse('Method Not Allowed', { status: 405 })
}

export async function DELETE() {
  return new NextResponse('Method Not Allowed', { status: 405 })
}
