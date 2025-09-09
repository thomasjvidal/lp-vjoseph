import { PremiumHero } from "@/components/premium/hero-section"
import { ROISection } from "@/components/premium/roi-section"
import { StepsSection } from "@/components/premium/steps-section"
import { StorySection } from "@/components/premium/story-section"
import { IntegrationSection } from "@/components/premium/integration-section"
import { SocialProofSection } from "@/components/premium/social-proof-section"
import { FinalCTASection } from "@/components/premium/final-cta-section"
import { PhoneMockup } from "@/components/premium/mockups/phone-mockup"
import { Header } from "@/components/header"
import { FooterSection } from "@/components/footer-section"

export const metadata = {
  title: "Joseph Bot – Atendente 24h que converte",
  description: "Respostas em até 3 minutos, pré-venda automática e agendamento direto.",
}

export default function JosephBotPage() {
  const phoneContent = (
    <div className="p-4 space-y-4">
      <div className="bg-green-500 text-white p-3 rounded-lg">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
            <span className="text-sm font-bold">J</span>
          </div>
          <div>
            <p className="text-sm font-medium">Joseph Bot</p>
            <p className="text-xs opacity-90">Online agora</p>
          </div>
        </div>
      </div>
      
      <div className="space-y-3">
        <div className="bg-gray-100 p-3 rounded-lg">
          <p className="text-sm">Olá! Vi que você tem interesse em nossos serviços. Como posso ajudar?</p>
          <p className="text-xs text-gray-500 mt-1">14:32</p>
        </div>
        
        <div className="bg-blue-500 text-white p-3 rounded-lg ml-8">
          <p className="text-sm">Gostaria de saber sobre preços</p>
          <p className="text-xs opacity-90 mt-1">14:33</p>
        </div>
        
        <div className="bg-gray-100 p-3 rounded-lg">
          <p className="text-sm">Perfeito! Nossas consultas custam R$ 150. Posso agendar para você?</p>
          <p className="text-xs text-gray-500 mt-1">14:33</p>
        </div>
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
      
      <div className="text-2xl text-primary">↔</div>
      
      <div className="bg-pink-100 p-4 rounded-xl">
        <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">I</span>
        </div>
        <p className="text-sm mt-2 text-center">Instagram</p>
      </div>
      
      <div className="text-2xl text-primary">↔</div>
      
      <div className="bg-blue-100 p-4 rounded-xl">
        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
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
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-foreground">Ana Costa</h3>
        <p className="text-muted-foreground">Consultora de Marketing</p>
        <div className="bg-white rounded-lg p-4 shadow-lg">
          <p className="text-sm text-gray-600">"Agora vendo até de madrugada. Joseph nunca dorme e sempre responde na hora."</p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PremiumHero
        slogan="Seu negócio nunca dorme."
        image={<PhoneMockup>{phoneContent}</PhoneMockup>}
        ctaLabel="Agendar conversa"
        ctaLink="/agenda"
        explanation="Atendimento 24h que responde, qualifica e agenda. Nunca perca uma oportunidade de venda."
      />

      <StepsSection
        title="Como funciona em 3 passos"
        steps={[
          {
            number: "1",
            title: "Pergunta",
            description: "Cliente faz pergunta no WhatsApp ou Instagram"
          },
          {
            number: "2", 
            title: "Resposta",
            description: "Joseph responde em menos de 3 minutos"
          },
          {
            number: "3",
            title: "Agendamento",
            description: "Qualifica e agenda automaticamente"
          }
        ]}
      />

      <ROISection
        number="+40%"
        description="em novas vendas"
        subDescription="Transforme curiosos em clientes pagantes"
        backgroundColor="bg-primary/10"
      />

      <StorySection
        before="Leads frios de madrugada, perguntas sem resposta, oportunidades perdidas. Ana perdia 60% dos contatos."
        after="Atendimento 24h, respostas instantâneas, qualificação automática. Vendas aumentaram 40% em 2 meses."
        image={storyImage}
        professional="consultora"
      />

      <IntegrationSection
        title="Conecta com seus canais. Simples assim."
        description="WhatsApp, Instagram, CRM. Tudo integrado, tudo automático."
        integrations={["WhatsApp", "Instagram", "CRM", "Agenda"]}
        visual={integrationVisual}
      />

      <SocialProofSection
        number="+200"
        description="negócios já usam Joseph Bot"
        interactiveElement={
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1,2,3,4].map((i) => (
              <div key={i} className="bg-white rounded-lg p-4 shadow-lg text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full mx-auto mb-2" />
                <p className="text-sm font-medium">Empresa {i}</p>
                <p className="text-xs text-muted-foreground">40%+ conversão</p>
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
