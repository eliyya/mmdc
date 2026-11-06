'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'

import { Button } from '@/components/ui/button'
import { brand, contact, navLinks } from '@/lib/site-data'

export function Header() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-50 border-b border-[rgba(66,34,12,0.08)] bg-[rgba(251,241,228,0.82)] backdrop-blur-xl">
            <nav className="container-page flex flex-wrap items-center justify-between gap-3 py-3 sm:gap-7">
                <Link
                    href="/#inicio"
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

                <div className="hidden items-center justify-end gap-2 sm:flex sm:gap-[clamp(10px,1.6vw,26px)]">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={`/${link.href}`}
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
                        <svg
                            aria-hidden="true"
                            viewBox="0 0 32 32"
                            className="size-[18px] fill-current"
                        >
                            <path d="M16.02 3.2A12.72 12.72 0 0 0 5.1 22.45L3.4 28.7l6.4-1.68A12.8 12.8 0 1 0 16.02 3.2Zm0 23.47c-2 0-3.96-.53-5.68-1.54l-.4-.24-3.8 1 .99-3.7-.26-.42a10.62 10.62 0 1 1 9.15 4.9Zm5.83-7.96c-.32-.16-1.88-.93-2.17-1.04-.29-.1-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.18.21-.37.24-.69.08-.32-.16-1.34-.5-2.55-1.58-.94-.84-1.58-1.88-1.77-2.2-.18-.32-.02-.5.14-.66.15-.14.32-.37.48-.56.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.64 0 1.55 1.13 3.05 1.29 3.26.16.21 2.23 3.4 5.4 4.77.76.33 1.35.53 1.82.68.76.24 1.46.2 2 .12.61-.09 1.88-.77 2.14-1.51.27-.74.27-1.37.19-1.51-.08-.14-.29-.22-.61-.38Z" />
                        </svg>
                        WhatsApp
                    </Button>
                </div>
                <button
                    type="button"
                    aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
                    aria-expanded={menuOpen}
                    aria-controls="mobile-navigation"
                    onClick={() => setMenuOpen((open) => !open)}
                    className="text-honey-brown hover:bg-honey-beige focus-visible:outline-honey-gold inline-flex size-11 items-center justify-center rounded-xl transition-colors focus-visible:outline-2 sm:hidden"
                >
                    {menuOpen ? (
                        <X aria-hidden="true" className="size-6" />
                    ) : (
                        <Menu aria-hidden="true" className="size-6" />
                    )}
                </button>
                {menuOpen && (
                    <div
                        id="mobile-navigation"
                        className="border-honey-brown/10 bg-honey-cream basis-full rounded-2xl border p-3 shadow-lg sm:hidden"
                    >
                        <div className="flex flex-col gap-1">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.href}
                                    href={`/${link.href}`}
                                    onClick={() => setMenuOpen(false)}
                                    className="text-honey-text hover:bg-honey-beige rounded-xl px-4 py-3 text-base font-medium transition-colors"
                                >
                                    {link.label}
                                </Link>
                            ))}
                            <Button
                                href={contact.whatsapp}
                                target="_blank"
                                rel="noopener noreferrer"
                                variant="compact"
                                className="mt-2 w-full"
                            >
                                <svg
                                    aria-hidden="true"
                                    viewBox="0 0 32 32"
                                    className="size-[18px] fill-current"
                                >
                                    <path d="M16.02 3.2A12.72 12.72 0 0 0 5.1 22.45L3.4 28.7l6.4-1.68A12.8 12.8 0 1 0 16.02 3.2Zm0 23.47c-2 0-3.96-.53-5.68-1.54l-.4-.24-3.8 1 .99-3.7-.26-.42a10.62 10.62 0 1 1 9.15 4.9Zm5.83-7.96c-.32-.16-1.88-.93-2.17-1.04-.29-.1-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.18.21-.37.24-.69.08-.32-.16-1.34-.5-2.55-1.58-.94-.84-1.58-1.88-1.77-2.2-.18-.32-.02-.5.14-.66.15-.14.32-.37.48-.56.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.64 0 1.55 1.13 3.05 1.29 3.26.16.21 2.23 3.4 5.4 4.77.76.33 1.35.53 1.82.68.76.24 1.46.2 2 .12.61-.09 1.88-.77 2.14-1.51.27-.74.27-1.37.19-1.51-.08-.14-.29-.22-.61-.38Z" />
                                </svg>
                                WhatsApp
                            </Button>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    )
}
