'use client'

import Link from 'next/link'
import { PRODUCTS, CONTACT } from '@/app/lib/constants'

export function Products() {
    return (
        <section
            id="productos"
            className="bg-[#FBF1E4] px-6 py-20 md:py-[140px]"
        >
            <div className="container mx-auto">
                {/* Header */}
                <div className="mx-auto mb-20 max-w-2xl text-center">
                    <h2 className="mb-6 font-serif text-[clamp(2.2rem,5vw,3.8rem)] leading-[1.08] tracking-[-0.01em] text-[#42220C]">
                        Nuestros Productos
                    </h2>
                    <p className="text-[1.1rem] leading-[1.7] text-[#6B4A2B]">
                        Una presentación para cada necesidad. Todos con la misma
                        calidad, la misma pureza.
                    </p>
                </div>

                {/* Products Grid */}
                <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
                    {PRODUCTS.map((product) => (
                        <div
                            key={product.id}
                            className="reveal flex flex-col overflow-hidden rounded-2xl bg-white shadow-[0_10px_30px_-15px_rgba(66,34,12,0.1)] transition-all hover:shadow-[0_20px_50px_-20px_rgba(66,34,12,0.2)]"
                        >
                            {/* Product Image Placeholder */}
                            <div className="relative flex h-64 items-center justify-center overflow-hidden bg-gradient-to-br from-[#FDE3A6] to-[#ECD3AC]">
                                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(66,34,12,0.2)] to-transparent"></div>
                                <span className="relative px-4 text-center font-mono text-[0.75rem] tracking-[0.05em] text-[#42220C]">
                                    FOTO · {product.image}
                                </span>
                            </div>

                            {/* Content */}
                            <div className="flex flex-1 flex-col p-8">
                                <h3 className="mb-1 font-serif text-[2rem] font-bold text-[#42220C]">
                                    {product.size}
                                </h3>
                                <p className="mb-4 text-[0.9rem] text-[#8A6B49]">
                                    {product.volume}
                                </p>
                                <p className="mb-8 flex-1 text-[1rem] leading-[1.6] text-[#6B4A2B]">
                                    {product.description}
                                </p>

                                {/* CTA Button */}
                                <a
                                    href={CONTACT.whatsapp}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E5950E] px-6 py-3 text-base font-semibold text-white no-underline transition-all hover:translate-y-[-2px] hover:bg-[#cf8408]"
                                >
                                    <span className="h-2 w-2 rounded-full bg-[#25D366]"></span>
                                    Contáctanos
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
