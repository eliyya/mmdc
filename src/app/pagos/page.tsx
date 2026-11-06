import { CheckCircle2, Heart, Landmark, ShieldCheck } from 'lucide-react'

import { Footer } from '@/components/sections/footer'
import { Header } from '@/components/sections/header'

const details = [
    ['Banco', 'Banco de ejemplo'],
    ['Titular', 'Martín del Campo (dato de ejemplo)'],
    ['CLABE interbancaria', '000 000 000000000000'],
    ['Concepto sugerido', 'Tu nombre y número de pedido']
]

export default function PaymentsPage() {
    return (
        <main className="site-shell min-h-screen">
            <Header />
            <section className="relative isolate flex min-h-[calc(100svh-90px)] items-center overflow-hidden px-6 py-14 sm:px-10">
                <div className="pointer-events-none absolute -top-28 -left-24 -z-10 size-96 rounded-full bg-[#f4d99e]/45 blur-3xl" />
                <div className="pointer-events-none absolute -right-32 -bottom-32 -z-10 size-[28rem] rounded-full bg-[#d9e0bc]/45 blur-3xl" />
                <div className="mx-auto grid w-full max-w-6xl items-center gap-12 lg:grid-cols-[1fr_0.88fr]">
                    <div className="max-w-2xl">
                        <p className="section-label">Un pedido con mucho cariño</p>
                        <div className="mb-6 flex size-14 items-center justify-center rounded-full bg-[#e5950e]/15 text-[#a4650b]"><Heart aria-hidden="true" className="size-7" /></div>
                        <h1 className="text-honey-brown text-4xl leading-tight font-bold sm:text-6xl">Gracias por confiar en nosotros</h1>
                        <p className="text-honey-muted mt-6 max-w-xl text-lg leading-8">Nos alegra que nuestra miel llegue a tu mesa. Puedes realizar tu pago de forma segura mediante una transferencia SPEI con los datos de esta página.</p>
                        <p className="text-honey-soft mt-5 text-sm leading-6">Al terminar, compártenos el comprobante y tu número de pedido para ayudarnos a identificarlo.</p>
                    </div>
                    <div className="rounded-[28px] border border-[#42220c]/10 bg-white/80 p-6 shadow-[0_24px_80px_rgba(66,34,12,0.12)] backdrop-blur sm:p-9">
                        <div className="mb-6 flex items-center gap-4">
                            <div className="flex size-12 items-center justify-center rounded-2xl bg-[#f4e2c5] text-[#8d5b13]"><Landmark aria-hidden="true" /></div>
                            <div><h2 className="text-honey-brown text-xl font-bold">Transferencia SPEI</h2><p className="text-honey-soft mt-1 text-sm">Datos para realizar tu pago</p></div>
                        </div>
                        <dl className="divide-y divide-[#42220c]/10 rounded-2xl border border-[#42220c]/10 px-4 sm:px-5">
                            {details.map(([label, value]) => <div key={label} className="flex flex-col gap-1 py-4 sm:flex-row sm:items-center sm:justify-between sm:gap-5"><dt className="text-honey-soft text-sm">{label}</dt><dd className="text-honey-brown font-semibold sm:text-right">{value}</dd></div>)}
                        </dl>
                        <p className="mt-5 flex gap-2 rounded-xl bg-[#f7f0e5] p-3 text-xs leading-5 text-[#765c3e]"><ShieldCheck aria-hidden="true" className="mt-0.5 size-4 shrink-0" />Verifica que el nombre del titular coincida antes de confirmar tu transferencia.</p>
                        <p className="mt-4 flex items-center justify-center gap-2 text-center text-xs font-medium text-[#8d5b13]"><CheckCircle2 aria-hidden="true" className="size-4" />Información bancaria de ejemplo, pendiente de actualización.</p>
                    </div>
                </div>
            </section>
            <Footer />
        </main>
    )
}
