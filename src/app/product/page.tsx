"use client"

import React from "react"
import { Button, ScrollWidget } from "@/components/ui/index";
import { ArrowForwardIos } from "@mui/icons-material";

const sections = [
    { id: "product", name: "Product" },
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
            {/* INTRO */}
            <section id="product" className="py-48 flex flex-col justify-center items-center bg-black/40 gap-8 relative">
                <div className="section-container-sm text-center">
                    <h3 className="content-miniheading">PRODUCT</h3>
                    <h1 className="content-title mb-4">A simple approach to a cascading problem</h1>
                    <h2 className="content-subtitle">What you can expect to receive from our service</h2>
                </div>
                <ArrowForwardIos sx={{ fontSize: "32px", transform: "rotate(90deg)", position: "absolute", bottom: "32px" }} />
            </section>
            {/* FUNCTION */}
            <section id="function" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading"><span className="text-[16px]">PRODUCT</span> — HOW DOES IT WORK?</h3>
                    <h2 className="content-title text-6xl">Automating content-source disclosure</h2>
                </div>
            </section>
            {/* DEMO */}
            <section id="demo" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading"><span className="text-[16px]">PRODUCT</span> — DEMO</h3>
                    <h2 className="content-title text-6xl">See how it works for yourself</h2>
                </div>
            </section>
            {/* USE CASES */}
            <section id="uses" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading"><span className="text-[16px]">PRODUCT</span> — USE CASES</h3>
                    <h2 className="content-title text-6xl">What is our end goal?</h2>
                </div>
            </section>
            {/* STATS */}
            <section id="stats" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading"><span className="text-[16px]">PRODUCT</span> — STATS</h3>
                    <h2 className="content-title text-6xl">This is what you can expect to see</h2>
                </div>
            </section>
            {/* FINDINGS */}
            <section id="findings" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading"><span className="text-[16px]">PRODUCT</span> — FINDINGS</h3>
                    <h2 className="content-title text-6xl">The AI revolution is just beginning</h2>
                </div>
            </section>
        </>
    )
}