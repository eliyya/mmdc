import { PhotoPlaceholder } from '@/components/ui/photo-placeholder'
import { articles } from '@/lib/site-data'

const articleColors: Record<string, [string, string]> = {
    cristalizacion: ['#F1DDBE', '#ECD3AC'],
    adulterada: ['#E8E2C6', '#DED8B8'],
    beneficios: ['#F4D99E', '#EFCE88'],
    abejas: ['#EEDDBC', '#E7D0A4']
}

export function BlogSection() {
    return (
        <section id="aprende" className="bg-honey-beige">
            <div className="container-page py-[clamp(80px,12vh,140px)]">
                <div className="reveal-soft mb-12 flex flex-wrap items-end justify-between gap-5">
                    <div className="max-w-[600px]">
                        <span className="section-label [--label-color:#7E8246]">
                            Aprende sobre la miel
                        </span>
                        <h2 className="text-honey-brown text-[clamp(2rem,4vw,3.1rem)] leading-[1.12] font-bold">
                            Conocer la miel es
                            <br />
                            aprender a confiar
                        </h2>
                    </div>
                    <a
                        href="#contacto"
                        className="text-honey-brown hover:text-honey-gold border-honey-gold border-b-2 pb-[3px] font-semibold"
                    >
                        Ver todos los artículos →
                    </a>
                </div>

                <div className="reveal-soft grid grid-cols-[repeat(auto-fill,minmax(270px,1fr))] gap-6">
                    {articles.map((article) => (
                        <a
                            key={article.id}
                            href="#"
                            className="bg-honey-cream group flex flex-col overflow-hidden rounded-[22px] border border-[rgba(66,34,12,0.07)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_26px_46px_-26px_rgba(66,34,12,0.45)]"
                        >
                            <PhotoPlaceholder
                                label={article.image}
                                colors={articleColors[article.id]}
                                className="aspect-[16/10] shadow-none [&_.photo-badge]:bottom-[11px] [&_.photo-badge]:left-[11px] [&_.photo-badge]:px-2 [&_.photo-badge]:py-1 [&_.photo-badge]:text-[0.62rem]"
                            />
                            <div className="flex flex-1 flex-col p-[22px]">
                                <span className="text-honey-amber text-[0.72rem] font-bold tracking-[0.1em] uppercase">
                                    {article.category}
                                </span>
                                <h3 className="text-honey-brown my-[9px] mb-2.5 text-[1.22rem] leading-[1.25] font-bold">
                                    {article.title}
                                </h3>
                                <p className="text-honey-muted mb-3.5 flex-1 text-[0.94rem] leading-[1.6]">
                                    {article.excerpt}
                                </p>
                                <span className="text-honey-gold text-[0.92rem] font-semibold">
                                    Leer más →
                                </span>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
