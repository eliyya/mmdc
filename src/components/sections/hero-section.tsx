import Image from 'next/image'

import { Button } from '@/components/ui/button'
import { brand, contact, heroStats } from '@/lib/site-data'

export function HeroSection() {
    return (
        <section
            id="inicio"
            className="relative overflow-hidden bg-[radial-gradient(120%_90%_at_85%_0%,#FDE3A6_0%,rgba(253,227,166,0)_55%),radial-gradient(90%_80%_at_0%_100%,#FBE6CC_0%,rgba(251,230,204,0)_60%),#FBF1E4]"
        >
            <div className="container-page flex flex-wrap items-center gap-x-14 gap-y-12 py-[clamp(56px,9vh,104px)] pb-[clamp(64px,10vh,112px)]">
                <div className="reveal-soft min-w-[300px] flex-1 basis-[420px]">
                    <div className="section-label mb-[22px]">
                        Apicultura familiar mexicana
                    </div>

                    <h1 className="text-honey-brown mb-[22px] text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.04] font-bold tracking-normal">
                        {brand.headline}
                        <br />
                        <span className="text-honey-gold">
                            {brand.highlight}
                        </span>
                    </h1>

                    <p className="text-honey-muted mb-9 max-w-[520px] text-[clamp(1.05rem,1.6vw,1.28rem)] leading-[1.65]">
                        {brand.subheadline}
                    </p>

                    <div className="mb-12 flex flex-wrap gap-3.5">
                        <Button
                            href={contact.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <span className="h-[11px] w-[11px] rounded-full bg-[#25D366] shadow-[0_0_0_3px_rgba(37,211,102,0.28)]" />
                            Contáctanos por WhatsApp
                        </Button>
                        <Button href="#historia" variant="secondary">
                            Conoce nuestra historia
                        </Button>
                    </div>

                    <div className="mt-[46px] flex flex-wrap gap-7">
                        {heroStats.map((stat, index) => (
                            <div key={stat.label} className="contents">
                                {index > 0 && (
                                    <div className="w-px bg-[rgba(66,34,12,0.12)]" />
                                )}
                                <div>
                                    <div className="text-honey-brown font-serif text-[1.7rem] font-bold">
                                        {stat.number}
                                    </div>
                                    <div className="text-honey-soft text-[0.85rem]">
                                        {stat.label}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="reveal-soft relative min-w-[300px] flex-1 basis-[380px]">
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] border border-[rgba(66,34,12,0.08)] bg-[repeating-linear-gradient(135deg,#F1DDBE,#F1DDBE_18px,#ECD3AC_18px,#ECD3AC_36px)] shadow-[0_40px_70px_-34px_rgba(66,34,12,0.5)]">
                        <div className="absolute inset-0 bg-gradient-to-b from-[rgba(251,241,228,0)] to-[rgba(66,34,12,0.28)]" />
                        <span className="absolute bottom-[18px] left-[18px] rounded-[8px] bg-[rgba(66,34,12,0.62)] px-[13px] py-[7px] font-mono text-[0.72rem] tracking-[0.05em] text-white">
                            FOTO · Miel goteando del panal
                        </span>
                    </div>

                    <div className="float-soft absolute -top-[26px] -right-[10px] h-[104px] w-[104px] drop-shadow-[0_16px_24px_rgba(66,34,12,0.28)]">
                        <Image
                            src="/assets/logo.svg"
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
