"use client"

import React from "react"
import { Button, ScrollWidget } from "@/components/ui/index";
import { ArrowForwardIos } from "@mui/icons-material";
import { Header, Footer, Section } from "@/components/layout/index";

const sections = [
    { id: "privacy", name: "Privacy" },
    { id: "terms", name: "T&Cs" },
    { id: "policy", name: "Data Policy" },
]

export default function Privacy (){
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
                    <h3 className="content-miniheading">PRIVACY</h3>
                    <h1 className="content-title mb-4">Our Privacy Policy</h1>
                    <h2 className="content-subtitle">We lead by example, with full transparency</h2>
                </div>
                <ArrowForwardIos className="absolute bottom-12" sx={{ fontSize: "32px", transform: "rotate(90deg)" }} />
            </Section>
            {/* T&C */}
            <Section id="terms" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading"><span className="text-[16px]">PRIVACY</span> — T&Cs</h3>
                    <h2 className="content-title text-6xl">Terms and Conditions</h2>
                </div>
            </Section>
            {/* DATA POLICY */}
            <Section id="policy" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading"><span className="text-[16px]">PRIVACY</span> — DATA POLICY</h3>
                    <h2 className="content-title text-6xl">How do we use your data?</h2>
                </div>
            </Section>
            <Footer />
        </>
    )
}