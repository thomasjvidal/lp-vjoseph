// Utilitários de segurança para a aplicação

// Sanitização de strings
export function sanitizeString(input: string): string {
  if (typeof input !== 'string') return ''
  
  return input
    .replace(/[<>]/g, '') // Remove < e >
    .replace(/javascript:/gi, '') // Remove javascript:
    .replace(/on\w+\s*=/gi, '') // Remove event handlers
    .replace(/script/gi, '') // Remove script tags
    .replace(/iframe/gi, '') // Remove iframe tags
    .replace(/object/gi, '') // Remove object tags
    .replace(/embed/gi, '') // Remove embed tags
    .trim()
}

// Validação de email
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email) && email.length <= 254
}

// Validação de URL
export function isValidUrl(url: string): boolean {
  try {
    const urlObj = new URL(url)
    return ['http:', 'https:'].includes(urlObj.protocol)
  } catch {
    return false
  }
}

// Validação de telefone brasileiro
export function isValidBrazilianPhone(phone: string): boolean {
  const phoneRegex = /^(\+55\s?)?(\(?\d{2}\)?\s?)?\d{4,5}-?\d{4}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

// Mascaramento de dados sensíveis
export function maskEmail(email: string): string {
  if (!isValidEmail(email)) return '***@***.***'
  
  const [local, domain] = email.split('@')
  const maskedLocal = local.length > 2 
    ? local.substring(0, 2) + '*'.repeat(local.length - 2)
    : '*'.repeat(local.length)
  
  return `${maskedLocal}@${domain}`
}

export function maskPhone(phone: string): string {
  const cleaned = phone.replace(/\D/g, '')
  if (cleaned.length < 10) return '***-****-****'
  
  return cleaned.replace(/(\d{2})(\d{4,5})(\d{4})/, '($1) $2-****')
}

// Validação de entrada de formulário
export interface FormValidationResult {
  isValid: boolean
  errors: string[]
  sanitizedData: Record<string, any>
}

export function validateContactForm(data: Record<string, any>): FormValidationResult {
  const errors: string[] = []
  const sanitizedData: Record<string, any> = {}

  // Nome
  if (!data.name || typeof data.name !== 'string') {
    errors.push('Nome é obrigatório')
  } else {
    const sanitizedName = sanitizeString(data.name)
    if (sanitizedName.length < 2) {
      errors.push('Nome deve ter pelo menos 2 caracteres')
    } else if (sanitizedName.length > 100) {
      errors.push('Nome deve ter no máximo 100 caracteres')
    } else {
      sanitizedData.name = sanitizedName
    }
  }

  // Email
  if (!data.email || typeof data.email !== 'string') {
    errors.push('Email é obrigatório')
  } else {
    const sanitizedEmail = sanitizeString(data.email.toLowerCase())
    if (!isValidEmail(sanitizedEmail)) {
      errors.push('Email inválido')
    } else {
      sanitizedData.email = sanitizedEmail
    }
  }

  // Telefone (opcional)
  if (data.phone && typeof data.phone === 'string') {
    const sanitizedPhone = sanitizeString(data.phone)
    if (sanitizedPhone && !isValidBrazilianPhone(sanitizedPhone)) {
      errors.push('Telefone inválido')
    } else {
      sanitizedData.phone = sanitizedPhone
    }
  }

  // Mensagem
  if (!data.message || typeof data.message !== 'string') {
    errors.push('Mensagem é obrigatória')
  } else {
    const sanitizedMessage = sanitizeString(data.message)
    if (sanitizedMessage.length < 10) {
      errors.push('Mensagem deve ter pelo menos 10 caracteres')
    } else if (sanitizedMessage.length > 1000) {
      errors.push('Mensagem deve ter no máximo 1000 caracteres')
    } else {
      sanitizedData.message = sanitizedMessage
    }
  }

  return {
    isValid: errors.length === 0,
    errors,
    sanitizedData
  }
}

// Geração de tokens CSRF
export function generateCSRFToken(): string {
  const array = new Uint8Array(32)
  crypto.getRandomValues(array)
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('')
}

// Validação de token CSRF
export function validateCSRFToken(token: string, sessionToken: string): boolean {
  if (!token || !sessionToken) return false
  return token === sessionToken
}

// Hash seguro para senhas (se necessário)
export async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder()
  const data = encoder.encode(password)
  const hashBuffer = await crypto.subtle.digest('SHA-256', data)
  const hashArray = Array.from(new Uint8Array(hashBuffer))
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('')
}

// Verificação de força de senha
export function isStrongPassword(password: string): boolean {
  if (password.length < 8) return false
  
  const hasUpperCase = /[A-Z]/.test(password)
  const hasLowerCase = /[a-z]/.test(password)
  const hasNumbers = /\d/.test(password)
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password)
  
  return hasUpperCase && hasLowerCase && hasNumbers && hasSpecialChar
}

// Detecção de padrões suspeitos
export function detectSuspiciousPatterns(input: string): boolean {
  const suspiciousPatterns = [
    /union\s+select/i,
    /drop\s+table/i,
    /insert\s+into/i,
    /delete\s+from/i,
    /update\s+set/i,
    /or\s+1=1/i,
    /and\s+1=1/i,
    /<script/i,
    /javascript:/i,
    /on\w+\s*=/i,
    /<iframe/i,
    /<object/i,
    /<embed/i,
    /eval\s*\(/i,
    /expression\s*\(/i,
    /vbscript:/i,
    /data:text\/html/i
  ]
  
  return suspiciousPatterns.some(pattern => pattern.test(input))
}

// Log de segurança
export function logSecurityEvent(event: string, details: Record<string, any> = {}) {
  const timestamp = new Date().toISOString()
  const logEntry = {
    timestamp,
    event,
    details,
    userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'server',
    url: typeof window !== 'undefined' ? window.location.href : 'server'
  }
  
  console.log(`[SECURITY] ${JSON.stringify(logEntry)}`)
  
  // Em produção, enviar para serviço de logging
  if (process.env.NODE_ENV === 'production') {
    // Aqui você pode integrar com serviços como Sentry, LogRocket, etc.
  }
}
