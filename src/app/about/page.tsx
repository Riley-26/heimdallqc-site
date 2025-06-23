"use client"

import React from "react"
import { Button, IconContainer, ScrollWidget, RefLink, Parallax } from "@/components/ui/index";
import { ArrowForwardIos } from "@mui/icons-material";

const sections = [
    { id: "about", name: "About" },
    { id: "timeline", name: "Journey Ahead" },
    { id: "motives", name: "Motives" },
    { id: "predictions", name: "Predictions" },
]

const refLinks = [
    { id: 3, title: "The cost of gross misinformation on the economy", link: "https://cesie.org/en/news/true-cost-of-disinformation-mega/" }
]

export default function About (){
    return (
        <>
            <ScrollWidget sections={sections} />
            {/* INTRO */}
            <section id="about" className="section-start-area">
                <div className="section-container-sm text-center">
                    <h3 className="content-miniheading">ABOUT</h3>
                    <h1 className="content-title mb-4">Heimdall is safeguarding our internet, with your help</h1>
                    <h2 className="content-subtitle">Our timeline, motivations and predictions for the future</h2>
                </div>
                <ArrowForwardIos sx={{ fontSize: "32px", transform: "rotate(90deg)", position: "absolute", bottom: "32px" }} />
            </section>
            {/* TIMELINE */}
            <section id="timeline" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="">
                    <h3 className="content-miniheading"><span className="text-[16px]">ABOUT</span> — TIMELINE</h3>
                    <div className="my-28">
                        <div className="flex justify-center gap-20 text-center mb-4">
                            <div className="w-[30%]">
                                <h2 className="content-title font-bold text-3xl">Concept</h2>
                                <p className="content-body">
                                    We aimed to find a way to tackle misinformation caused by AI, but without punishing people for using AI content.
                                </p>
                            </div>
                            <div className="w-[30%]">
                                <h2 className="content-title font-bold text-3xl">Testing</h2>
                                <p className="content-body">
                                    We found that businesses and users alike benefitted when focusing on content quality.
                                </p>
                            </div>
                            <div className="w-[30%]">
                                <h2 className="content-title font-bold text-3xl">Future</h2>
                                <p className="content-body">
                                    Due to the fast-paced nature of the AI industry, we will constantly be tuning our algorithms to stay ahead.
                                </p>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex justify-center">
                                <div className="w-[15%] min-h-[50px] border-r-2 border-r-[#d9cdad77] relative"></div>
                                <div className="w-[35%] min-h-[50px] border-r-2 border-r-[#d9cdad77]" />
                                <div className="w-[35%] min-h-[50px] border-r-2 border-r-[#d9cdad77]" />
                                <div className="w-[15%] min-h-[50px]" />
                            </div>
                            <div className="h-0.5 w-full rounded-[50%] bg-gradient-to-r from-[#d9cdad77] via-[#d8af41] to-[#d9cdad77]" />
                            <div className="flex justify-center">
                                <div className="w-[32%] min-h-[50px] border-r-2 border-r-[#d9cdad77]" />
                                <div className="w-[36%] min-h-[50px] border-r-2 border-r-[#d9cdad77]" />
                                <div className="w-[32%] min-h-[50px]" />
                            </div>
                        </div>
                        <div className="flex justify-center gap-20 text-center mb-4">
                            <div className="w-[30%]">
                                <h2 className="content-title font-bold text-3xl">Design</h2>
                                <p className="content-body">
                                    Focusing on transparency, Heimdall was designed to emphasise how important AI disclosure is.
                                </p>
                            </div>
                            <div className="w-[30%]">
                                <h2 className="content-title font-bold text-3xl">Result</h2>
                                <p className="content-body">
                                    With this new system to verify AI content, websites can avoid facing potential consequences of AI non-disclosure.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* MOTIVES */}
            <section id="motives" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="relative">
                    <Parallax className="absolute -top-60 right-0 -z-50" speed={0.3}>
                        <div className="h-[320px] w-[1000px] bento-card" />
                    </Parallax>
                    <h3 className="content-miniheading"><span className="text-[16px]">ABOUT</span> — MOTIVES</h3>
                    <h2 className="content-title">Helping to create a hopeful future</h2>
                    <p className="content-body mt-8 mb-16">
                        Don't get us wrong, we are not condemning the use of AI to generate content. Modern AI is remarkable. We used it in the development of Heimdall! However, we have noticed that the quality of content on the web is slowly diminishing, and it will come to a point where we will no longer be able 
                        to tell the difference between what's Human and what's AI. But why would we need to separate the two?
                        <br />
                        <br />
                        <strong>AI hallucinations.</strong> AI tools can fabricate information, and this is inevitable. The damage caused by the spread of misinformation is around 78 billion USD
                        <RefLink data={refLinks[0]} />. This figure is only going to increase in the years to come.
                        <br />
                        <br />
                        We aim to minimise, or at least reduce, the role AI plays in the damage. AI is perfect for its speed and efficiency when facing complex tasks, but Human content is much purer quality. All we want to do is disclose the source of content, to reduce the legal implications and to inform people that what 
                        they are reading may be AI generated, so that they can make their own decisions. We are not punishing AI use, we are protecting the internet.
                    </p>
                </div>
            </section>
            {/* PREDICTIONS */}
            <section id="predictions" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="relative">
                    <Parallax className="absolute -top-220 -left-20 -z-50" speed={0.4}>
                        <div className="h-[350px] w-[800px] bento-card" />
                    </Parallax>
                    <h3 className="content-miniheading"><span className="text-[16px]">ABOUT</span> — PREDICTIONS</h3>
                    <h2 className="content-title">What do we think the future of AI holds?</h2>
                    <p className="content-body mt-8 mb-16">
                        There are two clear paths forward for humanity.
                        <br/>
                        <br/>
                        <strong>Consumption</strong> - We keep consuming AI content, so AI companies keep improving their algorithms to feed our needs. New advancements in AI development lead to incredible innovations that seemed out of our reach. Cures for untreatable diseases, more efficient energy harvesting, advanced robotics. There are no downsides (for the moment), so why worry about controlling it?
                        <br/>
                        <br/>
                        <strong>Regulation</strong> - We keep AI advancements moderated. AI companies continue to improve their algorithms, but at a much more manageable rate. We regulate AI use, and keep the distinction between Human and AI content clear. When, and only when, we are ready, we move on to new stages of AI development. The public isn't overwhelmed by the rapid progress, and we are able to mitigate the threat that intelligent AI systems pose.
                        <br/>
                        <br/>
                        Both paths are equally likely to happen, but only one will. It's up to us to choose which path we want to follow. Do we overindulge in progress, ignore warnings and face the consequences? Or do we all do our part through honesty and staying grateful for what we have, and protect our future generations from the mess that we could make? Ultimately, it is your choice. We know what we would pick.
                    </p>
                </div>
            </section>
        </>
    )
}