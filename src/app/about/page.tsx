"use client"

import React from "react"
import { Button, ScrollWidget } from "@/components/ui/index";

const sections = [
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
            {/* DESTINATION */}
            <section id="destination" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center">
                    <h3 className="content-subheading"><span className="text-[16px]">ABOUT</span> — DESTINATION</h3>
                    <h2 className="content-title text-6xl py-2">What is our end goal?</h2>
                </div>
            </section>
            {/* TIMELINE */}
            <section id="timeline" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="">
                    <h3 className="content-subheading"><span className="text-[16px]">ABOUT</span> — TIMELINE</h3>
                    <h2 className="content-title text-6xl py-2">Follow along with our path</h2>
                </div>
            </section>
            {/* MOTIVES */}
            <section id="motives" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="">
                    <h3 className="content-subheading"><span className="text-[16px]">ABOUT</span> — MOTIVES</h3>
                    <h2 className="content-title text-6xl py-2">Helping to create a hopeful future</h2>
                </div>
            </section>
            {/* INSIGHTS */}
            <section id="insights" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="">
                    <h3 className="content-subheading"><span className="text-[16px]">ABOUT</span> — INSIGHTS</h3>
                    <h2 className="content-title text-6xl py-2">Imparting our knowledge</h2>
                </div>
            </section>
            {/* PREDICTIONS */}
            <section id="predictions" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="">
                    <h3 className="content-subheading"><span className="text-[16px]">ABOUT</span> — PREDICTIONS</h3>
                    <h2 className="content-title text-6xl py-2">What do we think the future holds?</h2>
                </div>
            </section>
        </>
    )
}