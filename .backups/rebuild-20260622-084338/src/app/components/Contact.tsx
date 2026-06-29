'use client'

import Link from 'next/link'
import { CONTACT } from '@/app/lib/constants'

export function Contact() {
    return (
        <section
            id="contacto"
            className="bg-gradient-to-r from-[#351A09] to-[#42220C] px-6 py-20 text-[#D8C3A4] md:py-[140px]"
        >
            <div className="container mx-auto">
                {/* Header */}
                <div className="mx-auto mb-20 max-w-2xl text-center">
                    <h2 className="mb-6 font-serif text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.08] tracking-[-0.01em] text-white">
                        Ponte en contacto
                    </h2>
                    <p className="text-[1.1rem] leading-[1.7] text-[#C2AC8A]">
                        Estamos aquí para responder tus preguntas. Contáctanos
                        por WhatsApp, teléfono, correo o redes sociales.
                    </p>
                </div>

                {/* Contact Methods Grid */}
                <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
                    {/* WhatsApp Primary */}
                    <div className="flex flex-col gap-8">
                        <a
                            href={CONTACT.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex w-fit items-center gap-4 rounded-full bg-[#25D366] px-8 py-5 text-[1.05rem] font-semibold text-white no-underline shadow-[0_16px_32px_-12px_rgba(37,211,102,0.9)] transition-all hover:translate-y-[-2px] hover:bg-[#22c55e]"
                        >
                            <span className="h-3 w-3 rounded-full bg-white"></span>
                            Contáctanos por WhatsApp
                        </a>
                    </div>

                    {/* Other Contact Methods */}
                    <div className="flex flex-col gap-4">
                        <a
                            href="#"
                            className="flex items-center gap-4 rounded-2xl border border-[rgba(251,241,228,0.14)] bg-[rgba(251,241,228,0.06)] px-5 py-5 no-underline transition-all hover:bg-[rgba(251,241,228,0.12)]"
                        >
                            <span className="flex h-11 w-11 items-center justify-center rounded-3xl bg-[#FCC74B] font-serif font-bold text-[#42220C]">
                                f
                            </span>
                            <span>
                                <span className="block font-semibold text-white">
                                    Facebook
                                </span>
                                <span className="text-[0.85rem] text-[#C9B393]">
                                    /MielMartinDelCampo
                                </span>
                            </span>
                        </a>

                        <a
                            href="#"
                            className="flex items-center gap-4 rounded-2xl border border-[rgba(251,241,228,0.14)] bg-[rgba(251,241,228,0.06)] px-5 py-5 no-underline transition-all hover:bg-[rgba(251,241,228,0.12)]"
                        >
                            <span className="flex h-11 w-11 items-center justify-center rounded-3xl bg-[#FCC74B] font-serif text-sm font-bold text-[#42220C]">
                                ig
                            </span>
                            <span>
                                <span className="block font-semibold text-white">
                                    Instagram
                                </span>
                                <span className="text-[0.85rem] text-[#C9B393]">
                                    @martindelcampo.miel
                                </span>
                            </span>
                        </a>

                        <a
                            href={`mailto:${CONTACT.email}`}
                            className="flex items-center gap-4 rounded-2xl border border-[rgba(251,241,228,0.14)] bg-[rgba(251,241,228,0.06)] px-5 py-5 no-underline transition-all hover:bg-[rgba(251,241,228,0.12)]"
                        >
                            <span className="flex h-11 w-11 items-center justify-center rounded-3xl bg-[#FCC74B] font-serif font-bold text-[#42220C]">
                                @
                            </span>
                            <span>
                                <span className="block font-semibold text-white">
                                    Correo
                                </span>
                                <span className="text-[0.85rem] text-[#C9B393]">
                                    {CONTACT.email}
                                </span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
