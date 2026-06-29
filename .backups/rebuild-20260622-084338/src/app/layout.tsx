import type { Metadata } from 'next'
import { BRAND } from '@/app/lib/constants'
import './styles/globals.css'

export const metadata: Metadata = {
    title: `${BRAND.name} - ${BRAND.tagline}`,
    description: BRAND.description,
    keywords: [
        'miel',
        'miel natural',
        'apicultura',
        'miel mexicana',
        'miel pura',
        'productos naturales',
        'Guanajuato'
    ],
    authors: [{ name: BRAND.name }],
    openGraph: {
        title: `${BRAND.name} - Miel 100% Natural`,
        description: BRAND.description,
        type: 'website'
    }
}

export default function RootLayout({
    children
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="es" suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link
                    rel="preconnect"
                    href="https://fonts.gstatic.com"
                    crossOrigin="anonymous"
                />
                <link
                    href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&family=Inter:wght@400;500;600;700&display=swap"
                    rel="stylesheet"
                />
            </head>
            <body>{children}</body>
        </html>
    )
}
