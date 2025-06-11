import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Header, Footer, Background } from '@/components/layout/index'
import { ScrollWidget } from '@/components/ui'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: {
        default: 'Heimdall - AI Disclosure System',
        template: '%s | Your SaaS'
    },
    description: 'Your SaaS description goes here',
    keywords: ['saas', 'api', 'analytics', 'your-keywords'],
    authors: [{ name: 'Your Company' }],
    creator: 'Your Company',
    metadataBase: new URL('https://your-domain.com')
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className="text-body background">
                <Background />
                <Header loggedState={false} />
                <main>
                    {children}
                </main>
            </body>
        </html>
    )
}