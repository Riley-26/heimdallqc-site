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
            <Header scrolled={true}/>
            <Sidebar />
            <section id="account" className="min-h-screen flex flex-col justify-center section-container gap-8">
                
            </section>
        </>
    )
}