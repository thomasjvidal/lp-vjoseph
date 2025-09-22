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
  title: "Joseph Board – Analista de resultados automático",
  description: "Relatórios mensais, comparativo mês a mês e insights prontos.",
}

export default function JosephBoardPage() {
  const dashboardContent = (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Relatório Mensal</h2>
        <span className="text-sm text-gray-500">Setembro 2024</span>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-green-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-green-600">R$ 45.2k</div>
          <div className="text-sm text-gray-600">Receita Total</div>
          <div className="text-xs text-green-600">+12% vs mês anterior</div>
        </div>
        <div className="bg-blue-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-blue-600">127</div>
          <div className="text-sm text-gray-600">Consultas</div>
          <div className="text-xs text-blue-600">+8% vs mês anterior</div>
        </div>
        <div className="bg-purple-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-purple-600">94%</div>
          <div className="text-sm text-gray-600">Comparecimento</div>
          <div className="text-xs text-purple-600">+3% vs mês anterior</div>
        </div>
        <div className="bg-orange-50 p-4 rounded-lg">
          <div className="text-2xl font-bold text-orange-600">R$ 356</div>
          <div className="text-sm text-gray-600">Ticket Médio</div>
          <div className="text-xs text-orange-600">+5% vs mês anterior</div>
        </div>
      </div>
      
      <div className="bg-gray-50 p-4 rounded-lg">
        <h3 className="font-semibold text-gray-900 mb-2">Insights Automáticos</h3>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Horário de pico: 14h-16h (23% das consultas)</li>
          <li>• Taxa de no-show caiu 15% com lembretes automáticos</li>
          <li>• Receita de sexta-feira aumentou 18%</li>
        </ul>
      </div>
    </div>
  )

  const integrationVisual = (
    <div className="flex items-center justify-center space-x-8">
      <div className="bg-blue-100 p-4 rounded-xl">
        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">C</span>
        </div>
        <p className="text-sm mt-2 text-center">Calendar</p>
      </div>
      
      <div className="text-2xl text-primary">+</div>
      
      <div className="bg-green-100 p-4 rounded-xl">
        <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">P</span>
        </div>
        <p className="text-sm mt-2 text-center">Pagamentos</p>
      </div>
      
      <div className="text-2xl text-primary">+</div>
      
      <div className="bg-purple-100 p-4 rounded-xl">
        <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">C</span>
        </div>
        <p className="text-sm mt-2 text-center">CRM</p>
      </div>
    </div>
  )

  const storyImage = (
    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8">
      <div className="text-center space-y-4">
        <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-foreground">Roberto Lima</h3>
        <p className="text-muted-foreground">CEO da Clínica</p>
        <div className="bg-white rounded-lg p-4 shadow-lg">
          <p className="text-sm text-gray-600">"Relatórios que chegam sozinhos. Tomo decisões baseadas em dados, não em achismo."</p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PremiumHero
        slogan="Feche o mês sem abrir planilhas."
        image={<DashboardMockup>{dashboardContent}</DashboardMockup>}
        ctaLabel="Agendar conversa"
        ctaLink="/agenda"
        explanation="Relatórios automáticos que mostram o que importa. Métricas essenciais, comparativos e insights prontos."
      />

      <StepsSection
        title="Como funciona em 3 passos"
        steps={[
          {
            number: "1",
            title: "Coleta dados",
            description: "Conecta com suas fontes automaticamente"
          },
          {
            number: "2", 
            title: "Consolida",
            description: "Organiza e calcula métricas essenciais"
          },
          {
            number: "3",
            title: "Relatório pronto",
            description: "PDF e dashboard enviados automaticamente"
          }
        ]}
      />

      <ROISection
        number="20h"
        description="economizadas por mês"
        subDescription="Transforme horas de planilhas em minutos de insights"
        backgroundColor="bg-primary/10"
      />

      <StorySection
        before="Planilhas manuais, dados espalhados, relatórios que demoravam dias. Roberto tomava decisões no escuro."
        after="Relatórios automáticos, métricas em tempo real, insights claros. Decisões baseadas em dados, resultados em 30 dias."
        image={storyImage}
        professional="CEO"
      />

      <IntegrationSection
        title="Conecta com suas fontes. Simples assim."
        description="Calendar, pagamentos, CRM. Tudo integrado, relatórios automáticos."
        integrations={["Calendar", "Pagamentos", "CRM", "GA4"]}
        visual={integrationVisual}
      />

      <SocialProofSection
        number="+80"
        description="negócios já usam Joseph Board"
        interactiveElement={
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1,2,3,4].map((i) => (
              <div key={i} className="bg-card border border-border rounded-lg p-4 shadow-lg text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full mx-auto mb-2" />
                <p className="text-sm font-medium text-foreground">Empresa {i}</p>
                <p className="text-xs text-foreground/70">20h+ economizadas</p>
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
