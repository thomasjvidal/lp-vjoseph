import Image from "next/image"

export function AboutSection() {
  return (
    <section className="w-full px-5 overflow-hidden flex flex-col justify-start items-center py-8 md:py-14">
      <div className="self-stretch relative flex flex-col justify-center items-center gap-2 py-0">
        <div className="flex flex-col justify-start items-center gap-4">
          <h2 className="text-center text-foreground text-4xl md:text-5xl font-semibold leading-tight md:leading-[40px]">
            Sobre nós
          </h2>
          <p className="self-stretch text-center text-muted-foreground text-sm md:text-base font-medium leading-relaxed max-w-2xl">
            A VJOSEPH nasceu para devolver o tempo de vida das pessoas através de funcionários digitais eficientes.
          </p>
        </div>
      </div>
      
      <div className="self-stretch px-5 flex flex-col md:flex-row justify-center items-start gap-6 md:gap-8 mt-8 max-w-[1100px] mx-auto">
        {/* Thomas Card */}
        <div className="flex-1 p-6 overflow-hidden rounded-xl flex flex-col justify-start items-center gap-6 bg-gradient-to-b from-gray-50/5 to-gray-50/0 outline outline-1 outline-border outline-offset-[-1px] hover:shadow-[0px_4px_8px_-2px_rgba(0,0,0,0.10)] transition-all duration-300">
          <div className="flex flex-col justify-start items-center gap-4">
                         <div className="w-20 h-20 relative rounded-full overflow-hidden">
               <Image
                 src="https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&h=150&fit=crop&crop=face"
                 alt="Thomas - Fundador & Estrategista"
                 width={80}
                 height={80}
                 className="w-full h-full object-cover"
               />
             </div>
            <div className="text-center">
              <h3 className="text-foreground text-xl font-semibold leading-6 mb-2">
                Thomas – Fundador & Estrategista
              </h3>
              <p className="text-muted-foreground text-sm font-normal leading-relaxed">
                Visionário por trás da VJOSEPH, dedica-se a transformar processos complexos em soluções simples e lucrativas. Responsável pela criação dos Josephs e pela visão estratégica de longo prazo.
              </p>
            </div>
          </div>
        </div>

        {/* Nicollas Card */}
        <div className="flex-1 p-6 overflow-hidden rounded-xl flex flex-col justify-start items-center gap-6 bg-gradient-to-b from-gray-50/5 to-gray-50/0 outline outline-1 outline-border outline-offset-[-1px] hover:shadow-[0px_4px_8px_-2px_rgba(0,0,0,0.10)] transition-all duration-300">
          <div className="flex flex-col justify-start items-center gap-4">
                         <div className="w-20 h-20 relative rounded-full overflow-hidden">
               <Image
                 src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
                 alt="Nicollas - Sócio Conselheiro & Investidor"
                 width={80}
                 height={80}
                 className="w-full h-full object-cover"
               />
             </div>
            <div className="text-center">
              <h3 className="text-foreground text-xl font-semibold leading-6 mb-2">
                Nicollas – Sócio Conselheiro & Investidor
              </h3>
              <p className="text-muted-foreground text-sm font-normal leading-relaxed">
                Baseado nos Estados Unidos, atua como conselheiro e investidor da VJOSEPH. Apoia a expansão global da empresa e orienta a evolução para um ecossistema sustentável e bilionário.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
