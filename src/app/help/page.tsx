"use client"

import React from "react"
import { Button, ScrollWidget } from "@/components/ui/index";

const sections = [
    { id: "faq", name: "FAQ" },
    { id: "status", name: "Status" },
    { id: "contact", name: "Contact" },
]

export default function Help (){
    return (
        <>
            <ScrollWidget sections={sections} />
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