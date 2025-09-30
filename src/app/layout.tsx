import { Background, Providers } from '@/components/layout/index'
import type { Metadata } from 'next'
import { Analytics } from "@vercel/analytics/next"
import './globals.css'

export const metadata: Metadata = {
    title: {
        default: 'Heimdall QC - Content Circuit Breaker',
        template: '%s | Heimdall QC',
    },
    description: 'The Content Circuit Breaker, automating plagiarism prevention and AI disclosure within your website. Designed to protect businesses from the legal implications of unchecked plagiarism.',
    keywords: [
        'content moderation',
        'brand protection',
        'content quality control',
        'AI disclosure',
        'content protection',
        'real-time content analysis',
        'plagiarism prevention',
        'plagiarism detector',
        'plagiarism response'
    ],
    authors: [{ name: 'Heimdall QC Team' }],
    creator: 'Heimdall QC',
    publisher: 'Heimdall QC',
    metadataBase: new URL('https://heimdallqc.com'),
    alternates: {
        canonical: '/'
    },
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        }
    },
    verification: {
        google: 'google-site-verification=XZweLCTn2VEQIYLDAKMTEc-vEONgf5NXnG5ERkIU8YY'
    }
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
