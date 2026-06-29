import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { PhotoPlaceholder } from '@/components/ui/photo-placeholder'
import { contact, products } from '@/lib/site-data'

const productColors: Record<string, [string, string]> = {
    '250ml': ['#F4E2C5', '#EED7AE'],
    '500ml': ['#F4D99E', '#EFCE88'],
    '1l': ['#EAD8B6', '#E3CDA4']
}

export function ProductsSection() {
    return (
        <section id="productos" className="bg-honey-cream">
            <div className="container-page py-[clamp(80px,12vh,140px)]">
                <div className="reveal-soft mx-auto mb-[58px] max-w-[640px] text-center">
                    <span className="section-label justify-center">
                        Nuestras presentaciones
                    </span>
                    <h2 className="text-honey-brown mb-4 text-[clamp(2rem,4vw,3.1rem)] leading-[1.12] font-bold">
                        Miel para cada hogar
                    </h2>
                    <p className="text-honey-muted text-[1.1rem] leading-[1.65]">
                        Elige el tamaño que mejor acompañe tu día a día.
                        Escríbenos y con gusto te orientamos.
                    </p>
                </div>

                <div className="reveal-soft grid grid-cols-[repeat(auto-fit,minmax(260px,1fr))] gap-6">
                    {products.map((product) => (
                        <Card
                            key={product.id}
                            className={`relative overflow-hidden rounded-[26px] border ${
                                product.featured
                                    ? 'border-honey-gold border-2 shadow-[0_26px_46px_-26px_rgba(229,149,14,0.55)]'
                                    : 'border-[rgba(66,34,12,0.07)] shadow-[0_20px_40px_-28px_rgba(66,34,12,0.4)]'
                            } hover:-translate-y-2 hover:shadow-[0_34px_56px_-28px_rgba(66,34,12,0.5)]`}
                        >
                            {product.featured && (
                                <span className="bg-honey-gold absolute top-4 right-4 z-10 rounded-full px-3 py-1.5 text-[0.72rem] font-bold tracking-[0.08em] text-white uppercase">
                                    Más popular
                                </span>
                            )}
                            <PhotoPlaceholder
                                label={product.image}
                                colors={productColors[product.id]}
                                className="aspect-[4/3] shadow-none"
                            />
                            <div className="p-[26px]">
                                <div className="mb-2.5 flex items-baseline justify-between gap-2">
                                    <h3 className="text-honey-brown text-[1.5rem] font-bold">
                                        {product.size}
                                    </h3>
                                    <span className="text-honey-amber rounded-full bg-[#F8EAD0] px-[11px] py-[5px] text-[0.78rem] font-semibold">
                                        {product.badge}
                                    </span>
                                </div>
                                <p className="text-honey-muted mb-5 text-[0.98rem] leading-[1.6]">
                                    {product.description}
                                </p>
                                <Button
                                    href={`${contact.whatsapp.split('?')[0]}?text=Hola!%20Me%20interesa%20la%20${product.text}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex w-full gap-2.5 px-3 py-[13px] text-base"
                                >
                                    <span className="h-[9px] w-[9px] rounded-full bg-[#25D366]" />
                                    Pedir por WhatsApp
                                </Button>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
