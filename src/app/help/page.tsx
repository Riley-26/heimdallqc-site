"use client"

import React, { useEffect, useState } from "react"
import { Button, IconContainer, ScrollWidget } from "@/components/ui/index";
import { ArrowForwardIos, Email, ExpandMore, LinkedIn } from "@mui/icons-material";
import { Header, Footer, Section } from "@/components/layout/index";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

const sections = [
    { id: "help", name: "Help" },
    { id: "faq", name: "FAQ" },
    { id: "status", name: "Status" },
    { id: "contact", name: "Contact" },
]

const statusNames: { [key: string]: string } = {
    "e_package": "Extrinsic Package",
    "i_package": "Intrinsic Package",
    "verif_checker": "Verification Checker",
    "watermarking": "Watermarking",
    "contact": "Contact"
}

export default function Help (){
    const [statuses, setStatuses] = useState([])

    const handleSubmit = (e:any) => {
        e.preventDefault()
    }

    const handleStatusCheck = async () => {

        try {
            const siteStatus = await fetch("http://127.0.0.1:8000/site-status")
            const siteStatusResponse = await siteStatus.json()
    
            if (siteStatus.status === 200){
                const newStatus:any = {}
                const statusResponseKeys = Object.keys(siteStatusResponse)
    
                for (let i=0; i<statusResponseKeys.length; i++){
                    newStatus[statusNames[statusResponseKeys[i]]] = siteStatusResponse[statusResponseKeys[i]]
                }
            
                setStatuses(newStatus)
            }
        } catch {
            return "error"
        }

    }

    useEffect(() => {
        handleStatusCheck()
    }, [])

    return (
        <>
            <Header />
            <ScrollWidget sections={sections} />
            {/* INTRO */}
            <Section id="help" className="section-start-area">
                <div className="absolute top-[45%] translate-y-[-50%] right-[50%] translate-x-[50%] p-2 foreground-z">
                    <img src={"images/SVG/Asset 3.svg"} className="logo-blur" />
                </div>
                <div className="section-container-sm text-center front-z">
                    <h3 className="content-miniheading">HELP</h3>
                    <h1 className="content-title mb-4">Troubleshooting</h1>
                    <h2 className="content-subtitle">FAQ, service status, contact</h2>
                </div>
                <ArrowForwardIos className="absolute bottom-12" sx={{ fontSize: "32px", transform: "rotate(90deg)" }} />
            </Section>
            {/* FAQ */}
            <Section id="faq" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading"><span className="text-[16px]">HELP</span> — FAQ</h3>
                    <h2 className="content-title text-6xl py-2">Frequently Asked Questions</h2>
                    <div className="my-12 section-container-sm flex flex-col gap-4">
                        <Accordion className="bento-card p-4 text-start" sx={{ background: "radial-gradient(circle at center,rgba(22, 22, 22, 1) 0%,rgba(15, 15, 15, 1) 100%)", color: "white" }}>
                            <AccordionSummary className="content-subtitle text-xl" expandIcon={<ExpandMore sx={{ color: "white", fontSize: "32px" }} />}>
                                What content-modification function should I choose?
                            </AccordionSummary>
                            <AccordionDetails className="content-body">
                                Typically, you would be best off choosing the function that makes the most sense for your application. E.g. for an academic business, the "Auto-citations" may be best. The "AI rewrite" would be ideal if you want to keep to natural-sounding language. If you want complete protection from suspected plagiarism, opt for the "Auto-removal" function.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="bento-card p-4 content-body text-start" sx={{ background: "radial-gradient(circle at center,rgba(22, 22, 22, 1) 0%,rgba(15, 15, 15, 1) 100%)", color: "white" }}>
                            <AccordionSummary className="content-subtitle text-xl" expandIcon={<ExpandMore sx={{ color: "white", fontSize: "32px" }} />}>
                                What if I run out of tokens?
                            </AccordionSummary>
                            <AccordionDetails className="content-body">
                                Each month, your tokens will be reset if you have fewer tokens than the set amount. If you need more tokens, you can purchase more manually or automatically when it runs low within your account.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="bento-card p-4 content-body text-start" sx={{ background: "radial-gradient(circle at center,rgba(22, 22, 22, 1) 0%,rgba(15, 15, 15, 1) 100%)", color: "white" }}>
                            <AccordionSummary className="content-subtitle text-xl" expandIcon={<ExpandMore sx={{ color: "white", fontSize: "32px" }} />}>
                                Do you have any enterprise plans?
                            </AccordionSummary>
                            <AccordionDetails className="content-body">
                                You may contact us if you have custom needs for your application, we are available to answer your requests.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion className="bento-card p-4 content-body text-start" sx={{ background: "radial-gradient(circle at center,rgba(22, 22, 22, 1) 0%,rgba(15, 15, 15, 1) 100%)", color: "white" }}>
                            <AccordionSummary className="content-subtitle text-xl" expandIcon={<ExpandMore sx={{ color: "white", fontSize: "32px" }} />}>
                                How can I get in contact with you?
                            </AccordionSummary>
                            <AccordionDetails className="content-body">
                                At the end of this page. Simply fill in the form to send us an email and we will get back to you as soon as we can.
                            </AccordionDetails>
                        </Accordion>
                    </div>
                </div>
            </Section>
            {/* STATUS */}
            <Section id="status" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading"><span className="text-[16px]">HELP</span> — STATUS</h3>
                    <h2 className="content-title text-6xl py-2">Heimdall status</h2>
                    <div className="bento-card my-12 mx-auto flex gap-32 max-w-[600px]">
                        <ul className="content-body flex flex-col text-start gap-8 p-8 w-full">
                            {
                                Object.keys(statuses).map((val:any, key) => {
                                    return <li key={key} className="h-[30px] w-full flex items-center justify-between">
                                        {val}
                                        <div className="flex gap-4">
                                            <div className={`w-[15px] h-[15px] bg-green-600 rounded-full ${statuses[val] !== "green" && "opacity-30"}`}/>
                                            <div className={`w-[15px] h-[15px] bg-amber-600 rounded-full ${statuses[val] !== "amber" && "opacity-30"}`}/>
                                            <div className={`w-[15px] h-[15px] bg-red-600 rounded-full ${statuses[val] !== "red" && "opacity-30"}`}/>
                                        </div>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                </div>
            </Section>
            {/* CONTACT */}
            <Section id="contact" className="min-h-screen flex flex-col justify-center section-container-sm gap-8 pt-16">
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
            </Section>
            <Footer />
        </>
    )
}