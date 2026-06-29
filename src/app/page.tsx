import { AboutSection } from '@/components/sections/about-section'
import { BlogSection } from '@/components/sections/blog-section'
import { ContactSection } from '@/components/sections/contact-section'
import { FaqSection } from '@/components/sections/faq-section'
import { Footer } from '@/components/sections/footer'
import { Header } from '@/components/sections/header'
import { HeroSection } from '@/components/sections/hero-section'
import { ProductsSection } from '@/components/sections/products-section'
import { TestimonialsSection } from '@/components/sections/testimonials-section'
import { WhyDifferentSection } from '@/components/sections/why-different-section'

export default function Home() {
    return (
        <main className="site-shell min-h-screen">
            <Header />
            <HeroSection />
            <AboutSection />
            <WhyDifferentSection />
            <ProductsSection />
            <BlogSection />
            <TestimonialsSection />
            <FaqSection />
            <ContactSection />
            <Footer />
        </main>
    )
}
