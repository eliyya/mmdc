import type { Metadata } from 'next'
import { Inter, Libre_Baskerville } from 'next/font/google'

import { brand } from '@/lib/site-data'

import './globals.css'

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
    display: 'swap'
})

const libre = Libre_Baskerville({
    subsets: ['latin'],
    weight: ['400', '700'],
    variable: '--font-libre',
    display: 'swap'
})

export const metadata: Metadata = {
    title: `${brand.displayName} - ${brand.tagline}`,
    description: brand.description,
    keywords: [
        'miel',
        'miel natural',
        'apicultura',
        'miel mexicana',
        'miel pura',
        'productos naturales',
        'Guanajuato'
    ],
    openGraph: {
        title: `${brand.displayName} - Miel 100% natural`,
        description: brand.description,
        type: 'website'
    }
}

export default function RootLayout({
    children
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang="es" className={`${inter.variable} ${libre.variable}`}>
            <body>{children}</body>
        </html>
    )
}
