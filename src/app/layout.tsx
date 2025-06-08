import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header, Footer } from '@/components/layout/index'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: {
        default: 'Heimdall - AI Monitoring System',
        template: '%s | Your SaaS'
    },
    description: 'Your SaaS description goes here',
    keywords: ['saas', 'api', 'analytics', 'your-keywords'],
    authors: [{ name: 'Your Company' }],
    creator: 'Your Company',
    metadataBase: new URL('https://your-domain.com'),
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://your-domain.com',
        title: 'Your SaaS',
        description: 'Your SaaS description goes here',
        siteName: 'Your SaaS',
    }
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${inter.className} antialiased`}>
                <div className="flex min-h-screen flex-col">
                    <Header />
                    <main className="flex-1">
                        {children}
                    </main>
                    <Footer />
                </div>
            </body>
        </html>
    )
}