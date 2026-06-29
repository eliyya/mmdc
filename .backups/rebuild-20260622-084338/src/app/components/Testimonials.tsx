'use client'

import { TESTIMONIALS } from '@/app/lib/constants'

export function Testimonials() {
    return (
        <section
            id="testimonios"
            className="bg-gradient-to-b from-[#FBF1E4] to-[#F5E6CF] px-6 py-20 md:py-[140px]"
        >
            <div className="container mx-auto">
                {/* Header */}
                <div className="mx-auto mb-20 max-w-2xl text-center">
                    <h2 className="mb-6 font-serif text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.08] tracking-[-0.01em] text-[#42220C]">
                        Lo que dicen nuestros clientes
                    </h2>
                    <p className="text-[1.1rem] leading-[1.7] text-[#6B4A2B]">
                        Historias reales de familias que confían en nosotros.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {TESTIMONIALS.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="reveal rounded-2xl bg-white p-8 shadow-[0_10px_30px_-15px_rgba(66,34,12,0.1)]"
                        >
                            {/* Rating Stars */}
                            <div className="mb-4 flex gap-1">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <span
                                        key={i}
                                        className="text-lg text-[#FCC74B]"
                                    >
                                        ★
                                    </span>
                                ))}
                            </div>

                            {/* Quote */}
                            <p className="mb-6 text-[1.05rem] leading-[1.7] text-[#6B4A2B] italic">
                                "{testimonial.quote}"
                            </p>

                            {/* Author */}
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E5950E]">
                                    <span className="font-serif text-[0.9rem] font-bold text-white">
                                        {testimonial.avatar}
                                    </span>
                                </div>
                                <div>
                                    <div className="font-semibold text-[#42220C]">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-[0.85rem] text-[#8A6B49]">
                                        {testimonial.location}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
