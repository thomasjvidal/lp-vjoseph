import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ProductBlockProps {
  title: string
  subtitle: string
  description: string
  ctaText: string
  ctaLink: string
  mockup: React.ReactNode
}

function ProductBlock({ title, subtitle, description, ctaText, ctaLink, mockup }: ProductBlockProps) {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 py-20 bg-background scroll-snap-section overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 right-1/4 w-72 h-72 bg-primary/15 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 left-1/3 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-pulse delay-1000" />
        
        {/* Subtle Cloud Elements */}
        <div className="absolute top-16 right-16 w-40 h-20 bg-white/3 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-16 left-16 w-32 h-16 bg-white/2 rounded-full blur-lg animate-float delay-500" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="w-full h-full" style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '100px 100px'
          }} />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h2 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
              {title}
            </h2>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              {subtitle}
            </p>
            <p className="text-lg text-muted-foreground/80 leading-relaxed max-w-xl">
              {description}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={ctaLink}>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105">
                {ctaText}
              </Button>
            </Link>
          </div>
        </div>

        {/* Right Mockup */}
        <div className="relative">
          <div className="relative z-10">
            {mockup}
          </div>
          {/* Enhanced Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-3xl blur-3xl scale-110" />
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur-2xl scale-105" />
        </div>
      </div>
    </div>
  )
}

function TransitionBlock({ text }: { text: string }) {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-6 bg-background overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/15 rounded-full blur-3xl animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-2xl animate-pulse delay-500" />
        
        {/* Cloud-like Elements */}
        <div className="absolute top-20 left-10 w-32 h-16 bg-white/5 rounded-full blur-xl animate-float" />
        <div className="absolute bottom-20 right-10 w-40 h-20 bg-white/5 rounded-full blur-xl animate-float delay-700" />
        <div className="absolute top-1/3 right-1/3 w-24 h-12 bg-white/3 rounded-full blur-lg animate-float delay-300" />
        
        {/* Subtle Grid Pattern */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '50px 50px'
          }} />
        </div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="space-y-6">
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
          <p className="text-2xl lg:text-4xl text-foreground leading-relaxed font-medium">
          {text}
        </p>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto rounded-full" />
        </div>
        
      </div>
    </div>
  )
}

// Mockup Components
function MeetMockup() {
  return (
    <div className="bg-gray-900 rounded-3xl p-8 shadow-2xl">
      <div className="bg-white rounded-2xl p-6 space-y-4">
        {/* WhatsApp Header */}
        <div className="bg-green-500 text-white p-4 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-lg font-bold">J</span>
            </div>
            <div>
              <p className="font-semibold">Joseph Meet</p>
              <p className="text-sm opacity-90">Online agora</p>
            </div>
          </div>
        </div>
        
        {/* Message */}
        <div className="bg-green-100 p-4 rounded-lg">
          <p className="text-gray-800 text-sm">
            ✅ <strong>Consulta confirmada!</strong><br/>
            📅 15/09/2024 às 14:30<br/>
            💰 R$ 150,00 pago<br/>
            📱 Lembrete enviado
          </p>
        </div>

        {/* Success Check */}
        <div className="text-center py-4">
          <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-2">
            <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <p className="text-green-600 font-semibold">Agendamento confirmado!</p>
        </div>
      </div>
    </div>
  )
}

function BotMockup() {
  return (
    <div className="bg-gray-900 rounded-[2rem] p-4 shadow-2xl w-80 mx-auto">
      {/* Phone Frame */}
      <div className="bg-white rounded-[1.5rem] p-4 space-y-4">
        {/* Status Bar */}
        <div className="flex justify-between items-center text-xs text-gray-600">
          <span>9:41</span>
          <div className="flex space-x-1">
            <div className="w-4 h-2 bg-gray-400 rounded-sm"></div>
            <div className="w-4 h-2 bg-gray-400 rounded-sm"></div>
            <div className="w-4 h-2 bg-gray-400 rounded-sm"></div>
          </div>
        </div>
        
        {/* Chat Header */}
        <div className="bg-blue-500 text-white p-3 rounded-xl">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold">J</span>
            </div>
            <div>
              <p className="font-semibold text-sm">Joseph Bot</p>
              <p className="text-xs opacity-90">01:12 AM</p>
            </div>
          </div>
        </div>
        
        {/* Messages */}
        <div className="space-y-2">
          <div className="bg-gray-100 p-2 rounded-lg">
            <p className="text-xs text-gray-800">Olá! Gostaria de saber sobre consultas</p>
            <p className="text-xs text-gray-500 mt-1">01:10</p>
          </div>
          
          <div className="bg-blue-500 text-white p-2 rounded-lg ml-6">
            <p className="text-xs">Perfeito! Consultas custam R$ 150. Posso agendar?</p>
            <p className="text-xs opacity-90 mt-1">01:11</p>
          </div>
          
          <div className="bg-gray-100 p-2 rounded-lg">
            <p className="text-xs text-gray-800">Sim! Amanhã às 14h</p>
            <p className="text-xs text-gray-500 mt-1">01:12</p>
          </div>
          
          <div className="bg-green-500 text-white p-2 rounded-lg ml-6">
            <p className="text-xs">✅ Agendado! Pague R$ 150 e confirme</p>
            <p className="text-xs opacity-90 mt-1">01:12</p>
          </div>
        </div>
        
        {/* Input Area */}
        <div className="flex items-center space-x-2">
          <div className="flex-1 bg-gray-100 rounded-full p-2">
            <p className="text-xs text-gray-500">Digite sua mensagem...</p>
          </div>
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  )
}

function ConnectMockup() {
  return (
    <div className="bg-gray-900 rounded-[2rem] p-4 shadow-2xl w-80 mx-auto">
      {/* Phone Frame */}
      <div className="bg-white rounded-[1.5rem] p-4 space-y-4">
        {/* Status Bar */}
        <div className="flex justify-between items-center text-xs text-gray-600">
          <span>9:41</span>
          <div className="flex space-x-1">
            <div className="w-4 h-2 bg-gray-400 rounded-sm"></div>
            <div className="w-4 h-2 bg-gray-400 rounded-sm"></div>
            <div className="w-4 h-2 bg-gray-400 rounded-sm"></div>
          </div>
        </div>
        
        {/* Header */}
        <div className="bg-purple-500 text-white p-3 rounded-xl">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-sm font-bold">J</span>
            </div>
            <div>
              <p className="font-semibold text-sm">Joseph Connect</p>
              <p className="text-xs opacity-90">Prospectando leads</p>
            </div>
          </div>
        </div>
        
        {/* Lead Cards */}
        <div className="space-y-2">
          <div className="bg-green-50 border-l-2 border-green-500 p-2 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-gray-800">Maria Silva</p>
                <p className="text-xs text-gray-600">Instagram: @maria_silva</p>
                <p className="text-xs text-green-600">✓ Qualificada</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500">2 min</p>
                <div className="w-2 h-2 bg-green-500 rounded-full mt-1"></div>
              </div>
            </div>
          </div>
          
          <div className="bg-blue-50 border-l-2 border-blue-500 p-2 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-gray-800">João Santos</p>
                <p className="text-xs text-gray-600">WhatsApp: +55 11...</p>
                <p className="text-xs text-blue-600">🔄 Em contato</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500">5 min</p>
                <div className="w-2 h-2 bg-blue-500 rounded-full mt-1"></div>
              </div>
            </div>
          </div>
          
          <div className="bg-orange-50 border-l-2 border-orange-500 p-2 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs font-semibold text-gray-800">Ana Costa</p>
                <p className="text-xs text-gray-600">LinkedIn: Ana Costa</p>
                <p className="text-xs text-orange-600">📞 Agendada</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-gray-500">8 min</p>
                <div className="w-2 h-2 bg-orange-500 rounded-full mt-1"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-gray-50 p-3 rounded-lg">
          <div className="grid grid-cols-3 gap-2 text-center">
            <div>
              <div className="text-sm font-bold text-green-600">12</div>
              <div className="text-xs text-gray-600">Leads</div>
            </div>
            <div>
              <div className="text-sm font-bold text-blue-600">8</div>
              <div className="text-xs text-gray-600">Qualif.</div>
            </div>
            <div>
              <div className="text-sm font-bold text-purple-600">3</div>
              <div className="text-xs text-gray-600">Agenda</div>
            </div>
          </div>
        </div>
        
        {/* Action Button */}
        <div className="w-full bg-purple-500 text-white p-2 rounded-lg text-center">
          <p className="text-xs font-semibold">Ver todos os leads</p>
        </div>
      </div>
    </div>
  )
}

function BoardMockup() {
  return (
    <div className="bg-gray-900 rounded-3xl p-8 shadow-2xl">
      <div className="bg-white rounded-2xl p-6 space-y-6">
        {/* Header */}
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900">Relatório Mensal</h3>
          <p className="text-sm text-gray-500">Setembro 2024</p>
        </div>
        
        {/* Metrics */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-green-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-green-600">R$ 45.2k</div>
            <div className="text-sm text-gray-600">Receita Total</div>
            <div className="text-xs text-green-600">+12% vs mês anterior</div>
          </div>
          <div className="bg-blue-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-blue-600">127</div>
            <div className="text-sm text-gray-600">Consultas</div>
            <div className="text-xs text-blue-600">+8% vs mês anterior</div>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-purple-600">94%</div>
            <div className="text-sm text-gray-600">Comparecimento</div>
            <div className="text-xs text-purple-600">+3% vs mês anterior</div>
          </div>
          <div className="bg-orange-50 p-4 rounded-lg text-center">
            <div className="text-2xl font-bold text-orange-600">R$ 356</div>
            <div className="text-sm text-gray-600">Ticket Médio</div>
            <div className="text-xs text-orange-600">+5% vs mês anterior</div>
          </div>
        </div>

        {/* Insight */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h4 className="font-semibold text-gray-900 mb-2">💡 Insight Automático</h4>
          <p className="text-sm text-gray-600">
            Horário de pico: 14h-16h (23% das consultas). 
            Taxa de no-show caiu 15% com lembretes automáticos.
          </p>
        </div>
      </div>
    </div>
  )
}

export function AppleProductsSection() {
  return (
    <section className="w-full scroll-container">
      {/* Meet Product */}
      <ProductBlock
        title="Nunca mais perca um cliente."
        subtitle="Joseph Meet confirma, cobra e lembra seus clientes automaticamente."
        description="Seu recepcionista que agenda, cobra e lembra. Comparecimento acima de 90% garantido."
        ctaText="Ver demonstração do Meet"
        ctaLink="/joseph/meet"
        mockup={<MeetMockup />}
      />
      {/* Transition 1 */}
      <TransitionBlock text="Mas para crescer, você precisa de mais do que agendamentos." />

      {/* Connect Product */}
      <ProductBlock
        title="Novos clientes, sempre."
        subtitle="Ele encontra, conecta e abre portas. Sua marca presente onde importa."
        description="Joseph Connect prospecta, conecta e qualifica leads automaticamente. Sua marca sempre presente nos lugares certos."
        ctaText="Ativar Connect"
        ctaLink="/joseph/connect"
        mockup={<ConnectMockup />}
      />

      {/* Transition 2 */}
      <TransitionBlock text="E quando os leads chegam, você precisa de um vendedor que nunca para." />

      {/* Bot Product */}
      <ProductBlock
        title="Seu vendedor que nunca dorme."
        subtitle="Capta, responde e fecha clientes. Mesmo de madrugada."
        description="Atendimento 24h que responde, qualifica e agenda. Nunca perca uma oportunidade de venda."
        ctaText="Ver o Bot em ação"
        ctaLink="/joseph/bot"
        mockup={<BotMockup />}
      />

      {/* Transition 3 */}
      <TransitionBlock text="E quando as vendas crescem, você precisa enxergar o todo." />

      {/* Board Product */}
      <ProductBlock
        title="Seus números, prontos. Sem pedir."
        subtitle="Relatórios automáticos, previsões simples, insights prontos."
        description="Seu painel de gestão inteligente. Relatórios automáticos que chegam todo mês, sem esforço."
        ctaText="Ver o Board"
        ctaLink="/joseph/board"
        mockup={<BoardMockup />}
      />
    </section>
  )
}
