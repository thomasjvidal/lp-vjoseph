import { NextRequest, NextResponse } from 'next/server'

// Endpoint de health check com informações mascaradas
export async function GET(request: NextRequest) {
  const startTime = Date.now()
  
  try {
    // Verificar se é uma requisição de health check legítima
    const userAgent = request.headers.get('user-agent') || ''
    const isHealthCheck = userAgent.includes('health') || 
                         userAgent.includes('monitor') ||
                         request.headers.get('x-health-check') === 'true'
    
    if (!isHealthCheck) {
      return new NextResponse('Forbidden', { status: 403 })
    }

    // Informações básicas do sistema (mascaradas)
    const healthData = {
      status: 'healthy',
      timestamp: new Date().toISOString(),
      uptime: process.uptime(),
      version: '1.0.0',
      environment: process.env.NODE_ENV || 'development',
      responseTime: Date.now() - startTime,
      // Informações mascaradas para segurança
      server: '***',
      region: '***',
      memory: {
        used: Math.round(process.memoryUsage().heapUsed / 1024 / 1024),
        total: Math.round(process.memoryUsage().heapTotal / 1024 / 1024)
      }
    }

    return NextResponse.json(healthData, {
      status: 200,
      headers: {
        'Cache-Control': 'no-cache, no-store, must-revalidate',
        'Pragma': 'no-cache',
        'Expires': '0'
      }
    })

  } catch (error) {
    console.error('[HEALTH] Health check failed:', error)
    
    return NextResponse.json({
      status: 'unhealthy',
      timestamp: new Date().toISOString(),
      error: 'Internal server error'
    }, { status: 500 })
  }
}
