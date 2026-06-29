'use client'

export function About() {
    return (
        <section
            id="historia"
            className="bg-[#FBF1E4] px-6 py-20 md:py-[140px]"
        >
            <div className="container mx-auto flex flex-wrap items-center gap-12 lg:gap-16">
                {/* Image Grid */}
                <div className="reveal grid min-w-[290px] flex-1 basis-[360px] grid-cols-2 gap-4">
                    {[1, 2, 3, 4].map((i) => (
                        <div
                            key={i}
                            className="flex aspect-square items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-[#F1DDBE] to-[#ECD3AC] p-4 text-center text-[0.75rem] tracking-[0.05em] text-[#5C4326] shadow-[0_20px_40px_-20px_rgba(66,34,12,0.3)]"
                        >
                            <span className="font-mono">
                                FOTO ·{' '}
                                {i === 1
                                    ? 'Colmenas en el campo'
                                    : i === 2
                                      ? 'Trabajo apícola'
                                      : i === 3
                                        ? 'Extracción de miel'
                                        : 'Entorno natural'}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Content */}
                <div className="reveal min-w-[290px] flex-1 basis-[380px]">
                    <h2 className="mb-6 font-serif text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.08] tracking-[-0.01em] text-[#42220C]">
                        Nuestra Historia
                    </h2>
                    <p className="mb-6 text-[1.1rem] leading-[1.7] text-[#6B4A2B]">
                        Martín del Campo es una familia de apicultores mexicanos
                        con una tradición que se hereda de generación en
                        generación. Cada panal, cada frasco de miel, cuenta la
                        historia de dedicación, respeto por la naturaleza y
                        pasión por lo que hacemos.
                    </p>
                    <p className="mb-8 text-[1.1rem] leading-[1.7] text-[#6B4A2B]">
                        Comenzamos con el convencimiento simple: la miel
                        auténtica merece llegar a tu mesa tal como sale del
                        panal. Sin aditivos, sin diluciones, sin compromisos con
                        la calidad.
                    </p>
                    <p className="text-[1.1rem] leading-[1.7] text-[#6B4A2B]">
                        Hoy, estamos aquí para compartir esa tradición contigo.
                        Porque creemos que las abejas merecen respeto, la
                        naturaleza merece cuidado, y tú mereces honestidad en
                        cada frasco.
                    </p>
                </div>
            </div>
        </section>
    )
}
