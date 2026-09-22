import type { Metadata } from 'next'
import { brand } from '@/lib/site-data'

export const siteUrl = new URL(
    process.env.NEXT_PUBLIC_SITE_URL || 'https://mielmdc.com'
)

type SocialMetadataOptions = {
    title: string
    description: string
    path: string
    image?: string
    imageAlt?: string
    publishedTime?: string
}

export function socialMetadata({
    title,
    description,
    path,
    image = '/assets/miel-og.jpg',
    imageAlt = 'Miel dorada',
    publishedTime
}: SocialMetadataOptions): Metadata {
    const images = [
        {
            url: image,
            width: 1200,
            height: 630,
            alt: imageAlt,
            type: 'image/jpeg'
        }
    ]
    return {
        title,
        description,
        alternates: { canonical: path },
        openGraph: {
            title,
            description,
            url: path,
            siteName: brand.displayName,
            locale: 'es_MX',
            images,
            ...(publishedTime
                ? { type: 'article', publishedTime }
                : { type: 'website' })
        },
        twitter: {
            card: 'summary_large_image',
            title,
            description,
            images: [{ url: image, alt: imageAlt }]
        }
    }
}
