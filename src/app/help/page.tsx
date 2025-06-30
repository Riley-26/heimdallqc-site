"use client"

import React from "react"
import { Button, IconContainer, ScrollWidget } from "@/components/ui/index";
import { ArrowForwardIos, Email, ExpandMore, LinkedIn } from "@mui/icons-material";
import { Header, Footer } from "@/components/layout/index";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

const sections = [
    { id: "help", name: "Help" },
    { id: "faq", name: "FAQ" },
    { id: "status", name: "Status" },
    { id: "contact", name: "Contact" },
]

export default function Help (){

    const handleSubmit = (e:any) => {
        e.preventDefault()
    }

    return (
        <>
            <Header />
            <ScrollWidget sections={sections} />
            {/* INTRO */}
            <section id="help" className="section-start-area">
                <div className="absolute top-[50%] translate-y-[-50%] right-[50%] translate-x-[50%] foreground-z">
                    <img src={"images/SVG/Asset 3.svg"} className="w-[600px] drop-shadow-xl drop-shadow-black/50 brightness-10 contrast-90 blur-xl" />
                </div>
                <div className="section-container-sm text-center front-z">
                    <h3 className="content-miniheading">HELP</h3>
                    <h1 className="content-title mb-4">Troubleshooting</h1>
                    <h2 className="content-subtitle">FAQ, service status, contact</h2>
                </div>
                <ArrowForwardIos sx={{ fontSize: "32px", transform: "rotate(90deg)", position: "absolute", bottom: "32px" }} />
            </section>
            {/* FAQ */}
            <section id="faq" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading"><span className="text-[16px]">HELP</span> — FAQ</h3>
                    <h2 className="content-title text-6xl py-2">Frequently Asked Questions</h2>
                    <div className="my-12 section-container-sm flex flex-col gap-4">
                        <Accordion className="bento-card p-4 content-body text-start" sx={{ background: "radial-gradient(circle at center,rgba(22, 22, 22, 1) 0%,rgba(15, 15, 15, 1) 100%)", color: "white" }}>
                            <AccordionSummary className="content-title text-xl" expandIcon={<ExpandMore sx={{ color: "white", fontSize: "32px" }} />}>
                                Question
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod impedit qui ducimus eius aliquid? Molestiae tempore temporibus officiis deserunt quasi.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="bento-card p-4 content-body text-start" sx={{ background: "radial-gradient(circle at center,rgba(22, 22, 22, 1) 0%,rgba(15, 15, 15, 1) 100%)", color: "white" }}>
                            <AccordionSummary className="content-title text-xl" expandIcon={<ExpandMore sx={{ color: "white", fontSize: "32px" }} />}>
                                Question
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod impedit qui ducimus eius aliquid? Molestiae tempore temporibus officiis deserunt quasi.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="bento-card p-4 content-body text-start" sx={{ background: "radial-gradient(circle at center,rgba(22, 22, 22, 1) 0%,rgba(15, 15, 15, 1) 100%)", color: "white" }}>
                            <AccordionSummary className="content-title text-xl" expandIcon={<ExpandMore sx={{ color: "white", fontSize: "32px" }} />}>
                                Question
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod impedit qui ducimus eius aliquid? Molestiae tempore temporibus officiis deserunt quasi.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="bento-card p-4 content-body text-start" sx={{ background: "radial-gradient(circle at center,rgba(22, 22, 22, 1) 0%,rgba(15, 15, 15, 1) 100%)", color: "white" }}>
                            <AccordionSummary className="content-title text-xl" expandIcon={<ExpandMore sx={{ color: "white", fontSize: "32px" }} />}>
                                Question
                            </AccordionSummary>
                            <AccordionDetails>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod impedit qui ducimus eius aliquid? Molestiae tempore temporibus officiis deserunt quasi.
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </section>
            {/* STATUS */}
            <section id="status" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading"><span className="text-[16px]">HELP</span> — STATUS</h3>
                    <h2 className="content-title text-6xl py-2">Heimdall status</h2>
                    <div className="bento-card w-max my-12 mx-auto flex gap-32">
                        <ul className="content-body flex flex-col text-start gap-8 p-8">
                            <li className="h-[30px]">Extrinsic Package</li>
                            <li className="h-[30px]">Intrinsic Package</li>
                            <li className="h-[30px]">Verification Checker</li>
                            <li className="h-[30px]">Watermarking</li>
                            <li className="h-[30px]">Contact Service</li>
                        </ul>
                        <ul className="content-body flex flex-col text-end gap-8 p-8">
                            <li className="flex items-center justify-end gap-4 h-[30px]">
                                <div className="w-[15px] h-[15px] bg-green-600 rounded-full"/>
                                <div className="w-[15px] h-[15px] bg-amber-600 rounded-full opacity-30"/>
                                <div className="w-[15px] h-[15px] bg-red-600 rounded-full opacity-30"/>
                            </li>
                            <li className="flex items-center justify-end gap-4 h-[30px]">
                                <div className="w-[15px] h-[15px] bg-green-600 rounded-full"/>
                                <div className="w-[15px] h-[15px] bg-amber-600 rounded-full opacity-30"/>
                                <div className="w-[15px] h-[15px] bg-red-600 rounded-full opacity-30"/>
                            </li>
                            <li className="flex items-center justify-end gap-4 h-[30px]">
                                <div className="w-[15px] h-[15px] bg-green-600 rounded-full"/>
                                <div className="w-[15px] h-[15px] bg-amber-600 rounded-full opacity-30"/>
                                <div className="w-[15px] h-[15px] bg-red-600 rounded-full opacity-30"/>
                            </li>
                            <li className="flex items-center justify-end gap-4 h-[30px]">
                                <div className="w-[15px] h-[15px] bg-green-600 rounded-full"/>
                                <div className="w-[15px] h-[15px] bg-amber-600 rounded-full opacity-30"/>
                                <div className="w-[15px] h-[15px] bg-red-600 rounded-full opacity-30"/>
                            </li>
                            <li className="flex items-center justify-end gap-4 h-[30px]">
                                <div className="w-[15px] h-[15px] bg-green-600 rounded-full"/>
                                <div className="w-[15px] h-[15px] bg-amber-600 rounded-full opacity-30"/>
                                <div className="w-[15px] h-[15px] bg-red-600 rounded-full opacity-30"/>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>
            {/* CONTACT */}
            <section id="contact" className="min-h-screen flex flex-col justify-center section-container-sm gap-8 pt-16">
                <div className="text-center">
                    <h3 className="content-miniheading"><span className="text-[16px]">HELP</span> — CONTACT</h3>
                    <h2 className="content-title text-6xl py-2">Reach out to us here</h2>
                    <form className="flex flex-col gap-8 text-start my-16" onSubmit={(e) => handleSubmit(e)}>
                        <div className="flex w-full gap-8">
                            <div className="flex flex-col gap-4 w-[50%]">
                                <label className="content-subtitle text-2xl">First Name*</label>
                                <input className="content-body text-lg rounded-md px-6 py-4 border border-neutral-400 text-white" placeholder="John" required/>
                            </div>
                            <div className="flex flex-col gap-4 w-[50%]">
                                <label className="content-subtitle text-2xl">Last Name*</label>
                                <input className="content-body text-lg rounded-md px-6 py-4 border border-neutral-400 text-white" placeholder="Doe" required/>
                            </div>
                        </div>
                        <div className="flex w-full gap-8">
                            <div className="flex flex-col gap-4 w-[50%]">
                                <label className="content-subtitle text-2xl">Email*</label>
                                <input className="content-body text-lg rounded-md px-6 py-4 border border-neutral-400 text-white" placeholder="johndoe@example.com" type="email" required/>
                            </div>
                            <div className="flex flex-col gap-4 w-[50%]">
                                <label className="content-subtitle text-2xl">Company</label>
                                <input className="content-body text-lg rounded-md px-6 py-4 border border-neutral-400 text-white" placeholder="John Doe Ltd."/>
                            </div>
                        </div>
                        <div className="flex w-full gap-8">
                            <div className="flex flex-col gap-4 w-full max-w-[800px]">
                                <label className="content-subtitle text-2xl">Message*</label>
                                <textarea className="content-body text-lg rounded-md px-6 py-4 border border-neutral-400 text-white h-32" placeholder="Type message here..." required/>
                            </div>
                        </div>
                        <Button className="w-[150px] h-[70px]" value="SUBMIT"/>
                    </form>
                </div>
            </section>
            <Footer />
        </>
    )
}