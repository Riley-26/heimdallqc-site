"use client"

import React from "react"
import { useSession } from "next-auth/react";
import { Button, ScrollWidget, IconContainer } from "@/components/ui/index";
import { ArrowForwardIos, MoneyOff } from "@mui/icons-material";
import { Header, Footer } from "@/components/layout/index";

const sections = [
    { id: "pricing", name: "Pricing" },
    { id: "tiers", name: "Pricing Tiers" },
    { id: "guide", name: "Pricing Guide" },
    { id: "trial", name: "Trial" },
]

export default function Pricing (){
    const { data: session, status } = useSession()

    return (
        <>
            <Header />
            <ScrollWidget sections={sections} />
            {/* INTRO */}
            <section id="pricing" className="section-start-area">
                <div className="absolute top-[50%] translate-y-[-50%] right-[50%] translate-x-[50%] foreground-z">
                    <img src={"images/SVG/Asset 3.svg"} className="w-[600px] drop-shadow-xl drop-shadow-black/50 brightness-10 contrast-90 blur-xl" />
                </div>
                <div className="section-container-sm text-center front-z">
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
                    <div className="grid grid-cols-3 gap-4 section-container-sm mt-10 mb-6 items-center leading-6">
                        <div className="bento-card flex flex-col gap-4 h-[560px] relative">
                            <div className="flex flex-col gap-2">
                                <h3 className="content-title font-bold text-2xl py-0">Extrinsic Plan</h3>
                                <h4 className="content-miniheading">Made for verifying your users' content</h4>
                            </div>
                            <hr />
                            <ul className="content-body text-lg text-start flex flex-col gap-4">
                                <li>Automatic AI check on submission</li>
                                <li>Plagiarism check on AI, with &nbsp;&nbsp;auto-citations/AI rewrite</li>
                                <li>Optional interactive widget for site &nbsp;&nbsp;visitors</li>
                                <li>Optional AI watermark</li>
                                <li>8,000 tokens</li>
                            </ul>
                            <div className="h-full flex flex-col items-center justify-end">
                                <hr className="w-full" />
                                <h3 className="content-title font-bold text-2xl py-0 my-4">£15 / month</h3>
                                <Button value={"SELECT"} full={true} className={"px-4 py-1 text-base"} />
                            </div>
                        </div>
                        <div className="bento-card flex flex-col gap-4 h-[600px] relative">
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
                                <h3 className="content-title font-bold text-2xl py-0 my-4">Coming Soon</h3>
                                <Button value={"SELECT"} full={true} className={"px-4 py-1 text-base hover:cursor-not-allowed"} />
                            </div>
                        </div>
                        <div className="bento-card flex flex-col gap-4 h-[560px] relative">
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
                                <h3 className="content-title font-bold text-2xl py-0 my-4">Coming Soon</h3>
                                <Button value={"SELECT"} full={true} className={"px-4 py-1 text-base hover:cursor-not-allowed"} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* GUIDE */}
            <section id="guide" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="">
                    <h3 className="content-miniheading"><span className="text-[16px]">PRICING</span> — GUIDE</h3>
                    <h2 className="content-title text-6xl">Let us help you decide</h2>
                    <div className="flex gap-16 justify-center items-center mt-12">
                        <div className="flex flex-col gap-6 w-[50%]">
                            <h3 className="content-subtitle">Choose the <strong>Extrinsic</strong> Plan if...</h3>
                            <ul className="ml-12 content-body grid grid-rows-3 gap-4">
                                <li className="list-disc bento-card">You have visitors that publish content to your site - Submissions, Reviews, Comments etc.</li>
                                <li className="list-disc bento-card">Misinformation may affect your site's reputation, and therefore your sales and interaction</li>
                                <li className="list-disc bento-card">Your visitors value honesty and transparency</li>
                            </ul>
                            <div className="w-max mx-auto">
                                <Button value={"SELECT"} full={true} className={"px-4 py-1 text-base"} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 w-[50%]">
                            <h3 className="content-subtitle">Choose the <strong>Intrinsic</strong> Plan if...</h3>
                            <ul className="ml-12 content-body grid grid-rows-3 gap-4">
                                <li className="list-disc bento-card">Your site's content is written internally, but may be sourced externally - ChatGPT, Wikipedia etc.</li>
                                <li className="list-disc bento-card">You need an automatic way to protect your site from potential copyright infringement</li>
                                <li className="list-disc bento-card">Your visitors value honesty and transparency</li>
                            </ul>
                            <div className="w-max mx-auto">
                                <Button value={"SELECT"} full={true} className={"px-4 py-1 text-base hover:cursor-not-allowed w-max"} />
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center gap-4 mt-8">
                        <p className="content-body">
                            View all features here
                        </p>
                        <IconContainer href="/features#feature-list">
                            <ArrowForwardIos sx={{ fontSize: "20px" }} />
                        </IconContainer>
                    </div>
                </div>
            </section>
            {/* PAYMENT */}
            <section id="trial" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading"><span className="text-[16px]">PRICING</span> — TRIAL</h3>
                    <h2 className="content-title text-6xl">Test it out with a free trial</h2>
                    <h3 className="content-subtitle mt-8">Claim your 7-day free trial to get a feel for how it works</h3>
                    <div className="grid grid-rows-1 gap-22 mt-16">
                        <div className="flex flex-col justify-center items-center">
                            <IconContainer className="p-6 mb-4" href={session ? `/account`: `/signin`}>
                                <MoneyOff sx={{ fontSize: "48px" }} />
                            </IconContainer>
                            <span className="content-body font-medium">{session ? "ACCOUNT": "SIGN IN"}</span>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}