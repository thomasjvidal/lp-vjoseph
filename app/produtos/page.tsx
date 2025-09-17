import { SectionSnap } from '@/components/experience/SectionSnap'
import { ProductSection, TransitionSection } from '@/components/experience/ProductSection'
import { Header } from '@/components/header'
import { FooterSection } from '@/components/footer-section'
import '../../styles/experience.css'

export const metadata = {
  title: "Produtos VJOSEPH – Automação Inteligente",
  description: "Descubra nossa suite completa de produtos para automação de negócios: Joseph Bot, Flow, Guard e muito mais.",
}

export default function ProdutosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <SectionSnap
        className="relative"
        onSectionChange={(index) => {
          // Log para debug (pode ser removido em produção)
          console.log(`Seção atual: ${index}`)
        }}
      >
        {/* Seção 1: Joseph Bot */}
        <ProductSection
          id="joseph-bot"
          title="Joseph Bot"
          subtitle="Seu atendente que nunca dorme"
          description="Atendimento 24/7 que responde, qualifica e agenda automaticamente. Transforme curiosos em clientes pagantes com respostas em menos de 3 minutos."
          transitionText="Quando sua agenda está cheia, você precisa de um atendente que nunca dorme."
          ctaText="Ativar Joseph Bot"
          ctaLink="/joseph/bot"
          backgroundVariant="primary"
          backgroundIntensity="medium"
        />

        {/* Transição 1 */}
        <TransitionSection text="Mas automação não é só sobre responder mensagens..." />

        {/* Seção 2: Flow */}
        <ProductSection
          id="flow"
          title="Flow"
          subtitle="Automação de processos inteligente"
          description="Crie fluxos de trabalho automatizados que se adaptam ao comportamento do cliente. Desde o primeiro contato até a conversão, tudo acontece sem intervenção manual."
          transitionText="Automação inteligente que se adapta ao seu cliente."
          ctaText="Criar meu Flow"
          ctaLink="/joseph/flow"
          backgroundVariant="secondary"
          backgroundIntensity="light"
        />

        {/* Transição 2 */}
        <TransitionSection text="E quando você precisa proteger seu negócio..." />

        {/* Seção 3: Guard */}
        <ProductSection
          id="guard"
          title="Guard"
          subtitle="Proteção inteligente 24/7"
          description="Sistema de segurança avançado que monitora, detecta e bloqueia ameaças em tempo real. Proteja seus dados, clientes e reputação com inteligência artificial."
          transitionText="Segurança não é opcional, é essencial."
          ctaText="Ativar Guard"
          ctaLink="/joseph/guard"
          backgroundVariant="accent"
          backgroundIntensity="strong"
        />

        {/* Transição 3 */}
        <TransitionSection text="Conecte tudo com links inteligentes..." />

        {/* Seção 4: Link */}
        <ProductSection
          id="link"
          title="Link"
          subtitle="Gestão inteligente de links"
          description="Centralize, organize e otimize todos os seus links em um só lugar. Analytics detalhados, personalização automática e integração com todos os seus canais."
          transitionText="Cada link é uma oportunidade de conversão."
          ctaText="Gerenciar Links"
          ctaLink="/joseph/link"
          backgroundVariant="primary"
          backgroundIntensity="light"
        />

        {/* Transição 4 */}
        <TransitionSection text="E quando é hora de se conectar pessoalmente..." />

        {/* Seção 5: Meet */}
        <ProductSection
          id="meet"
          title="Meet"
          subtitle="Reuniões que convertem"
          description="Sistema inteligente de agendamento que otimiza horários, envia lembretes automáticos e garante que cada reunião seja produtiva e focada em resultados."
          transitionText="Reuniões eficientes são reuniões que geram resultados."
          ctaText="Agendar Reunião"
          ctaLink="/joseph/meet"
          backgroundVariant="secondary"
          backgroundIntensity="medium"
        />

        {/* Transição 5 */}
        <TransitionSection text="Visualize tudo em um dashboard unificado..." />

        {/* Seção 6: Board */}
        <ProductSection
          id="board"
          title="Board"
          subtitle="Dashboard unificado"
          description="Central de controle que conecta todos os seus produtos VJOSEPH. Visualize métricas, gerencie campanhas e tome decisões baseadas em dados reais."
          transitionText="Dados organizados geram decisões inteligentes."
          ctaText="Acessar Board"
          ctaLink="/joseph/board"
          backgroundVariant="accent"
          backgroundIntensity="medium"
        />

        {/* Seção Final: CTA */}
        <ProductSection
          id="cta-final"
          title="Pronto para automatizar?"
          subtitle="Comece hoje mesmo"
          description="Junte-se a mais de 200 empresas que já transformaram seus negócios com a automação inteligente VJOSEPH. Resultados garantidos em 30 dias ou seu dinheiro de volta."
          ctaText="Começar Agora"
          ctaLink="/agenda"
          backgroundVariant="primary"
          backgroundIntensity="strong"
        >
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">+200</div>
              <div className="text-sm text-muted-foreground">Empresas ativas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">40%</div>
              <div className="text-sm text-muted-foreground">Aumento médio em vendas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Atendimento automático</div>
            </div>
          </div>
        </ProductSection>
      </SectionSnap>

      <FooterSection />
    </div>
  )
}
