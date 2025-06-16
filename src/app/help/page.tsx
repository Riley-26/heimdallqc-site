"use client"

import React from "react"
import { Button, ScrollWidget } from "@/components/ui/index";
import { ArrowForwardIos } from "@mui/icons-material";

const sections = [
    { id: "help", name: "Help" },
    { id: "faq", name: "FAQ" },
    { id: "status", name: "Status" },
    { id: "contact", name: "Contact" },
]

export default function Help (){
    return (
        <>
            <ScrollWidget sections={sections} />
            {/* INTRO */}
            <section id="help" className="py-48 flex flex-col justify-center items-center bg-black/40 gap-8 relative">
                <div className="section-container-sm text-center">
                    <h3 className="content-miniheading">HELP</h3>
                    <h1 className="content-title mb-4">Troubleshooting</h1>
                    <h2 className="content-subtitle">FAQ, service status, contact</h2>
                </div>
                <ArrowForwardIos sx={{ fontSize: "32px", transform: "rotate(90deg)", position: "absolute", bottom: "32px" }} />
            </section>
            {/* FAQ */}
            <section id="faq" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center">
                    <h3 className="content-subheading"><span className="text-[16px]">HELP</span> — FAQ</h3>
                    <h2 className="content-title text-6xl py-2">Frequently Asked Questions</h2>
                </div>
            </section>
            {/* STATUS */}
            <section id="status" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center">
                    <h3 className="content-subheading"><span className="text-[16px]">HELP</span> — STATUS</h3>
                    <h2 className="content-title text-6xl py-2">Heimdall status</h2>
                </div>
            </section>
            {/* CONTACT */}
            <section id="contact" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center">
                    <h3 className="content-subheading"><span className="text-[16px]">HELP</span> — CONTACT</h3>
                    <h2 className="content-title text-6xl py-2">Reach out to us here</h2>
                </div>
            </section>
        </>
    )
}