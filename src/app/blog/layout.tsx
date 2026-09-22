import type { ReactNode } from 'react'
import { Header } from '@/components/sections/header'
import { Footer } from '@/components/sections/footer'

export default function BlogLayout({ children }: { children: ReactNode }) {
    return (
        <>
            <Header />
            <main className="container-page py-12 sm:py-20">
                <div className="mx-auto max-w-3xl">{children}</div>
            </main>
            <Footer />
        </>
    )
}
