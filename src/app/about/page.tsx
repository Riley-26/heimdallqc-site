"use client"

import React from "react"
import { Button, IconContainer, ScrollWidget } from "@/components/ui/index";
import { ArrowForwardIos } from "@mui/icons-material";

const sections = [
    { id: "about", name: "About" },
    { id: "destination", name: "Destination" },
    { id: "timeline", name: "Journey Ahead" },
    { id: "motives", name: "Motives" },
    { id: "insights", name: "Insights" },
    { id: "predictions", name: "Predictions" },
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
            {/* DESTINATION */}
            <section id="destination" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading"><span className="text-[16px]">ABOUT</span> — DESTINATION</h3>
                    <h2 className="content-title text-6xl">What is our end goal?</h2>
                </div>
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
                <div className="">
                    <h3 className="content-miniheading"><span className="text-[16px]">ABOUT</span> — MOTIVES</h3>
                    <h2 className="content-title text-6xl">Helping to create a hopeful future</h2>
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