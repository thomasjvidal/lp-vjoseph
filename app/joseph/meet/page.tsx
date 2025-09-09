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
  title: "Joseph Meet – Recepcionista Digital que reduz faltas",
  description: "Marcação automática no Google Calendar, cobrança antecipada e lembretes por WhatsApp/E-mail. Comparecimento acima de 90%.",
}

export default function JosephMeetPage() {
  const phoneContent = (
    <div className="p-6 space-y-4">
      <div className="text-center space-y-2">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-lg font-semibold text-gray-900">Consulta Confirmada</h3>
        <p className="text-sm text-gray-600">Pagamento recebido</p>
      </div>
      
      <div className="bg-gray-50 rounded-lg p-4 space-y-3">
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Data:</span>
          <span className="text-sm font-medium">15/09/2024</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Horário:</span>
          <span className="text-sm font-medium">14:30</span>
        </div>
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Valor:</span>
          <span className="text-sm font-medium text-green-600">R$ 150,00</span>
        </div>
      </div>
      
      <div className="text-center">
        <p className="text-xs text-gray-500">Lembrete enviado para WhatsApp</p>
      </div>
    </div>
  )

  const integrationVisual = (
    <div className="flex items-center justify-center space-x-8">
      <div className="bg-blue-100 p-4 rounded-xl">
        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">G</span>
        </div>
        <p className="text-sm mt-2 text-center">Google Calendar</p>
      </div>
      
      <div className="text-2xl text-primary">↔</div>
      
      <div className="bg-green-100 p-4 rounded-xl">
        <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">W</span>
        </div>
        <p className="text-sm mt-2 text-center">WhatsApp</p>
      </div>
      
      <div className="text-2xl text-primary">↔</div>
      
      <div className="bg-purple-100 p-4 rounded-xl">
        <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">P</span>
        </div>
        <p className="text-sm mt-2 text-center">Pix</p>
      </div>
    </div>
  )

  const storyImage = (
    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8">
      <div className="text-center space-y-4">
        <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-foreground">Dr. Maria Silva</h3>
        <p className="text-muted-foreground">Clínica de Dermatologia</p>
        <div className="bg-white rounded-lg p-4 shadow-lg">
          <p className="text-sm text-gray-600">"Minha agenda nunca mais ficou vazia. Cada consulta confirmada é dinheiro no bolso."</p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PremiumHero
        slogan="Nunca mais perca uma consulta."
        image={<PhoneMockup>{phoneContent}</PhoneMockup>}
        ctaLabel="Agendar conversa"
        ctaLink="/agenda"
        explanation="Seu recepcionista digital que agenda, cobra e lembra. Comparecimento acima de 90% garantido."
      />

      <StepsSection
        title="Como funciona em 3 passos"
        steps={[
          {
            number: "1",
            title: "Cliente agenda",
            description: "Escolhe horário disponível e confirma na hora"
          },
          {
            number: "2", 
            title: "Sistema lembra",
            description: "Envia lembretes automáticos por WhatsApp e email"
          },
          {
            number: "3",
            title: "Consulta acontece",
            description: "Comparecimento garantido, sem faltas"
          }
        ]}
      />

      <ROISection
        number="−80%"
        description="faltas em 30 dias"
        subDescription="Transforme no-shows em receita garantida"
        backgroundColor="bg-primary/10"
      />

      <StorySection
        before="Ligações perdidas, consultas canceladas, agenda vazia. Dr. Maria perdia 40% da receita por faltas."
        after="Agenda sempre cheia, pagamentos antecipados, lembretes automáticos. Receita aumentou 60% em 3 meses."
        image={storyImage}
        professional="médico"
      />

      <IntegrationSection
        title="Plug-and-play. Simples assim."
        description="Conecta com suas ferramentas em minutos. Sem complicação, sem código."
        integrations={["Google Calendar", "WhatsApp", "Pix", "E-mail"]}
        visual={integrationVisual}
      />

      <SocialProofSection
        number="+120"
        description="negócios já usam Joseph Meet"
        interactiveElement={
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1,2,3,4].map((i) => (
              <div key={i} className="bg-white rounded-lg p-4 shadow-lg text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full mx-auto mb-2" />
                <p className="text-sm font-medium">Clínica {i}</p>
                <p className="text-xs text-muted-foreground">90%+ comparecimento</p>
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
