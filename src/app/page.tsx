"use client"

import React, { useRef } from "react"
import Image from "next/image";
import { Button, ScrollWidget } from "@/components/ui/index";
import { ArrowOutward } from "@mui/icons-material";

const sections = [
    { id: "hero", name: "Home" },
    { id: "whatisit", name: "What is it?" },
    { id: "benefits", name: "Benefits" },
    { id: "mission", name: "Mission" },
    { id: "testimonials", name: "Testimonials" },
    { id: "api", name: "API" },
]

export default function Home() {

    return (
        <>
            {/* HERO */}
            <ScrollWidget sections={sections} />
            <section id="hero" className="min-h-screen flex flex-col justify-center items-center section-container gap-8">
                <h1 className="content-title">Build Trust with Real-Time AI Detection</h1>
                <div className="">
                    <h2 className="content-title text-4xl">Automated transparency that helps visitors understand your site's content.</h2>
                    <h2 className="content-title text-4xl py-2">Seamless integration for you, instant assurance for your visitors.</h2>
                </div>
                <div className="flex gap-8">
                    <Button full={true} value={"GET STARTED"} href="/api"/>
                    <Button full={false} value={"PRODUCT"} href="/product"/>
                </div>
            </section>
            {/* WHAT IS IT */}
            <section id="whatisit" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="max-w-[800px]">
                    <h3 className="content-subheading">WHAT IS IT?</h3>
                    <h2 className="content-title text-6xl py-2">Highlight content authenticity in your site</h2>
                    <p className="content-body mt-6">
                        Utilising industry-leading <a href="https://gowinston.ai/" target="_blank" className="underline underline-offset-3 transition-all hover:text-neutral-400">AI detection software</a>, we aim to help you stand out from the competition.
                        Our real-time analysis software will ensure your visitors know that your site's content is reliable.
                        Don't know if your sourced content is AI or not? Don't worry, let us handle it.
                    </p>
                    <div className="grid grid-cols-1 gap-4 my-12">
                        <div className="bento-card flex">
                            <h1 className="content-body text-xl">Reap the engagement boost that transparent sites enjoy</h1>
                        </div>
                        <div className="bento-card flex">
                            <h1 className="content-body text-xl">Convert short-term visitors into long-term loyal customers</h1>
                        </div>
                        <div className="bento-card flex">
                            <h1 className="content-body text-xl">Protect your site from AI-related legal implications</h1>
                        </div>
                    </div>
                </div>
            </section>
            {/* BENEFITS */}
            <section id="benefits" className="min-h-screen flex flex-col justify-center section-container gap-8 pt-32">
                <div className="text-center">
                    <h3 className="content-subheading">BENEFITS</h3>
                    <h2 className="content-title text-6xl py-2">Stay ahead of the curve</h2>
                    <div className="grid grid-cols-5 grid-rows-6 gap-12 my-18 min-h-[1000px] text-start">
                        <div className="bento-card col-span-5 row-span-3 relative">
                            <h2 className="content-title text-3xl py-2">Risk Management</h2>
                            <p className="content-body text-lg max-w-[60%] my-4">
                                The risks of undisclosed AI content are too great to ignore, a study found that 60% of
                                AI generated content contained at least some level of plagiarism
                                <sup>
                                    <a href="https://sguru.org/business-risk-of-undetected-ai-content/" target="_blank">
                                        <ArrowOutward style={{ fontSize: "12px" }}/>
                                    </a>
                                </sup>. This could lead to copyright infringement and lawsuits.
                                <br />
                                <br />
                                Besides, mandatory AI disclosure is imminent. Integrating Heimdall into your site means less hassle in the future.
                                <br />
                                <br />
                                Invest in your peace of mind.
                            </p>
                            <img src={"/"} className="absolute w-[600px] top-12 right-14"/>
                        </div>
                        <div className="bento-card col-span-3 row-span-3 row-start-4">
                            <h2 className="content-title text-3xl py-2">Visitor Retention</h2>
                            <p className="content-body text-lg max-w-[80%] my-4">
                                Transparent AI practices build stronger relationships with consumers, enhancing your site's reputation. Websites which use Heimdall to prioritise transparency profit from as much as a 24% engagement boost
                                <sup>
                                    <a href="https://blogs.psico-smart.com/blog-what-role-does-transparency-play-in-building-customer-trust-and-loyalty-131529" target="_blank">
                                        <ArrowOutward style={{ fontSize: "12px" }}/>
                                    </a>
                                </sup>, simply because they care about honesty.
                                <br />
                                <br />
                                If people have not heard of your site, there will no doubt be some skepticism. Break past that barrier by becoming verified by Heimdall.
                            </p>
                        </div>
                        <div className="bento-card col-span-2 row-span-3 col-start-4 row-start-4">
                            <h2 className="content-title text-3xl py-2">ROI</h2>
                            <p className="content-body text-lg my-4">
                                Reputation damage can be incalculable. Customers are willing to pay more with companies they trust. Your site's SEO rankings may be punished for containing poor-quality AI content.
                                <br />
                                <br />
                                We advise that you calculate these costs, and weigh that up against our low entry-cost of £15/month.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            {/* MISSION */}
            <section id="mission" className="min-h-screen flex flex-col justify-center section-container">
                <div className="">
                    <h3 className="content-subheading">MISSION</h3>
                    <h2 className="content-title text-6xl py-2">What's in it for us?</h2>
                    <p className="content-body mt-8 mb-16">
                        Don't get us wrong, modern AI is remarkable. We used it in the development of Heimdall! However, the quality of content on the web is slowly diminishing, to the point where we will no longer be able 
                        to tell the difference between what's Human and what's AI.
                        <br />
                        <br />
                        We aim to prevent this. Or, at least, minimise it. AI is perfect for its speed and efficiency when facing complex tasks, but Human content is much purer quality. All we want to do is inform people that what 
                        they are reading may be AI generated, so that they can make their own decisions. We are not punishing AI use, we are future-proofing the internet.
                        <br />
                        <br />
                        Read more about our mission below.
                    </p>
                    <Button full={true} value={"ABOUT"} href="/about"/>
                </div>
            </section>
            {/* TESTIMONIALS */}
            <section id="testimonials" className="min-h-screen flex flex-col justify-center section-container">
                <div className="text-center">
                    <h3 className="content-subheading">TESTIMONIALS</h3>
                    <h2 className="content-title text-6xl py-2">Hear what our clients have to say</h2>
                </div>
            </section>
            {/* API */}
            <section id="api" className="min-h-screen flex flex-col justify-center section-container">
                <div className="">
                    <h3 className="content-subheading">API</h3>
                    <h2 className="content-title text-6xl py-2">Sign up today</h2>
                </div>
            </section>
        </>
    );
}
