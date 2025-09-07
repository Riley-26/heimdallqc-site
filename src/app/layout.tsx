import { Background, Providers } from '@/components/layout/index'
import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/next"
import './globals.css'
import Feedback from '@/components/ui/Feedback'

export const metadata: Metadata = {
    title: {
        default: 'Heimdall QC - Content Circuit Breaker',
        template: '%s | Your SaaS',
    },
    description: 'Your SaaS description goes here',
    keywords: ['saas', 'api', 'analytics', 'your-keywords'],
    authors: [{ name: 'Heimdall' }],
    creator: 'RS Read',
    metadataBase: new URL('https://heimdallqc.com'),
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className="text-body background">
                <Providers>
                    <Analytics />
                    <Background />
                    <main className="foreground-z">{children}</main>
                </Providers>
            </body>
        </html>
    )
}
