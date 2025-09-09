import { PremiumHero } from "@/components/premium/hero-section"
import { ROISection } from "@/components/premium/roi-section"
import { StepsSection } from "@/components/premium/steps-section"
import { StorySection } from "@/components/premium/story-section"
import { IntegrationSection } from "@/components/premium/integration-section"
import { SocialProofSection } from "@/components/premium/social-proof-section"
import { FinalCTASection } from "@/components/premium/final-cta-section"
import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"

export const metadata = {
  title: "Joseph Flow – Coordenação de processos e automações",
  description: "Integra WhatsApp, agenda, planilhas e pagamentos para eliminar tarefas repetitivas.",
}

export default function JosephFlowPage() {
  const flowVisual = (
    <div className="flex items-center justify-center space-x-4">
      <div className="bg-green-100 p-4 rounded-xl">
        <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">W</span>
        </div>
        <p className="text-sm mt-2 text-center">WhatsApp</p>
      </div>
      
      <div className="text-2xl text-primary">→</div>
      
      <div className="bg-blue-100 p-4 rounded-xl">
        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">A</span>
        </div>
        <p className="text-sm mt-2 text-center">Agenda</p>
      </div>
      
      <div className="text-2xl text-primary">→</div>
      
      <div className="bg-purple-100 p-4 rounded-xl">
        <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">P</span>
        </div>
        <p className="text-sm mt-2 text-center">Pagamento</p>
      </div>
    </div>
  )

  const integrationVisual = (
    <div className="flex items-center justify-center space-x-8">
      <div className="bg-green-100 p-4 rounded-xl">
        <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">W</span>
        </div>
        <p className="text-sm mt-2 text-center">WhatsApp</p>
      </div>
      
      <div className="text-2xl text-primary">+</div>
      
      <div className="bg-blue-100 p-4 rounded-xl">
        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">A</span>
        </div>
        <p className="text-sm mt-2 text-center">Agenda</p>
      </div>
      
      <div className="text-2xl text-primary">+</div>
      
      <div className="bg-purple-100 p-4 rounded-xl">
        <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">S</span>
        </div>
        <p className="text-sm mt-2 text-center">Sheets</p>
      </div>
    </div>
  )

  const storyImage = (
    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8">
      <div className="text-center space-y-4">
        <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-foreground">Patricia Santos</h3>
        <p className="text-muted-foreground">Gerente de Operações</p>
        <div className="bg-white rounded-lg p-4 shadow-lg">
          <p className="text-sm text-gray-600">"Processos que rodam sozinhos. Minha equipe foca no que realmente importa."</p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PremiumHero
        slogan="O que é repetitivo, ele faz por você."
        image={flowVisual}
        ctaLabel="Agendar conversa"
        ctaLink="/agenda"
        explanation="Automação invisível que mantém tudo girando. Menos tarefas manuais, mais operação fluindo."
      />

      <StepsSection
        title="Como funciona em 3 passos"
        steps={[
          {
            number: "1",
            title: "Configure",
            description: "Defina seus fluxos sem código"
          },
          {
            number: "2", 
            title: "Rode",
            description: "Processos executam automaticamente"
          },
          {
            number: "3",
            title: "Esqueça",
            description: "Tudo funciona sem sua intervenção"
          }
        ]}
      />

      <ROISection
        number="−70%"
        description="tarefas repetitivas"
        subDescription="Transforme trabalho manual em automação invisível"
        backgroundColor="bg-primary/10"
      />

      <StorySection
        before="Tarefas manuais, processos quebrados, equipe sobrecarregada. Patricia perdia tempo com o óbvio."
        after="Fluxos automáticos, processos invisíveis, equipe focada no essencial. Produtividade aumentou 70% em 2 meses."
        image={storyImage}
        professional="gerente"
      />

      <IntegrationSection
        title="Conecta tudo. Simples assim."
        description="WhatsApp, agenda, planilhas, pagamentos. Tudo integrado, tudo automático."
        integrations={["WhatsApp", "Agenda", "Sheets", "Pagamentos"]}
        visual={integrationVisual}
      />

      <SocialProofSection
        number="+60"
        description="negócios já usam Joseph Flow"
        interactiveElement={
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1,2,3,4].map((i) => (
              <div key={i} className="bg-white rounded-lg p-4 shadow-lg text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full mx-auto mb-2" />
                <p className="text-sm font-medium">Empresa {i}</p>
                <p className="text-xs text-muted-foreground">70%+ automação</p>
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
