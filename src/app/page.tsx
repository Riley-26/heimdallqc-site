'use client'

import Feedback from '@/components/ui/Feedback'
import { Footer, Header, Section } from '@/components/layout/index'
import { PricingTiers } from '@/components/sections/index'
import SVGPulseGlow from '@/components/ui/ImgPulse'
import { Button, IconContainer, Parallax, RefLink, ScrollWidget } from '@/components/ui/index'
import { SplitSection } from '@/components/ui/SplitSection'
import {
    ArrowForwardIos,
    AssignmentInd,
    Check,
    CurrencyExchange,
    Dashboard,
    Email,
    GroupAdd,
    Key,
    PriceCheck,
    Quiz,
    Speed,
    WidthFull,
} from '@mui/icons-material'
import Image from 'next/image'

const sections = [
    { id: 'hero', name: 'Home' },
    { id: 'whatisit', name: 'What is it?' },
    { id: 'howitworks', name: 'How does it work?' },
    { id: 'clarification', name: 'Clarification' },
    { id: 'steps', name: 'Integration' },
    { id: 'benefits', name: 'Benefits' },
    { id: 'pricing', name: 'Pricing' },
    { id: 'quick-links', name: 'Quick Links' },
]

const compSections: [{ title: string; desc: string }, { title: string; desc: string }, { title: string; desc: string }] = [
    { title: "Analysis", desc: "A submitted text is analysed. This would happen via user submission, site audit or manual upload." },
    { title: "Modification", desc: "If the result meets certain criteria, the text is modified in real-time according to the chosen function." },
    { title: "Action", desc: "In your dashboard, you will see which entries are problematic and need permanent action." }
]

const refLinks = [
    {
        id: 1,
        title: "AI's role in plagiarism and copyright infringement",
        link: 'https://sguru.org/business-risk-of-undetected-ai-content/',
    },
    {
        id: 2,
        title: 'The role of transparency in building customer trust',
        link: 'https://blogs.psico-smart.com/blog-what-role-does-transparency-play-in-building-customer-trust-and-loyalty-131529',
    },
]

export default function Home() {
    return (
        <>
            {/* HERO */}
            <Header />
            <ScrollWidget sections={sections} />
            <Feedback />
            <Section id="hero" className="section-container relative flex flex-col min-h-[100svh] md:min-h-screen items-start justify-center gap-4 md:gap-8">
                <SVGPulseGlow className={"fixed top-0 right-[30%] translate-x-[50%] back-z"} />
                <h1 className="hero-content-title mx-0 max-w-[800px]">Protect your business with Real-time Content Quality-control</h1>
                <div>
                    <h2 className="hero-content-subtitle">Automated plagiarism response to protect your business from damage.</h2>
                    <h2 className="hero-content-subtitle">Seamless integration, instant peace of mind.</h2>
                </div>
                <div className="flex gap-8">
                    <Button full={true} value={'PRICING'} href="/pricing" className="mt-2 sm:mt-0" />
                    <Button full={false} value={'FEATURES'} href="/features" className="mt-2 sm:mt-0" />
                </div>
            </Section>
            {/* WHAT IS IT */}
            <Section id="whatisit" className="section-container flex min-h-screen flex-col justify-center gap-8">
                <div className="max-w-[900px]">
                    <h3 className="content-miniheading">WHAT IS IT?</h3>
                    <h2 className="content-title mb-6">The &apos;Content Circuit Breaker&apos;</h2>
                    <p className="content-body">
                        Utilising industry-leading{' '}
                        <a href="https://gowinston.ai/" target="_blank" className="text-link">
                            AI and plagiarism detection software
                        </a>
                        , Heimdall will act on potential plagiarism in your website to ensure that you don&apos;t get caught out. Think of it like a
                        circuit breaker, designed to prevent the escalation of plagiarism and misinformation before it creates expensive problems.
                        <br />
                        <br />
                        The easy way to protect your business&apos; from legal implications.
                    </p>
                    <div className="my-12 grid max-w-[700px] grid-cols-1 gap-4">
                        <div className="relative">
                            <div className="corner-glow w-32"></div>
                            <div className="corner-glow-lit w-32"></div>
                            <div className="bento-card foreground-z flex gap-4">
                                <Check className="text-green-600" sx={{ fontSize: '28px' }} />
                                <h3 className="content-body">Minimise expenses caused by plagiarism</h3>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="corner-glow w-32"></div>
                            <div className="corner-glow-lit w-32"></div>
                            <div className="bento-card foreground-z flex gap-4">
                                <Check className="text-green-600" sx={{ fontSize: '28px' }} />
                                <h3 className="content-body">Protect your company&apos;s reputation</h3>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="corner-glow w-32"></div>
                            <div className="corner-glow-lit w-32"></div>
                            <div className="bento-card foreground-z flex gap-4">
                                <Check className="text-green-600" sx={{ fontSize: '28px' }} />
                                <h3 className="content-body">Prevent negative SEO</h3>
                            </div>
                        </div>
                    </div>
                    <div className="ml-8 flex items-center gap-4">
                        <p className="content-body">For a list of all features, click here</p>
                        <IconContainer href="/features#feature-list">
                            <ArrowForwardIos sx={{ fontSize: '20px' }} />
                        </IconContainer>
                    </div>
                </div>
            </Section>
            {/* HOW DOES IT WORK? */}
            <Section id="howitworks" className="section-container flex min-h-screen flex-col justify-center gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading">HOW DOES IT WORK?</h3>
                    <h2 className="content-title mb-6">The core components</h2>
                    <SplitSection className='sm:mt-28' sections={compSections} />
                </div>
            </Section>
            {/* CLARIFICATION */}
            <Section id="clarification" className='section-container flex min-h-screen flex-col justify-center gap-12'>
                <div className="max-w-[1200px]">
                    <h3 className="content-miniheading">CLARIFICATION</h3>
                    <h2 className="content-title mb-6">Not just another Plagiarism detector</h2>
                    <p className="content-body">
                        Heimdall is not designed as another plagiarism detector tool. It is an emergency reponse designed to temporarily prevent potential crises via legal implications, until a permanent correction is made. 
                        <br/>
                        <br/>
                        Detecting plagiarism is great and all, established tools such as <a href='https://www.copyscape.com/' target="_blank" className="text-link">Copyscape</a> or <a href='https://copyleaks.com/' target="_blank" className="text-link">Copyleaks</a> do this well. <strong>But what next?</strong> Your precious time 
                        is spent manually diagnosing and acting. Heimdall will detect, act and notify of any instances of plagiarism in your site to allow you to focus on other important things. We offer you peace of mind.
                        <br/>
                        <br/>
                        <strong>TL:DR; Heimdall is &apos;Plagiarism Response&apos;, not just a plagiarism detector.</strong>
                    </p>
                </div>
                <div className='bento-card grid grid-rows-6'>
                    <div className='grid grid-cols-5 text-center content-subtitle'>
                        <h3 className='col-span-1'>&nbsp;</h3>
                        <h3 className='col-span-2'>Heimdall</h3>
                        <h3 className='col-span-2'>Plagiarism Detectors</h3>
                    </div>
                    <div className='grid grid-cols-5 content-body text-center'>
                        <span className='py-4 col-span-1 content-subtitle-acc text-start'>Automatic action</span>
                        <span className='py-4 col-span-2 font-semibold bg-neutral-950'>Yes</span>
                        <span className='py-4 col-span-2'>Limited</span>
                    </div>
                    <div className='grid grid-cols-5 content-body text-center'>
                        <span className='py-4 col-span-1 content-subtitle-acc text-start'>Established</span>
                        <span className='py-4 col-span-2'>New</span>
                        <span className='py-4 col-span-2 font-semibold bg-neutral-950'>Experienced</span>
                    </div>
                    <div className='grid grid-cols-5 content-body text-center'>
                        <span className='py-4 col-span-1 content-subtitle-acc text-start'>Potential Cost</span>
                        <span className='py-4 col-span-2 font-semibold bg-neutral-950'>£34 monthly</span>
                        <span className='py-4 col-span-2'><a className='text-link' href='https://copyleaks.com/pricing' target='_blank'>~$75 monthly or more</a></span>
                    </div>
                    <div className='grid grid-cols-5 content-body text-center'>
                        <span className='py-4 col-span-1 content-subtitle-acc text-start'>Analysis Result</span>
                        <span className='py-4 col-span-2'>Plagiarism score + text removal</span>
                        <span className='py-4 col-span-2 font-semibold bg-neutral-950'>Convoluted text breakdown</span>
                    </div>
                    <div className='grid grid-cols-5 content-body text-center'>
                        <span className='py-4 col-span-1 content-subtitle-acc text-start'>Dashboard</span>
                        <span className='py-4 col-span-2 font-semibold bg-neutral-950'>Yes</span>
                        <span className='py-4 col-span-2 font-semibold'>Limited</span>
                    </div>
                </div>
            </Section>
            {/* INTEGRATION */}
            <Section id="steps" className="section-container flex min-h-screen items-center justify-center gap-8 py-24">
                <div className="text-center">
                    <h3 className="content-miniheading">INTEGRATION</h3>
                    <h2 className="content-title mb-12">Integration in three simple steps</h2>
                    <div className="mb-12 mx-auto flex flex-col 2xl:flex-row w-full gap-6 2xl:gap-8">
                        <div className="mx-auto aspect-16/12 bento-card relative flex flex-col gap-4 text-start overflow-hidden h-[260px] sm:h-[350px] w-[350px] sm:w-[450px]">
                            <h3 className="content-subtitle text-2xl">Step 1</h3>
                            <p className="content-body">Sign up here, and generate a key.</p>
                            <img src={"/images/key.png"} className='absolute -bottom-10 left-0 w-full drop-shadow-2xl drop-shadow-[#d9cdad55] contrast-120 brightness-90' />
                            <Key className="absolute left-[50%] -translate-x-[50%] bottom-[30%] scale-80 sm:scale-100 sm:bottom-[35%] rotate-90 opacity-50" sx={{ fontSize: '48px', color: '#ecd9a8' }} />
                            <Key className="absolute left-[50%] -translate-x-[50%] bottom-[30%] scale-80 sm:scale-100 sm:bottom-[35%] rotate-90 opacity-80 blur-md" sx={{ fontSize: '48px', color: '#ecd9a8' }} />
                        </div>
                        <div className="mx-auto aspect-16/12 bento-card relative flex flex-col gap-4 text-start overflow-hidden h-[260px] sm:h-[350px] w-[350px] sm:w-[450px]">
                            <h3 className="content-subtitle text-2xl">Step 2</h3>
                            <p className="content-body">Download the SDK into your application, and follow the steps in our API docs.</p>
                            <img src={"/images/sdk.png"} className='absolute -bottom-10 left-0 w-full drop-shadow-2xl drop-shadow-[#d9cdad55] contrast-120 brightness-90' />
                            <WidthFull className="absolute left-[50%] -translate-x-[50%] bottom-[30%] scale-80 sm:scale-100 sm:bottom-[35%] opacity-50" sx={{ fontSize: '48px', color: '#ecd9a8' }} />
                            <WidthFull className="absolute left-[50%] -translate-x-[50%] bottom-[30%] scale-80 sm:scale-100 sm:bottom-[35%] opacity-80 blur-md" sx={{ fontSize: '48px', color: '#ecd9a8' }} />
                        </div>
                        <div className="mx-auto aspect-16/12 bento-card relative flex flex-col gap-4 text-start overflow-hidden h-[260px] sm:h-[350px] w-[350px] sm:w-[450px]">
                            <h3 className="content-subtitle text-2xl">Step 3</h3>
                            <p className="content-body">Test it out by viewing your dashboard after a text is submitted.</p>
                            <img src={"/images/dash.png"} className='absolute -bottom-10 left-0 w-full drop-shadow-2xl drop-shadow-[#d9cdad55] contrast-120 brightness-90' />
                            <Dashboard className="absolute left-[50%] -translate-x-[50%] bottom-[30%] scale-80 sm:scale-100 sm:bottom-[35%] opacity-50" sx={{ fontSize: '48px', color: '#ecd9a8' }} />
                            <Dashboard className="absolute left-[50%] -translate-x-[50%] bottom-[30%] scale-80 sm:scale-100 sm:bottom-[35%] opacity-80 blur-md" sx={{ fontSize: '48px', color: '#ecd9a8' }} />
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <p className="content-body">For a full guide, click here</p>
                        <IconContainer href="/api-docs">
                            <ArrowForwardIos sx={{ fontSize: '20px' }} />
                        </IconContainer>
                    </div>
                </div>
            </Section>
            {/* BENEFITS */}
            <Section id="benefits" className="section-container flex min-h-screen justify-center gap-8 py-24">
                <div className="text-center">
                    <h3 className="content-miniheading">BENEFITS</h3>
                    <h2 className="content-title mb-12">Stay ahead of the curve</h2>
                    <div className="section-container-sm flex flex-col gap-8 text-start">
                        <div className="bento-card relative flex w-full justify-between overflow-hidden">
                            <div className='bg-transparent h-full absolute right-0 bottom-0 border-[190px] border-b-black/70 border-r-black/70 border-l-transparent border-t-black/40' />
                            <div className="flex max-w-[100%] flex-col gap-4 md:max-w-[70%] foreground-z">
                                <h3 className="content-subtitle">Risk Mitigation</h3>
                                <p className='content-body'>
                                    Heimdall will stop plagiarism at the door, mitigating risks of legal escalation and brand damage.
                                </p>
                                <ul className='content-body text-base mt-2 flex flex-col gap-4'>
                                    <li className='list-disc ml-8'>
                                        A study found that 60% of reviewed AI generated content contained some level of plagiarism
                                        <RefLink data={refLinks[0]} />.
                                    </li>
                                    <li className='list-disc ml-8'>
                                        Content moderation mandates are imminent, such as the Online Safety Act.
                                    </li>
                                </ul>
                            </div>
                            <div className="absolute bottom-0 right-4 flex items-center justify-center text-[140px] lg:text-[180px] p-4">
                                <Speed className="opacity-10" fontSize="inherit" />
                            </div>
                        </div>
                        <div className="separator" />
                        <div className="bento-card relative flex w-full justify-between overflow-hidden">
                            <div className='bg-transparent h-full absolute right-0 bottom-0 border-[190px] border-b-black/70 border-r-black/70 border-l-transparent border-t-black/40' />
                            <div className="flex max-w-[100%] flex-col gap-4 md:max-w-[70%] foreground-z">
                                <h3 className="content-subtitle">ROI</h3>
                                <p className='content-body'>
                                    With the low entry-cost of £34/month, even one prevented plagiarism per month will cover your investment.
                                </p>
                                <ul className='content-body text-base mt-2 flex flex-col gap-4'>
                                    <li className='list-disc ml-8'>
                                        Reputation damage and lawsuit costs can be incalculable.
                                    </li>
                                    <li className='list-disc ml-8'>
                                        Greatly reduces manual labour costs.
                                    </li>
                                </ul>
                            </div>
                            <div className="absolute bottom-0 right-4 flex items-center justify-center text-[130px] lg:text-[160px] px-4 py-6">
                                <CurrencyExchange className="opacity-10" fontSize="inherit" />
                            </div>
                        </div>
                        <div className="separator" />
                        <div className="bento-card relative flex w-full justify-between overflow-hidden">
                            <div className='bg-transparent h-full absolute right-0 bottom-0 border-[190px] border-b-black/70 border-r-black/70 border-l-transparent border-t-black/40' />
                            <div className="flex max-w-[100%] flex-col gap-4 md:max-w-[70%] foreground-z">
                                <h3 className="content-subtitle">Web Presence</h3>
                                <p className='content-body'>
                                    Caring about the quality of your site&apos;s content will pay dividends.
                                </p>
                                <ul className='content-body text-base mt-2 flex flex-col gap-4'>
                                    <li className='list-disc ml-8'>
                                        Websites that prioritise transparency profit from a 24% engagement boost
                                        <RefLink data={refLinks[1]} />.
                                    </li>
                                    <li className='list-disc ml-8'>
                                        Your site&apos;s SEO rankings may be punished for containing poor-quality content.
                                    </li>
                                </ul>
                            </div>
                            <div className="absolute bottom-0 right-4 flex items-center justify-center text-[140px] lg:text-[180px] p-4">
                                <GroupAdd className="opacity-10" fontSize="inherit" />
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            {/* TESTIMONIALS */}

            {/* PRICING */}
            <Section id="pricing" className="section-container flex min-h-screen justify-center py-24">
                <div className="text-center">
                    <h3 className="content-miniheading">PRICING</h3>
                    <h2 className="content-title mb-12">Simple pricing plans</h2>
                    <PricingTiers />
                </div>
            </Section>
            {/* QUICK LINKS */}
            <Section id="quick-links" className="section-container flex min-h-screen justify-center py-24">
                <div className="flex flex-col items-center justify-center text-center">
                    <h3 className="content-miniheading">QUICK LINKS</h3>
                    <h2 className="content-title mb-12">Easy navigation</h2>
                    <div className="grid grid-cols-2 grid-rows-2 gap-12 lg:grid-cols-4 lg:grid-rows-1 lg:gap-18">
                        <div className="flex flex-col items-center justify-center">
                            <IconContainer className="mb-4 p-4 sm:p-6" href="/">
                                <AssignmentInd className="scale-80 sm:scale-100" sx={{ fontSize: '48px' }} />
                            </IconContainer>
                            <span className="content-body">SIGN UP</span>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <IconContainer className="mb-4 p-4 sm:p-6" href="/help#contact">
                                <Email className="scale-80 sm:scale-100" sx={{ fontSize: '48px' }} />
                            </IconContainer>
                            <span className="content-body">CONTACT</span>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <IconContainer className="mb-4 p-4 sm:p-6" href="/pricing#guide">
                                <PriceCheck className="scale-80 sm:scale-100" sx={{ fontSize: '48px' }} />
                            </IconContainer>
                            <span className="content-body">PRICE GUIDE</span>
                        </div>
                        <div className="flex flex-col items-center justify-center">
                            <IconContainer className="mb-4 p-4 sm:p-6" href="/help#faq">
                                <Quiz className="scale-80 sm:scale-100" sx={{ fontSize: '48px' }} />
                            </IconContainer>
                            <span className="content-body">FAQ</span>
                        </div>
                    </div>
                </div>
            </Section>
            <Footer />
        </>
    )
}