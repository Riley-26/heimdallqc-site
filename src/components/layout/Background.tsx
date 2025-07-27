'use client'

import React, { useEffect, useRef, useState } from 'react'

interface Point {
    x: number
    y: number
}

export const Background: React.FC = () => {
    const vignetteRef = useRef<HTMLDivElement | null>(null)

    const [isMounted, setIsMounted] = useState(false)

    const pathRef = useRef<SVGPathElement>(null)
    const glowRef = useRef<SVGPathElement>(null)
    const tickingRef = useRef(false)

    // Path that goes from top to bottom of viewport
    //const pathData = "M 100 50 L 300 150 L 200 250 L 450 350 L 350 450 L 600 550 L 500 650 L 750 750 L 650 850 L 900 950";
    const pathData = 'M 80 20 L 700 950'

    const updateLightPosition = (pRef: any, gRef: any) => {
        if (!pRef.current || !gRef.current) return

        const scrollTop = window.pageYOffset
        const documentHeight = document.documentElement.scrollHeight - window.innerHeight
        const progress = Math.min(scrollTop / documentHeight, 1)

        // Create a moving section of light instead of progressive reveal
        const pathLength = pRef.current.getTotalLength()
        const lightSectionLength = pathLength * 0.1 // Light section is 20% of total path
        const glowSectionLength = pathLength * 0.1 // Glow section is 8% of total path (smaller)
        const lightPosition = progress * pathLength
        const glowPosition = progress * pathLength + (lightSectionLength - glowSectionLength) / 2 // Center the glow

        // Calculate dash pattern for moving light section
        const lightDashArray = `0 ${lightPosition} ${lightSectionLength} ${pathLength}`
        const glowDashArray = `0 ${glowPosition} ${glowSectionLength} ${pathLength}`

        // Update both paths
        pRef.current.style.strokeDasharray = lightDashArray
        gRef.current.style.strokeDasharray = glowDashArray
    }

    const handleScroll = () => {
        if (!tickingRef.current) {
            requestAnimationFrame(() => {
                updateLightPosition(pathRef, glowRef)
                tickingRef.current = false
            })
            tickingRef.current = true
        }
    }

    useEffect(() => {
        setIsMounted(true)

        window.addEventListener('scroll', handleScroll)
        updateLightPosition(pathRef, glowRef)
        handleScroll()

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <>
            <div
                ref={vignetteRef}
                className="background-z pointer-events-none fixed top-0 left-0 h-full w-full"
                style={{
                    background: 'radial-gradient(circle at center,transparent 0%,rgba(0, 0, 0, 0.4) 60%,rgba(0, 0, 0, 1) 100%)',
                }}
            />
            <div className="back-z pointer-events-none fixed inset-0 hidden opacity-80 sm:block">
                <div className="back-z absolute h-screen w-full">
                    <svg className="h-full w-full">
                        <defs>
                            <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
                                <feGaussianBlur stdDeviation="8" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>

                        {/* Base dim path */}
                        <path d={pathData} stroke="rgba(255, 255, 255, 0.15)" strokeWidth="2" fill="none" className="blur-[2px]" />

                        {/* Lit path section that moves along */}
                        {isMounted && (
                            <path
                                ref={pathRef}
                                d={pathData}
                                stroke="#d8af41"
                                strokeWidth="6"
                                fill="none"
                                filter="url(#glow)"
                                strokeLinecap="round"
                                style={{
                                    strokeDasharray: '0 0 0 10000',
                                    transition: 'stroke-dasharray 0.1s ease-out',
                                }}
                                className="blur-[10px]"
                            />
                        )}

                        {/* Bright glowing center of the lit section */}
                        {isMounted && (
                            <path
                                ref={glowRef}
                                d={pathData}
                                stroke="#d9cdad"
                                strokeWidth="2"
                                fill="none"
                                filter="url(#brightGlow)"
                                strokeLinecap="round"
                                style={{
                                    strokeDasharray: '0 0 0 10000',
                                    transition: 'stroke-dasharray 0.1s ease-out',
                                }}
                                className="blur-[6px]"
                            />
                        )}

                        {/* Secondary decorative paths - adjusted for viewport height */}
                        <path d="M 220 100 L 320 130 L 240 180" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" className="blur-[2px]" />
                        <path d="M 400 200 L 500 220 L 480 280" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" className="blur-[3px]" />
                        <path d="M 700 400 L 800 430 L 750 500" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" className="blur-[1px]" />
                        <path d="M 1000 600 L 1100 620 L 1050 680" stroke="rgba(255, 255, 255, 0.1)" strokeWidth="1" className="blur-[5px]" />
                    </svg>
                </div>
            </div>
        </>
    )
}
