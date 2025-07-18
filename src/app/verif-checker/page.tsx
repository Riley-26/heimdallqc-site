"use client"

import React, { useState } from "react"
import { Button, ScrollWidget, IconContainer } from "@/components/ui/index";
import { Header, Footer } from "@/components/layout/index";
import { Cancel, CheckCircle, Search } from "@mui/icons-material";

export default function VerifChecker (){
    const [results, setResults] = useState(false)
    const [link, setLink] = useState("")
    const [verified, setVerified] = useState(false)

    const handleSearch = async (e:any) => {
        e.preventDefault()
        // BACKEND SEARCH
        const linkSearch = await fetch(`http://127.0.0.1:8000/api/verif-sites/${link}`)
        const status = linkSearch.status
        const linkResponse = await linkSearch.json()

        if (status === 200) {
            setVerified(true)
        } else {
            setVerified(false)
        }

        setResults(true)
        window.location.href = "#results"

    }

    return (
        <>
            {/* LINK INPUT */}
            <Header />
            <section id="link-input" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading">VERIFICATION CHECKER</h3>
                    <h2 className="content-title mb-6">Check if a website is Verified</h2>
                    <p className="content-subtitle mb-16">
                        If you see a website using Heimdall but are skeptical if it's legit or not, check here.
                    </p>
                    <form className="relative w-full mx-auto lg:max-w-[900px]" onSubmit={(e) => handleSearch(e)}>
                        <input className="content-body rounded-[40px] px-6 py-4 lg:p-8 border border-white h-10 lg:h-20 w-full text-white" placeholder="Input site's domain, i.e. 'heimdall.com'" value={link} onChange={(e) => setLink(e.target.value)} />
                        <IconContainer className={"absolute right-[50%] translate-x-[50%] lg:translate-x-0 mt-4 lg:mt-0 lg:top-[50%] lg:right-4 lg:translate-y-[-50%]"} role="submit">
                            <Search style={{ fontSize: "32px" }} />
                        </IconContainer>
                    </form>
                </div>
            </section>
            {/* DETAILS */}
            <section id="results" className="min-h-screen flex flex-col justify-center section-container gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading">RESULTS</h3>
                    {
                        !results ? <h2 className="content-title">The results will appear here</h2> : <div className="flex flex-col items-center justify-center w-full">
                            <a href="/" className="content-body my-4 underline underline-offset-4"><i>{link}</i></a>
                            <h2 className="content-title mb-6">This site is...</h2>
                            <div className="mt-6 flex flex-col items-center justify-center gap-2 bento-card w-[400px]">
                                {
                                    verified ? <>
                                        <CheckCircle sx={{ fontSize: "72px", color: "green" }} />
                                        <span className="content-subtitle">Verified</span>
                                    </> : <>
                                        <Cancel sx={{ fontSize: "72px", color: "red" }} />
                                        <span className="content-subtitle">Not Verified</span>
                                    </>
                                }
                            </div>
                        </div>
                    }
                </div>
            </section>
            <Footer />
        </>
    )
}