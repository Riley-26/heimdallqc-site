'use client'

import { AlertToast } from '@/components/alerts'
import { Footer, Header, Section } from '@/components/layout/index'
import Feedback from '@/components/ui/Feedback'
import SVGPulseGlow from '@/components/ui/ImgPulse'
import { Button, ScrollWidget } from '@/components/ui/index'
import { apiService } from '@/services/apiService'
import type { WarningType } from '@/types/mainTypes'
import { ArrowForwardIos, ExpandMore } from '@mui/icons-material'
import Accordion from '@mui/material/Accordion'
import AccordionDetails from '@mui/material/AccordionDetails'
import AccordionSummary from '@mui/material/AccordionSummary'
import Image from 'next/image'
import { useEffect, useState } from 'react'

interface Status {
    name: string
    color: 'green' | 'amber' | 'red'
}

const sections = [
    { id: 'help', name: 'Help' },
    { id: 'faq', name: 'FAQ' },
    { id: 'status', name: 'Status' },
    { id: 'contact', name: 'Contact' },
]

const statusNames: { [key: string]: string } = {
    e_package: 'Extrinsic Package',
    i_package: 'Intrinsic Package',
    verif_checker: 'Verification Checker',
    watermarking: 'Watermarking',
    contact: 'Contact',
}

export default function Help() {
    const [alertType, setAlertType] = useState<WarningType>('alert')
    const [newAlert, setNewAlert] = useState<string | null>(null)
    const [serviceStatuses, setServiceStatuses] = useState<Status[] | null>(null)

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
    }

    const handleStatusCheck = async () => {
        try {
            const siteStatus = await apiService.getSiteStatus()
            const newStatus: Status[] = []

            Object.keys(statusNames).map((val) => {
                newStatus.push({
                    name: statusNames[val],
                    color: siteStatus[val]
                })
            })

            setServiceStatuses(newStatus)

        } catch (err: unknown) {
            if (err instanceof Error) {
                setNewAlert(err.message)
            } else {
                setNewAlert('An unknown error occurred')
            }
            setAlertType('error')
        }
    }

    useEffect(() => {
        handleStatusCheck()
    }, [])

    return (
        <>
            <Header />
            <ScrollWidget sections={sections} />
            <Feedback />
            {newAlert && <AlertToast warning={alertType} message="Failed to fetch statuses"></AlertToast>}
            {/* INTRO */}
            <Section id="help" className="section-start-area">
                <div className="foreground-z absolute top-[45%] right-[50%] translate-x-[50%] translate-y-[-50%] p-2">
                    <SVGPulseGlow className={"back-z opacity-30"} />
                </div>
                <div className="section-container-sm front-z text-center">
                    <h3 className="content-miniheading">HELP</h3>
                    <h1 className="content-title mb-4">Troubleshooting</h1>
                    <h2 className="content-subtitle">FAQ, service status, contact</h2>
                </div>
                <ArrowForwardIos className="absolute bottom-12" sx={{ fontSize: '32px', transform: 'rotate(90deg)' }} />
            </Section>
            {/* FAQ */}
            <Section id="faq" className="section-container flex min-h-screen flex-col justify-center gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading">
                        <span className="text-[16px]">HELP</span> — FAQ
                    </h3>
                    <h2 className="content-title py-2">Frequently Asked Questions</h2>
                    <div className="max-w-[1000px] mx-auto my-12 flex flex-col gap-4">
                        <Accordion
                            className="bento-card p-2 text-start lg:p-4"
                            sx={{ background: 'radial-gradient(circle at center,rgba(22, 22, 22, 1) 0%,rgba(15, 15, 15, 1) 100%)', color: 'white' }}
                        >
                            <AccordionSummary
                                className="content-subtitle text-base md:text-xl"
                                expandIcon={<ExpandMore sx={{ color: 'white', fontSize: '32px' }} />}
                            >
                                What content-modification function should I choose?
                            </AccordionSummary>
                            <AccordionDetails className="content-body">
                                Typically, you would be best off choosing the function that makes the most sense for your application. E.g. for an academic
                                business, the &apos;Auto-citations&apos; may be best. The &apos;AI rewrite&apos; would be ideal if you want to keep to natural-sounding language. If
                                you want complete protection from suspected plagiarism, opt for the &apos;Auto-removal&apos; function.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            className="bento-card content-body p-2 text-start lg:p-4"
                            sx={{ background: 'radial-gradient(circle at center,rgba(22, 22, 22, 1) 0%,rgba(15, 15, 15, 1) 100%)', color: 'white' }}
                        >
                            <AccordionSummary
                                className="content-subtitle text-base md:text-xl"
                                expandIcon={<ExpandMore sx={{ color: 'white', fontSize: '32px' }} />}
                            >
                                How long will the tokens last me?
                            </AccordionSummary>
                            <AccordionDetails className="content-body">
                                A text of around 300 characters, would typically cost ~12 tokens. This comes from the AI check, plagiarism check and modification function. For 1000 tokens, 
                                this should last around 80 submissions.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            className="bento-card content-body p-2 text-start lg:p-4"
                            sx={{ background: 'radial-gradient(circle at center,rgba(22, 22, 22, 1) 0%,rgba(15, 15, 15, 1) 100%)', color: 'white' }}
                        >
                            <AccordionSummary
                                className="content-subtitle text-base md:text-xl"
                                expandIcon={<ExpandMore sx={{ color: 'white', fontSize: '32px' }} />}
                            >
                                What if I run out of tokens?
                            </AccordionSummary>
                            <AccordionDetails className="content-body">
                                Each month, your plan&apos;s token allowance is added to your token total.
                                If you need more tokens, you can purchase more manually or automatically when it runs low within your account.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            className="bento-card content-body p-2 text-start lg:p-4"
                            sx={{ background: 'radial-gradient(circle at center,rgba(22, 22, 22, 1) 0%,rgba(15, 15, 15, 1) 100%)', color: 'white' }}
                        >
                            <AccordionSummary
                                className="content-subtitle text-base md:text-xl"
                                expandIcon={<ExpandMore sx={{ color: 'white', fontSize: '32px' }} />}
                            >
                                Do you have any enterprise plans?
                            </AccordionSummary>
                            <AccordionDetails className="content-body">
                                You may contact us if you have custom needs for your application, we are available to answer your questions.
                            </AccordionDetails>
                        </Accordion>
                        <Accordion
                            className="bento-card content-body p-2 text-start lg:p-4"
                            sx={{ background: 'radial-gradient(circle at center,rgba(22, 22, 22, 1) 0%,rgba(15, 15, 15, 1) 100%)', color: 'white' }}
                        >
                            <AccordionSummary
                                className="content-subtitle text-base md:text-xl"
                                expandIcon={<ExpandMore sx={{ color: 'white', fontSize: '32px' }} />}
                            >
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
            <Section id="status" className="section-container flex min-h-screen flex-col justify-center gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading">
                        <span className="text-[16px]">HELP</span> — STATUS
                    </h3>
                    <h2 className="content-title py-2">Service status</h2>
                    <div className="bento-card mx-auto my-12 flex min-h-[400px] max-w-[600px] items-center justify-center gap-32">
                        {serviceStatuses ? (
                            <ul className="content-body flex w-full flex-col gap-8 p-8 text-start">
                                {serviceStatuses.map((val, key) => {
                                    return (
                                        <li key={key} className="flex h-[30px] w-full items-center justify-between">
                                            {val.name}
                                            <div className="flex gap-4">
                                                <div className={`h-[15px] w-[15px] rounded-full bg-green-600 ${val.color !== 'green' && 'opacity-30'}`} />
                                                <div className={`h-[15px] w-[15px] rounded-full bg-amber-600 ${val.color !== 'amber' && 'opacity-30'}`} />
                                                <div className={`h-[15px] w-[15px] rounded-full bg-red-600 ${val.color !== 'red' && 'opacity-30'}`} />
                                            </div>
                                        </li>
                                    )
                                })}
                            </ul>
                        ) : (
                            <span className="content-body">Service status unavailable</span>
                        )}
                    </div>
                </div>
            </Section>
            {/* CONTACT */}
            <Section id="contact" className="section-container-sm flex min-h-screen flex-col justify-center gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading">
                        <span className="text-[16px]">HELP</span> — CONTACT
                    </h3>
                    <h2 className="content-title py-2">Reach out to us here</h2>
                    <form className="my-16 flex flex-col gap-8 px-4 text-start xl:px-0" onSubmit={(e) => handleSubmit(e)}>
                        <div className="flex w-full flex-col gap-8 md:flex-row">
                            <div className="flex flex-col gap-4 md:w-[50%]">
                                <label className="content-subtitle">First Name*</label>
                                <input className="content-body rounded-md border border-neutral-400 px-4 py-4 text-white md:px-6" placeholder="John" required />
                            </div>
                            <div className="flex flex-col gap-4 md:w-[50%]">
                                <label className="content-subtitle">Last Name*</label>
                                <input className="content-body rounded-md border border-neutral-400 px-4 py-4 text-white md:px-6" placeholder="Doe" required />
                            </div>
                        </div>
                        <div className="flex w-full flex-col gap-8 md:flex-row">
                            <div className="flex flex-col gap-4 md:w-[50%]">
                                <label className="content-subtitle">Email*</label>
                                <input
                                    className="content-body rounded-md border border-neutral-400 px-4 py-4 text-white md:px-6"
                                    placeholder="johndoe@example.com"
                                    type="email"
                                    required
                                />
                            </div>
                            <div className="flex flex-col gap-4 md:w-[50%]">
                                <label className="content-subtitle">Company</label>
                                <input className="content-body rounded-md border border-neutral-400 px-4 py-4 text-white md:px-6" placeholder="John Doe Ltd." />
                            </div>
                        </div>
                        <div className="flex w-full gap-8">
                            <div className="flex w-full max-w-[800px] flex-col gap-4">
                                <label className="content-subtitle">Message*</label>
                                <textarea
                                    className="content-body h-32 rounded-md border border-neutral-400 px-4 py-4 text-white md:px-6"
                                    placeholder="Type message here..."
                                    required
                                />
                            </div>
                        </div>
                        <Button className="h-[60px] w-[120px] md:h-[70px] md:w-[150px]" value="SUBMIT" />
                    </form>
                </div>
            </Section>
            <Footer />
        </>
    )
}
