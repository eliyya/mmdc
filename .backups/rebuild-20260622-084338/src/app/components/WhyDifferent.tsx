'use client'

import { WHY_DIFFERENT } from '@/app/lib/constants'

export function WhyDifferent() {
    return (
        <section id="porque" className="bg-[#FBF1E4] px-6 py-20 md:py-[140px]">
            <div className="container mx-auto">
                {/* Header */}
                <div className="mx-auto mb-20 max-w-2xl text-center">
                    <h2 className="mb-6 font-serif text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.08] tracking-[-0.01em] text-[#42220C]">
                        ¿Por qué nuestra miel es diferente?
                    </h2>
                    <p className="text-[1.1rem] leading-[1.7] text-[#6B4A2B]">
                        No somos una fábrica. Somos una familia que cuida cada
                        detalle. Aquí está lo que nos hace especiales.
                    </p>
                </div>

                {/* Feature Cards Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {WHY_DIFFERENT.map((feature) => (
                        <div
                            key={feature.title}
                            className="reveal rounded-2xl bg-white p-8 shadow-[0_10px_30px_-15px_rgba(66,34,12,0.1)] transition-shadow hover:shadow-[0_20px_50px_-20px_rgba(66,34,12,0.2)]"
                        >
                            <div className="mb-4 text-4xl">{feature.icon}</div>
                            <h3 className="mb-3 font-serif text-[1.4rem] font-bold text-[#42220C]">
                                {feature.title}
                            </h3>
                            <p className="text-[1rem] leading-[1.6] text-[#6B4A2B]">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
