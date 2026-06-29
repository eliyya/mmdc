import { Card } from '@/components/ui/card'
import { differences } from '@/lib/site-data'
import { cn } from '@/lib/utils'

const markTone = {
    light: 'bg-[#FCC74B] text-honey-brown',
    gold: 'bg-honey-gold text-white',
    green: 'bg-[#7E8246] text-white',
    dark: 'bg-honey-brown text-[#FCC74B]'
}

export function WhyDifferentSection() {
    return (
        <section id="porque" className="bg-honey-brown">
            <div className="container-page py-[clamp(80px,12vh,130px)]">
                <div className="reveal-soft mx-auto mb-[58px] max-w-[680px] text-center">
                    <span className="section-label justify-center [--label-color:#FCC74B]">
                        La diferencia está en la pureza
                    </span>
                    <h2 className="text-honey-cream text-[clamp(2rem,4vw,3.1rem)] leading-[1.12] font-bold">
                        ¿Por qué nuestra miel
                        <br />
                        es diferente?
                    </h2>
                </div>

                <div className="reveal-soft flex flex-wrap justify-center gap-[18px]">
                    {differences.map((feature) => (
                        <Card
                            key={feature.title}
                            className="bg-honey-cream flex-1 basis-[300px] p-[30px_26px] hover:-translate-y-1.5 hover:shadow-[0_26px_44px_-24px_rgba(0,0,0,0.5)] sm:max-w-[340px]"
                        >
                            <div
                                className={cn(
                                    'honeycomb-mark mb-5 flex h-[62px] w-14 items-center justify-center font-serif text-[1.15rem] font-bold',
                                    markTone[
                                        feature.tone as keyof typeof markTone
                                    ]
                                )}
                            >
                                {feature.number}
                            </div>
                            <h3 className="text-honey-brown mb-2.5 text-[1.28rem] font-bold">
                                {feature.title}
                            </h3>
                            <p className="text-honey-muted text-[0.98rem] leading-[1.6]">
                                {feature.description}
                            </p>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
