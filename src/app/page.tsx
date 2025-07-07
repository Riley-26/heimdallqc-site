"use client"

import React, { useRef } from "react"
import Image from "next/image";
import { Button, ScrollWidget, IconContainer, RefLink, Parallax } from "@/components/ui/index";
import { ArrowForwardIos, ArrowOutward, DocumentScanner, AssignmentInd, Email, PriceCheck, Quiz, Key, KeyOutlined, Dashboard, WidthFull, Check, Speed, GroupAdd, CurrencyExchange } from "@mui/icons-material";
import { Footer, Header } from "@/components/layout/index";

const sections = [
    { id: "hero", name: "Home" },
    { id: "whatisit", name: "What is it?" },
    { id: "steps", name: "How does it work?" },
    { id: "benefits", name: "Benefits" },
    { id: "pricing", name: "Pricing" },
    { id: "quick-links", name: "Quick Links" },
]

const refLinks = [
    { id: 1, title: "AI's role in plagiarism and copyright infringement", link: "https://sguru.org/business-risk-of-undetected-ai-content/" },
    { id: 2, title: "The role of transparency in building customer trust", link: "https://blogs.psico-smart.com/blog-what-role-does-transparency-play-in-building-customer-trust-and-loyalty-131529" },
]

export default function Home() {

    return (
        <>
            {/* HERO */}
            <Header />
            <ScrollWidget sections={sections} />
            <section id="hero" className="min-h-main flex flex-col justify-center items-start section-container gap-4 md:gap-8 relative">
                <Parallax speed={0.6} className="absolute top-[50%] translate-y-[-50%] right-0 back-z">
                    <img src={"images/SVG/Asset 4.svg"} className="w-[350px] lg:w-[500px] drop-shadow-xl drop-shadow-black/50 brightness-30 lg:brightness-40 contrast-90" />
                </Parallax>
                <h1 className="hero-content-title max-w-[800px] mx-0">Protect your business with Real-time Content Quality-control</h1>
                <div className="">
                    <h2 className="hero-content-subtitle">Automated verification that protects your brand's reputation.</h2>
                    <h2 className="hero-content-subtitle">Seamless integration for you, instant assurance for your visitors.</h2>
                </div>
                <div className="flex gap-8">
                    <Button full={true} value={"GET STARTED"} href="/api" className="mt-2 sm:mt-0"/>
                    <Button full={false} value={"FEATURES"} href="/features" className="mt-2 sm:mt-0"/>
                </div>
            </section>
            {/* WHAT IS IT */}
            <section id="whatisit" className="min-h-main flex flex-col justify-center section-container gap-8 py-24">
                <div className="max-w-[900px]">
                    <h3 className="content-miniheading">WHAT IS IT?</h3>
                    <h2 className="content-title mb-6">A 'Digital Circuit Breaker'</h2>
                    <p className="content-body">
                        Utilising industry-leading <a href="https://gowinston.ai/" target="_blank" className="text-link">AI and plagiarism detection software</a>, Heimdall will act on potential plagiarism and AI content
                        in your website to ensure that you don't get caught out. Think of it like a circuit breaker, designed to prevent the escalation of plagiarism and misinformation before it creates expensive problems.
                        <br/>
                        <br/>
                        An easy way to protect your business' integrity, whilst building trust with your consumers.
                    </p>
                    <div className="grid grid-cols-1 gap-4 my-12 max-w-[700px]">
                        <div className="relative">
                            <div className="corner-glow w-32"></div>
                            <div className="corner-glow-lit w-32"></div>
                            <div className="bento-card flex gap-4 foreground-z">
                                <Check className="text-green-600" sx={{ fontSize: "28px" }} />
                                <h3 className="content-body text-base sm:text-lg md:text-xl">Minimise expenses caused by plagiarism</h3>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="corner-glow w-32"></div>
                            <div className="corner-glow-lit w-32"></div>
                            <div className="bento-card flex gap-4 foreground-z">
                                <Check className="text-green-600" sx={{ fontSize: "28px" }} />
                                <h3 className="content-body text-base sm:text-lg md:text-xl">Protect your company's reputation</h3>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="corner-glow w-32"></div>
                            <div className="corner-glow-lit w-32"></div>
                            <div className="bento-card flex gap-4 foreground-z">
                                <Check className="text-green-600" sx={{ fontSize: "28px" }} />
                                <h3 className="content-body text-base sm:text-lg md:text-xl">Convert short-term visitors into long-term loyal customers</h3>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center ml-8 gap-4">
                        <p className="content-body">
                            For a list of all features, click here
                        </p>
                        <IconContainer href="/features#feature-list">
                            <ArrowForwardIos sx={{ fontSize: "20px" }} />
                        </IconContainer>
                    </div>
                </div>
            </section>
            {/* HOW DOES IT WORK */}
            <section id="steps" className="min-h-main flex justify-center section-container gap-8 py-24">
                <div className="text-center">
                    <h3 className="content-miniheading">HOW DOES IT WORK?</h3>
                    <h2 className="content-title mb-12">Integration in three simple steps</h2>
                    <div className="grid grid-rows-3 md:grid-rows-1 grid-cols-1 md:grid-cols-3 gap-6 lg:gap-12 min-h-[300px] section-container-md mb-12 max-w-[400px] md:max-w-full">
                        <div className="bento-card flex flex-col gap-4 text-start relative">
                            <h3 className="content-miniheading font-bold text-lg">Step 1</h3>
                            <p className="content-body text-lg max-w-[250px] md:max-w-full">
                                Sign up for the API and receive your key.
                            </p>
                            <Key className="rotate-45 absolute bottom-8 right-8 opacity-50" sx={{ fontSize: "72px", color: "#d9cdad" }}/>
                            <Key className="rotate-45 absolute bottom-8 right-8 opacity-80 blur-lg" sx={{ fontSize: "72px", color: "#d8af41" }}/>
                        </div>
                        <div className="bento-card flex flex-col gap-4 text-start relative">
                            <h3 className="content-miniheading font-bold text-lg">Step 2</h3>
                            <p className="content-body text-lg max-w-[250px] md:max-w-full">
                                Download the service package into your site's directory.
                            </p>
                            <WidthFull className="absolute bottom-8 right-8 opacity-50" sx={{ fontSize: "72px", color: "#d9cdad" }}/>
                            <WidthFull className="absolute bottom-8 right-8 opacity-80 blur-lg" sx={{ fontSize: "72px", color: "#d8af41" }}/>
                        </div>
                        <div className="bento-card flex flex-col gap-4 text-start relative">
                            <h3 className="content-miniheading font-bold text-lg">Step 3</h3>
                            <p className="content-body text-lg max-w-[250px] md:max-w-full">
                                Test it out by viewing your dashboard after a text is submitted.
                            </p>
                            <Dashboard className="absolute bottom-8 right-8 opacity-50" sx={{ fontSize: "72px", color: "#d9cdad" }}/>
                            <Dashboard className="absolute bottom-8 right-8 opacity-80 blur-lg" sx={{ fontSize: "72px", color: "#d8af41" }}/>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <p className="content-body">
                            For full instructions, click here
                        </p>
                        <IconContainer href="/api-docs">
                            <ArrowForwardIos sx={{ fontSize: "20px" }} />
                        </IconContainer>
                    </div>
                </div>
            </section>
            {/* BENEFITS */}
            <section id="benefits" className="min-h-main flex justify-center section-container gap-8 py-24">
                <div className="text-center">
                    <h3 className="content-miniheading">BENEFITS</h3>
                    <h2 className="content-title mb-12">Stay ahead of the curve</h2>
                    <div className="grid grid-cols-1 grid-rows-3 section-container-sm gap-8 text-start">
                        <div className="bento-card flex justify-between w-full relative">
                            <div className="flex flex-col max-w-[100%] md:max-w-[70%]">
                                <h3 className="content-subtitle">Risk Mitigation</h3>
                                <p className="content-body my-4">
                                    The risks of undisclosed AI content are too great to ignore, a study found that 60% of
                                    reviewed AI generated content contained at least some level of plagiarism
                                    <RefLink data={refLinks[0]} />. This could lead to copyright infringement and lawsuits if left unchecked.
                                    <br />
                                    <br />
                                    Besides, mandatory AI disclosure is imminent. Integrating Heimdall into your site means less hassle in the future.
                                    Invest in your peace of mind.
                                </p>
                            </div>
                            <div className="flex justify-center items-center absolute top-[50%] sm:translate-y-[-50%] right-8 lg:right-20 text-[160px] lg:text-[220px]">
                                <Speed className="opacity-10" fontSize="inherit" />
                            </div>
                        </div>
                        <div className="bento-card flex justify-between w-full relative">
                            <div className="flex flex-col max-w-[100%] md:max-w-[70%]">
                                <h3 className="content-subtitle">Visitor Retention</h3>
                                <p className="content-body my-4">
                                    Transparent practices build stronger relationships with consumers, enhancing your site's reputation. Websites that prioritise transparency profit from as much as a 24% engagement boost
                                    <RefLink data={refLinks[1]} />, simply because they care about honesty. This is where Heimdall comes in.
                                    <br />
                                    <br />
                                    If people have not heard of your site, there will no doubt be some skepticism. Break past that barrier by verifying your site with Heimdall.
                                </p>
                            </div>
                            <div className="flex justify-center items-center absolute top-[50%] sm:translate-y-[-50%] right-8 lg:right-20 text-[160px] lg:text-[220px]">
                                <GroupAdd className="opacity-10" fontSize="inherit" />
                            </div>
                        </div>
                        <div className="bento-card flex justify-between w-full relative">
                            <div className="flex flex-col max-w-[100%] md:max-w-[70%]">
                                <h3 className="content-subtitle">ROI</h3>
                                <p className="content-body my-4">
                                    Reputation damage and lawsuit costs can be incalculable. Customers are willing to pay more with companies they trust. Your site's SEO rankings may be punished for containing poor-quality content.
                                    <br />
                                    <br />
                                    We advise that you calculate costs like these which affect your conversion rate, and weigh that up against our low entry-cost of £54/month.
                                </p>
                            </div>
                            <div className="flex justify-center items-center absolute top-[50%] sm:translate-y-[-50%] right-8 lg:right-20 text-[160px] lg:text-[220px]">
                                <CurrencyExchange className="opacity-10" fontSize="inherit" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* TESTIMONIALS */}

            {/* PRICING */}
            <section id="pricing" className="min-h-svh flex justify-center section-container py-24">
                <div className="text-center">
                    <h3 className="content-miniheading">PRICING</h3>
                    <h2 className="content-title text-3xl sm:text-4xl lg:text-6xl mb-12">Simple pricing plans</h2>
                    <div className="flex flex-col lg:flex-row justify-center items-center px-0 gap-4 lg:gap-8 section-container mb-6 leading-6">
                        <div className="bento-card flex flex-col gap-4 h-[560px] relative w-[350px] sm:w-[400px] lg:w-full min-w-[28%]">
                            <div className="flex flex-col gap-2">
                                <h3 className="content-title font-bold text-2xl py-0">Extrinsic Plan</h3>
                                <h4 className="content-miniheading">Made for verifying your users' content</h4>
                            </div>
                            <hr />
                            <ul className="content-body text-base xl:text-lg text-start flex flex-col gap-3 pl-4">
                                <li className="list-disc">Automatic AI check on submission</li>
                                <li className="list-disc">Plagiarism check on AI, with auto-citations/AI rewrite</li>
                                <li className="list-disc">Optional interactive widget for site visitors</li>
                                <li className="list-disc">Optional AI watermark</li>
                                <li className="list-disc">8,000 tokens</li>
                            </ul>
                            <div className="h-full flex flex-col items-center justify-end">
                                <hr className="w-full" />
                                <h3 className="content-title font-bold text-2xl py-0 my-4">£54 / month</h3>
                                <Button value={"SELECT"} full={true} className={"px-4 py-1 text-base"} />
                            </div>
                        </div>
                        <div className="order-2">
                            <div className="hidden lg:block h-[400px] w-0.5 rounded-full bg-gradient-to-t from-transparent via-[#d8af41] to-transparent" />
                            <div className="block lg:hidden h-0.5 w-[250px] rounded-full bg-gradient-to-r from-transparent via-[#d8af41] to-transparent" />
                        </div>
                        <div className="bento-card flex flex-col gap-4 h-[600px] relative w-[350px] sm:w-[400px] lg:w-full order-5 lg:order-3 min-w-[30%]">
                            <div className="flex flex-col gap-2">
                                <h3 className="content-title font-bold text-2xl">Combo-plan</h3>
                                <h4 className="content-miniheading">Made for verifying all sources</h4>
                            </div>
                            <hr />
                            <ul className="content-body text-base xl:text-lg text-start flex flex-col gap-3 pl-4">
                                <li className="list-disc"><i>Everything in Extrinsic plan</i></li>
                                <li className="list-disc"><i>Everything in Intrinsic plan</i></li>
                                <li className="list-disc">12,000 tokens</li>
                            </ul>
                            <div className="h-full flex flex-col items-center justify-end">
                                <hr className="w-full" />
                                <h3 className="content-title font-bold text-2xl py-0 my-4">Coming Soon</h3>
                                <Button value={"SELECT"} full={true} className={"px-4 py-1 text-base hover:cursor-not-allowed"} />
                            </div>
                        </div>
                        <div className="order-4">
                            <div className="hidden lg:block h-[400px] w-0.5 rounded-full bg-gradient-to-t from-transparent via-[#d8af41] to-transparent" />
                            <div className="block lg:hidden h-0.5 w-[250px] rounded-full bg-gradient-to-r from-transparent via-[#d8af41] to-transparent" />
                        </div>
                        <div className="bento-card flex flex-col gap-4 h-[560px] relative w-[350px] sm:w-[400px] lg:w-full order-3 lg:order-5 min-w-[28%]">
                            <div className="flex flex-col gap-2">
                                <h3 className="content-title font-bold text-2xl py-0">Intrinsic Plan</h3>
                                <h4 className="content-miniheading">Made for verifying your site's content</h4>
                            </div>
                            <hr />
                            <ul className="content-body text-base xl:text-lg text-start flex flex-col gap-3 pl-4">
                                <li className="list-disc">AI check on site audit</li>
                                <li className="list-disc">AI check on manual upload</li>
                                <li className="list-disc">Plagiarism check on AI, with automatic source citing</li>
                                <li className="list-disc">Optional AI watermark</li>
                                <li className="list-disc">6,000 tokens</li>
                            </ul>
                            <div className="h-full flex flex-col items-center justify-end">
                                <hr className="w-full" />
                                <h3 className="content-title font-bold text-2xl py-0 my-4">Coming Soon</h3>
                                <Button value={"SELECT"} full={true} className={"px-4 py-1 text-base hover:cursor-not-allowed"} />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-4">
                        <p className="content-body">
                            For more info, click here
                        </p>
                        <IconContainer href="/pricing">
                            <ArrowForwardIos sx={{ fontSize: "20px" }} />
                        </IconContainer>
                    </div>
                </div>
            </section>
            {/* QUICK LINKS */}
            <section id="quick-links" className="min-h-svh flex justify-center section-container py-24">
                <div className="text-center flex flex-col items-center justify-center">
                    <h3 className="content-miniheading">QUICK LINKS</h3>
                    <h2 className="content-title text-3xl sm:text-4xl lg:text-6xl mb-12">Easy navigation</h2>
                    <div className="grid grid-rows-2 lg:grid-rows-1 grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-18">
                        <div className="flex flex-col justify-center items-center">
                            <IconContainer className="p-4 sm:p-6 mb-4" href="/">
                                <AssignmentInd className="scale-80 sm:scale-100" sx={{ fontSize: "48px" }} />
                            </IconContainer>
                            <span className="content-body">SIGN UP</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <IconContainer className="p-4 sm:p-6 mb-4" href="/help#contact">
                                <Email className="scale-80 sm:scale-100" sx={{ fontSize: "48px" }} />
                            </IconContainer>
                            <span className="content-body">CONTACT</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <IconContainer className="p-4 sm:p-6 mb-4" href="/pricing#guide">
                                <PriceCheck className="scale-80 sm:scale-100" sx={{ fontSize: "48px" }} />
                            </IconContainer>
                            <span className="content-body">PRICE GUIDE</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <IconContainer className="p-4 sm:p-6 mb-4" href="/help#faq">
                                <Quiz className="scale-80 sm:scale-100" sx={{ fontSize: "48px" }} />
                            </IconContainer>
                            <span className="content-body">FAQ</span>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}
