'use client'

import { FAQ_ITEMS } from '@/app/lib/constants'
import { useState } from 'react'

export function FAQ() {
    const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0].id)

    const toggleAccordion = (id: string) => {
        setOpenId(openId === id ? null : id)
    }

    return (
        <section id="faq" className="bg-[#FBF1E4] px-6 py-20 md:py-[140px]">
            <div className="container mx-auto max-w-3xl">
                {/* Header */}
                <div className="mb-20 text-center">
                    <h2 className="mb-6 font-serif text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.08] tracking-[-0.01em] text-[#42220C]">
                        Preguntas frecuentes
                    </h2>
                    <p className="text-[1.1rem] leading-[1.7] text-[#6B4A2B]">
                        Resolvemos tus dudas sobre la miel, cuidado y nuestros
                        productos.
                    </p>
                </div>

                {/* FAQ Items */}
                <div className="space-y-4">
                    {FAQ_ITEMS.map((faq) => (
                        <details
                            key={faq.id}
                            open={openId === faq.id}
                            className="reveal rounded-xl border border-[rgba(66,34,12,0.1)] bg-white"
                        >
                            <summary
                                onClick={(e) => {
                                    e.preventDefault()
                                    toggleAccordion(faq.id)
                                }}
                                className="flex cursor-pointer items-center justify-between px-8 py-6 transition-colors hover:bg-[#F5E6CF]"
                            >
                                <h3 className="text-[1.1rem] font-semibold text-[#42220C]">
                                    {faq.question}
                                </h3>
                                <span
                                    className="ml-4 flex-shrink-0 text-2xl font-bold text-[#E5950E] transition-transform"
                                    style={{
                                        transform:
                                            openId === faq.id
                                                ? 'rotate(180deg)'
                                                : 'rotate(0)'
                                    }}
                                >
                                    +
                                </span>
                            </summary>
                            {openId === faq.id && (
                                <div className="border-t border-[rgba(66,34,12,0.08)] bg-[#FBF1E4] px-8 py-6">
                                    <p className="text-[1rem] leading-[1.7] text-[#6B4A2B]">
                                        {faq.answer}
                                    </p>
                                </div>
                            )}
                        </details>
                    ))}
                </div>
            </div>
        </section>
    )
}
