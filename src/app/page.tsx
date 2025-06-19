"use client"

import React, { useRef } from "react"
import Image from "next/image";
import { Button, ScrollWidget, IconContainer, RefLink, Parallax } from "@/components/ui/index";
import { ArrowForwardIos, ArrowOutward, DocumentScanner, AssignmentInd, Email, PriceCheck, Quiz } from "@mui/icons-material";

const sections = [
    { id: "hero", name: "Home" },
    { id: "whatisit", name: "What is it?" },
    { id: "steps", name: "How does it work?" },
    { id: "benefits", name: "Benefits" },
    { id: "quiz", name: "Quiz" },
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
            <ScrollWidget sections={sections} />
            <section id="hero" className="min-h-screen flex flex-col justify-center items-start section-container gap-8 relative">
                <Parallax className="absolute top-[50%] translate-y-[-50%] right-0 -z-95">
                    <img src={"images/SVG/Asset 4.svg"} className="w-[600px] drop-shadow-xl drop-shadow-black/50 opacity-20" />
                </Parallax>
                <h1 className="content-title-h1 section-container-xs mx-0">Build Trust with Real-Time AI Detection</h1>
                <div className="">
                    <h2 className="content-subtitle">Automated verification that helps visitors understand your site's content.</h2>
                    <h2 className="content-subtitle">Seamless integration for you, instant assurance for your visitors.</h2>
                </div>
                <div className="flex gap-8">
                    <Button full={true} value={"GET STARTED"} href="/api"/>
                    <Button full={false} value={"FEATURES"} href="/features"/>
                </div>
            </section>
            {/* WHAT IS IT */}
            <section id="whatisit" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="max-w-[800px]">
                    <h3 className="content-miniheading">WHAT IS IT?</h3>
                    <h2 className="content-title text-6xl">Verify content authenticity in your site</h2>
                    <p className="content-body mt-6">
                        Utilising industry-leading <a href="https://gowinston.ai/" target="_blank" className="underline underline-offset-3 transition-all hover:text-neutral-400">AI detection software</a>, we will help you stand out from the competition.
                        Our real-time analysis software will indicate AI content automatically, so your visitors can explore your site without concern.
                        Don't know if your site's content is AI or not? Don't worry, let us handle it.
                    </p>
                    <div className="grid grid-cols-1 gap-4 my-12">
                        <div className="bento-card flex">
                            <h3 className="content-body text-xl">Reap the engagement boost that transparent sites enjoy</h3>
                        </div>
                        <div className="bento-card flex">
                            <h3 className="content-body text-xl">Convert short-term visitors into long-term loyal customers</h3>
                        </div>
                        <div className="bento-card flex">
                            <h3 className="content-body text-xl">Protect your site from AI-related legal implications</h3>
                        </div>
                    </div>
                </div>
            </section>
            {/* HOW DOES IT WORK */}
            <section id="steps" className="min-h-screen flex justify-center section-container gap-8 pt-32">
                <div className="text-center">
                    <h3 className="content-miniheading">HOW DOES IT WORK?</h3>
                    <h2 className="content-title text-6xl mb-16">Integration in three simple steps</h2>
                    <div className="grid grid-cols-3 gap-12 min-h-[300px] section-container-md mb-12">
                        <div className="bento-card flex flex-col gap-4 text-start">
                            <h3 className="content-miniheading font-bold text-xl">Step 1</h3>
                            <p className="content-body text-lg">
                                Sign up for the API and receive your key.
                            </p>
                        </div>
                        <div className="bento-card flex flex-col gap-4 text-start">
                            <h3 className="content-miniheading font-bold text-xl">Step 2</h3>
                            <p className="content-body text-lg">
                                Download the widget package into your site's directory. Keep to our suggested practices and connect the widget to an input field.
                            </p>
                        </div>
                        <div className="bento-card flex flex-col gap-4 text-start">
                            <h3 className="content-miniheading font-bold text-xl">Step 3</h3>
                            <p className="content-body text-lg">
                                Test it out by viewing your dashboard after submitting a text.
                            </p>
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
            <section id="benefits" className="min-h-screen flex justify-center section-container gap-8 pt-32">
                <div className="text-center">
                    <h3 className="content-miniheading">BENEFITS</h3>
                    <h2 className="content-title text-6xl">Stay ahead of the curve</h2>
                    <div className="grid grid-cols-1 grid-rows-3 section-container-sm gap-18 my-18 text-start">
                        <div className="bento-card relative">
                            <h2 className="content-title text-3xl">Risk Management</h2>
                            <p className="content-body text-lg max-w-[60%] my-4">
                                The risks of undisclosed AI content are too great to ignore, a study found that 60% of
                                AI generated content contained at least some level of plagiarism
                                <RefLink data={refLinks[0]} />. This could lead to copyright infringement and lawsuits.
                                <br />
                                <br />
                                Besides, mandatory AI disclosure is imminent. Integrating Heimdall into your site means less hassle in the future.
                                <br />
                                <br />
                                Invest in your peace of mind.
                            </p>
                        </div>
                        <div className="bento-card">
                            <h2 className="content-title text-3xl">Visitor Retention</h2>
                            <p className="content-body text-lg max-w-[80%] my-4">
                                Transparent AI practices build stronger relationships with consumers, enhancing your site's reputation. Websites that prioritise transparency profit from as much as a 24% engagement boost
                                <RefLink data={refLinks[1]} />, simply because they care about honesty. This is where Heimdall comes in.
                                <br />
                                <br />
                                If people have not heard of your site, there will no doubt be some skepticism. Break past that barrier by becoming verified by Heimdall.
                            </p>
                        </div>
                        <div className="bento-card">
                            <h2 className="content-title text-3xl">ROI</h2>
                            <p className="content-body text-lg my-4">
                                Reputation damage can be incalculable. Customers are willing to pay more with companies they trust. Your site's SEO rankings may be punished for containing poor-quality AI content.
                                <br />
                                <br />
                                We advise that you calculate costs like these, and weigh that up against our low entry-cost of £15/month.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* QUIZ */}
            <section id="quiz" className="min-h-screen flex flex-col justify-center section-container">
                <div className="">
                    <h3 className="content-miniheading">QUIZ</h3>
                    <h2 className="content-title text-6xl">Can you guess which text is AI generated?</h2>
                    <div className="flex flex-col gap-6 my-12">
                        <div className="flex gap-8 items-center">
                            <div className="bento-card min-h-[200px]">
                                <p className="content-body text-lg">
                                    Reputation damage can be incalculable. Customers are willing to pay more with companies they trust. Your site's SEO rankings may be punished for containing poor-quality AI content.
                                    <br />
                                    <br />
                                    We advise that you calculate costs like these, and weigh that up against our low entry-cost of £15/month.
                                </p>
                            </div>
                            <div className="flex flex-col gap-8">
                                <IconContainer extra="h-max">
                                    <span className="content-body font-bold tracking-widest p-2">AI</span>
                                </IconContainer>
                            </div>
                        </div>
                        <div className="flex gap-8 items-center">
                            <div className="bento-card min-h-[200px]">
                                <p className="content-body text-lg">
                                    Reputation damage can be incalculable. Customers are willing to pay more with companies they trust. Your site's SEO rankings may be punished for containing poor-quality AI content.
                                    <br />
                                    <br />
                                    We advise that you calculate costs like these, and weigh that up against our low entry-cost of £15/month.
                                </p>
                            </div>
                            <div className="flex flex-col gap-8">
                                <IconContainer extra="h-max">
                                    <span className="content-body font-bold tracking-widest p-2">AI</span>
                                </IconContainer>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* TESTIMONIALS */}

            {/* PRICING */}
            <section id="pricing" className="min-h-screen flex justify-center section-container pt-26">
                <div className="text-center">
                    <h3 className="content-miniheading">PRICING</h3>
                    <h2 className="content-title text-6xl">Simple pricing plans</h2>
                    <div className="grid grid-cols-3 gap-4 section-container-sm mt-10 mb-6 items-center leading-6">
                        <div className="bento-card flex flex-col gap-4 h-[560px]">
                            <div className="flex flex-col gap-2">
                                <h3 className="content-title font-bold text-2xl py-0">Extrinsic Plan</h3>
                                <h4 className="content-miniheading">Made for verifying your users' content</h4>
                            </div>
                            <hr />
                            <ul className="content-body text-lg text-start flex flex-col gap-4">
                                <li>Automatic AI check on submission</li>
                                <li>Plagiarism check on AI, with &nbsp;&nbsp;automatic source citing</li>
                                <li>Optional interactive widget for site &nbsp;&nbsp;visitors</li>
                                <li>Optional AI watermark</li>
                                <li>8,000 tokens</li>
                            </ul>
                            <div className="h-full flex flex-col items-center justify-end">
                                <hr className="w-full" />
                                <h3 className="content-title font-bold text-2xl py-0 my-4">£15 / month</h3>
                                <Button value={"SELECT"} full={true} extra={"px-4 py-1 text-base"} />
                            </div>
                        </div>
                        <div className="bento-card flex flex-col gap-4 h-[600px]">
                            <div className="flex flex-col gap-2">
                                <h3 className="content-title font-bold text-2xl">Combo-plan</h3>
                                <h4 className="content-miniheading">Made for verifying all sources</h4>
                            </div>
                            <hr />
                            <ul className="content-body text-lg text-start flex flex-col gap-4">
                                <li><i>Everything in Extrinsic plan</i></li>
                                <li><i>Everything in Intrinsic plan</i></li>
                                <li>12,000 tokens</li>
                            </ul>
                            <div className="h-full flex flex-col items-center justify-end">
                                <hr className="w-full" />
                                <h3 className="content-title font-bold text-2xl py-0 my-4">Coming Soon</h3>
                                <Button value={"SELECT"} full={true} extra={"px-4 py-1 text-base hover:cursor-not-allowed"} />
                            </div>
                        </div>
                        <div className="bento-card flex flex-col gap-4 h-[560px]">
                            <div className="flex flex-col gap-2">
                                <h3 className="content-title font-bold text-2xl py-0">Intrinsic Plan</h3>
                                <h4 className="content-miniheading">Made for verifying your site's content</h4>
                            </div>
                            <hr />
                            <ul className="content-body text-lg text-start flex flex-col gap-4">
                                <li>AI check on site audit</li>
                                <li>AI check on manual upload</li>
                                <li>Plagiarism check on AI, with &nbsp;&nbsp;automatic source citing</li>
                                <li>Optional AI watermark</li>
                                <li>6,000 tokens</li>
                            </ul>
                            <div className="h-full flex flex-col items-center justify-end">
                                <hr className="w-full" />
                                <h3 className="content-title font-bold text-2xl py-0 my-4">Coming Soon</h3>
                                <Button value={"SELECT"} full={true} extra={"px-4 py-1 text-base hover:cursor-not-allowed"} />
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
            <section id="quick-links" className="min-h-screen flex justify-center section-container">
                <div className="text-center flex flex-col items-center justify-center">
                    <h3 className="content-miniheading">QUICK LINKS</h3>
                    <h2 className="content-title text-6xl mb-16">Easy navigation</h2>
                    <div className="grid grid-rows-1 grid-cols-5 gap-22">
                        <div className="flex flex-col justify-center items-center">
                            <IconContainer extra="p-6 mb-4" href="/">
                                <AssignmentInd sx={{ fontSize: "48px" }} />
                            </IconContainer>
                            <span className="content-body font-medium">SIGN UP</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <IconContainer extra="p-6 mb-4" href="/api-docs">
                                <DocumentScanner sx={{ fontSize: "48px" }} />
                            </IconContainer>
                            <span className="content-body font-medium">API DOCS</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <IconContainer extra="p-6 mb-4" href="/help#contact">
                                <Email sx={{ fontSize: "48px" }} />
                            </IconContainer>
                            <span className="content-body font-medium">CONTACT</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <IconContainer extra="p-6 mb-4" href="/pricing#guide">
                                <PriceCheck sx={{ fontSize: "48px" }} />
                            </IconContainer>
                            <span className="content-body font-medium">PRICE GUIDE</span>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <IconContainer extra="p-6 mb-4" href="/help#faq">
                                <Quiz sx={{ fontSize: "48px" }} />
                            </IconContainer>
                            <span className="content-body font-medium">FAQ</span>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
