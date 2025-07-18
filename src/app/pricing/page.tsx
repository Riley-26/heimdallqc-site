"use client"

import React from "react"
import { useSession } from "next-auth/react";
import { ArrowForwardIos, MoneyOff } from "@mui/icons-material";
import { Button, ScrollWidget, IconContainer } from "@/components/ui/index";
import { Header, Footer, Section } from "@/components/layout/index";
import { PricingTiers } from "@/components/sections/index";

const sections = [
    { id: "pricing", name: "Pricing" },
    { id: "tiers", name: "Pricing Tiers" },
    { id: "guide", name: "Pricing Guide" },
    { id: "trial", name: "Trial" },
]

export default function Pricing() {
    const { data: session, status } = useSession()

    return (
        <>
            <Header />
            <ScrollWidget sections={sections} />
            {/* INTRO */}
            <Section id="pricing" className="section-start-area">
                <div className="absolute top-[45%] translate-y-[-50%] right-[50%] translate-x-[50%] p-2 foreground-z">
                    <img src={"images/SVG/Asset 3.svg"} className="logo-blur" />
                </div>
                <div className="section-container-sm text-center front-z">
                    <h3 className="content-miniheading">PRICING</h3>
                    <h1 className="content-title mb-4">Peace of mind for a fraction of the cost</h1>
                    <h2 className="content-subtitle">Intuitive payment plans, to suit specific needs</h2>
                </div>
                <ArrowForwardIos sx={{ fontSize: "32px", transform: "rotate(90deg)", position: "absolute", bottom: "32px" }} />
            </Section>
            {/* TIERS */}
            <PricingTiers id={"tiers"} />
            {/* GUIDE */}
            <Section id="guide" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="">
                    <h3 className="content-miniheading"><span className="text-[16px]">PRICING</span> — GUIDE</h3>
                    <h2 className="content-title text-3xl sm:text-4xl lg:text-6xl ">Let us help you decide</h2>
                    <div className="flex flex-col lg:flex-row gap-16 justify-center items-center mt-12">
                        <div className="flex flex-col gap-6 lg:w-[50%]">
                            <h3 className="content-subtitle">Choose the <strong>Extrinsic</strong> Plan if...</h3>
                            <ul className="ml-8 lg:ml-12 content-body grid grid-rows-3 gap-4">
                                <li className="list-disc bento-card">You have visitors that publish content to your site - Submissions, Reviews, Comments etc.</li>
                                <li className="list-disc bento-card">Misinformation and plagiarism would affect your site's reputation, and therefore your sales and interaction</li>
                                <li className="list-disc bento-card">Your visitors value honesty and transparency</li>
                            </ul>
                            <div className="w-max mx-auto">
                                <Button value={"SELECT"} full={true} className={"px-4 py-1 text-base"} />
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 lg:w-[50%]">
                            <h3 className="content-subtitle">Choose the <strong>Intrinsic</strong> Plan if...</h3>
                            <ul className="ml-8 lg:ml-12 content-body grid grid-rows-3 gap-4">
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
            </Section>
            {/* PAYMENT */}
            <Section id="trial" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading"><span className="text-[16px]">PRICING</span> — TRIAL</h3>
                    <h2 className="content-title">Test it out with a free trial</h2>
                    <h3 className="content-subtitle mt-8">Claim your 7-day free trial to get a feel for how it works</h3>
                    <div className="grid grid-rows-1 gap-22 mt-16">
                        <div className="flex flex-col justify-center items-center">
                            <IconContainer className="p-4 lg:p-6 mb-4" href={session ? `/account` : `/signin`}>
                                <MoneyOff sx={{ fontSize: "48px" }} />
                            </IconContainer>
                            <span className="content-body font-medium">{session ? "ACCOUNT" : "SIGN IN"}</span>
                        </div>
                    </div>
                </div>
            </Section>
            <Footer />
        </>
    )
}