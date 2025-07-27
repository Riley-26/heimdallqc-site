import { Background, Providers } from '@/components/layout/index'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: {
        default: 'Heimdall QC - AI Content Verification',
        template: '%s | Your SaaS',
    },
    description: 'Your SaaS description goes here',
    keywords: ['saas', 'api', 'analytics', 'your-keywords'],
    authors: [{ name: 'Your Company' }],
    creator: 'Your Company',
    metadataBase: new URL('https://your-domain.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className="text-body background">
                <Providers>
                    <Background />
                    <main className="foreground-z">{children}</main>
                </Providers>
            </body>
        </html>
    )
}
