import { Heart, Landmark } from 'lucide-react'

import { Footer } from '@/components/sections/footer'
import { Header } from '@/components/sections/header'
import { CopyablePaymentDetails } from './copyable-payment-details'

const details: [string, string][] = [
    ['Banco', 'Mercado Pago W'] ,
    ['Titular', 'Andrés Elí Maciel Muñiz'],
    ['CLABE interbancaria', '722969010513191970']
] 

export default function PaymentsPage() {
    return (
        <main className="site-shell min-h-screen">
            <Header />
            <section className="relative isolate flex min-h-[calc(100svh-90px)] items-center overflow-hidden px-6 py-14 sm:px-10">
                <div className="pointer-events-none absolute -top-28 -left-24 -z-10 size-96 rounded-full bg-[#f4d99e]/45 blur-3xl" />
                <div className="pointer-events-none absolute -right-32 -bottom-32 -z-10 size-112 rounded-full bg-[#d9e0bc]/45 blur-3xl" />
                <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1fr_0.88fr]">
                    <div className="max-w-2xl">
                        <p className="section-label">
                            Un pedido con mucho cariño
                        </p>
                        <div className="bg-honey-gold/15 mb-6 flex size-14 items-center justify-center rounded-full text-[#a4650b]">
                            <Heart aria-hidden="true" className="size-7" />
                        </div>
                        <h1 className="text-honey-brown text-4xl leading-tight font-bold sm:text-6xl">
                            Gracias por confiar en nosotros
                        </h1>
                        <p className="text-honey-muted mt-6 max-w-xl text-lg leading-8">
                            Nos alegra que nuestra miel llegue a tu mesa. Puedes
                            realizar tu pago de forma segura mediante una
                            transferencia SPEI con los datos de esta página.
                        </p>
                        <p className="text-honey-soft mt-5 text-sm leading-6">
                            Al terminar, compártenos el comprobante por WhatsApp para ayudarnos a identificarlo.
                        </p>
                    </div>
                    <div className="border-honey-brown/10 rounded-[28px] border bg-white/80 p-6 shadow-[0_24px_80px_rgba(66,34,12,0.12)] backdrop-blur sm:p-9">
                        <div className="mb-6 flex items-center gap-4">
                            <div className="flex size-12 items-center justify-center rounded-2xl bg-[#f4e2c5] text-[#8d5b13]">
                                <Landmark aria-hidden="true" />
                            </div>
                            <div>
                                <h2 className="text-honey-brown text-xl font-bold">
                                    Transferencia SPEI
                                </h2>
                                <p className="text-honey-soft mt-1 text-sm">
                                    Datos para realizar tu pago
                                </p>
                            </div>
                        </div>
                        <CopyablePaymentDetails details={details} />
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}
