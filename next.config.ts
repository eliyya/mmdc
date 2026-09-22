import createMDX from '@next/mdx'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
    reactStrictMode: true,
    allowedDevOrigins: ['dev.eliyya.dev'],
    pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx']
}

export default createMDX()(nextConfig)
