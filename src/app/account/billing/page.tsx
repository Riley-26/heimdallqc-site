"use client"

import { BuyTokensAlert } from "@/components/alerts/index"
import { IconContainer } from "@/components/ui"
import { Cancel, ChangeCircle, ChangeCircleOutlined, Refresh, Token } from "@mui/icons-material"
import React, { useState } from "react"

export default function Billing() {
    const [buyTokens, setBuyTokens] = useState(false)

    return (
        <>
            <section id="billing" className="min-h-screen pt-12 px-8 xl:px-16">
                <BuyTokensAlert isOpen={buyTokens} onClose={() => setBuyTokens(false)} />
                <h3 className="content-miniheading text-[16px]">ACCOUNT</h3>
                <h1 className="content-title text-4xl">Billing</h1>
                <div className="grid grid-cols-6 grid-rows-2 gap-6 my-8">
                    <div className="min-h-[300px] bento-card flex flex-col relative col-span-2 row-span-1">
                        <h2 className="content-subtitle text-xl">
                            Account Info
                            <div className="h-[2px] mt-2 w-full opacity-30 bg-gradient-to-r from-[#d8af41] to-transparent rounded-full" />
                        </h2>
                        <div className="h-full flex items-center justify-center content-body mt-4 w-full p-4 border rounded-sm border-neutral-800">
                            Coming soon
                        </div>
                    </div>
                    <div className="bento-card flex flex-col relative col-span-2 row-span-1">
                        <h2 className="content-subtitle text-xl">
                            Payment Details
                            <div className="h-[2px] mt-2 w-full opacity-30 bg-gradient-to-r from-[#d8af41] to-transparent rounded-full" />
                        </h2>
                        <div className="h-full flex items-center justify-center content-body mt-4 w-full p-4 border rounded-sm border-neutral-800">
                            Coming soon
                        </div>
                    </div>
                    <div className="bento-card flex flex-col relative col-span-2 row-span-1">
                        <h2 className="content-subtitle text-xl">
                            Plan Settings
                            <div className="h-[2px] mt-2 w-full opacity-30 bg-gradient-to-r from-[#d8af41] to-transparent rounded-full" />
                        </h2>
                        <div className="h-full flex items-center justify-center gap-8 content-body mt-4 w-full p-4 border rounded-sm border-neutral-800">
                            <div className=" flex flex-col items-center gap-2">
                                <IconContainer>
                                    <ChangeCircleOutlined sx={{ fontSize: "36px" }} />
                                </IconContainer>
                                <span>Change Plan</span>
                            </div>
                            <div className=" flex flex-col items-center gap-2">
                                <IconContainer>
                                    <Cancel sx={{ fontSize: "36px" }} />
                                </IconContainer>
                                <span>Cancel Plan</span>
                            </div>
                        </div>
                    </div>
                    <div className="bento-card flex flex-col relative row-span-1 col-span-3">
                        <h2 className="content-subtitle text-xl">
                            Invoices
                            <div className="h-[2px] mt-2 w-full opacity-30 bg-gradient-to-r from-[#d8af41] to-transparent rounded-full" />
                        </h2>
                        <div className="h-full flex items-center justify-center content-body mt-4 w-full p-4 border rounded-sm border-neutral-800">
                            Coming soon
                        </div>
                    </div>
                    <div className="bento-card flex flex-col relative row-span-1 col-span-3">
                        <h2 className="content-subtitle text-xl">
                            Plan Settings
                            <div className="h-[2px] mt-2 w-full opacity-30 bg-gradient-to-r from-[#d8af41] to-transparent rounded-full" />
                        </h2>
                        <div className="h-full flex items-center justify-center gap-8 content-body mt-4 w-full p-4 border rounded-sm border-neutral-800">
                            <div className="w-[50%]">

                            </div>
                            <div className="w-[50%] flex items-center justify-center gap-8">
                                <div className=" flex flex-col items-center gap-2">
                                    <IconContainer onClick={() => setBuyTokens(true)}>
                                        <Token sx={{ fontSize: "36px" }} />
                                    </IconContainer>
                                    <span>Buy Tokens</span>
                                </div>
                                <div className=" flex flex-col items-center gap-2">
                                    <IconContainer>
                                        <Refresh sx={{ fontSize: "36px" }} />
                                    </IconContainer>
                                    <span>Auto-refresh</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}