"use client"

import React from "react"
import { Button, IconContainer, ScrollWidget, RefLink } from "@/components/ui/index";
import { ArrowForwardIos } from "@mui/icons-material";

const sections = [
    { id: "about", name: "About" },
    { id: "timeline", name: "Journey Ahead" },
    { id: "motives", name: "Motives" },
    { id: "insights", name: "Insights" },
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
            <section id="about" className="py-48 flex flex-col justify-center items-center bg-black/40 gap-8 relative">
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
                    <h2 className="content-title text-6xl">Follow along with our path</h2>
                </div>
            </section>
            {/* MOTIVES */}
            <section id="motives" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="relative">
                    <div className="h-[320px] w-[80%] absolute bottom-4 -right-6 bento-card -z-8"></div>
                    <h3 className="content-miniheading"><span className="text-[16px]">ABOUT</span> — MOTIVES</h3>
                    <h2 className="content-title text-6xl">Helping to create a hopeful future</h2>
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
            {/* INSIGHTS */}
            <section id="insights" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="">
                    <h3 className="content-miniheading"><span className="text-[16px]">ABOUT</span> — INSIGHTS</h3>
                    <h2 className="content-title text-6xl">Imparting our knowledge</h2>
                </div>
            </section>
            {/* PREDICTIONS */}
            <section id="predictions" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="">
                    <h3 className="content-miniheading"><span className="text-[16px]">ABOUT</span> — PREDICTIONS</h3>
                    <h2 className="content-title text-6xl">What do we think the future holds?</h2>
                </div>
            </section>
        </>
    )
}