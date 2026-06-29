'use client'

import { BLOG_ARTICLES } from '@/app/lib/constants'

export function Blog() {
    return (
        <section id="aprende" className="bg-[#FBF1E4] px-6 py-20 md:py-[140px]">
            <div className="container mx-auto">
                {/* Header */}
                <div className="mx-auto mb-20 max-w-2xl text-center">
                    <h2 className="mb-6 font-serif text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.08] tracking-[-0.01em] text-[#42220C]">
                        Aprende sobre la miel
                    </h2>
                    <p className="text-[1.1rem] leading-[1.7] text-[#6B4A2B]">
                        Artículos sobre la apicultura, los beneficios de la
                        miel, y cómo identificar productos auténticos.
                    </p>
                </div>

                {/* Blog Articles Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                    {BLOG_ARTICLES.map((article) => (
                        <a
                            key={article.id}
                            href="#"
                            className="reveal group flex flex-col overflow-hidden rounded-2xl bg-white no-underline shadow-[0_10px_30px_-15px_rgba(66,34,12,0.1)] transition-all hover:shadow-[0_20px_50px_-20px_rgba(66,34,12,0.2)]"
                        >
                            {/* Article Image Placeholder */}
                            <div className="relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br from-[#FDE3A6] to-[#ECD3AC] transition-transform group-hover:scale-105">
                                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(66,34,12,0.15)] to-transparent"></div>
                                <span className="relative px-4 text-center font-mono text-[0.75rem] tracking-[0.05em] text-[#42220C]">
                                    FOTO · {article.image}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col p-8">
                                <div className="mb-3 flex items-center justify-between">
                                    <span className="text-[0.8rem] font-semibold tracking-[0.1em] text-[#E5950E] uppercase">
                                        {article.category}
                                    </span>
                                    <span className="text-[0.85rem] text-[#8A6B49]">
                                        {article.readTime}
                                    </span>
                                </div>

                                <h3 className="mb-3 font-serif text-[1.5rem] leading-[1.2] font-bold text-[#42220C] transition-colors group-hover:text-[#E5950E]">
                                    {article.title}
                                </h3>

                                <p className="flex-1 text-[1rem] leading-[1.6] text-[#6B4A2B]">
                                    {article.excerpt}
                                </p>

                                <div className="mt-4 inline-block text-[0.95rem] font-semibold text-[#E5950E] transition-transform group-hover:translate-x-1">
                                    Leer más →
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
