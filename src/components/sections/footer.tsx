import Image from 'next/image'
import Link from 'next/link'

import { brand, contact, navLinks } from '@/lib/site-data'

const footerLabels: Record<string, string> = {
    Historia: 'Nuestra historia',
    'Por qué': 'Por qué es diferente',
    Productos: 'Productos',
    Aprende: 'Aprende sobre la miel',
    FAQ: 'Preguntas frecuentes'
}

export function Footer() {
    return (
        <footer className="bg-honey-footer text-[#D8C3A4]">
            <div className="container-page flex flex-wrap justify-between gap-x-[60px] gap-y-10 py-16 pb-8">
                <div className="max-w-sm flex-1 basis-[260px]">
                    <div className="mb-[18px] flex items-center gap-[13px]">
                        <Image
                            src="/assets/logo.svg"
                            alt={brand.displayName}
                            width={52}
                            height={52}
                            className="h-[52px] w-[52px] rounded-xl object-contain"
                        />
                        <span className="text-honey-cream font-serif text-[1.25rem] font-bold">
                            {brand.displayName}
                        </span>
                    </div>
                    <p className="text-[0.98rem] leading-[1.7] text-[#C2AC8A]">
                        {brand.description}
                    </p>
                </div>

                <div>
                    <h4 className="mb-4 font-sans text-[0.78rem] tracking-[0.16em] text-[#9C8666] uppercase">
                        Navegación
                    </h4>
                    <div className="flex flex-col gap-3">
                        {navLinks.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-[0.98rem] text-[#D8C3A4] transition-colors hover:text-[#FCC74B]"
                            >
                                {footerLabels[link.label]}
                            </Link>
                        ))}
                    </div>
                </div>

                <div>
                    <h4 className="mb-4 font-sans text-[0.78rem] tracking-[0.16em] text-[#9C8666] uppercase">
                        Síguenos
                    </h4>
                    <div className="flex flex-col gap-3">
                        <a
                            href={contact.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[0.98rem] transition-colors hover:text-[#FCC74B]"
                        >
                            WhatsApp
                        </a>
                        <a
                            href={contact.facebookUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[0.98rem] transition-colors hover:text-[#FCC74B]"
                        >
                            Facebook
                        </a>
                        <a
                            href={contact.instagramUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[0.98rem] transition-colors hover:text-[#FCC74B]"
                        >
                            Instagram
                        </a>
                        <a
                            href={`mailto:${contact.email}`}
                            className="text-[0.98rem] transition-colors hover:text-[#FCC74B]"
                        >
                            Correo
                        </a>
                    </div>
                </div>
            </div>

            <div className="border-t border-[rgba(216,195,164,0.14)]">
                <div className="container-page flex flex-wrap justify-between gap-x-5 gap-y-2 py-[22px] text-[0.84rem] text-[#9C8666]">
                    <span>© 2026 {brand.displayName} · Miel de verdad</span>
                    <span>Hecho con cariño en México 🇲🇽</span>
                </div>
            </div>
        </footer>
    )
}
