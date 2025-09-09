import React from "react"
import { Button } from "@/components/ui/button"
import { Header } from "./header"
import { FooterSection } from "./footer-section"
import Link from "next/link"

interface JosephPageLayoutProps {
  children: React.ReactNode
  seoTitle: string
  seoDescription: string
  heroTitle: string
  heroSubtitle: string
  heroCtaLabel: string
  heroCtaLink: string
  valueProps: string[]
  whatItDoes: string
  flowSummary: string
  integrations: string[]
  outcomes: string[]
  secondaryCtaBlockTitle: string
  secondaryCtaItems: string[]
  faq: { question: string; answer: string }[]
  termsNote: string
  analyticsEvents: string[]
}

export function JosephPageLayout({
  children,
  seoTitle,
  seoDescription,
  heroTitle,
  heroSubtitle,
  heroCtaLabel,
  heroCtaLink,
  valueProps,
  whatItDoes,
  flowSummary,
  integrations,
  outcomes,
  secondaryCtaBlockTitle,
  secondaryCtaItems,
  faq,
  termsNote,
  analyticsEvents
}: JosephPageLayoutProps) {
  return (
    <div className="min-h-screen bg-background relative overflow-hidden pb-0">
      <div className="relative z-10">
        <main className="max-w-[1320px] mx-auto relative">
          {/* Hero Section */}
          <section className="flex flex-col items-center text-center relative mx-auto rounded-2xl overflow-hidden my-6 py-0 px-4 w-full h-[400px] md:w-[1220px] md:h-[600px] lg:h-[810px] md:px-0">
            {/* Header positioned at top */}
            <div className="absolute top-0 left-0 right-0 z-50">
              <Header />
            </div>

            <div className="relative z-10 space-y-4 md:space-y-5 lg:space-y-6 mb-6 md:mb-7 lg:mb-9 max-w-md md:max-w-[500px] lg:max-w-[588px] mt-16 md:mt-[120px] lg:mt-[160px] px-4">
              <h1 className="text-foreground text-3xl md:text-4xl lg:text-6xl font-semibold leading-tight">
                {heroTitle}
              </h1>
              <p className="text-muted-foreground text-base md:text-base lg:text-lg font-medium leading-relaxed max-w-lg mx-auto">
                {heroSubtitle}
              </p>
              <div className="flex justify-center pt-4">
                <Link href={heroCtaLink}>
                  <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-3 rounded-full font-medium text-base shadow-lg ring-1 ring-white/10">
                    {heroCtaLabel}
                  </Button>
                </Link>
              </div>
            </div>
          </section>

          {/* Value Props Section */}
          <section className="max-w-[1320px] mx-auto px-6 py-16">
            <div className="grid md:grid-cols-3 gap-8">
              {valueProps.map((prop, index) => (
                <div key={index} className="text-center space-y-4">
                  <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto">
                    <div className="w-8 h-8 bg-primary rounded-full"></div>
                  </div>
                  <p className="text-foreground font-medium">{prop}</p>
                </div>
              ))}
            </div>
          </section>

          {/* What It Does Section */}
          <section className="max-w-[1320px] mx-auto px-6 py-16 bg-muted/30 rounded-2xl mx-6">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-semibold text-foreground">O que faz</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">{whatItDoes}</p>
            </div>
          </section>

          {/* Flow Summary Section */}
          <section className="max-w-[1320px] mx-auto px-6 py-16">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-semibold text-foreground">Como funciona</h2>
              <p className="text-muted-foreground text-lg max-w-3xl mx-auto">{flowSummary}</p>
            </div>
          </section>

          {/* Integrations Section */}
          <section className="max-w-[1320px] mx-auto px-6 py-16 bg-muted/30 rounded-2xl mx-6">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-semibold text-foreground">Integrações</h2>
              <div className="flex flex-wrap justify-center gap-4">
                {integrations.map((integration, index) => (
                  <span key={index} className="bg-primary/20 text-primary px-4 py-2 rounded-full text-sm font-medium">
                    {integration}
                  </span>
                ))}
              </div>
            </div>
          </section>

          {/* Outcomes Section */}
          <section className="max-w-[1320px] mx-auto px-6 py-16">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-semibold text-foreground">Resultados</h2>
              <div className="grid md:grid-cols-2 gap-8">
                {outcomes.map((outcome, index) => (
                  <div key={index} className="text-center space-y-2">
                    <div className="text-4xl font-bold text-primary">{outcome}</div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Secondary CTA Section */}
          <section className="max-w-[1320px] mx-auto px-6 py-16 bg-muted/30 rounded-2xl mx-6">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-semibold text-foreground">{secondaryCtaBlockTitle}</h2>
              <div className="grid md:grid-cols-3 gap-6">
                {secondaryCtaItems.map((item, index) => (
                  <div key={index} className="text-center space-y-2">
                    <p className="text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="max-w-[1320px] mx-auto px-6 py-16">
            <div className="text-center space-y-8">
              <h2 className="text-3xl font-semibold text-foreground">Perguntas frequentes</h2>
              <div className="space-y-6 max-w-3xl mx-auto">
                {faq.map((item, index) => (
                  <div key={index} className="text-left space-y-2">
                    <h3 className="text-lg font-semibold text-foreground">{item.question}</h3>
                    <p className="text-muted-foreground">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Terms Note */}
          <section className="max-w-[1320px] mx-auto px-6 py-8">
            <div className="text-center">
              <p className="text-sm text-muted-foreground">{termsNote}</p>
            </div>
          </section>

          {/* CTA Banner */}
          <section className="max-w-[1320px] mx-auto px-6 py-16 bg-primary/10 rounded-2xl mx-6">
            <div className="text-center space-y-6">
              <h2 className="text-3xl font-semibold text-foreground">Pronto para ativar seu funcionário digital?</h2>
              <p className="text-muted-foreground text-lg">Mostramos ao vivo em 15 minutos.</p>
              <Link href="/agenda">
                <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 py-3 rounded-full font-medium text-base shadow-lg">
                  Agendar conversa
                </Button>
              </Link>
            </div>
          </section>

          <FooterSection />
        </main>
      </div>
    </div>
  )
}
