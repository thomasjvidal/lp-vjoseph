import React from "react"

interface SocialProofSectionProps {
  number: string
  description: string
  interactiveElement?: React.ReactNode
}

export function SocialProofSection({ number, description, interactiveElement }: SocialProofSectionProps) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-12">
          <div className="space-y-6">
            <div className="text-6xl lg:text-7xl font-bold text-primary">
              {number}
            </div>
            <h2 className="text-3xl lg:text-4xl font-semibold text-foreground">
              {description}
            </h2>
          </div>

          {interactiveElement && (
            <div className="relative">
              <div className="relative z-10">
                {interactiveElement}
              </div>
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-primary/5 rounded-3xl blur-2xl scale-105" />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
