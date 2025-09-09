import { PremiumHero } from "@/components/premium/hero-section"
import { ROISection } from "@/components/premium/roi-section"
import { StepsSection } from "@/components/premium/steps-section"
import { StorySection } from "@/components/premium/story-section"
import { IntegrationSection } from "@/components/premium/integration-section"
import { SocialProofSection } from "@/components/premium/social-proof-section"
import { FinalCTASection } from "@/components/premium/final-cta-section"
import { DashboardMockup } from "@/components/premium/mockups/dashboard-mockup"
import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"

export const metadata = {
  title: "Joseph Guard – Supervisor de SLA e alertas",
  description: "Monitora integrações e envia alertas se algo falhar. 99,9% de disponibilidade dos fluxos.",
}

export default function JosephGuardPage() {
  const dashboardContent = (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Status Monitor</h2>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="text-sm text-green-600 font-medium">Tudo Operacional</span>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-green-600">99.9%</div>
          <div className="text-sm text-gray-600">Uptime</div>
          <div className="text-xs text-green-600">Últimos 30 dias</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">0</div>
          <div className="text-sm text-gray-600">Incidentes</div>
          <div className="text-xs text-blue-600">Hoje</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-purple-600">2min</div>
          <div className="text-sm text-gray-600">MTTR</div>
          <div className="text-xs text-purple-600">Tempo médio</div>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-orange-600">24/7</div>
          <div className="text-sm text-gray-600">Monitoramento</div>
          <div className="text-xs text-orange-600">Sempre ativo</div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-2">Serviços Monitorados</h3>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">WhatsApp API</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs text-green-600">Online</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Google Calendar</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs text-green-600">Online</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Gateway Pagamento</span>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-xs text-green-600">Online</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  const integrationVisual = (
    <div className="flex items-center justify-center space-x-8">
      <div className="bg-green-100 p-4 rounded-xl">
        <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">A</span>
        </div>
        <p className="text-sm mt-2 text-center">APIs</p>
      </div>
      
      <div className="text-2xl text-primary">+</div>
      
      <div className="bg-blue-100 p-4 rounded-xl">
        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">W</span>
        </div>
        <p className="text-sm mt-2 text-center">Webhooks</p>
      </div>
      
      <div className="text-2xl text-primary">+</div>
      
      <div className="bg-purple-100 p-4 rounded-xl">
        <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">S</span>
        </div>
        <p className="text-sm mt-2 text-center">Slack</p>
      </div>
    </div>
  )

  const storyImage = (
    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8">
      <div className="text-center space-y-4">
        <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-foreground">Lucas Ferreira</h3>
        <p className="text-muted-foreground">CTO da Startup</p>
        <div className="bg-white rounded-lg p-4 shadow-lg">
          <p className="text-sm text-gray-600">"Dormimos tranquilos. Joseph Guard nos avisa antes de qualquer problema virar prejuízo."</p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PremiumHero
        slogan="Seu negócio sempre online. Sempre confiável."
        image={<DashboardMockup>{dashboardContent}</DashboardMockup>}
        ctaLabel="Agendar conversa"
        ctaLink="/agenda"
        explanation="Monitoramento ativo e alertas antes do prejuízo. Nada para, nada se perde."
      />

      <StepsSection
        title="Como funciona em 3 passos"
        steps={[
          {
            number: "1",
            title: "Monitora",
            description: "Observa todos os seus serviços 24/7"
          },
          {
            number: "2", 
            title: "Detecta",
            description: "Identifica problemas antes que afetem clientes"
          },
          {
            number: "3",
            title: "Alerta",
            description: "Notifica sua equipe instantaneamente"
          }
        ]}
      />

      <ROISection
        number="99.9%"
        description="disponibilidade"
        subDescription="Transforme incerteza em confiança total"
        backgroundColor="bg-primary/10"
      />

      <StorySection
        before="Falhas silenciosas, clientes perdidos, prejuízos invisíveis. Lucas descobria problemas quando já era tarde."
        after="Monitoramento 24/7, alertas instantâneos, zero perdas silenciosas. Disponibilidade de 99,9% garantida."
        image={storyImage}
        professional="CTO"
      />

      <IntegrationSection
        title="Monitora tudo. Simples assim."
        description="APIs, webhooks, serviços. Tudo observado, tudo protegido."
        integrations={["APIs", "Webhooks", "E-mail", "Slack"]}
        visual={integrationVisual}
      />

      <SocialProofSection
        number="+40"
        description="negócios já usam Joseph Guard"
        interactiveElement={
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1,2,3,4].map((i) => (
              <div key={i} className="bg-white rounded-lg p-4 shadow-lg text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full mx-auto mb-2" />
                <p className="text-sm font-medium">Startup {i}</p>
                <p className="text-xs text-muted-foreground">99.9% uptime</p>
              </div>
            ))}
          </div>
        }
      />

      <FinalCTASection
        title="Ative seu Joseph hoje. Sua equipe invisível já está pronta."
        ctaLabel="Agendar conversa"
        ctaLink="/agenda"
      />

      <FooterSection />
    </div>
  )
}
