"use client"

import React from "react"
import { Button, ScrollWidget } from "@/components/ui/index";
import { ArrowForwardIos } from "@mui/icons-material";
import { Header, Footer } from "@/components/layout/index";

const sections = [
    { id: "get-started", name: "Get Started" },
    { id: "sdk", name: "SDK" },
    { id: "practices", name: "Best Practices" },
    { id: "troubleshooting", name: "Troubleshooting" },
]

export default function ApiDocs (){
    return (
        <>
            <Header />
            <ScrollWidget sections={sections} />
            {/* INTRO */}
            <section id="api" className="section-start-area">
                <div className="absolute top-[45%] translate-y-[-50%] right-[50%] translate-x-[50%] p-2 foreground-z">
                    <img src={"images/SVG/Asset 3.svg"} className="logo-blur" />
                </div>
                <div className="section-container-sm text-center front-z">
                    <h3 className="content-miniheading">API</h3>
                    <h1 className="content-title mb-4">Comprehensive guide</h1>
                    <h2 className="content-subtitle">Our integration tutorial and suggestions for best practices</h2>
                </div>
                <ArrowForwardIos className="absolute bottom-12" sx={{ fontSize: "32px", transform: "rotate(90deg)" }} />
            </section>
            {/* GET STARTED */}
            <section id="get-started" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading"><span className="text-[16px]">API</span> — GET STARTED</h3>
                    <h2 className="content-title text-6xl py-2">Integration is only a few steps away</h2>
                </div>
            </section>
            {/* SDK */}
            <section id="sdk" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading"><span className="text-[16px]">API</span> — SDK</h3>
                    <h2 className="content-title text-6xl py-2">We've made it easy for you</h2>
                </div>
            </section>
            {/* BEST PRACTICES */}
            <section id="practices" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading"><span className="text-[16px]">API</span> — BEST PRACTICES</h3>
                    <h2 className="content-title text-6xl py-2">Recommended practices</h2>
                </div>
            </section>
            {/* TROUBLESHOOTING */}
            <section id="troubleshooting" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading"><span className="text-[16px]">API</span> — TROUBLESHOOTING</h3>
                    <h2 className="content-title text-6xl py-2">Most common issues</h2>
                </div>
            </section>
            <Footer />
        </>
    )
}