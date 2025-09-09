import React from "react"

interface StorySectionProps {
  before: string
  after: string
  image: React.ReactNode
  professional: string
}

export function StorySection({ before, after, image, professional }: StorySectionProps) {
  return (
    <section className="py-20 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Story Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-4xl lg:text-5xl font-bold text-foreground">
                A transformação de um {professional}
              </h2>
              
              <div className="space-y-6">
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-muted-foreground">ANTES</h3>
                  <p className="text-lg text-foreground leading-relaxed">
                    {before}
                  </p>
                </div>
                
                <div className="w-16 h-0.5 bg-primary" />
                
                <div className="space-y-3">
                  <h3 className="text-xl font-semibold text-primary">AGORA</h3>
                  <p className="text-lg text-foreground leading-relaxed">
                    {after}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10">
              {image}
            </div>
            {/* Background decoration */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-3xl blur-2xl scale-105" />
          </div>
        </div>
      </div>
    </section>
  )
}
