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
            <section id="pricing" className="section-start-area">
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
                    <div className="grid grid-cols-3 gap-4 section-container-sm my-12 items-center leading-6">
                        <div className="bento-card flex flex-col gap-4 h-[500px]">
                            <div className="flex flex-col gap-2">
                                <h3 className="content-title font-bold text-2xl py-0">Extrinsic Plan</h3>
                                <h4 className="content-miniheading">Made for verifying your users' content</h4>
                            </div>
                            <hr />
                            <ul className="content-body text-lg text-start flex flex-col gap-4">
                                <li>Automatic AI check on submission</li>
                                <li>Plagiarism check on AI, with &nbsp;&nbsp;automatic source citing</li>
                                <li>Optional interactive widget for site &nbsp;&nbsp;visitors</li>
                                <li>Optional AI watermark</li>
                                <li>8,000 tokens</li>
                            </ul>
                            <div className="h-full flex flex-col items-center justify-end">
                                <hr className="w-full" />
                                <h3 className="content-title font-bold text-2xl py-0 mt-4">£15 / month</h3>
                            </div>
                        </div>
                        <div className="bento-card flex flex-col gap-4 h-[550px]">
                            <div className="flex flex-col gap-2">
                                <h3 className="content-title font-bold text-2xl">Combo-plan</h3>
                                <h4 className="content-miniheading">Made for verifying all sources</h4>
                            </div>
                            <hr />
                            <ul className="content-body text-lg text-start flex flex-col gap-4">
                                <li><i>Everything in Extrinsic plan</i></li>
                                <li><i>Everything in Intrinsic plan</i></li>
                                <li>12,000 tokens</li>
                            </ul>
                            <div className="h-full flex flex-col items-center justify-end">
                                <hr className="w-full" />
                                <h3 className="content-title font-bold text-2xl py-0 mt-4">Coming Soon</h3>
                            </div>
                        </div>
                        <div className="bento-card flex flex-col gap-4 h-[500px]">
                            <div className="flex flex-col gap-2">
                                <h3 className="content-title font-bold text-2xl py-0">Intrinsic Plan</h3>
                                <h4 className="content-miniheading">Made for verifying your site's content</h4>
                            </div>
                            <hr />
                            <ul className="content-body text-lg text-start flex flex-col gap-4">
                                <li>AI check on site audit</li>
                                <li>AI check on manual upload</li>
                                <li>Plagiarism check on AI, with &nbsp;&nbsp;automatic source citing</li>
                                <li>Optional AI watermark</li>
                                <li>6,000 tokens</li>
                            </ul>
                            <div className="h-full flex flex-col items-center justify-end">
                                <hr className="w-full" />
                                <h3 className="content-title font-bold text-2xl py-0 mt-4">Coming Soon</h3>
                            </div>
                        </div>
                    </div>
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