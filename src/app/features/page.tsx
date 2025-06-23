"use client"

import React from "react"
import { Button, ScrollWidget } from "@/components/ui/index";
import { ArrowForwardIos } from "@mui/icons-material";

const sections = [
    { id: "features", name: "Features" },
    { id: "function", name: "How does it work?" },
    { id: "demo", name: "Demo" },
    { id: "feature-list", name: "Feature List" },
    { id: "uses", name: "Use Cases" },
    { id: "stats", name: "Stats" },
]

export default function Features (){
    return (
        <>
            <ScrollWidget sections={sections} />
            {/* INTRO */}
            <section id="features" className="section-start-area min-h-screen">
                <div className="absolute top-[50%] translate-y-[-50%] right-[50%] translate-x-[50%] foreground-z">
                    <img src={"images/SVG/Asset 3.svg"} className="w-[600px] drop-shadow-xl drop-shadow-black/50 brightness-10 contrast-90 blur-xl" />
                </div>
                <div className="section-container-sm text-center front-z">
                    <h3 className="content-miniheading">FEATURES</h3>
                    <h1 className="content-title mb-4">A simple approach to a cascading problem</h1>
                    <h2 className="content-subtitle">What you can expect to receive from using our service</h2>
                </div>
                <ArrowForwardIos sx={{ fontSize: "32px", transform: "rotate(90deg)", position: "absolute", bottom: "32px" }} />
            </section>
            {/* FUNCTION */}
            <section id="function" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="">
                    <h3 className="content-miniheading"><span className="text-[16px]">FEATURES</span> — HOW DOES IT WORK?</h3>
                    <h2 className="content-title text-6xl">Automating content-source disclosure</h2>
                    <div className="flex items-center my-14">
                        <p className="content-body">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit saepe, delectus aperiam non atque voluptates repudiandae doloribus, nam nesciunt beatae explicabo fugiat similique ad dolorem excepturi minus et at minima.
                        </p>
                        <div className="bento-card h-[350px] min-w-[600px]">

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