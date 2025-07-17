"use client"

import React, { useEffect, useState } from "react";
import { ScrollWidget } from "@/components/ui/index";
import { ArrowForwardIos, GroupAdd, ManageSearch, Token } from "@mui/icons-material";
import { Header } from "@/components/layout/index";
import { Sidebar } from "@/components/layout/Sidebar";
import { useSession, signIn } from "next-auth/react";
import { apiService } from "@/services/apiService";

export default function Account(){
    const { data: session, status } = useSession()
    const [ownerData, setOwnerData] = useState<any>([])
    const [error, setError] = useState(null)

    const fetchOwnerData = async () => {
        try {
            const owner = await apiService.fetchOwner(session?.user.id)
    
            setOwnerData(owner)
        } catch (err:any) {
            setError(err.message)
        }
    }

    useEffect(() => {
        if (status === "authenticated") fetchOwnerData()
    }, [status])

    return (
        <>
            {/* INTRO */}
            <section id="account" className="min-h-screen pt-12 px-8 xl:px-16">
                <h3 className="content-miniheading text-[16px]">ACCOUNT</h3>
                <h1 className="content-title text-4xl">Account</h1>
                <div className="flex flex-col gap-8 my-8">
                    <div className="grid grid-cols-3 gap-8 min-h-[200px]">
                        <div className="bento-card flex flex-col relative">
                            <h2 className="content-subtitle text-xl w-max">
                                Tokens Remaining
                                <div className="h-[2px] mt-2 w-full opacity-30 bg-gradient-to-r from-[#d8af41] to-transparent rounded-full" />
                            </h2>
                            <span className="content-body tracking-wider text-4xl font-semibold w-full h-full text-center mt-8 pr-16">{ownerData?.current_tokens}</span>
                            <div className="flex justify-center items-center absolute bottom-6 right-8 text-[140px]">
                                <Token className="opacity-10" fontSize="inherit" />
                            </div>
                        </div>
                        <div className="bento-card flex flex-col relative">
                            <h2 className="content-subtitle text-xl w-max">
                                Watermarks Created
                                <div className="h-[2px] mt-2 w-full opacity-30 bg-gradient-to-r from-[#d8af41] to-transparent rounded-full" />
                            </h2>
                            <span className="content-body tracking-wider text-4xl font-semibold w-full h-full text-center mt-8 pr-16">{ownerData?.watermarks_made}</span>
                            <div className="flex justify-center items-center absolute bottom-8 right-10 text-[100px]">
                                <img src={"/images/SVG/Asset 7.svg"} className="h-[120px] opacity-10 contrast-0" />
                            </div>
                        </div>
                        <div className="bento-card flex flex-col relative">
                            <h2 className="content-subtitle text-xl w-max">
                                Plagiarisms Prevented
                                <div className="h-[2px] mt-2 w-full opacity-30 bg-gradient-to-r from-[#d8af41] to-transparent rounded-full" />
                            </h2>
                            <span className="content-body tracking-wider text-4xl font-semibold w-full h-full text-center mt-8 pr-16">{ownerData?.plagiarisms_prevented}</span>
                            <div className="flex justify-center items-center absolute bottom-6 right-8 text-[140px]">
                                <ManageSearch className="opacity-10" fontSize="inherit" />
                            </div>
                        </div>
                    </div>
                    <div className="bento-card col-span-3">
                        <h2 className="content-subtitle text-xl">
                            Hours of manual reviewing saved
                            <div className="h-[2px] mt-2 w-full opacity-30 bg-gradient-to-r from-[#d8af41] to-transparent rounded-full" />
                        </h2>
                        <div className="min-h-[500px] flex items-center justify-center content-body mt-4 w-full p-4 border rounded-sm border-neutral-800">
                            Coming soon
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}