'use client'

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
    { id: 'steps', name: 'Integration' },
    { id: 'benefits', name: 'Benefits' },
    { id: 'pricing', name: 'Pricing' },
    { id: 'quick-links', name: 'Quick Links' },
]

const compSections: [{ title: string; desc: string }, { title: string; desc: string }, { title: string; desc: string }] = [
    { title: "Analysis", desc: "A text is analysed. This would happen via user submission, site audit or manual upload." },
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
            <Section id="hero" className="section-container relative flex flex-col min-h-[100svh] md:min-h-screen items-start justify-center gap-4 md:gap-8">
                <SVGPulseGlow className={"fixed top-0 right-20 sm:right-0 back-z mr-2 sm:mr-48"} />
                <h1 className="hero-content-title mx-0 max-w-[800px]">Protect your business with Real-time Content Quality-control</h1>
                <div>
                    <h2 className="hero-content-subtitle">Automated verification that protects your brand&apos;s reputation.</h2>
                    <h2 className="hero-content-subtitle">Seamless integration for you, instant assurance for your visitors.</h2>
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
                    <h2 className="content-title mb-6">The &apos;Digital Circuit Breaker&apos;</h2>
                    <p className="content-body">
                        Utilising industry-leading{' '}
                        <a href="https://gowinston.ai/" target="_blank" className="text-link">
                            AI and plagiarism detection software
                        </a>
                        , Heimdall will act on potential plagiarism and AI content in your website to ensure that you don&apos;t get caught out. Think of it like a
                        circuit breaker, designed to prevent the escalation of plagiarism and misinformation before it creates expensive problems.
                        <br />
                        <br />
                        An easy way to protect your business&apos; integrity, whilst building trust with your consumers.
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
                                <h3 className="content-body">Convert short-term visitors into long-term loyal customers</h3>
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
            {/* INTEGRATION */}
            <Section id="steps" className="section-container flex min-h-screen items-center justify-center gap-8 py-24">
                <div className="text-center">
                    <h3 className="content-miniheading">INTEGRATION</h3>
                    <h2 className="content-title mb-12">Integration in three simple steps</h2>
                    <div className="mb-12 mx-auto flex flex-col 2xl:flex-row w-full gap-6 2xl:gap-8">
                        <div className="mx-auto aspect-16/12 bento-card relative flex flex-col gap-4 text-start overflow-hidden h-[260px] sm:h-[350px] w-[350px] sm:w-[450px]">
                            <h3 className="content-subtitle text-2xl">Step 1</h3>
                            <p className="content-body">Sign up for the API and receive your key.</p>
                            <img src={"/images/key.png"} className='absolute -bottom-10 left-0 w-full drop-shadow-2xl drop-shadow-[#d9cdad55] contrast-120 brightness-90' />
                            <Key className="absolute left-[50%] -translate-x-[50%] bottom-[30%] scale-80 sm:scale-100 sm:bottom-[35%] rotate-90 opacity-50" sx={{ fontSize: '48px', color: '#ecd9a8' }} />
                            <Key className="absolute left-[50%] -translate-x-[50%] bottom-[30%] scale-80 sm:scale-100 sm:bottom-[35%] rotate-90 opacity-80 blur-md" sx={{ fontSize: '48px', color: '#ecd9a8' }} />
                        </div>
                        <div className="mx-auto aspect-16/12 bento-card relative flex flex-col gap-4 text-start overflow-hidden h-[260px] sm:h-[350px] w-[350px] sm:w-[450px]">
                            <h3 className="content-subtitle text-2xl">Step 2</h3>
                            <p className="content-body">Download the service package into your site&apos;s directory and follow our SDK.</p>
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
                        <p className="content-body">For full instructions, click here</p>
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
                            <div className="flex max-w-[100%] flex-col md:max-w-[70%] foreground-z foreground-z">
                                <h3 className="content-subtitle">Risk Mitigation</h3>
                                <p className="content-body text-base my-4">
                                    The risks of undisclosed AI content are too great to ignore, a study found that 60% of reviewed AI generated content
                                    contained at least some level of plagiarism
                                    <RefLink data={refLinks[0]} />. This could lead to copyright infringement and lawsuits if left unchecked.
                                    <br />
                                    <br />
                                    Besides, mandatory AI disclosure is imminent. Integrating Heimdall into your site means less hassle in the future. Invest in
                                    your peace of mind.
                                </p>
                            </div>
                            <div className="absolute bottom-0 right-4 flex items-center justify-center text-[140px] lg:text-[180px] p-4">
                                <Speed className="opacity-10" fontSize="inherit" />
                            </div>
                        </div>
                        <div className="separator" />
                        <div className="bento-card relative flex w-full justify-between overflow-hidden">
                            <div className='bg-transparent h-full absolute right-0 bottom-0 border-[190px] border-b-black/70 border-r-black/70 border-l-transparent border-t-black/40' />
                            <div className="flex max-w-[100%] flex-col md:max-w-[70%] foreground-z">
                                <h3 className="content-subtitle">Visitor Retention</h3>
                                <p className="content-body text-base my-4">
                                    Transparent practices build stronger relationships with consumers, enhancing your site&apos;s reputation. Websites that
                                    prioritise transparency profit from as much as a 24% engagement boost
                                    <RefLink data={refLinks[1]} />, simply because they care about honesty. This is where Heimdall comes in.
                                    <br />
                                    <br />
                                    If people have not heard of your site, there will no doubt be some skepticism. Break past that barrier by verifying your
                                    site with Heimdall.
                                </p>
                            </div>
                            <div className="absolute bottom-0 right-4 flex items-center justify-center text-[140px] lg:text-[180px] p-4">
                                <GroupAdd className="opacity-10" fontSize="inherit" />
                            </div>
                        </div>
                        <div className="separator" />
                        <div className="bento-card relative flex w-full justify-between overflow-hidden">
                            <div className='bg-transparent h-full absolute right-0 bottom-0 border-[190px] border-b-black/70 border-r-black/70 border-l-transparent border-t-black/40' />
                            <div className="flex max-w-[100%] flex-col md:max-w-[70%] foreground-z">
                                <h3 className="content-subtitle">ROI</h3>
                                <p className="content-body text-base my-4">
                                    Reputation damage and lawsuit costs can be incalculable. Customers are willing to pay more with companies they trust. Your
                                    site&apos;s SEO rankings may be punished for containing poor-quality content.
                                    <br />
                                    <br />
                                    We advise that you calculate costs like these which affect your conversion rate, and weigh that up against our low
                                    entry-cost of £34/month.
                                </p>
                            </div>
                            <div className="absolute bottom-0 right-4 flex items-center justify-center text-[130px] lg:text-[160px] px-4 py-6">
                                <CurrencyExchange className="opacity-10" fontSize="inherit" />
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