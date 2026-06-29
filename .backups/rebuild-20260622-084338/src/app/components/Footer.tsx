'use client'

import Image from 'next/image'
import Link from 'next/link'
import { BRAND, NAV_LINKS, CONTACT } from '@/app/lib/constants'

export function Footer() {
    return (
        <footer className="bg-[#351A09] text-[#D8C3A4]">
            {/* Main Footer Content */}
            <div className="container mx-auto flex flex-wrap justify-between gap-10 px-6 py-16 md:gap-16 md:py-24">
                {/* Brand Info */}
                <div className="max-w-sm min-w-[260px] flex-1">
                    <div className="mb-4 flex items-center gap-3">
                        <Image
                            src="/assets/logo.png"
                            alt={BRAND.name}
                            width={52}
                            height={52}
                            className="h-[52px] w-[52px] rounded-3xl object-contain"
                        />
                        <span className="font-serif text-[1.25rem] font-bold text-[#FBF1E4]">
                            {BRAND.name}
                        </span>
                    </div>
                    <p className="text-[0.98rem] leading-[1.7] text-[#C2AC8A]">
                        {BRAND.description}
                    </p>
                </div>

                {/* Navigation */}
                <div className="flex-none">
                    <h4 className="mb-4 font-sans text-[0.78rem] tracking-[0.16em] text-[#9C8666] uppercase">
                        Navegación
                    </h4>
                    <div className="flex flex-col gap-3">
                        {NAV_LINKS.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-[0.98rem] text-[#D8C3A4] no-underline transition-colors hover:text-[#FCC74B]"
                            >
                                {link.label === 'Historia' &&
                                    'Nuestra historia'}
                                {link.label === 'Por qué' &&
                                    'Por qué es diferente'}
                                {link.label === 'Productos' && 'Productos'}
                                {link.label === 'Aprende' &&
                                    'Aprende sobre la miel'}
                                {link.label === 'FAQ' && 'Preguntas frecuentes'}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Social Links */}
                <div className="flex-none">
                    <h4 className="mb-4 font-sans text-[0.78rem] tracking-[0.16em] text-[#9C8666] uppercase">
                        Síguenos
                    </h4>
                    <div className="flex flex-col gap-3">
                        <a
                            href={CONTACT.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[0.98rem] text-[#D8C3A4] no-underline transition-colors hover:text-[#FCC74B]"
                        >
                            WhatsApp
                        </a>
                        <a
                            href={CONTACT.facebook_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[0.98rem] text-[#D8C3A4] no-underline transition-colors hover:text-[#FCC74B]"
                        >
                            Facebook
                        </a>
                        <a
                            href={CONTACT.instagram_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[0.98rem] text-[#D8C3A4] no-underline transition-colors hover:text-[#FCC74B]"
                        >
                            Instagram
                        </a>
                        <a
                            href={`mailto:${CONTACT.email}`}
                            className="text-[0.98rem] text-[#D8C3A4] no-underline transition-colors hover:text-[#FCC74B]"
                        >
                            Correo
                        </a>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="border-t border-[rgba(216,195,164,0.14)]">
                <div className="container mx-auto flex flex-wrap justify-between gap-2 px-6 py-6 text-[0.84rem] text-[#9C8666]">
                    <span>
                        © 2026 {BRAND.name} · {BRAND.tagline}
                    </span>
                    <span>Hecho con cariño en México 🇲🇽</span>
                </div>
            </div>
        </footer>
    )
}
