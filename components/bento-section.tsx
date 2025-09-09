import AiCodeReviews from "./bento/ai-code-reviews"
import RealtimeCodingPreviews from "./bento/real-time-previews"
import OneClickIntegrationsIllustration from "./bento/one-click-integrations-illustration"
import MCPConnectivityIllustration from "./bento/mcp-connectivity-illustration" // Updated import
import EasyDeployment from "./bento/easy-deployment"
import ParallelCodingAgents from "./bento/parallel-agents" // Updated import
import Link from "next/link"

interface BentoCardProps {
  title: string
  description: string
  Component: React.ComponentType
  href?: string
  isClickable?: boolean
}

const BentoCard = ({ title, description, Component, href, isClickable = false }: BentoCardProps) => {
  const cardContent = (
    <div className="overflow-hidden rounded-2xl border border-white/20 flex flex-col justify-start items-start relative group">
      {/* Background with blur effect */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: "rgba(231, 236, 235, 0.08)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
        }}
      />
      {/* Additional subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />
      {/* Hover effect */}
      {isClickable && (
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      )}

      <div className="self-stretch p-6 flex flex-col justify-start items-start gap-2 relative z-10">
        <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
          <p className="self-stretch text-foreground text-lg font-normal leading-7">
            {title} <br />
            <span className="text-muted-foreground">{description}</span>
          </p>
        </div>
      </div>
      <div className="self-stretch h-72 relative -mt-0.5 z-10">
        <Component />
      </div>
      {/* Click indicator */}
      {isClickable && (
        <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center">
            <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      )}
    </div>
  )

  if (isClickable && href) {
    return (
      <Link href={href} className="block">
        {cardContent}
      </Link>
    )
  }

  return cardContent
}

export function BentoSection() {
  const cards = [
    {
      title: "Joseph Link",
      description: "Seu cartão de visitas inteligente. Centralize seus links e contatos em um único lugar.",
      Component: AiCodeReviews,
      href: "/joseph/link",
      isClickable: true,
    },
    {
      title: "Joseph Meet",
      description: "Seu recepcionista digital. Agendamentos automáticos com pagamento, lembrete e integração com WhatsApp.",
      Component: RealtimeCodingPreviews,
      href: "/joseph/meet",
      isClickable: true,
    },
    {
      title: "Joseph Bot",
      description: "Seu atendente 24h. Responde clientes, agenda compromissos e nunca perde uma oportunidade.",
      Component: OneClickIntegrationsIllustration,
      href: "/joseph/bot",
      isClickable: true,
    },
    {
      title: "Joseph Board",
      description: "Seu painel de gestão inteligente. Relatórios automáticos que chegam todo mês, sem esforço.",
      Component: MCPConnectivityIllustration, // Updated component
      href: "/joseph/board",
      isClickable: true,
    },
    {
      title: "Trabalhar mais não é a solução. Trabalhar melhor é.",
      description: "Com a VJOSEPH, você não ganha apenas automação. Você ganha tempo de vida. Cada Joseph é um funcionário que não erra, não atrasa e nunca dorme.",
      Component: ParallelCodingAgents, // Updated component
      href: "/joseph/flow",
      isClickable: true,
    },
    {
      title: "Deployment made easy", // Swapped position
      description: "Go from code to live deployment on Vercel instantly.",
      Component: EasyDeployment,
      href: "/joseph/guard",
      isClickable: true,
    },
  ]

  return (
    <section className="w-full px-5 flex flex-col justify-center items-center overflow-visible bg-transparent">
      <div className="w-full py-8 md:py-16 relative flex flex-col justify-start items-start gap-6">
        <div className="w-[547px] h-[938px] absolute top-[614px] left-[80px] origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[130px] z-0" />
        <div className="self-stretch py-8 md:py-14 flex flex-col justify-center items-center gap-2 z-10">
          <div className="flex flex-col justify-start items-center gap-4">
            <h2 className="w-full max-w-[655px] text-center text-foreground text-4xl md:text-6xl font-semibold leading-tight md:leading-[66px]">
              Mais tempo. Mais dinheiro. Mais vida.
            </h2>
            <p className="w-full max-w-[600px] text-center text-muted-foreground text-lg md:text-xl font-medium leading-relaxed">
              Os Josephs são funcionários digitais criados para executar tarefas repetitivas com precisão.
              Enquanto eles trabalham, você foca no que realmente importa: crescer, criar e viver.
            </p>
          </div>
        </div>
        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
          {cards.map((card) => (
            <BentoCard 
              key={card.title} 
              title={card.title}
              description={card.description}
              Component={card.Component}
              href={card.href}
              isClickable={card.isClickable}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
