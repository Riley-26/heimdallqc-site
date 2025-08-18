"use client"

import React, { useEffect, useState } from "react"

export const MobileInfo: React.FC = () => {
    const [windowMobile, setWindowMobile] = useState<boolean>(false)

    useEffect(() => {
        const handleResize = () => {
            setWindowMobile(window.innerWidth < 768)
        }

        handleResize() // Set initial value

        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <>
            { windowMobile && <span className="fixed bottom-0 right-0 w-full bg-black/40 content-body font-semibold text-neutral-500 tracking-wide text-xs py-1 pr-4 text-end z-49">LIMITED FEATURES ON MOBILE</span> }
        </>
    )
}