import React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface FinalCTASectionProps {
  title: string
  ctaLabel: string
  ctaLink: string
}

export function FinalCTASection({ title, ctaLabel, ctaLink }: FinalCTASectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/20 via-primary/10 to-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-5xl lg:text-6xl font-bold text-foreground leading-tight">
              {title}
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href={ctaLink}>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-12 py-6 text-xl font-bold rounded-full shadow-2xl hover:shadow-primary/25 transition-all duration-300 hover:scale-105">
                {ctaLabel}
              </Button>
            </Link>
            <Button variant="outline" className="px-12 py-6 text-xl font-bold rounded-full border-2 hover:bg-muted/50 transition-all duration-300">
              Falar com especialista
            </Button>
          </div>

          <p className="text-muted-foreground text-lg">
            Sua equipe invisível já está pronta para trabalhar.
          </p>
        </div>
      </div>
    </section>
  )
}
