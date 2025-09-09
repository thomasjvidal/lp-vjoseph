import React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface PremiumHeroProps {
  slogan: string
  image: React.ReactNode
  ctaLabel: string
  ctaLink: string
  explanation: string
}

export function PremiumHero({ slogan, image, ctaLabel, ctaLink, explanation }: PremiumHeroProps) {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20 bg-gradient-to-br from-background via-background to-muted/20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left Content */}
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-5xl lg:text-7xl font-bold text-foreground leading-tight">
              {slogan}
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
              {explanation}
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href={ctaLink}>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-semibold rounded-full shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105">
                {ctaLabel}
              </Button>
            </Link>
            <Button variant="outline" className="px-8 py-4 text-lg font-semibold rounded-full border-2 hover:bg-muted/50 transition-all duration-300">
              Ver demonstração
            </Button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="relative z-10">
            {image}
          </div>
          {/* Background glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-3xl blur-3xl scale-110" />
        </div>
      </div>
    </section>
  )
}
