"use client"

import React from "react"
import { Button, ScrollWidget, IconContainer } from "@/components/ui/index";
import { Search } from "@mui/icons-material";

export default function VerifChecker (){
    return (
        <>
            {/* LINK INPUT */}
            <section id="link-input" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center relative">
                    <h2 className="content-title text-6xl py-2 mb-6">Check if a website is Verified with Heimdall</h2>
                    <p className="content-body mb-12 section-container-sm">
                        We will tell you if a website is authentically verified with Heimdall
                    </p>
                    <div className="relative w-max mx-auto">
                        <input className="content-body rounded-[40px] p-8 border border-white h-20 min-w-[900px] text-white" placeholder="INPUT LINK TO SITE" />
                        <IconContainer size={32} extra={"absolute top-[50%] right-4 translate-y-[-50%]"} link={true} href={"/about"}>
                            <Search style={{ fontSize: "32px" }} />
                        </IconContainer>
                    </div>
                </div>
            </section>
        </>
    )
}