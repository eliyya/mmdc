import { PhotoPlaceholder } from '@/components/ui/photo-placeholder'
import { storyPhotos } from '@/lib/site-data'

export function AboutSection() {
    return (
        <section id="historia" className="bg-honey-cream">
            <div className="container-page flex flex-wrap items-center gap-x-16 gap-y-[54px] py-[clamp(80px,12vh,140px)]">
                <div className="reveal-soft grid min-w-[290px] flex-1 basis-[360px] grid-cols-2 gap-4">
                    {storyPhotos.map(([photo, path], index) => (
                        <PhotoPlaceholder
                            key={photo}
                            label={photo}
                            path={path}
                            colors={
                                index === 0
                                    ? ['#EAD8B6', '#E3CDA4']
                                    : index === 1
                                      ? ['#E8E2C6', '#DED8B8']
                                      : ['#F1DDBE', '#ECD3AC']
                            }
                            className={
                                index === 0
                                    ? 'row-span-2 aspect-[3/4] rounded-[20px]'
                                    : 'aspect-[4/3] rounded-[20px]'
                            }
                        />
                    ))}
                </div>

                <div className="reveal-soft min-w-[300px] flex-1 basis-[380px]">
                    <span className="section-label [--label-color:#7E8246]">
                        Nuestra historia
                    </span>
                    <h2 className="text-honey-brown mb-[22px] text-[clamp(2rem,4vw,3.1rem)] leading-[1.1] font-bold">
                        Una familia que cuida
                        <br />
                        cada colmena
                    </h2>
                    <div className="text-honey-muted text-[1.12rem] leading-[1.75]">
                        <p className="mb-[18px]">
                            Martín del Campo nació del cariño por las abejas y
                            del oficio aprendido entre el zumbido de los
                            panales. No somos una fábrica: somos una familia que
                            recorre el campo, cuida cada colmena y cosecha la
                            miel con respeto y paciencia.
                        </p>
                        <p className="mb-[30px]">
                            Creemos que la mejor miel es la que llega tal cual
                            la hicieron las abejas, sin atajos ni añadidos. Esa
                            honestidad es lo que ponemos en cada frasco.
                        </p>
                    </div>
                    <div className="bg-honey-beige flex items-center gap-3.5 rounded-[18px] border border-[rgba(66,34,12,0.07)] px-[22px] py-[18px]">
                        <div className="bg-honey-brown flex h-[52px] w-[52px] shrink-0 items-center justify-center rounded-[14px] font-serif text-[1.4rem] text-[#FCC74B]">
                            M
                        </div>
                        <div>
                            <div className="text-honey-brown font-semibold">
                                Hecho a mano, con tiempo
                            </div>
                            <div className="text-honey-soft text-[0.92rem]">
                                Cosecha tradicional y responsable con las abejas
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
