"use client"

import React, { useRef } from "react"
import Image from "next/image";
import { Header } from "@/components/layout/index";

export default function Home() {

    return (
        <>
            {/* HERO */}
            <section className="min-h-screen flex flex-col justify-center items-center container gap-4">
                <h1 className="hero-title">Show What's Human, What's AI</h1>
                <h2 className="hero-title text-4xl">Real-time AI monitoring that turns transparency into competitive advantage</h2>
            </section>
        </>
    );
}
