'use client'

import { Footer, Header, Section } from '@/components/layout/index'
import SVGPulseGlow from '@/components/ui/ImgPulse'
import { ScrollWidget } from '@/components/ui/index'
import { ArrowForwardIos } from '@mui/icons-material'
import Image from 'next/image'

const sections = [
    { id: 'privacy', name: 'Privacy' },
    { id: 'terms', name: 'T&Cs' },
    { id: 'policy', name: 'Data Policy' },
]

export default function Privacy() {
    return (
        <>
            <Header />
            <ScrollWidget sections={sections} />
            {/* INTRO */}
            <Section id="pricing" className="section-start-area">
                <div className="foreground-z absolute top-[45%] right-[50%] translate-x-[50%] translate-y-[-50%] p-2">
                    <SVGPulseGlow className={"back-z opacity-30"} />
                </div>
                <div className="section-container-sm front-z text-center">
                    <h3 className="content-miniheading">PRIVACY</h3>
                    <h1 className="content-title mb-4">Our Privacy Policy</h1>
                    <h2 className="content-subtitle">We lead by example, with full transparency</h2>
                </div>
                <ArrowForwardIos className="absolute bottom-12" sx={{ fontSize: '32px', transform: 'rotate(90deg)' }} />
            </Section>
            {/* T&C */}
            <Section id="terms" className="section-container flex min-h-screen flex-col justify-center gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading">
                        <span className="text-[16px]">PRIVACY</span> — T&Cs
                    </h3>
                    <h2 className="content-title text-6xl">Terms and Conditions</h2>
                </div>
            </Section>
            {/* DATA POLICY */}
            <Section id="policy" className="section-container flex min-h-screen flex-col justify-center gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading">
                        <span className="text-[16px]">PRIVACY</span> — DATA POLICY
                    </h3>
                    <h2 className="content-title text-6xl">How do we use your data?</h2>
                </div>
            </Section>
            <Footer />
        </>
    )
}
