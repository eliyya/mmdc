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
                <div className="reveal-soft min-w-75 flex-1 basis-105">
                    <div className="section-label mb-5">
                        Apicultura familiar mexicana
                    </div>

                    <h1 className="text-honey-brown mb-5 text-[clamp(2.6rem,6vw,4.6rem)] leading-[1.04] font-bold tracking-normal">
                        {brand.headline}
                        <br />
                        <span className="text-honey-gold">
                            {brand.highlight}
                        </span>
                    </h1>

                    <p className="text-honey-muted mb-9 max-w-130 text-[clamp(1.05rem,1.6vw,1.28rem)] leading-[1.65]">
                        {brand.subheadline}
                    </p>

                    <div className="mb-12 flex flex-wrap gap-3.5">
                        <Button
                            href={contact.whatsapp}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <svg
                                aria-hidden="true"
                                viewBox="0 0 32 32"
                                className="size-5 fill-current"
                            >
                                <path d="M16.02 3.2A12.72 12.72 0 0 0 5.1 22.45L3.4 28.7l6.4-1.68A12.8 12.8 0 1 0 16.02 3.2Zm0 23.47c-2 0-3.96-.53-5.68-1.54l-.4-.24-3.8 1 .99-3.7-.26-.42a10.62 10.62 0 1 1 9.15 4.9Zm5.83-7.96c-.32-.16-1.88-.93-2.17-1.04-.29-.1-.5-.16-.71.16-.21.32-.82 1.04-1 1.25-.18.21-.37.24-.69.08-.32-.16-1.34-.5-2.55-1.58-.94-.84-1.58-1.88-1.77-2.2-.18-.32-.02-.5.14-.66.15-.14.32-.37.48-.56.16-.19.21-.32.32-.53.1-.21.05-.4-.03-.56-.08-.16-.71-1.72-.98-2.35-.26-.62-.52-.53-.71-.54h-.61c-.21 0-.55.08-.84.4-.29.32-1.1 1.08-1.1 2.64 0 1.55 1.13 3.05 1.29 3.26.16.21 2.23 3.4 5.4 4.77.76.33 1.35.53 1.82.68.76.24 1.46.2 2 .12.61-.09 1.88-.77 2.14-1.51.27-.74.27-1.37.19-1.51-.08-.14-.29-.22-.61-.38Z" />
                            </svg>
                            Contáctanos por WhatsApp
                        </Button>
                        <Button href="#historia" variant="secondary">
                            Conoce nuestra historia
                        </Button>
                    </div>

                    <div className="mt-11 flex flex-wrap gap-7">
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

                <div className="reveal-soft relative min-w-75 flex-1 basis-95">
                    <div className="relative aspect-4/5 overflow-hidden rounded-[28px] border border-[rgba(66,34,12,0.08)] bg-[repeating-linear-gradient(135deg,#F1DDBE,#F1DDBE_18px,#ECD3AC_18px,#ECD3AC_36px)] shadow-[0_40px_70px_-34px_rgba(66,34,12,0.5)]">
                        {/* <div className="absolute inset-0 bg-linear-to-b from-[rgba(251,241,228,0)] to-[rgba(66,34,12,0.28)]" /> */}
                        {/* <span className="absolute bottom-4 left-4 rounded-lg bg-[rgba(66,34,12,0.62)] px-3 py-2 font-mono text-[0.72rem] tracking-wider text-white">
                            FOTO · Miel goteando del panal
                        </span> */}
                        <Image
                            src="/assets/miel-goteando.png"
                            alt="FOTO · Miel goteando del panal"
                            width={1086}
                            height={1448}
                            className="h-full w-full rounded-[18px] object-cover"
                        />
                    </div>

                    <div className="float-soft absolute -top-6 -right-2 h-26 w-26 drop-shadow-[0_16px_24px_rgba(66,34,12,0.28)]">
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
