'use client'

import { useState } from 'react'

import { faqs } from '@/lib/site-data'

export function FaqSection() {
    const [openId, setOpenId] = useState<string | null>(null)

    return (
        <section id="faq" className="bg-honey-beige">
            <div className="mx-auto max-w-[820px] px-6 py-[clamp(80px,12vh,140px)]">
                <div className="reveal-soft mb-12 text-center">
                    <span className="section-label justify-center [--label-color:#7E8246]">
                        Preguntas frecuentes
                    </span>
                    <h2 className="text-honey-brown text-[clamp(2rem,4vw,3rem)] leading-[1.12] font-bold">
                        Resolvemos tus dudas
                    </h2>
                </div>

                <div className="reveal-soft flex flex-col gap-3.5">
                    {faqs.map((faq) => {
                        const isOpen = openId === faq.id

                        return (
                            <details
                                key={faq.id}
                                className="bg-honey-cream overflow-hidden rounded-[18px] border border-[rgba(66,34,12,0.08)]"
                                open={isOpen}
                                onToggle={(event) => {
                                    if (event.currentTarget.open) {
                                        setOpenId(faq.id)
                                    } else if (isOpen) {
                                        setOpenId(null)
                                    }
                                }}
                            >
                                <summary className="text-honey-brown flex cursor-pointer list-none items-center justify-between gap-4 px-6 py-[22px] font-serif text-[1.12rem]">
                                    {faq.question}
                                    <span className="text-honey-gold font-sans text-2xl leading-none">
                                        {isOpen ? '−' : '+'}
                                    </span>
                                </summary>
                                <div className="text-honey-muted px-6 pb-6 text-base leading-[1.7]">
                                    {faq.answer}
                                </div>
                            </details>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
