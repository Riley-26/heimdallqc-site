"use client"

import React from "react"
import { Button, IconContainer, ScrollWidget, RefLink, Parallax } from "@/components/ui/index";
import { ArrowForwardIos } from "@mui/icons-material";
import { Header, Footer, Section } from "@/components/layout/index";

const sections = [
    { id: "about", name: "About" },
    { id: "statement", name: "Statement" },
    { id: "timeline", name: "Timeline" },
    { id: "motives", name: "Motives" },
    { id: "correlation", name: "Correlation" },
]

const refLinks = [
    { id: 3, title: "The cost of gross misinformation on the economy", link: "https://cesie.org/en/news/true-cost-of-disinformation-mega/" }
]

export default function About (){
    return (
        <>
            <Header />
            <ScrollWidget sections={sections} />
            {/* INTRO */}
            <Section id="about" className="section-start-area">
                <div className="absolute top-[45%] translate-y-[-50%] right-[50%] translate-x-[50%] p-2 foreground-z">
                    <img src={"images/SVG/Asset 3.svg"} className="logo-blur" />
                </div>
                <div className="section-container-sm text-center front-z">
                    <h3 className="content-miniheading">ABOUT</h3>
                    <h1 className="content-title mb-4">Heimdall is safeguarding our internet, with your help</h1>
                    <h2 className="content-subtitle">Our timeline, motivations and predictions for the future</h2>
                </div>
                <ArrowForwardIos className="absolute bottom-12" sx={{ fontSize: "32px", transform: "rotate(90deg)" }} />
            </Section>
            {/* STATEMENT */}
            <Section id="statement" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="relative max-w-[1000px]">
                    <h3 className="content-miniheading"><span className="text-xs sm:text-sm">ABOUT</span> — STATEMENT</h3>
                    <h2 className="content-title">What is Heimdall?</h2>
                    <p className="content-body mt-8 mx-0">
                        Our core ethos stems from the notion that all knowledge should be shared, and no knowledge should be hidden.
                        <strong> Heimdall</strong> is an Automated End-to-end Content Verification System, designed for businesses to protect the integrity of their website's content whilst informing consumers of content authenticity and potential misinformation.
                        <br/>
                        <br/>
                        AI tools carry a huge risk of regurgitating training data when generating text, with no one the wiser. 
                        That is, until people (and Search Engines) start to notice the familiar content, and it all cascades from there. Before you know it your business' reputation is not what it once was, and neither are your site's search rankings.
                        But what if there was a way to keep the efficiency of AI tools, whilst minimising the negative consequences associated with it?
                        <br/>
                        <br/>
                        People need to know where information is coming from, and it is not always obvious. Businesses <a className="text-link" href="/features#stats">benefit</a> immensely from transparency. The issue 
                        with source disclosure is that it is not scalable or precise enough to do so manually. Heimdall will remove that burden from your shoulders.
                    </p>
                </div>
            </Section>
            {/* TIMELINE */}
            <Section id="timeline" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="">
                    <h3 className="content-miniheading text-center lg:text-start"><span className="text-xs sm:text-sm">ABOUT</span> — TIMELINE</h3>
                    <div className="my-20 hidden lg:block">
                        <div className="flex justify-center gap-20 text-center mb-4">
                            <div className="w-[30%]">
                                <h2 className="content-title text-3xl">Concept</h2>
                                <p className="content-body">
                                    We aimed to find a way to tackle misinformation created by AI, but without punishing people for using AI tools.
                                </p>
                            </div>
                            <div className="w-[30%]">
                                <h2 className="content-title text-3xl">Testing</h2>
                                <p className="content-body">
                                    We found that businesses and users alike benefitted when focusing on content quality.
                                </p>
                            </div>
                            <div className="w-[30%]">
                                <h2 className="content-title text-3xl">Future</h2>
                                <p className="content-body">
                                    Due to the fast-paced nature of the AI industry, we will constantly be tuning our algorithms to stay ahead.
                                </p>
                            </div>
                        </div>
                        <div className="">
                            <div className="flex justify-center">
                                <div className="w-[15%] min-h-[50px] border-r-2 border-r-[#d9cdad77] relative"></div>
                                <div className="w-[35%] min-h-[50px] border-r-2 border-r-[#d9cdad77]" />
                                <div className="w-[35%] min-h-[50px] border-r-2 border-r-[#d9cdad77]" />
                                <div className="w-[15%] min-h-[50px]" />
                            </div>
                            <div className="h-0.5 w-full rounded-[50%] bg-gradient-to-r from-transparent via-[#d8af41] to-transparent" />
                            <div className="flex justify-center">
                                <div className="w-[32%] min-h-[50px] border-r-2 border-r-[#d9cdad77]" />
                                <div className="w-[36%] min-h-[50px] border-r-2 border-r-[#d9cdad77]" />
                                <div className="w-[32%] min-h-[50px]" />
                            </div>
                        </div>
                        <div className="flex justify-center gap-20 text-center mb-4">
                            <div className="w-[30%]">
                                <h2 className="content-title text-3xl">Design</h2>
                                <p className="content-body">
                                    Focusing on transparency, Heimdall was designed to emphasise how important content source disclosure is.
                                </p>
                            </div>
                            <div className="w-[30%]">
                                <h2 className="content-title text-3xl">Result</h2>
                                <p className="content-body">
                                    With this new system to verify AI content, websites can avoid facing potential consequences of AI non-disclosure.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="my-20 block lg:hidden">
                        <div className="flex flex-col justify-center items-center text-center mb-4">
                            <div className="max-w-[400px]">
                                <h2 className="content-title text-2xl sm:text-3xl">Concept</h2>
                                <p className="content-body">
                                    We aimed to find a way to tackle misinformation created by AI, but without punishing people for using AI tools.
                                </p>
                            </div>
                            <div className="h-0.5 w-24 my-16 rotate-90 rounded-full bg-gradient-to-r from-transparent via-[#d8af41] to-transparent" />
                            <div className="max-w-[400px]">
                                <h2 className="content-title text-2xl sm:text-3xl">Testing</h2>
                                <p className="content-body">
                                    We found that businesses and users alike benefitted when focusing on content quality.
                                </p>
                            </div>
                            <div className="h-0.5 w-24 my-16 rotate-90 rounded-full bg-gradient-to-r from-transparent via-[#d8af41] to-transparent" />
                            <div className="max-w-[400px]">
                                <h2 className="content-title text-2xl sm:text-3xl">Future</h2>
                                <p className="content-body">
                                    Due to the fast-paced nature of the AI industry, we will constantly be tuning our algorithms to stay ahead.
                                </p>
                            </div>
                            <div className="h-0.5 w-24 my-16 rotate-90 rounded-full bg-gradient-to-r from-transparent via-[#d8af41] to-transparent" />
                            <div className="max-w-[400px]">
                                <h2 className="content-title text-2xl sm:text-3xl">Design</h2>
                                <p className="content-body">
                                    Focusing on transparency, Heimdall was designed to emphasise how important content source disclosure is.
                                </p>
                            </div>
                            <div className="h-0.5 w-24 my-16 rotate-90 rounded-full bg-gradient-to-r from-transparent via-[#d8af41] to-transparent" />
                            <div className="max-w-[400px]">
                                <h2 className="content-title text-2xl sm:text-3xl">Result</h2>
                                <p className="content-body">
                                    With this new system to verify AI content, websites can avoid facing potential consequences of AI non-disclosure.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            {/* CORRELATION */}
            <Section id="correlation" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="relative max-w-[1000px]">
                    <h3 className="content-miniheading"><span className="text-xs sm:text-sm">ABOUT</span> — CORRELATION</h3>
                    <h2 className="content-title">Correlation between AI and Plagiarism</h2>
                    <p className="content-body mt-8 mb-16">
                        Plagiarism comes in many forms, sometimes harmless, other times business-threatening.
                        <br />
                        <br />
                        The mass adoption of AI tools means that duplicate and regurgitated content can make its way anywhere, with minimal oversight. But it's much faster to produce content using AI. There is no doubt that amongst all of the AI content being generated, 
                        a good portion is plagiarised. <strong>This might mean your content</strong>. The implications of plagiarised content could set a business back many hours of manual review and, potentially, expensive lawsuits. Now this may not seem like an immediate issue, and you could be right. This issue has no set date, it could be tomorrow or even next year.
                        <br />
                        <br />
                        But can you afford to take the risk of leaving plagiarised text unchecked?
                    </p>
                </div>
            </Section>
            {/* MOTIVES */}
            <Section id="motives" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="relative max-w-[1000px]">
                    <h3 className="content-miniheading"><span className="text-xs sm:text-sm">ABOUT</span> — MOTIVES</h3>
                    <h2 className="content-title">Helping to create a hopeful future</h2>
                    <p className="content-body mt-8 mb-16">
                        Don't get us wrong, we are not condemning the use of AI to generate content. Modern AI is remarkable. We used it a lot in the development of Heimdall! However, we have noticed that the quality of content on the web is slowly diminishing, and it will come to a point when we will no longer be able 
                        to tell the difference between what's Human and what's AI. But what if there was a way to keep the efficiency of AI tools, whilst removing the negative consequences associated with it?
                        <br />
                        <br />
                        We aim to minimise, or at least reduce, the role AI plays in the 78 billion USD<RefLink data={refLinks[0]} /> damage caused by gross misinformation. AI is perfect for its speed and efficiency when facing complex tasks, but Human content is much purer quality. All we want to do is disclose the sources of content, in order to reduce the legal implications and to inform people that what 
                        they are reading may be AI generated, so that they can make their own decisions. We are not punishing AI use, we are protecting the integrity of the internet.
                    </p>
                </div>
            </Section>
            <Footer />
        </>
    )
}