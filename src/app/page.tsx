"use client"

import React, { useRef } from "react"
import Image from "next/image";
import { Header } from "@/components/layout/index";
import { useParallax } from '@/hooks/useParallax';

export default function Home() {
    const { ref, progress } = useParallax({
        speed: 0.3,
        onUpdate: (progress, offset) => {
        // Custom animations based on scroll progress
        console.log('Progress:', progress, 'Offset:', offset)
        }
    })

    return (
        <div className="h-[500px]">
            <span className="h-20 w-20 bg-white absolute" ref={ref as React.RefObject<HTMLDivElement>}></span>
        </div>
    );
}
