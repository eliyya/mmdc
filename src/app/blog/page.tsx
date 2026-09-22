import { socialMetadata } from '@/lib/metadata'
import { BlogSection } from '@/components/sections/blog-section'

export const metadata = socialMetadata({
    title: 'Aprende sobre la miel | Martín del Campo',
    description: 'Ideas y lecturas para disfrutar la miel en tu mesa.',
    path: '/blog'
})

export default function BlogPage() {
    return <BlogSection isIndex />
}
