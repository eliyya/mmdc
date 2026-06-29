import { testimonials } from '@/lib/site-data'

export function TestimonialsSection() {
    return (
        <section id="testimonios" className="bg-honey-cream">
            <div className="container-page py-[clamp(80px,12vh,140px)]">
                <div className="reveal-soft mx-auto mb-[54px] max-w-[620px] text-center">
                    <span className="section-label justify-center">
                        Lo que dicen nuestras familias
                    </span>
                    <h2 className="text-honey-brown text-[clamp(2rem,4vw,3.1rem)] leading-[1.12] font-bold">
                        Confianza que se comparte
                    </h2>
                </div>

                <div className="reveal-soft grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-[22px]">
                    {testimonials.map((testimonial) => (
                        <figure
                            key={testimonial.id}
                            className="m-0 rounded-3xl border border-[rgba(66,34,12,0.07)] bg-white p-[32px_30px] shadow-[0_18px_36px_-28px_rgba(66,34,12,0.4)]"
                        >
                            <div className="mb-[18px] font-serif text-[2.4rem] leading-[0.4] text-[#FCC74B]">
                                “
                            </div>
                            <blockquote className="text-honey-brown mb-6 text-[1.08rem] leading-[1.7]">
                                {testimonial.quote}
                            </blockquote>
                            <figcaption className="flex items-center gap-[13px]">
                                <span
                                    className="flex h-[46px] w-[46px] items-center justify-center rounded-full font-serif text-[1.1rem]"
                                    style={{
                                        background: testimonial.color,
                                        color: testimonial.textColor
                                    }}
                                >
                                    {testimonial.avatar}
                                </span>
                                <div>
                                    <div className="text-honey-brown font-semibold">
                                        {testimonial.name}
                                    </div>
                                    <div className="text-honey-soft text-[0.85rem]">
                                        {testimonial.location}
                                    </div>
                                </div>
                            </figcaption>
                        </figure>
                    ))}
                </div>
            </div>
        </section>
    )
}
