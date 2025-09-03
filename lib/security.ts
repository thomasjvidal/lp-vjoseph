// Utilitários de segurança para a aplicação VJOSEPH

/**
 * Sanitiza strings para prevenir XSS
 */
export function sanitizeInput(input: string): string {
  if (typeof input !== 'string') return ''
  
  return input
    .replace(/[<>]/g, '') // Remove < e >
    .replace(/javascript:/gi, '') // Remove javascript:
    .replace(/on\w+=/gi, '') // Remove event handlers
    .replace(/script/gi, '') // Remove script tags
    .trim()
}

/**
 * Valida email com regex seguro
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  return emailRegex.test(email) && email.length <= 254
}

/**
 * Valida telefone brasileiro
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^(\+55\s?)?(\(?\d{2}\)?\s?)?\d{4,5}-?\d{4}$/
  return phoneRegex.test(phone.replace(/\s/g, ''))
}

/**
 * Gera token CSRF simples
 */
export function generateCSRFToken(): string {
  const array = new Uint8Array(32)
  crypto.getRandomValues(array)
  return Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('')
}

/**
 * Valida token CSRF
 */
export function validateCSRFToken(token: string, sessionToken: string): boolean {
  return token === sessionToken && token.length === 64
}

/**
 * Sanitiza dados de formulário
 */
export function sanitizeFormData(data: Record<string, any>): Record<string, string> {
  const sanitized: Record<string, string> = {}
  
  for (const [key, value] of Object.entries(data)) {
    if (typeof value === 'string') {
      sanitized[key] = sanitizeInput(value)
    }
  }
  
  return sanitized
}

/**
 * Valida URL externa
 */
export function isValidExternalUrl(url: string): boolean {
  try {
    const urlObj = new URL(url)
    const allowedProtocols = ['https:', 'http:']
    const allowedDomains = [
      'vjoseph.com',
      'vercel.com',
      'github.com',
      'linkedin.com',
      'whatsapp.com'
    ]
    
    return allowedProtocols.includes(urlObj.protocol) && 
           allowedDomains.some(domain => urlObj.hostname.includes(domain))
  } catch {
    return false
  }
}

/**
 * Log de segurança
 */
export function logSecurityEvent(event: string, details: any, ip?: string) {
  const timestamp = new Date().toISOString()
  const logEntry = {
    timestamp,
    event,
    details,
    ip: ip || 'unknown',
    userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'server'
  }
  
  // Em produção, enviar para serviço de logging
  console.log(`[SECURITY] ${JSON.stringify(logEntry)}`)
}

/**
 * Valida dados de contato
 */
export function validateContactData(data: {
  name?: string
  email?: string
  phone?: string
  message?: string
}): { isValid: boolean; errors: string[] } {
  const errors: string[] = []
  
  if (!data.name || data.name.length < 2) {
    errors.push('Nome deve ter pelo menos 2 caracteres')
  }
  
  if (!data.email || !isValidEmail(data.email)) {
    errors.push('Email inválido')
  }
  
  if (data.phone && !isValidPhone(data.phone)) {
    errors.push('Telefone inválido')
  }
  
  if (!data.message || data.message.length < 10) {
    errors.push('Mensagem deve ter pelo menos 10 caracteres')
  }
  
  if (data.message && data.message.length > 1000) {
    errors.push('Mensagem muito longa (máximo 1000 caracteres)')
  }
  
  return {
    isValid: errors.length === 0,
    errors
  }
}

/**
 * Previne ataques de timing
 */
export function constantTimeCompare(a: string, b: string): boolean {
  if (a.length !== b.length) {
    return false
  }
  
  let result = 0
  for (let i = 0; i < a.length; i++) {
    result |= a.charCodeAt(i) ^ b.charCodeAt(i)
  }
  
  return result === 0
}

/**
 * Configurações de segurança
 */
export const SECURITY_CONFIG = {
  MAX_REQUEST_SIZE: 1024 * 1024, // 1MB
  RATE_LIMIT_WINDOW: 15 * 60 * 1000, // 15 minutos
  RATE_LIMIT_MAX_REQUESTS: 100,
  SESSION_TIMEOUT: 30 * 60 * 1000, // 30 minutos
  PASSWORD_MIN_LENGTH: 8,
  MAX_LOGIN_ATTEMPTS: 5,
  LOCKOUT_DURATION: 15 * 60 * 1000 // 15 minutos
} as const
