'use client'

import Image from 'next/image'
import Link from 'next/link'
import { BRAND, NAV_LINKS, CONTACT } from '@/app/lib/constants'

export function Header() {
    return (
        <header className="sticky top-0 z-50 border-b border-[rgba(66,34,12,0.08)] bg-[rgba(251,241,228,0.82)] backdrop-blur-[12px]">
            <nav className="container mx-auto flex flex-wrap items-center justify-between gap-7 px-6 py-3">
                {/* Logo & Brand Name */}
                <Link
                    href="#inicio"
                    className="flex flex-shrink-0 items-center gap-3 no-underline"
                >
                    <Image
                        src="/assets/logo.png"
                        alt={BRAND.name}
                        width={46}
                        height={46}
                        className="h-[46px] w-[46px] rounded-[10px] object-contain"
                    />
                    <div className="flex flex-col leading-none">
                        <span className="font-serif text-[1.18rem] font-bold tracking-[0.01em] text-[#42220C]">
                            {BRAND.name}
                        </span>
                        <span className="mt-[5px] text-[0.62rem] font-semibold tracking-[0.26em] text-[#B5871F]">
                            {BRAND.tagline}
                        </span>
                    </div>
                </Link>

                {/* Navigation Links */}
                <div className="flex flex-wrap items-center justify-end gap-2 sm:gap-[26px]">
                    {NAV_LINKS.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="px-0.5 py-1.5 text-[0.95rem] font-medium text-[#5C4326] no-underline transition-colors hover:text-[#E5950E]"
                        >
                            {link.label}
                        </Link>
                    ))}

                    {/* WhatsApp CTA */}
                    <a
                        href={CONTACT.whatsapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-[9px] rounded-full bg-[#E5950E] px-5 py-3 text-[0.92rem] font-semibold text-white no-underline shadow-[0_10px_22px_-10px_rgba(229,149,14,0.8)] transition-all hover:translate-y-[-2px] hover:bg-[#cf8408]"
                    >
                        <span className="h-[9px] w-[9px] rounded-full bg-[#25D366] shadow-[0_0_0_3px_rgba(37,211,102,0.25)]"></span>
                        WhatsApp
                    </a>
                </div>
            </nav>
        </header>
    )
}
