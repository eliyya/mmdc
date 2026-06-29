'use client'

import Image from 'next/image'
import Link from 'next/link'
import { BRAND, HERO_STATS, CONTACT } from '@/app/lib/constants'

export function Hero() {
    return (
        <section
            id="inicio"
            className="relative overflow-hidden px-6 py-14 sm:py-20 md:py-28"
            style={{
                background:
                    'radial-gradient(120% 90% at 85% 0%, #FDE3A6 0%, rgba(253, 227, 166, 0) 55%), radial-gradient(90% 80% at 0% 100%, #FBE6CC 0%, rgba(251, 230, 204, 0) 60%), #FBF1E4'
            }}
        >
            <div className="container mx-auto flex flex-wrap items-center gap-12 lg:gap-14">
                {/* Left Content */}
                <div className="reveal min-w-[300px] flex-1 basis-[420px]">
                    {/* Subtitle */}
                    <div className="mb-[22px] inline-flex items-center gap-2.5 text-[0.78rem] font-semibold tracking-[0.2em] text-[#B5871F] uppercase">
                        <span className="h-[1.5px] w-[26px] bg-[#B5871F]"></span>
                        Apicultura familiar mexicana
                    </div>

                    {/* Main Headline */}
                    <h1 className="mb-[22px] font-serif text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.04] font-bold tracking-[-0.01em] text-[#42220C]">
                        {BRAND.headline}
                        <br />
                        <span className="text-[#E5950E]">
                            del panal a tu mesa
                        </span>
                    </h1>

                    {/* Subheadline */}
                    <p className="mb-9 max-w-[520px] text-[clamp(1.05rem,1.6vw,1.28rem)] leading-[1.65] text-[#6B4A2B]">
                        {BRAND.subheadline}
                    </p>

                    {/* CTA Buttons */}
                    <div className="mb-12 flex flex-wrap gap-3.5">
                        <a
                            href={CONTACT.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-3 rounded-full bg-[#E5950E] px-7 py-4 text-base font-semibold text-white no-underline shadow-[0_16px_30px_-12px_rgba(229,149,14,0.85)] transition-all hover:translate-y-[-2px] hover:bg-[#cf8408]"
                        >
                            <span className="h-[11px] w-[11px] rounded-full bg-[#25D366] shadow-[0_0_0_3px_rgba(37,211,102,0.28)]"></span>
                            Contáctanos por WhatsApp
                        </a>
                        <a
                            href="#historia"
                            className="inline-flex items-center gap-2.5 rounded-full border-[1.5px] border-[#D8B583] bg-transparent px-[26px] py-4 text-base font-semibold text-[#42220C] no-underline transition-all hover:border-[#42220C] hover:bg-[#F5E6CF]"
                        >
                            Conoce nuestra historia
                        </a>
                    </div>

                    {/* Stats */}
                    <div className="mt-12 flex flex-wrap gap-7">
                        {HERO_STATS.map((stat, idx) => (
                            <div key={idx}>
                                <div className="font-serif text-[1.7rem] font-bold text-[#42220C]">
                                    {stat.number}
                                </div>
                                <div className="text-[0.85rem] text-[#8A6B49]">
                                    {stat.label}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Image */}
                <div className="reveal relative min-w-[300px] flex-1 basis-[380px]">
                    <div
                        className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-[rgba(66,34,12,0.08)] shadow-[0_40px_70px_-34px_rgba(66,34,12,0.5)]"
                        style={{
                            background:
                                'repeating-linear-gradient(135deg, #F1DDBE, #F1DDBE 18px, #ECD3AC 18px, #ECD3AC 36px)'
                        }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(251,241,228,0)] to-[rgba(66,34,12,0.28)]"></div>
                        <span className="absolute bottom-[18px] left-[18px] rounded-[8px] bg-[rgba(66,34,12,0.62)] px-[13px] py-[7px] font-mono text-[0.72rem] tracking-[0.05em] text-white">
                            FOTO · Miel goteando del panal
                        </span>
                    </div>

                    {/* Floating Logo */}
                    <div
                        className="float absolute -top-[26px] -right-[10px] h-[104px] w-[104px]"
                        style={{
                            filter: 'drop-shadow(0 16px 24px rgba(66,34,12,0.28))'
                        }}
                    >
                        <Image
                            src="/assets/logo.png"
                            alt="Sello Martín del Campo"
                            width={104}
                            height={104}
                            className="h-full w-full rounded-[18px] object-contain"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
