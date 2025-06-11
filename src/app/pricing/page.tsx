"use client"

import React from "react"
import { Button, ScrollWidget } from "@/components/ui/index";

const sections = [
    { id: "tiers", name: "Pricing Tiers" },
    { id: "guide", name: "Pricing Guide" },
    { id: "payment", name: "Payment" },
]

export default function Pricing (){
    return (
        <>
            <ScrollWidget sections={sections} />
            {/* TIERS */}
            <section id="tiers" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center">
                    <h3 className="content-subheading"><span className="text-[16px]">PRICING</span> — TIERS</h3>
                    <h2 className="content-title text-6xl py-2">Choose an ideal plan</h2>
                </div>
            </section>
            {/* GUIDE */}
            <section id="guide" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center">
                    <h3 className="content-subheading"><span className="text-[16px]">PRICING</span> — GUIDE</h3>
                    <h2 className="content-title text-6xl py-2">Let us help you decide</h2>
                </div>
            </section>
            {/* PAYMENT */}
            <section id="payment" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center">
                    <h3 className="content-subheading"><span className="text-[16px]">PRICING</span> — PAYMENT</h3>
                    <h2 className="content-title text-6xl py-2">Payment couldn't be easier</h2>
                </div>
            </section>
        </>
    )
}