'use client'

import { Footer, Header, Section } from '@/components/layout/index'
import Image from 'next/image'
import { ScrollWidget } from '@/components/ui/index'
import { ArrowForwardIos, Dashboard, Error, FormatQuote, Grading, Handshake, PanoramaWideAngle, Person, Publish, QueryStats, RemoveRoad, Report, Savings, Upload, Verified, Warning, Web } from '@mui/icons-material'
import SVGPulseGlow from '@/components/ui/ImgPulse'
import Feedback from '@/components/ui/Feedback'

const sections = [
    { id: 'features', name: 'Features' },
    { id: 'overview', name: 'Overview' },
    { id: 'feature-list', name: 'Feature List' },
    { id: 'uses', name: 'Use Cases' },
    { id: 'stats', name: 'Stats' },
]

export default function Features() {
    return (
        <>
            <Header />
            <ScrollWidget sections={sections} />
            <Feedback />
            {/* INTRO */}
            <Section id="features" className="section-start-area">
                <div className="foreground-z absolute top-[45%] right-[50%] translate-x-[50%] translate-y-[-50%] p-2">
                    <SVGPulseGlow className={"back-z opacity-30"} />
                </div>
                <div className="section-container-intro front-z text-center">
                    <h3 className="content-miniheading">FEATURES</h3>
                    <h1 className="content-title mb-4">A simple approach to a cascading problem</h1>
                    <h2 className="content-subtitle">What you can expect to receive from using our service</h2>
                </div>
                <ArrowForwardIos className="absolute bottom-12" sx={{ fontSize: '32px', transform: 'rotate(90deg)' }} />
            </Section>
            {/* OVERVIEW */}
            <Section id="overview" className="section-container flex min-h-screen flex-col justify-center gap-8">
                <div className="">
                    <h3 className="content-miniheading">
                        <span className="text-xs sm:text-sm">FEATURES</span> — OVERVIEW
                    </h3>
                    <h2 className="content-title mb-6">Automating content-source disclosure</h2>
                    <div className="relative flex flex-col items-center justify-around lg:flex-row">
                        <div className="lg:mr-12 lg:w-[38%]">
                            <h2 className="content-subtitle mb-4">Extrinsic Plan features</h2>
                            <ul className="content-body ml-12 flex flex-col gap-4">
                                <li className="list-disc h-20">
                                    Heimdall will identify plagiarism and automatically rewrite the content with AI or remove it (depending on your
                                    preference) via a Webhook.
                                </li>
                                <li className="list-disc h-20">
                                    When a submission is flagged, you will receive an email notification to ensure you take action.
                                </li>
                                <li className="list-disc h-20">
                                    You will be able to manage all flagged submissions to your site in the{' '}
                                    <a href="/account/dashboard" className="text-link">
                                        dashboard.
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="hidden h-[400px] w-[12%] overflow-x-hidden lg:block">
                            <Web className="translate-x-[20%] translate-y-[32%] rotate-y-180 opacity-10" sx={{ fontSize: '240px' }} />
                        </div>
                        <div className="absolute hidden h-[400px] w-0.5 rounded-full separator-glow lg:block" />
                        <div className="my-12 block h-0.5 w-full rounded-full separator lg:hidden" />
                        <div className="hidden h-[400px] w-[12%] overflow-x-hidden lg:block">
                            <Person className="-translate-x-[50%] translate-y-[32%] opacity-10" sx={{ fontSize: '240px' }} />
                        </div>
                        <div className="lg:ml-12 lg:w-[38%]">
                            <h2 className="content-subtitle mb-6">Intrinsic Plan features</h2>
                            <ul className="content-body ml-12 flex flex-col gap-4">
                                <li className="list-disc h-20">
                                    Coming soon
                                </li>
                                <li className="list-disc h-20">
                                    Coming soon
                                </li>
                                <li className="list-disc h-20">
                                    Coming soon
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>
            {/* FEATURE LIST */}
            <Section id="feature-list" className="section-container flex min-h-screen flex-col justify-center gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading">
                        <span className="text-xs sm:text-sm">FEATURES</span> — FEATURE LIST
                    </h3>
                    <h2 className="content-title mb-14 lg:mb-22">A comprehensive view of the features</h2>
                    <div className="flex flex-col items-center justify-center gap-18">
                        <div className="flex w-full flex-col gap-6 lg:flex-row lg:gap-16">
                            <div className="relative bento-card p-0 aspect-16/9 w-full h-full flex items-center justify-center overflow-hidden">
                                <img src={"/images/widg.png"} className='h-full drop-shadow-xl drop-shadow-black/40 contrast-120 brightness-90' />
                                <PanoramaWideAngle className="absolute left-6 top-6 opacity-50" sx={{ fontSize: '44px', color: '#ecd9a8' }} />
                                <PanoramaWideAngle className="absolute left-6 top-6 opacity-80 blur-md" sx={{ fontSize: '44px', color: '#ecd9a8' }} />
                            </div>
                            <div className="flex w-full flex-col justify-center text-start lg:min-w-[50%]">
                                <h2 className="content-subtitle mb-2 lg:mb-4">Widget Integration</h2>
                                <h3 className="content-miniheading mb-4 tracking-normal lg:mb-8">
                                    <i>Extrinsic Plan</i>
                                </h3>
                                <p className="content-body">
                                    An optional widget, prompting users with a simple AI disclosure question. Fewer tokens are used on submission if this widget
                                    is used; an AI check will not occur if the user discloses their use of AI content. Only available for React.js currently.
                                </p>
                            </div>
                        </div>
                        <div className="flex w-full flex-col gap-6 lg:flex-row lg:gap-16">
                            <div className="relative bento-card p-0 aspect-16/9 w-full h-full flex items-center justify-center overflow-hidden">
                                <img src={"/images/auto.png"} className='h-full drop-shadow-xl drop-shadow-black/40 contrast-120 brightness-90' />
                                <Publish className="absolute left-6 top-6 opacity-50" sx={{ fontSize: '44px', color: '#ecd9a8' }} />
                                <Publish className="absolute left-6 top-6 opacity-80 blur-md" sx={{ fontSize: '44px', color: '#ecd9a8' }} />
                            </div>
                            <div className="flex w-full flex-col justify-center text-start lg:min-w-[50%]">
                                <h2 className="content-subtitle mb-2 lg:mb-4">Analysis — Submission</h2>
                                <h3 className="content-miniheading mb-4 tracking-normal lg:mb-8">
                                    <i>Extrinsic Plan</i>
                                </h3>
                                <p className="content-body">
                                    The user&apos;s content is analysed at the point of submission for AI or plagiarised content. If some is found, it will be
                                    displayed in the dashboard and a watermark will be created for that text.
                                </p>
                            </div>
                        </div>
                        <div className="flex w-full flex-col gap-6 lg:flex-row lg:gap-16">
                            <div className="relative bento-card p-0 aspect-16/9 w-full h-full flex items-center justify-center overflow-hidden">
                                <img src={"/images/remove.png"} className='h-full drop-shadow-xl drop-shadow-black/40 contrast-120 brightness-90' />
                                <RemoveRoad className="absolute left-6 top-6 rotate-270 opacity-50" sx={{ fontSize: '44px', color: '#ecd9a8' }} />
                                <RemoveRoad className="absolute left-6 top-6 rotate-270 opacity-80 blur-md" sx={{ fontSize: '44px', color: '#ecd9a8' }} />
                            </div>
                            <div className="flex w-full flex-col justify-center text-start lg:min-w-[50%]">
                                <h2 className="content-subtitle mb-2 lg:mb-4">Text Modification - Auto Removal</h2>
                                <h3 className="content-miniheading mb-4 tracking-normal lg:mb-8">
                                    <i>Extrinsic Plan</i>
                                </h3>
                                <p className="content-body">
                                    Replaces plagarism with <strong>[REDACTED]</strong> or a custom message showing users that the content is under review.
                                </p>
                            </div>
                        </div>
                        <div className="h-0.5 w-[250px] rounded-full separator lg:w-[500px]" />
                        <div className="flex w-full flex-col gap-6 lg:flex-row lg:gap-16">
                            <div className="relative bento-card p-0 aspect-16/9 w-full h-full flex items-center justify-center overflow-hidden brightness-50">
                                <img src={"/images/auto.png"} className='h-full drop-shadow-xl drop-shadow-black/40 contrast-120 brightness-90' />
                                <Grading className="absolute left-6 top-6 opacity-50" sx={{ fontSize: '44px', color: '#ecd9a8' }} />
                                <Grading className="absolute left-6 top-6 opacity-80 blur-md" sx={{ fontSize: '44px', color: '#ecd9a8' }} />
                            </div>
                            <div className="flex w-full flex-col justify-center text-start lg:min-w-[50%]">
                                <h2 className="content-subtitle mb-2 lg:mb-4">Analysis — Audit</h2>
                                <h3 className="content-miniheading mb-4 tracking-normal lg:mb-8">
                                    <i>Intrinsic Plan</i>
                                </h3>
                                <p className="content-body">
                                    Coming soon
                                </p>
                            </div>
                        </div>
                        <div className="flex w-full flex-col gap-6 lg:flex-row lg:gap-16">
                            <div className="relative bento-card p-0 aspect-16/9 w-full h-full flex items-center justify-center overflow-hidden brightness-50">
                                <img src={"/images/auto.png"} className='h-full drop-shadow-xl drop-shadow-black/40 contrast-120 brightness-90' />
                                <Upload className="absolute left-6 top-6 opacity-50" sx={{ fontSize: '44px', color: '#ecd9a8' }} />
                                <Upload className="absolute left-6 top-6 opacity-80 blur-md" sx={{ fontSize: '44px', color: '#ecd9a8' }} />
                            </div>
                            <div className="flex w-full flex-col justify-center text-start lg:min-w-[50%]">
                                <h2 className="content-subtitle mb-2 lg:mb-4">Analysis - Manual Upload</h2>
                                <h3 className="content-miniheading mb-4 tracking-normal lg:mb-8">
                                    <i>Intrinsic Plan</i>
                                </h3>
                                <p className="content-body">
                                    Coming soon
                                </p>
                            </div>
                        </div>
                        <div className="h-0.5 w-[250px] rounded-full separator lg:w-[500px]" />
                        <div className="flex w-full flex-col gap-6 lg:flex-row lg:gap-16">
                            <div className="relative bento-card p-0 aspect-16/9 w-full h-full flex items-center justify-center overflow-hidden">
                                <img src={"/images/dashbo.png"} className='h-full drop-shadow-xl drop-shadow-black/40 contrast-120 brightness-90' />
                                <Dashboard className="absolute left-6 top-6 opacity-50" sx={{ fontSize: '44px', color: '#ecd9a8' }} />
                                <Dashboard className="absolute left-6 top-6 opacity-80 blur-md" sx={{ fontSize: '44px', color: '#ecd9a8' }} />
                            </div>
                            <div className="flex w-full flex-col justify-center text-start lg:min-w-[50%]">
                                <h2 className="content-subtitle mb-2 lg:mb-4">Personal Dashboard</h2>
                                <h3 className="content-miniheading mb-4 tracking-normal lg:mb-8">
                                    <i>Extrinsic Plan / Intrinsic Plan</i>
                                </h3>
                                <p className="content-body">
                                    Here you can control all of your preferences, submissions to your site and more. Options like auto-removal and
                                    auto-citations can be toggled for submissions, and you will be able to act on flagged content here. You will also see how
                                    your site performs after implementing Heimdall.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            {/* USE CASES */}
            <Section id="uses" className="section-container flex min-h-screen flex-col justify-center gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading">
                        <span className="text-xs sm:text-sm">FEATURES</span> — USE CASES
                    </h3>
                    <h2 className="content-title">Unsure if your site would benefit from Heimdall?</h2>
                    <h3 className="content-subtitle mt-2">Some examples of industries by the severity of consequences</h3>
                    <div className="mt-12 flex flex-col max-w-max mx-auto items-center justify-center gap-8 text-start xl:flex-row xl:items-start bento-card">
                        <div className="relative flex flex-col p-6">
                            <Warning className="absolute top-8 right-6 opacity-20" sx={{ color: 'grey', fontSize: '80px' }} />
                            <h2 className="content-subtitle mb-2">High severity</h2>
                            <h3 className="content-miniheading mb-8 tracking-normal">
                                <i>Crucial to have this</i>
                            </h3>
                            <ul className="content-body flex w-full flex-col gap-4 xl:gap-8">
                                <li className="">
                                    <strong>Legal Firms</strong> — Legal liability
                                </li>
                                <li className="">
                                    <strong>Publishers</strong> — Professional reputation
                                </li>
                                <li className="">
                                    <strong>Agencies</strong> — Risk mitigation
                                </li>
                                <li className="">
                                    <strong>Fintech</strong> — Heavy regulations
                                </li>
                                <li className="">
                                    <strong>Healthcare</strong> — Malpractice concerns
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="hidden h-[400px] w-0.5 rounded-full separator-glow lg:block" />
                            <div className="block h-0.5 w-[250px] rounded-full separator lg:hidden" />
                        </div>
                        <div className="relative flex flex-col p-6">
                            <Report className="absolute top-8 right-6 opacity-20" sx={{ color: 'grey', fontSize: '80px' }} />
                            <h2 className="content-subtitle mb-2">Moderate severity</h2>
                            <h3 className="content-miniheading mb-8 tracking-normal">
                                <i>Important to have this</i>
                            </h3>
                            <ul className="content-body flex w-full flex-col gap-4 xl:gap-8">
                                <li className="">
                                    <strong>Marketing</strong> — SEO penalties
                                </li>
                                <li className="">
                                    <strong>Media</strong> — Strong credibility
                                </li>
                                <li className="">
                                    <strong>E-commerce</strong> — Brand protection
                                </li>
                                <li className="">
                                    <strong>Education</strong> — Accreditation standards
                                </li>
                            </ul>
                        </div>
                        <div>
                            <div className="hidden h-[400px] w-0.5 rounded-full separator-glow lg:block" />
                            <div className="block h-0.5 w-[250px] rounded-full separator lg:hidden" />
                        </div>
                        <div className="relative flex flex-col p-6">
                            <Error className="absolute top-8 right-6 opacity-20" sx={{ color: 'grey', fontSize: '80px' }} />
                            <h2 className="content-subtitle mb-2">Low severity</h2>
                            <h3 className="content-miniheading mb-8 tracking-normal">
                                <i>Beneficial to have this</i>
                            </h3>
                            <ul className="content-body flex w-full flex-col gap-4 xl:gap-8">
                                <li className="">
                                    <strong>Contractors</strong> — Transparency mandates
                                </li>
                                <li className="">
                                    <strong>Real Estate</strong> — Market credibility
                                </li>
                                <li className="">
                                    <strong>SaaS</strong> — Developer trust
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>
            {/* STATS */}
            <Section id="stats" className="section-container flex min-h-screen flex-col justify-center gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading">
                        <span className="text-xs sm:text-sm">FEATURES</span> — STATS
                    </h3>
                    <h2 className="content-title">This is what you could expect to see</h2>
                    <div className="my-14 grid grid-cols-1 gap-16 lg:my-24 lg:grid-cols-3">
                        <div className="flex flex-col items-center gap-4">
                            <div className="bento-card relative flex h-[280px] w-[280px] items-center justify-center">
                                <div className="corner-glow absolute -right-1 -bottom-1 w-50" />
                                <div className="corner-glow-lit absolute -right-[3px] -bottom-[3px] w-50" />
                                <Handshake className="opacity-40" sx={{ fontSize: '160px' }} />
                            </div>
                            <h2 className="content-title text-3xl">Compliance</h2>
                            <p className="content-body">
                                Substantial decrease in plagiarism escalation
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <div className="bento-card relative flex h-[280px] w-[280px] items-center justify-center">
                                <div className="corner-glow absolute -right-1 -bottom-1 w-50" />
                                <div className="corner-glow-lit absolute -right-[3px] -bottom-[3px] w-50" />
                                <Verified className="opacity-40" sx={{ fontSize: '160px' }} />
                            </div>
                            <h2 className="content-title text-3xl">Reputation</h2>
                            <p className="content-body">
                                Higher visitor retention via brand trust
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-4">
                            <div className="bento-card relative flex h-[280px] w-[280px] items-center justify-center">
                                <div className="corner-glow absolute -right-1 -bottom-1 w-50" />
                                <div className="corner-glow-lit absolute -right-[3px] -bottom-[3px] w-50" />
                                <Savings className="opacity-40" sx={{ fontSize: '160px' }} />
                            </div>
                            <h2 className="content-title text-3xl">Savings</h2>
                            <p className="content-body">
                                Save on manual labour costs
                            </p>
                        </div>
                    </div>
                </div>
            </Section>
            <Footer />
        </>
    )
}
