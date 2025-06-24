"use client"

import React from "react"
import { Button, ScrollWidget } from "@/components/ui/index";
import { ArrowForwardIos, CurrencyExchange, Person, Web } from "@mui/icons-material";

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
                        <div className="w-[35%] mr-12">
                            <h2 className="content-title text-3xl mb-4">On your end</h2>
                            <ul className="ml-12 content-body grid grid-rows-3 gap-4">
                                <li className="list-disc">Heimdall will prevent accidental copyright infringement, by automatically citing the sources that AI may have used</li>
                                <li className="list-disc">You will see increased traffic and user retention, based on content quality and transparent practices</li>
                                <li className="list-disc">You can manage all submissions to your site in the <a href="/account/dashboard" className="text-link">dashboard</a></li>
                            </ul>
                        </div>
                        <div className="h-[400px] w-[15%] overflow-x-hidden">
                            <Web className="opacity-10 translate-x-[35%] translate-y-[32%] rotate-y-180" sx={{ fontSize: "240px" }}/>
                        </div>
                        <div className="absolute h-[400px] w-0.5 rounded-[50%] bg-gradient-to-t from-[#d9cdad77] via-[#d8af41] to-[#d9cdad77]" />
                        <div className="h-[400px] w-[15%] overflow-x-hidden">
                            <Person className="opacity-10 -translate-x-[50%] translate-y-[32%]" sx={{ fontSize: "240px" }}/>
                        </div>
                        <div className="w-[35%] ml-12">
                            <h2 className="content-title text-3xl mb-4">On your users' end</h2>
                            <ul className="ml-12 content-body grid grid-rows-3 gap-4">
                                <li className="list-disc">They will see a watermark of varying intensity next to content, signifying predicted AI use</li>
                                <li className="list-disc">It will be indicated that you are verified with Heimdall, and users will be more trustworthy of your site</li>
                                <li className="list-disc">If integrating the widget, your site's users can disclose use of AI content</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            {/* DEMO */}
            <section id="demo" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading"><span className="text-[16px]">FEATURES</span> — DEMO</h3>
                    <h2 className="content-title text-6xl">See how it works for yourself</h2>
                </div>
            </section>
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
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim recusandae officia ab tempora harum voluptas consectetur quas ducimus? Consequatur, nobis.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-16 mb-12">
                            <div className="bento-card h-[350px] w-[600px]"></div>
                            <div className="flex flex-col justify-center text-start max-w-[50%]">
                                <h2 className="content-title text-3xl mb-4">Automatic Analysis — Submission</h2>
                                <h3 className="content-subtitle text-2xl mb-8"><i>Extrinsic Plan</i></h3>
                                <p className="content-body text-lg">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim recusandae officia ab tempora harum voluptas consectetur quas ducimus? Consequatur, nobis.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-16">
                            <div className="bento-card h-[350px] w-[600px]"></div>
                            <div className="flex flex-col justify-center text-start max-w-[50%]">
                                <h2 className="content-title text-3xl mb-4">Automatic Analysis — Audit</h2>
                                <h3 className="content-subtitle text-2xl mb-8"><i>Intrinsic Plan</i></h3>
                                <p className="content-body text-lg">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim recusandae officia ab tempora harum voluptas consectetur quas ducimus? Consequatur, nobis.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-16 mb-12">
                            <div className="bento-card h-[350px] w-[600px]"></div>
                            <div className="flex flex-col justify-center text-start max-w-[50%]">
                                <h2 className="content-title text-3xl mb-4">Manual Upload Analysis</h2>
                                <h3 className="content-subtitle text-2xl mb-8"><i>Intrinsic Plan</i></h3>
                                <p className="content-body text-lg">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim recusandae officia ab tempora harum voluptas consectetur quas ducimus? Consequatur, nobis.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-16">
                            <div className="bento-card h-[350px] w-[600px]"></div>
                            <div className="flex flex-col justify-center text-start max-w-[50%]">
                                <h2 className="content-title text-3xl mb-4">Plagiarism Check + Auto-Citation</h2>
                                <h3 className="content-subtitle text-2xl mb-8"><i>Extrinsic Plan / Intrinsic Plan</i></h3>
                                <p className="content-body text-lg">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim recusandae officia ab tempora harum voluptas consectetur quas ducimus? Consequatur, nobis.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-16">
                            <div className="bento-card h-[350px] w-[600px]"></div>
                            <div className="flex flex-col justify-center text-start max-w-[50%]">
                                <h2 className="content-title text-3xl mb-4">Intelligent Watermarking</h2>
                                <h3 className="content-subtitle text-2xl mb-8"><i>Extrinsic Plan / Intrinsic Plan</i></h3>
                                <p className="content-body text-lg">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim recusandae officia ab tempora harum voluptas consectetur quas ducimus? Consequatur, nobis.
                                </p>
                            </div>
                        </div>
                        <div className="flex gap-16">
                            <div className="bento-card h-[350px] w-[600px]"></div>
                            <div className="flex flex-col justify-center text-start max-w-[50%]">
                                <h2 className="content-title text-3xl mb-4">Analytics Dashboard</h2>
                                <h3 className="content-subtitle text-2xl mb-8"><i>Extrinsic Plan / Intrinsic Plan</i></h3>
                                <p className="content-body text-lg">
                                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim recusandae officia ab tempora harum voluptas consectetur quas ducimus? Consequatur, nobis.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* USE CASES */}
            <section id="uses" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading"><span className="text-[16px]">FEATURES</span> — USE CASES</h3>
                    <h2 className="content-title text-6xl">Unsure if your site would benefit from Heimdall?</h2>
                </div>
            </section>
            {/* STATS */}
            <section id="stats" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading"><span className="text-[16px]">FEATURES</span> — STATS</h3>
                    <h2 className="content-title text-6xl">This is what you can expect to see</h2>
                </div>
            </section>
        </>
    )
}