import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/ui/button'
import { brand, contact, navLinks } from '@/lib/site-data'

export function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-[rgba(66,34,12,0.08)] bg-[rgba(251,241,228,0.82)] backdrop-blur-xl">
            <nav className="container-page flex flex-wrap items-center justify-between gap-7 py-3">
                <Link
                    href="#inicio"
                    className="flex shrink-0 items-center gap-3"
                    aria-label="Ir al inicio"
                >
                    <Image
                        src="/assets/logo.svg"
                        alt={brand.displayName}
                        width={46}
                        height={46}
                        className="h-[46px] w-[46px] rounded-[10px] object-contain"
                        priority
                    />
                    <span className="flex flex-col leading-none">
                        <span className="text-honey-brown font-serif text-[1.18rem] font-bold">
                            {brand.displayName}
                        </span>
                        <span className="text-honey-amber mt-[5px] text-[0.62rem] font-semibold tracking-[0.26em]">
                            {brand.tagline}
                        </span>
                    </span>
                </Link>

                <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-[26px]">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-honey-text hover:text-honey-gold px-0.5 py-1.5 text-[0.95rem] font-medium transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}

                    <Button
                        href={contact.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="compact"
                    >
                        <span className="h-[9px] w-[9px] rounded-full bg-[#25D366] shadow-[0_0_0_3px_rgba(37,211,102,0.25)]" />
                        WhatsApp
                    </Button>
                </div>
            </nav>
        </header>
    )
}
