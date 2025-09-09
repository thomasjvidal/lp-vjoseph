import React from "react"

interface ROISectionProps {
  number: string
  description: string
  subDescription?: string
  backgroundColor?: string
}

export function ROISection({ number, description, subDescription, backgroundColor = "bg-primary/10" }: ROISectionProps) {
  return (
    <section className={`py-20 ${backgroundColor}`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <div className="text-8xl lg:text-9xl font-bold text-primary leading-none">
              {number}
            </div>
            <h2 className="text-3xl lg:text-4xl font-semibold text-foreground max-w-3xl mx-auto">
              {description}
            </h2>
            {subDescription && (
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                {subDescription}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
