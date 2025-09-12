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
    <div className="min-h-screen flex items-center justify-center px-6 py-20 bg-background">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
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
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-3xl blur-3xl scale-110" />
        </div>
      </div>
    </div>
  )
}

function TransitionBlock({ text }: { text: string }) {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <p className="text-2xl lg:text-3xl text-muted-foreground leading-relaxed">
          {text}
        </p>
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
    <div className="bg-gray-900 rounded-3xl p-8 shadow-2xl">
      <div className="bg-white rounded-2xl p-6 space-y-4">
        {/* Chat Header */}
        <div className="bg-blue-500 text-white p-4 rounded-lg">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
              <span className="text-lg font-bold">J</span>
            </div>
            <div>
              <p className="font-semibold">Joseph Bot</p>
              <p className="text-sm opacity-90">01:12 AM</p>
            </div>
          </div>
        </div>
        
        {/* Messages */}
        <div className="space-y-3">
          <div className="bg-gray-100 p-3 rounded-lg">
            <p className="text-sm text-gray-800">Olá! Gostaria de saber sobre consultas</p>
            <p className="text-xs text-gray-500 mt-1">01:10</p>
          </div>
          
          <div className="bg-blue-500 text-white p-3 rounded-lg ml-8">
            <p className="text-sm">Perfeito! Consultas custam R$ 150. Posso agendar para você?</p>
            <p className="text-xs opacity-90 mt-1">01:11</p>
          </div>
          
          <div className="bg-gray-100 p-3 rounded-lg">
            <p className="text-sm text-gray-800">Sim! Amanhã às 14h</p>
            <p className="text-xs text-gray-500 mt-1">01:12</p>
          </div>
          
          <div className="bg-green-500 text-white p-3 rounded-lg ml-8">
            <p className="text-sm">✅ Agendado! Pague R$ 150 e confirme</p>
            <p className="text-xs opacity-90 mt-1">01:12</p>
          </div>
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
    <section className="w-full">
      {/* Meet Product */}
      <ProductBlock
        title="Nunca mais perca uma consulta."
        subtitle="Agenda cheia. Pagamento garantido. Zero no-show."
        description="Seu recepcionista digital que agenda, cobra e lembra. Comparecimento acima de 90% garantido."
        ctaText="Ver demonstração do Meet"
        ctaLink="/joseph/meet"
        mockup={<MeetMockup />}
      />

      {/* Transition 1 */}
      <TransitionBlock text="Mas uma agenda cheia só importa se você tiver clientes chegando." />

      {/* Bot Product */}
      <ProductBlock
        title="Seu vendedor que nunca dorme."
        subtitle="Capta, responde e fecha clientes. Mesmo de madrugada."
        description="Atendimento 24h que responde, qualifica e agenda. Nunca perca uma oportunidade de venda."
        ctaText="Ver o Bot em ação"
        ctaLink="/joseph/bot"
        mockup={<BotMockup />}
      />

      {/* Transition 2 */}
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
