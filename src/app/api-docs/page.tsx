'use client'

import { Footer, Header, Section } from '@/components/layout/index'
import SVGPulseGlow from '@/components/ui/ImgPulse'
import { ScrollWidget } from '@/components/ui/index'
import { ArrowForwardIos } from '@mui/icons-material'
import Image from 'next/image'

const sections = [
    { id: 'intro', name: 'Introduction' },
    { id: 'get-started', name: 'Get Started' },
    { id: 'sdk', name: 'SDK' },
    { id: 'practices', name: 'Best Practices' },
    { id: 'troubleshooting', name: 'Troubleshooting' },
]

export default function ApiDocs() {
    return (
        <>
            <Header />
            <ScrollWidget sections={sections} />
            <Section id="api" className="section-start-area">
                <div className="foreground-z absolute top-[45%] right-[50%] translate-x-[50%] translate-y-[-50%] p-2">
                    <SVGPulseGlow className={"back-z opacity-30"} />
                </div>
                <div className="section-container-sm front-z text-center">
                    <h3 className="content-miniheading">API</h3>
                    <h1 className="content-title mb-4">Comprehensive guide</h1>
                    <h2 className="content-subtitle">Our integration tutorial and suggestions for best practices</h2>
                </div>
                <ArrowForwardIos className="absolute bottom-12" sx={{ fontSize: '32px', transform: 'rotate(90deg)' }} />
            </Section>
            {/* INTRO */}
            <Section id="intro" className="section-container flex min-h-screen flex-col justify-center gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading">
                        <span className="text-[16px]">API</span> — INTRODUCTION
                    </h3>
                    <h2 className="content-title py-2 text-6xl">Introduction</h2>
                </div>
            </Section>
            {/* ENDPOINTS */}
            <Section id="practices" className="section-container flex min-h-screen flex-col justify-center gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading">
                        <span className="text-[16px]">API</span> — ENDPOINTS
                    </h3>
                    <h2 className="content-title py-2 text-6xl">Endpoints</h2>
                </div>
            </Section>
            {/* SDK */}
            <Section id="sdk" className="section-container flex min-h-screen flex-col justify-center gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading">
                        <span className="text-[16px]">API</span> — SDK
                    </h3>
                    <h2 className="content-title py-2 text-6xl">We&apos;ve made it easy for you</h2>
                </div>
            </Section>
            {/* TROUBLESHOOTING */}
            <Section id="troubleshooting" className="section-container flex min-h-screen flex-col justify-center gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading">
                        <span className="text-[16px]">API</span> — TROUBLESHOOTING
                    </h3>
                    <h2 className="content-title py-2 text-6xl">Most common issues</h2>
                </div>
            </Section>
            <Footer />
        </>
    )
}
