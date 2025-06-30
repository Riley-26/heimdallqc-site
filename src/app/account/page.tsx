"use client"

import React from "react";
import { ScrollWidget } from "@/components/ui/index";
import { ArrowForwardIos } from "@mui/icons-material";
import { Header } from "@/components/layout/index";
import { Sidebar } from "@/components/layout/Sidebar";

export default function Account(){

    return (
        <>
            {/* INTRO */}
            <section id="account" className="min-h-screen pt-[100px] px-16">
                <h3 className="content-miniheading text-[16px]">ACCOUNT</h3>
                <h1 className="content-title text-5xl">Account</h1>
                <div className="grid grid-cols-5 gap-6 my-8">
                    <div className="bento-card col-span-2">
                        <h2 className="content-subtitle text-2xl mb-4">New</h2>
                        <div className="border-2 border-neutral-800 rounded-md h-[200px]">

                        </div>
                    </div>
                    <div className="bento-card col-span-3">
                        <h2 className="content-subtitle text-2xl mb-4">Overview</h2>
                        <div className="border-2 border-neutral-800 rounded-md h-[200px]">

                        </div>
                    </div>
                    <div className="bento-card col-span-3">
                        <h2 className="content-subtitle text-2xl mb-4">Analytics</h2>
                        <div className="border-2 border-neutral-800 rounded-md h-[200px] flex justify-center items-center">
                            <span className="content-body">Coming soon</span>
                        </div>
                    </div>
                    <div className="bento-card col-span-2">
                        <h2 className="content-subtitle text-2xl mb-4">Plan Usage</h2>
                        <div className="border-2 border-neutral-800 rounded-md h-[200px]">
                            
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}