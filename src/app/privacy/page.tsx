"use client"

import React from "react"
import { Button, ScrollWidget } from "@/components/ui/index";
import { ArrowForwardIos } from "@mui/icons-material";

const sections = [
    { id: "privacy", name: "Privacy" },
    { id: "terms", name: "T&Cs" },
    { id: "policy", name: "Data Policy" },
]

export default function Privacy (){
    return (
        <>
            <ScrollWidget sections={sections} />
            {/* INTRO */}
            <section id="pricing" className="py-48 flex flex-col justify-center items-center bg-black/40 gap-8 relative">
                <div className="section-container-sm text-center">
                    <h3 className="content-miniheading">PRIVACY</h3>
                    <h1 className="content-title mb-4">Our Privacy Policy</h1>
                    <h2 className="content-subtitle">We lead by example, with full transparency</h2>
                </div>
                <ArrowForwardIos sx={{ fontSize: "32px", transform: "rotate(90deg)", position: "absolute", bottom: "32px" }} />
            </section>
            {/* T&C */}
            <section id="terms" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading"><span className="text-[16px]">PRIVACY</span> — T&Cs</h3>
                    <h2 className="content-title text-6xl">Terms and Conditions</h2>
                </div>
            </section>
            {/* DATA POLICY */}
            <section id="policy" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading"><span className="text-[16px]">PRIVACY</span> — DATA POLICY</h3>
                    <h2 className="content-title text-6xl">How do we use your data?</h2>
                </div>
            </section>
        </>
    )
}