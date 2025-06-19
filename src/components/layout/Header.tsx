'use client'

import React, { useEffect, useState } from "react";

type HeaderProps = {
    loggedState: boolean;
}

const navLinks = [
    { name: "About", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "Verification Checker", href: "/verif-checker" },
    { name: "Pricing", href: "/pricing" },
    { name: "Help", href: "/help" },
    { name: "API", href: "/api-docs" },
    { name: "Privacy", href: "/privacy" },
]

export const Header: React.FC<HeaderProps> = ({ loggedState }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        setIsScrolled(window.scrollY > 20);
    }
    
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        handleScroll()
    }, [])

    return (
        <header className={`front-z fixed w-full transition-all duration-150 text-white font-body ${isScrolled ? 'bg-header h-16 shadow-xl shadow-[rgb(0,0,0,0.5)]' : 'bg-transparent h-20'}`} role="banner">
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
                {loggedState ? (
                    <div aria-label="User account">
                        LOGGED IN
                    </div>
                ) : (
                    <div aria-label="Sign in options">
                        LOGGED OUT
                    </div>
                )}
            </div>
        </header>
    )
}