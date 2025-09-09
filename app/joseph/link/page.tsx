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
  title: "Joseph Link – Cartão de visitas inteligente",
  description: "Um link com tudo: WhatsApp, Instagram, pagamentos e agendamento.",
}

export default function JosephLinkPage() {
  const phoneContent = (
    <div className="p-4 space-y-4">
      <div className="text-center space-y-4">
        <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/80 rounded-2xl flex items-center justify-center mx-auto">
          <span className="text-2xl font-bold text-white">J</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-900">Dr. Carlos Silva</h3>
        <p className="text-sm text-gray-600">Dermatologista</p>
      </div>
      
      <div className="space-y-3">
        <button className="w-full bg-green-500 text-white p-4 rounded-xl flex items-center justify-center space-x-3">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
          </svg>
          <span className="font-semibold">WhatsApp</span>
        </button>
        
        <button className="w-full bg-blue-500 text-white p-4 rounded-xl flex items-center justify-center space-x-3">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
          </svg>
          <span className="font-semibold">Instagram</span>
        </button>
        
        <button className="w-full bg-purple-500 text-white p-4 rounded-xl flex items-center justify-center space-x-3">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
          </svg>
          <span className="font-semibold">Agendar Consulta</span>
        </button>
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
      
      <div className="bg-pink-100 p-4 rounded-xl">
        <div className="w-12 h-12 bg-pink-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">I</span>
        </div>
        <p className="text-sm mt-2 text-center">Instagram</p>
      </div>
      
      <div className="text-2xl text-primary">+</div>
      
      <div className="bg-blue-100 p-4 rounded-xl">
        <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
          <span className="text-white font-bold">P</span>
        </div>
        <p className="text-sm mt-2 text-center">Pagamentos</p>
      </div>
    </div>
  )

  const storyImage = (
    <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-3xl p-8">
      <div className="text-center space-y-4">
        <div className="w-24 h-24 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
          <svg className="w-12 h-12 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-foreground">Carlos Silva</h3>
        <p className="text-muted-foreground">Advogado</p>
        <div className="bg-white rounded-lg p-4 shadow-lg">
          <p className="text-sm text-gray-600">"Um link, todos os canais. Meus clientes encontram tudo que precisam em segundos."</p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <PremiumHero
        slogan="Um clique, todas as portas abertas."
        image={<PhoneMockup>{phoneContent}</PhoneMockup>}
        ctaLabel="Agendar conversa"
        ctaLink="/agenda"
        explanation="Seu cartão de visitas digital que centraliza WhatsApp, Instagram, pagamentos e agendamento em um único link."
      />

      <StepsSection
        title="Como funciona em 3 passos"
        steps={[
          {
            number: "1",
            title: "Crie link",
            description: "Configure seus canais em menos de 1 minuto"
          },
          {
            number: "2", 
            title: "Centralize canais",
            description: "WhatsApp, Instagram, pagamentos em um lugar"
          },
          {
            number: "3",
            title: "Gere cliques",
            description: "Clientes encontram tudo que precisam"
          }
        ]}
      />

      <ROISection
        number="+35%"
        description="de contatos qualificados"
        subDescription="Transforme visitantes em clientes em segundos"
        backgroundColor="bg-primary/10"
      />

      <StorySection
        before="Contatos espalhados, WhatsApp aqui, Instagram ali, site em outro lugar. Carlos perdia clientes na confusão."
        after="Um link, todos os canais. Clientes encontram WhatsApp, Instagram e agendamento no mesmo lugar. Conversões aumentaram 35%."
        image={storyImage}
        professional="advogado"
      />

      <IntegrationSection
        title="Tudo em um lugar. Simples assim."
        description="WhatsApp, Instagram, pagamentos. Um link, todas as portas abertas."
        integrations={["WhatsApp", "Instagram", "Pagamentos", "Agenda"]}
        visual={integrationVisual}
      />

      <SocialProofSection
        number="+150"
        description="negócios já usam Joseph Link"
        interactiveElement={
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1,2,3,4].map((i) => (
              <div key={i} className="bg-white rounded-lg p-4 shadow-lg text-center">
                <div className="w-12 h-12 bg-primary/20 rounded-full mx-auto mb-2" />
                <p className="text-sm font-medium">Profissional {i}</p>
                <p className="text-xs text-muted-foreground">35%+ conversão</p>
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
