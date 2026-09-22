import Image from 'next/image'
import Link from 'next/link'
import { articles } from '@/lib/articles'

export function BlogSection({ isIndex = false }: { isIndex?: boolean }) {
    const Heading = isIndex ? 'h1' : 'h2'
    return (
        <section id="aprende" className="bg-honey-beige">
            <div
                className={
                    isIndex
                        ? 'rounded-3xl p-6 sm:p-10'
                        : 'container-page py-[clamp(80px,12vh,140px)]'
                }
            >
                <div className="mb-12 flex flex-wrap items-end justify-between gap-5">
                    <div className="max-w-[600px]">
                        <span className="section-label [--label-color:#7E8246]">
                            Aprende sobre la miel
                        </span>
                        <Heading className="text-honey-brown text-[clamp(2rem,4vw,3.1rem)] leading-[1.12] font-bold">
                            Conocer la miel es
                            <br />
                            aprender a confiar
                        </Heading>
                    </div>
                    {!isIndex && (
                        <Link
                            href="/blog"
                            className="text-honey-brown hover:text-honey-gold border-honey-gold border-b-2 pb-[3px] font-semibold"
                        >
                            Ver todos los artículos →
                        </Link>
                    )}
                </div>
                <div className="grid gap-6">
                    {articles.map((article) => (
                        <Link
                            key={article.slug}
                            href={`/blog/${article.slug}`}
                            className="bg-honey-cream group grid overflow-hidden rounded-[22px] border border-[rgba(66,34,12,0.07)] transition duration-300 hover:-translate-y-1 hover:shadow-lg sm:grid-cols-2"
                        >
                            <Image
                                src={article.image}
                                alt={article.imageAlt}
                                width={720}
                                height={450}
                                sizes="(max-width: 640px) 100vw, 50vw"
                                className="aspect-[16/10] h-full w-full object-cover"
                            />
                            <div className="flex flex-col justify-center p-7">
                                <span className="text-honey-amber text-xs font-bold tracking-widest uppercase">
                                    {article.category}
                                </span>
                                <h3 className="text-honey-brown my-3 text-2xl leading-tight font-bold">
                                    {article.title}
                                </h3>
                                <p className="text-honey-muted mb-4 leading-relaxed">
                                    {article.excerpt}
                                </p>
                                <p className="text-honey-muted mb-5 text-sm">
                                    {article.readingTime}
                                </p>
                                <span className="text-honey-brown font-semibold">
                                    Leer artículo →
                                </span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}
