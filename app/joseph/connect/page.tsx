import { Header } from "@/components/header"
import { PremiumHero } from "@/components/premium/hero-section"
import { StepsSection } from "@/components/premium/steps-section"
import { ROISection } from "@/components/premium/roi-section"
import { StorySection } from "@/components/premium/story-section"
import { IntegrationSection } from "@/components/premium/integration-section"
import { SocialProofSection } from "@/components/premium/social-proof-section"
import { FinalCTASection } from "@/components/premium/final-cta-section"
import { PhoneMockup } from "@/components/premium/mockups/phone-mockup"

export default function JosephConnectPage() {
  const phoneContent = (
    <div className="p-4 space-y-4">
      <div className="bg-purple-500 text-white p-4 rounded-lg">
        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-lg font-bold">J</span>
          </div>
          <div>
            <p className="font-semibold">Joseph Connect</p>
            <p className="text-sm opacity-90">Prospectando leads</p>
          </div>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="bg-green-50 border-l-4 border-green-500 p-3 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-gray-800">Maria Silva</p>
              <p className="text-xs text-gray-600">Instagram: @maria_silva</p>
              <p className="text-xs text-green-600">✓ Qualificada - Interesse alto</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">2 min atrás</p>
              <div className="w-2 h-2 bg-green-500 rounded-full mt-1"></div>
            </div>
          </div>
        </div>
        
        <div className="bg-blue-50 border-l-4 border-blue-500 p-3 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-gray-800">João Santos</p>
              <p className="text-xs text-gray-600">WhatsApp: +55 11 99999-9999</p>
              <p className="text-xs text-blue-600">🔄 Em contato - Aguardando resposta</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">5 min atrás</p>
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-1"></div>
            </div>
          </div>
        </div>
        
        <div className="bg-orange-50 border-l-4 border-orange-500 p-3 rounded-lg">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-gray-800">Ana Costa</p>
              <p className="text-xs text-gray-600">LinkedIn: Ana Costa</p>
              <p className="text-xs text-orange-600">📞 Agendada - Consulta amanhã 14h</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">8 min atrás</p>
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-1"></div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 p-4 rounded-lg">
        <div className="grid grid-cols-3 gap-4 text-center">
          <div>
            <div className="text-lg font-bold text-green-600">12</div>
            <div className="text-xs text-gray-600">Leads hoje</div>
          </div>
          <div>
            <div className="text-lg font-bold text-blue-600">8</div>
            <div className="text-xs text-gray-600">Qualificados</div>
          </div>
          <div>
            <div className="text-lg font-bold text-purple-600">3</div>
            <div className="text-xs text-gray-600">Agendados</div>
          </div>
        </div>
      </div>
    </div>
  )

  const storyImage = (
    <div className="bg-gradient-to-br from-purple-500 to-blue-600 rounded-2xl p-8 text-white">
      <div className="text-center">
        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2">Prospecção Automática</h3>
        <p className="text-sm opacity-90">
          Joseph Connect encontra leads qualificados 24h por dia, 
          conecta com sua marca e agenda automaticamente.
        </p>
      </div>
    </div>
  )

  const integrationVisual = (
    <div className="grid grid-cols-2 gap-4">
      <div className="bg-card border border-border rounded-lg p-4 shadow-lg text-center">
        <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-2">
          <span className="text-white font-bold">IG</span>
        </div>
        <p className="text-sm font-semibold text-foreground">Instagram</p>
      </div>
      <div className="bg-card border border-border rounded-lg p-4 shadow-lg text-center">
        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-2">
          <span className="text-white font-bold">LI</span>
        </div>
        <p className="text-sm font-semibold text-foreground">LinkedIn</p>
      </div>
      <div className="bg-card border border-border rounded-lg p-4 shadow-lg text-center">
        <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-2">
          <span className="text-white font-bold">WA</span>
        </div>
        <p className="text-sm font-semibold text-foreground">WhatsApp</p>
      </div>
      <div className="bg-card border border-border rounded-lg p-4 shadow-lg text-center">
        <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-2">
          <span className="text-white font-bold">CRM</span>
        </div>
        <p className="text-sm font-semibold text-foreground">CRM</p>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PremiumHero
        slogan="Novos clientes, sempre."
        image={<PhoneMockup>{phoneContent}</PhoneMockup>}
        ctaLabel="Ativar Connect"
        ctaLink="/agenda"
        explanation="Joseph Connect prospecta, conecta e qualifica leads automaticamente. Sua marca sempre presente nos lugares certos."
      />

      <StepsSection
        title="Como funciona em 3 passos"
        steps={[
          {
            number: "1",
            title: "Encontra",
            description: "Identifica leads qualificados nas redes sociais"
          },
          {
            number: "2", 
            title: "Conecta",
            description: "Inicia conversas com sua marca presente"
          },
          {
            number: "3",
            title: "Qualifica",
            description: "Filtra interessados e agenda automaticamente"
          }
        ]}
      />

      <ROISection
        number="+60%"
        description="em novos leads"
        subDescription="Prospecção automática que nunca para"
        backgroundColor="bg-purple-500/10"
      />

      <StorySection
        before="Prospecção manual, leads frios, oportunidades perdidas. Carlos gastava 4h por dia procurando clientes."
        after="Prospecção automática, leads qualificados, conversões constantes. 60% mais clientes em 30 dias."
        image={storyImage}
        professional="consultor"
      />

      <IntegrationSection
        title="Conecta com todas as redes. Automático."
        description="Instagram, LinkedIn, WhatsApp, CRM. Tudo integrado, tudo automático."
        integrations={["Instagram", "LinkedIn", "WhatsApp", "CRM"]}
        visual={integrationVisual}
      />

      <SocialProofSection
        number="+500"
        description="leads qualificados por mês"
      />

      <FinalCTASection
        title="Pronto para ter novos clientes sempre?"
        ctaLabel="Ativar Connect"
        ctaLink="/agenda"
      />
    </div>
  )
}
