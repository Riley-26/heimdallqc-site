"use client"

import React from "react"
import { Button, ScrollWidget } from "@/components/ui/index";

const sections = [
    { id: "function", name: "How does it work?" },
    { id: "demo", name: "Demo" },
    { id: "uses", name: "Use Cases" },
    { id: "stats", name: "Stats" },
    { id: "findings", name: "Findings" },
]

export default function Product (){
    return (
        <>
            <ScrollWidget sections={sections} />
            {/* FUNCTION */}
            <section id="function" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center">
                    <h3 className="content-subheading"><span className="text-[16px]">PRODUCT</span> — HOW DOES IT WORK?</h3>
                    <h2 className="content-title text-6xl py-2">Automating content-source disclosure</h2>
                </div>
            </section>
            {/* DEMO */}
            <section id="demo" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center">
                    <h3 className="content-subheading"><span className="text-[16px]">PRODUCT</span> — DEMO</h3>
                    <h2 className="content-title text-6xl py-2">See how it works for yourself</h2>
                </div>
            </section>
            {/* USE CASES */}
            <section id="uses" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center">
                    <h3 className="content-subheading"><span className="text-[16px]">PRODUCT</span> — USE CASES</h3>
                    <h2 className="content-title text-6xl py-2">What is our end goal?</h2>
                </div>
            </section>
            {/* STATS */}
            <section id="stats" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center">
                    <h3 className="content-subheading"><span className="text-[16px]">PRODUCT</span> — STATS</h3>
                    <h2 className="content-title text-6xl py-2">This is what you can expect to see</h2>
                </div>
            </section>
            {/* FINDINGS */}
            <section id="findings" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center">
                    <h3 className="content-subheading"><span className="text-[16px]">PRODUCT</span> — FINDINGS</h3>
                    <h2 className="content-title text-6xl py-2">The AI revolution is just beginning</h2>
                </div>
            </section>
        </>
    )
}