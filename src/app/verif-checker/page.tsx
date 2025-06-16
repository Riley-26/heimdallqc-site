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
                    <h3 className="content-miniheading">VERIFICATION CHECKER</h3>
                    <h2 className="content-title text-6xl mb-4">Check if a website is Verified</h2>
                    <p className="content-subtitle mb-16">
                        We will tell you if a website is authentically verified to use Heimdall
                    </p>
                    <div className="relative w-max mx-auto">
                        <input className="content-body rounded-[40px] p-8 border border-white h-20 min-w-[900px] text-white" placeholder="INPUT LINK TO SITE" />
                        <IconContainer extra={"absolute top-[50%] right-4 translate-y-[-50%]"}>
                            <Search style={{ fontSize: "32px" }} />
                        </IconContainer>
                    </div>
                </div>
            </section>
        </>
    )
}