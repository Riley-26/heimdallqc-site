"use client"

import React, { useState } from "react"
import { Button, ScrollWidget, IconContainer } from "@/components/ui/index";
import { CheckCircle, Search } from "@mui/icons-material";

export default function VerifChecker (){
    const [results, setResults] = useState(false)
    const [link, setLink] = useState("hello")

    const handleSearch = async (e:any) => {
        const link = e.target[0].value
        // BACKEND SEARCH
        if (window.location.href === link) {
            setResults(true)
        }
        // 
        e.preventDefault()
    }

    return (
        <>
            {/* LINK INPUT */}
            <section id="link-input" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading">VERIFICATION CHECKER</h3>
                    <h2 className="content-title text-6xl mb-4">Check if a website is Verified</h2>
                    <p className="content-subtitle mb-16">
                        If you see a website using Heimdall but are skeptical if it's legit or not, check here.
                    </p>
                    <form className="relative w-max mx-auto" onSubmit={(e) => handleSearch(e)}>
                        <input className="content-body rounded-[40px] p-8 border border-white h-20 min-w-[900px] text-white" placeholder="INPUT LINK TO SITE" />
                        <IconContainer className={"absolute top-[50%] right-4 translate-y-[-50%]"} role="submit">
                            <Search style={{ fontSize: "32px" }} />
                        </IconContainer>
                    </form>
                </div>
            </section>
            {/* DETAILS */}
            <section id="link-details" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading">RESULTS</h3>
                    {
                        !results ? <h2 className="content-title text-6xl">Your results will appear here</h2> : <div>
                            <h2 className="content-title text-6xl mb-6">This site is...</h2>
                            <a href="/" className="content-body my-4 underline underline-offset-4"><i>{link}</i></a>
                            <div className="mt-12 flex flex-col items-center justify-center gap-2">
                                <CheckCircle sx={{ fontSize: "72px", color: "green" }} />
                                <span className="content-subtitle">Verified</span>
                            </div>
                        </div>
                    }
                </div>
            </section>
        </>
    )
}