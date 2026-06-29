'use client'

import { Header } from '@/app/components/Header'
import { Hero } from '@/app/components/Hero'
import { About } from '@/app/components/About'
import { WhyDifferent } from '@/app/components/WhyDifferent'
import { Products } from '@/app/components/Products'
import { Blog } from '@/app/components/Blog'
import { Testimonials } from '@/app/components/Testimonials'
import { FAQ } from '@/app/components/FAQ'
import { Contact } from '@/app/components/Contact'
import { Footer } from '@/app/components/Footer'

export default function Home() {
    return (
        <div
            style={{
                fontFamily: 'Inter, sans-serif',
                color: '#5C4326',
                background: '#FBF1E4',
                overflowX: 'hidden'
            }}
        >
            <Header />
            <Hero />
            <About />
            <WhyDifferent />
            <Products />
            <Blog />
            <Testimonials />
            <FAQ />
            <Contact />
            <Footer />
        </div>
    )
}
