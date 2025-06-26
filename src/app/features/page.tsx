"use client"

import React from "react"
import { Button, ScrollWidget } from "@/components/ui/index";
import { ArrowForwardIos, CheckCircle, CurrencyExchange, GraphicEq, Handshake, Person, QueryStats, Report, Verified, Warning, Web } from "@mui/icons-material";

const sections = [
    { id: "features", name: "Features" },
    { id: "overview", name: "Overview" },
    { id: "demo", name: "Demo" },
    { id: "feature-list", name: "Feature List" },
    { id: "uses", name: "Use Cases" },
    { id: "stats", name: "Stats" },
]

export default function Features() {
    return (
        <>
            <ScrollWidget sections={sections} />
            {/* INTRO */}
            <section id="features" className="section-start-area">
                <div className="absolute top-[50%] translate-y-[-50%] right-[50%] translate-x-[50%] foreground-z">
                    <img src={"images/SVG/Asset 3.svg"} className="logo-blur" />
                </div>
                <div className="section-container-sm text-center front-z">
                    <h3 className="content-miniheading">FEATURES</h3>
                    <h1 className="content-title mb-4">A simple approach to a cascading problem</h1>
                    <h2 className="content-subtitle">What you can expect to receive from using our service</h2>
                </div>
                <ArrowForwardIos sx={{ fontSize: "32px", transform: "rotate(90deg)", position: "absolute", bottom: "32px" }} />
            </section>
            {/* OVERVIEW */}
            <section id="overview" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="">
                    <h3 className="content-miniheading"><span className="text-[16px]">FEATURES</span> — OVERVIEW</h3>
                    <h2 className="content-title text-6xl">Automating content-source disclosure</h2>
                    <div className="flex items-center mt-18 justify-around relative">
                        <div className="w-[38%] mr-12">
                            <h2 className="content-title text-3xl mb-4">On your end</h2>
                            <ul className="ml-12 content-body grid grid-rows-3 gap-4">
                                <li className="list-disc">Heimdall will identify plagiarism, and either automatically cite sources or rewrite the content with AI</li>
                                <li className="list-disc">You will see increased traffic and user retention, based on content quality and transparent practices</li>
                                <li className="list-disc">AI-related copyright and misinformation issues will be minimised by alerting you of plagiarised content</li>
                                <li className="list-disc">You will be able to manage all submissions to your site in the <a href="/account/dashboard" className="text-link">dashboard</a></li>
                            </ul>
                        </div>
                        <div className="h-[400px] w-[12%] overflow-x-hidden">
                            <Web className="opacity-10 translate-x-[20%] translate-y-[32%] rotate-y-180" sx={{ fontSize: "240px" }} />
                        </div>
                        <div className="absolute h-[400px] w-0.5 rounded-full bg-gradient-to-t from-transparent via-[#d8af41] to-transparent" />
                        <div className="h-[400px] w-[12%] overflow-x-hidden">
                            <Person className="opacity-10 -translate-x-[50%] translate-y-[32%]" sx={{ fontSize: "240px" }} />
                        </div>
                        <div className="w-[38%] ml-12">
                            <h2 className="content-title text-3xl mb-4">On your users' end</h2>
                            <ul className="ml-12 content-body grid grid-rows-3 gap-4">
                                <li className="list-disc">They will see a watermark of varying intensity next to content, signifying predicted AI use with accompanying details</li>
                                <li className="list-disc">It will be indicated that you are verified with Heimdall, and users will be more trusting of your site</li>
                                <li className="list-disc">If integrating the widget, your site's users can disclose use of AI content</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* DEMO */}
            {/* FEATURE LIST */}
            <section id="feature-list" className="min-h-screen flex flex-col justify-center section-container gap-8 pt-32">
                <div className="text-center">
                    <h3 className="content-miniheading"><span className="text-[16px]">FEATURES</span> — FEATURE LIST</h3>
                    <h2 className="content-title text-6xl mb-22">A comprehensive view of the features</h2>
                    <div className="flex flex-col items-center justify-center gap-8">
                        <div className="flex gap-16">
                            <div className="bento-card h-[350px] w-[600px]"></div>
                            <div className="flex flex-col justify-center text-start max-w-[50%]">
                                <h2 className="content-title text-3xl mb-4">Widget Integration</h2>
                                <h3 className="content-subtitle text-2xl mb-8"><i>Extrinsic Plan</i></h3>
                                <p className="content-body text-lg">
                                    An optional widget, prompting users with a simple AI disclosure question. Fewer tokens are used on submission if this is enabled, an AI check will not occur if the user discloses their use of AI content.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-16 mb-12">
                            <div className="bento-card h-[350px] w-[600px]"></div>
                            <div className="flex flex-col justify-center text-start max-w-[50%]">
                                <h2 className="content-title text-3xl mb-4">Automatic Analysis — Submission</h2>
                                <h3 className="content-subtitle text-2xl mb-8"><i>Extrinsic Plan</i></h3>
                                <p className="content-body text-lg">
                                    The user's content is analysed at the point of submission for AI or plagiarised content. If some is found, it will be displayed in the dashboard and a watermark will be created for that text.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-16">
                            <div className="bento-card h-[350px] w-[600px]"></div>
                            <div className="flex flex-col justify-center text-start max-w-[50%]">
                                <h2 className="content-title text-3xl mb-4">Automatic Analysis — Audit</h2>
                                <h3 className="content-subtitle text-2xl mb-8"><i>Intrinsic Plan</i></h3>
                                <p className="content-body text-lg">
                                    At intervals of your choice, your site's main content will be audited across all specified pages for AI and plagiarised content. It works the same way as the 'Automatic Analysis - Submission' feature from this point.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-16 mb-12">
                            <div className="bento-card h-[350px] w-[600px]"></div>
                            <div className="flex flex-col justify-center text-start max-w-[50%]">
                                <h2 className="content-title text-3xl mb-4">Manual Upload Analysis</h2>
                                <h3 className="content-subtitle text-2xl mb-8"><i>Intrinsic Plan</i></h3>
                                <p className="content-body text-lg">
                                    You can also manually upload content to save to the dashboard. This is ideal for texts that haven't been automatically analysed, or for seeing what the results would look like for certain texts.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-16">
                            <div className="bento-card h-[350px] w-[600px]"></div>
                            <div className="flex flex-col justify-center text-start max-w-[50%]">
                                <h2 className="content-title text-3xl mb-4">Auto-Citation/Emergency AI Rewrite</h2>
                                <h3 className="content-subtitle text-2xl mb-8"><i>Extrinsic Plan / Intrinsic Plan</i></h3>
                                <p className="content-body text-lg">
                                    Depending on the context or your preferences, detected plagiarised content will automatically be rewritten using AI, paraphrased and cited or removed - with watermarks being generated. This provides 60-70% legal protection, you will be alerted to fix the content before it escalates.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-16">
                            <div className="bento-card h-[350px] w-[600px]"></div>
                            <div className="flex flex-col justify-center text-start max-w-[50%]">
                                <h2 className="content-title text-3xl mb-4">Intelligent Watermarking</h2>
                                <h3 className="content-subtitle text-2xl mb-8"><i>Extrinsic Plan / Intrinsic Plan</i></h3>
                                <p className="content-body text-lg">
                                    An optional brightness-intensity based watermark is created for each text analysed. The watermark is designed to be more or less visible depending on the likelihood of AI content, i.e. 20% likelihood is 20% brightness. Upon hovering over it, more details will be displayed.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-16">
                            <div className="bento-card h-[350px] w-[600px]"></div>
                            <div className="flex flex-col justify-center text-start max-w-[50%]">
                                <h2 className="content-title text-3xl mb-4">Analytics Dashboard</h2>
                                <h3 className="content-subtitle text-2xl mb-8"><i>Extrinsic Plan / Intrinsic Plan</i></h3>
                                <p className="content-body text-lg">
                                    Here you can control all of your preferences, submissions to your site and more. Options like auto-removal and auto-citations can be toggled for submissions, and you will be able to act on flagged content here. You will also see how your site performs after implementing Heimdall.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* USE CASES */}
            <section id="uses" className="min-h-screen flex flex-col justify-center section-container gap-8 mt-32">
                <div className="text-center">
                    <h3 className="content-miniheading"><span className="text-[16px]">FEATURES</span> — USE CASES</h3>
                    <h2 className="content-title text-6xl">Unsure if your site would benefit from Heimdall?</h2>
                    <h3 className="content-subtitle mt-2">Some examples of industries by severity with a reason</h3>
                    <div className="grid grid-cols-3 gap-12 mt-16 text-start">
                        <div className="flex flex-col px-6 items-center relative">
                            <Warning className="opacity-20 absolute top-0 right-10 background-z" sx={{ color: "red", fontSize: "120px" }}/>
                            <h2 className="content-title text-3xl">High severity</h2>
                            <h3 className="content-subtitle text-2xl mb-8"><i>Crucial to have this</i></h3>
                            <ul className="content-body flex flex-col gap-4 w-full text-lg">
                                <li className="bento-card p-4"><strong>Legal Firms</strong> — Legal liability</li>
                                <li className="bento-card p-4"><strong>Publishers</strong> — Professional reputation</li>
                                <li className="bento-card p-4"><strong>Agencies</strong> — Risk mitigation</li>
                                <li className="bento-card p-4"><strong>Fintech</strong> — Heavy regulations</li>
                                <li className="bento-card p-4"><strong>Healthcare</strong> — Malpractice concerns</li>
                            </ul>
                        </div>
                        <div className="flex flex-col px-6 items-center relative">
                            <Report className="opacity-20 absolute top-0 right-10 background-z" sx={{ color: "orangered", fontSize: "120px" }}/>
                            <h2 className="content-title text-3xl">Moderate severity</h2>
                            <h3 className="content-subtitle text-2xl mb-8"><i>Important to have this</i></h3>
                            <ul className="content-body flex flex-col gap-4 w-full text-lg">
                                <li className="bento-card p-4"><strong>Marketing</strong> — SEO penalties</li>
                                <li className="bento-card p-4"><strong>Media</strong> — Strong credibility</li>
                                <li className="bento-card p-4"><strong>E-commerce</strong> — Brand protection</li>
                                <li className="bento-card p-4"><strong>Education</strong> — Accreditation standards</li>
                            </ul>
                        </div>
                        <div className="flex flex-col px-6 items-center relative">
                            <CheckCircle className="opacity-20 absolute top-0 right-10 background-z" sx={{ color: "orange", fontSize: "120px" }}/>
                            <h2 className="content-title text-3xl">Low severity</h2>
                            <h3 className="content-subtitle text-2xl mb-8"><i>Beneficial to have this</i></h3>
                            <ul className="content-body flex flex-col gap-4 w-full text-lg">
                                <li className="bento-card p-4"><strong>Contractors</strong> — Transparency mandates</li>
                                <li className="bento-card p-4"><strong>Real Estate</strong> — Market credibility</li>
                                <li className="bento-card p-4"><strong>SaaS</strong> — Developer trust</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* STATS */}
            <section id="stats" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading"><span className="text-[16px]">FEATURES</span> — STATS</h3>
                    <h2 className="content-title text-6xl">This is what you can expect to see</h2>
                    <div className="my-24 grid grid-cols-3">
                        <div className="flex flex-col items-center gap-4 ">
                            <div className="bento-card w-[280px] h-[280px] flex items-center justify-center relative">
                                <div className="corner-glow absolute -bottom-1 -right-1 w-50"/>
                                <div className="corner-glow-lit absolute -bottom-[3px] -right-[3px] w-50"/>
                                <QueryStats className="opacity-40" sx={{ fontSize: "180px" }} />
                            </div>
                            <h2 className="content-title text-3xl">Growth</h2>
                            <p className="content-body">
                                Up to <strong>4x</strong> increase in daily traffic 
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-4 ">
                            <div className="bento-card w-[280px] h-[280px] flex items-center justify-center relative">
                                <div className="corner-glow absolute -bottom-1 -right-1 w-50"/>
                                <div className="corner-glow-lit absolute -bottom-[3px] -right-[3px] w-50"/>
                                <Verified className="opacity-40" sx={{ fontSize: "180px" }} />
                            </div>
                            <h2 className="content-title text-3xl">Reputation</h2>
                            <p className="content-body">
                                <strong>20%</strong> higher visitor-to-sales ratio
                            </p>
                        </div>
                        <div className="flex flex-col items-center gap-4 ">
                            <div className="bento-card w-[280px] h-[280px] flex items-center justify-center relative">
                                <div className="corner-glow absolute -bottom-1 -right-1 w-50"/>
                                <div className="corner-glow-lit absolute -bottom-[3px] -right-[3px] w-50"/>
                                <Handshake className="opacity-40" sx={{ fontSize: "180px" }} />
                            </div>
                            <h2 className="content-title text-3xl">Compliance</h2>
                            <p className="content-body">
                                <strong>80%</strong> decrease in plagiarism escalation
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}