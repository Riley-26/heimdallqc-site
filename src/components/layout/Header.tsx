'use client'

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, IconContainer } from "@/components/ui/index";
import { Person } from "@mui/icons-material";

const navLinks = [
    { name: "About", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "Verification Checker", href: "/verif-checker" },
    { name: "Pricing", href: "/pricing" },
    { name: "Help", href: "/help" },
    { name: "API", href: "/api-docs" },
    { name: "Privacy", href: "/privacy" },
]

export const Header: React.FC = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const { data: session, status } = useSession()
    const [showHeader, setShowHeader] = useState(true)
  
    const pagesWithoutHeader = 'sign'

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
    }
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        handleScroll()
        setShowHeader(pagesWithoutHeader !== window.location.pathname.slice(1,5))
    }, [])

    return (
        <>
            {
                showHeader ? <header className={`z-100 fixed w-full transition-all duration-150 text-white font-body ${isScrolled ? 'bg-header h-16 shadow-xl shadow-[rgb(0,0,0,0.5)]' : 'bg-transparent h-20'}`} role="banner">
                    <div className="flex justify-between items-center h-[100%] section-container">
                        {/* LOGO (PLACEHOLDER) */}
                        <div className="h-full flex items-center justify-center">
                            <a href="/" aria-label="Home" className="flex justify-center items-center gap-2">
                                <img src={"images/SVG/Asset 3.svg"} className="w-10 brightness-75"/>
                                <span className="font-logo text-neutral-400 text-2xl">HEIMDALL</span>
                            </a>
                        </div>
                        {/* NAV */}
                        <nav aria-label="Main navigation">
                            <ul className="flex gap-10 text-lg" role="menubar">
                                {
                                    navLinks.map((link, key) => {
                                        return <li role="none" key={key}><a href={link.href} role="menuitem">{link.name}</a></li>
                                    })
                                }
                            </ul>
                        </nav>
                        {/* SIGN UP / ACCOUNT */}
                        {status === "loading" ? (
                            <div className="w-30 h-8 bg-neutral-800 rounded-lg"></div>
                        ) : session ? (
                            <div className="flex items-center justify-center gap-3" aria-label="User account">
                                <IconContainer className="relative" href="/account">
                                    <Person className="z-92" sx={{ fontSize: "24px", color: "#d9cdad" }} />
                                    <Person className="z-91 absolute blur-sm" sx={{ fontSize: "28px", color: "#d8af41" }} />
                                </IconContainer>
                                <span className="text-xl content-title font-bold">{session.user?.name}</span>
                            </div>
                        ) : (
                            <div aria-label="Sign in options">
                                <Button full={true} value={"SIGN IN"} href="/signin" className="px-3 py-1 text-lg" />
                            </div>
                        )}
                    </div>
                </header> : <></>
            }
        </>
    )
}