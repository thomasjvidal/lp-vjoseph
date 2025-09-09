import React from "react"

interface IntegrationSectionProps {
  title: string
  description: string
  integrations: string[]
  visual: React.ReactNode
}

export function IntegrationSection({ title, description, integrations, visual }: IntegrationSectionProps) {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-12">
          <div className="space-y-6">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
              {title}
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              {description}
            </p>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="relative z-10">
              {visual}
            </div>
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-3xl blur-3xl scale-110" />
          </div>

          {/* Integration badges */}
          <div className="flex flex-wrap justify-center gap-4">
            {integrations.map((integration, index) => (
              <div
                key={index}
                className="bg-primary/10 text-primary px-6 py-3 rounded-full font-semibold text-lg border border-primary/20 hover:bg-primary/20 transition-colors duration-300"
              >
                {integration}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
