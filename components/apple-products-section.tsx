import { Button } from "@/components/ui/button"
import Link from "next/link"

interface ProductBlockProps {
  title: string
  subtitle: string
  description: string
  ctaText: string
  ctaLink: string
  mockup: React.ReactNode
  benefits?: string[]
}

function ProductBlock({ title, subtitle, description, ctaText, ctaLink, mockup, benefits }: ProductBlockProps) {
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
          
          {/* Benefits Section */}
          {benefits && benefits.length > 0 && (
            <div className="space-y-3">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-base text-foreground font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          )}
          
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
    <section className="w-full">
      {/* Meet Product */}
      <ProductBlock
        title="Novos clientes, todos os dias."
        subtitle="Encontra, conecta e abre portas. Sua marca presente onde importa."
        description="Joseph Connect pesquisa, qualifica e inicia contatos com potenciais clientes em múltiplos canais. Ele não descansa até gerar novas conversas para o seu negócio."
        benefits={[
          "Leads prontos no seu painel",
          "Conversas automáticas todos os dias",
          "+40% de novos contatos em 30 dias"
        ]}
        ctaText="Quero ver Joseph Connect"
        ctaLink="/joseph/meet"
        mockup={<MeetMockup />}
      />
      {/* Transition 1 */}
      <TransitionBlock text="Quando novos clientes chegam, o que mais querem é um jeito fácil de agendar com você." />

      {/* Connect Product */}
      <ProductBlock
        title="Sua agenda, sempre cheia."
        subtitle="Joseph Meet elimina faltas, garante pagamentos antecipados e organiza sua agenda com horários disponíveis automaticamente."
        description="Joseph Meet elimina faltas, garante pagamentos antecipados e organiza sua agenda com horários disponíveis automaticamente."
        benefits={[
          "90%+ comparecimento",
          "Pagamento antecipado garantido",
          "Faltas reduzidas em até 80%"
        ]}
        ctaText="Ativar Joseph Meet agora"
        ctaLink="/joseph/connect"
        mockup={<ConnectMockup />}
      />

      {/* Transition 1 */}
      <TransitionBlock text="E quando sua agenda está cheia, você precisa de um atendente que nunca dorme." />

      {/* Bot Product */}
      <ProductBlock
        title="Seu atendente completo."
        subtitle="Todo cliente que chega é recebido, entendido e direcionado em segundos."
        description="Joseph Bot responde, entende, confirma pedidos, mostra produtos, acompanha entregas e fecha o ciclo pedindo feedback. Ele transforma cada conversa em uma experiência."
        benefits={[
          "Atendimento 24h/7d",
          "Pedidos confirmados em segundos",
          "Feedbacks que fidelizam clientes"
        ]}
        ctaText="Conhecer Joseph Bot"
        ctaLink="/joseph/bot"
        mockup={<BotMockup />}
      />

      {/* Transition 2 */}
      <TransitionBlock text="E quando as vendas crescem, você precisa enxergar o todo." />

      {/* Board Product */}
      <ProductBlock
        title="Seus números prontos. Sem pedir."
        subtitle="Relatórios automáticos, previsões simples, insights prontos."
        description="Joseph Board mostra receitas, comparativos e insights que indicam o próximo passo. Seu painel de gestão inteligente com relatórios automáticos que chegam todo mês."
        benefits={[
          "Relatórios automáticos mensais",
          "Previsões claras de vendas em tempo real",
          "Insights 3x mais rápidos para tomada de decisão"
        ]}
        ctaText="Ver o Board"
        ctaLink="/joseph/board"
        mockup={<BoardMockup />}
      />
    </section>
  )
}
