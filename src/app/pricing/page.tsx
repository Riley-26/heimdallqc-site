'use client'

import { Footer, Header, Section } from '@/components/layout/index'
import { PricingTiers } from '@/components/sections/index'
import Feedback from '@/components/ui/Feedback'
import SVGPulseGlow from '@/components/ui/ImgPulse'
import { Button, IconContainer, ScrollWidget } from '@/components/ui/index'
import { ArrowForwardIos, MoneyOff } from '@mui/icons-material'
import { useSession } from 'next-auth/react'
import Image from 'next/image'

const sections = [
    { id: 'pricing', name: 'Pricing' },
    { id: 'tiers', name: 'Pricing Tiers' },
    { id: 'guide', name: 'Pricing Guide' },
    { id: 'trial', name: 'Trial' },
]

export default function Pricing() {
    const { data: session } = useSession()

    return (
        <>
            <Header />
            <ScrollWidget sections={sections} />
            <Feedback />
            {/* INTRO */}
            <Section id="pricing" className="section-start-area">
                <div className="foreground-z absolute top-[45%] right-[50%] translate-x-[50%] translate-y-[-50%] p-2">
                    <SVGPulseGlow className={"back-z opacity-30"} />
                </div>
                <div className="section-container-intro front-z text-center">
                    <h3 className="content-miniheading">PRICING</h3>
                    <h1 className="content-title mb-4">Peace of mind for a fraction of the cost</h1>
                    <h2 className="content-subtitle">Intuitive payment plans, to suit specific needs</h2>
                </div>
                <ArrowForwardIos sx={{ fontSize: '32px', transform: 'rotate(90deg)', position: 'absolute', bottom: '32px' }} />
            </Section>
            {/* TIERS */}
            <Section id="tiers" className="section-container flex min-h-screen justify-center py-24">
                <div className="text-center">
                    <h3 className="content-miniheading">PRICING</h3>
                    <h2 className="content-title mb-12">Simple pricing plans</h2>
                    <PricingTiers />
                </div>
            </Section>
            {/* GUIDE */}
            <Section id="guide" className="section-container flex min-h-screen flex-col justify-center gap-8">
                <div className="">
                    <h3 className="content-miniheading">
                        <span className="text-[16px]">PRICING</span> — GUIDE
                    </h3>
                    <h2 className="content-title text-3xl sm:text-4xl lg:text-6xl">Let us help you decide</h2>
                    <div className="mt-12 flex flex-col items-center justify-center gap-16 lg:flex-row">
                        <div className="flex flex-col gap-6 lg:w-[50%]">
                            <h3 className="content-subtitle">
                                Choose the <strong>Extrinsic</strong> Plan if...
                            </h3>
                            <ul className="content-body ml-8 grid grid-rows-3 gap-4 lg:ml-12">
                                <li className="bento-card list-disc h-28">
                                    You have visitors that publish content to your site - Submissions, Reviews, Comments etc.
                                </li>
                                <li className="bento-card list-disc h-28">
                                    Misinformation and plagiarism would affect your site&apos;s reputation, and therefore your sales and interaction
                                </li>
                                <li className="bento-card list-disc h-28">
                                    AI content in your site may cause SEO penalties
                                </li>
                            </ul>
                            <div className="mx-auto w-max">
                                <Button href='/account/api-management' value={'SELECT'} full={true} className={'px-4 py-1 text-base'} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 lg:w-[50%]">
                            <h3 className="content-subtitle">
                                Choose the <strong>Intrinsic</strong> Plan if...
                            </h3>
                            <ul className="content-body ml-8 grid grid-rows-3 gap-4 lg:ml-12">
                                <li className="bento-card h-28 font-semibold text-neutral-500">
                                    Coming soon
                                </li>
                                <li className="bento-card h-28 font-semibold text-neutral-500">
                                    Coming soon
                                </li>
                                <li className="bento-card h-28 font-semibold text-neutral-500">
                                    Coming soon
                                </li>
                            </ul>
                            <div className="mx-auto w-max">
                                <Button value={'SELECT'} full={true} className={'w-max px-4 py-1 text-base hover:cursor-not-allowed'} />
                            </div>
                        </div>
                    </div>
                    <div className="mt-8 flex items-center justify-center gap-4">
                        <p className="content-body">View all features here</p>
                        <IconContainer href="/features#feature-list">
                            <ArrowForwardIos sx={{ fontSize: '20px' }} />
                        </IconContainer>
                    </div>
                </div>
            </Section>
            {/* PAYMENT */}
            <Section id="trial" className="section-container flex min-h-screen flex-col justify-center gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading">
                        <span className="text-[16px]">PRICING</span> — TRIAL
                    </h3>
                    <h2 className="content-title">Test it out with a free trial</h2>
                    <h3 className="content-subtitle mt-8">Claim your 7-day free trial to get a feel for how it works</h3>
                    <div className="mt-16 grid grid-rows-1 gap-22">
                        <div className="flex flex-col items-center justify-center">
                            <IconContainer className="mb-4 p-4 lg:p-6" href={session ? `/account/api-management` : `/signin`}>
                                <MoneyOff sx={{ fontSize: '48px' }} />
                            </IconContainer>
                            <span className="content-body font-medium">{session ? 'ACCOUNT' : 'SIGN IN'}</span>
                        </div>
                    </div>
                </div>
            </Section>
            <Footer />
        </>
    )
}
