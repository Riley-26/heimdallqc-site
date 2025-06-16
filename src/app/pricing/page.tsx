"use client"

import React from "react"
import { Button, ScrollWidget } from "@/components/ui/index";
import { ArrowForwardIos } from "@mui/icons-material";

const sections = [
    { id: "pricing", name: "Pricing" },
    { id: "tiers", name: "Pricing Tiers" },
    { id: "guide", name: "Pricing Guide" },
    { id: "payment", name: "Payment" },
]

export default function Pricing (){
    return (
        <>
            <ScrollWidget sections={sections} />
            {/* INTRO */}
            <section id="pricing" className="py-48 flex flex-col justify-center items-center bg-black/40 gap-8 relative">
                <div className="section-container-sm text-center">
                    <h3 className="content-miniheading">PRICING</h3>
                    <h1 className="content-title mb-4">Peace of mind for a fraction of the cost</h1>
                    <h2 className="content-subtitle">Intuitive payment plans, to suit specific needs</h2>
                </div>
                <ArrowForwardIos sx={{ fontSize: "32px", transform: "rotate(90deg)", position: "absolute", bottom: "32px" }} />
            </section>
            {/* TIERS */}
            <section id="tiers" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading"><span className="text-[16px]">PRICING</span> — TIERS</h3>
                    <h2 className="content-title text-6xl">Choose an ideal plan</h2>
                </div>
            </section>
            {/* GUIDE */}
            <section id="guide" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading"><span className="text-[16px]">PRICING</span> — GUIDE</h3>
                    <h2 className="content-title text-6xl">Let us help you decide</h2>
                </div>
            </section>
            {/* PAYMENT */}
            <section id="payment" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading"><span className="text-[16px]">PRICING</span> — PAYMENT</h3>
                    <h2 className="content-title text-6xl">Payment couldn't be easier</h2>
                </div>
            </section>
        </>
    )
}