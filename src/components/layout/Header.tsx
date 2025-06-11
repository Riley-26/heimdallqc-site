'use client'

import React, { useEffect, useState } from "react";

type HeaderProps = {
    loggedState: boolean;
}

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
        <header className={`z-100 fixed w-full transition-all duration-150 text-white font-body ${isScrolled ? 'bg-header h-16 shadow-xl shadow-[rgb(0,0,0,0.5)]' : 'bg-transparent h-20'}`} role="banner">
            <div className="flex justify-between items-center h-[100%] section-container">
                {/* LOGO (PLACEHOLDER) */}
                <div className="">
                    <a href="/" aria-label="Home" className="font-logo">
                        <span>HEIMDALL</span>
                    </a>
                </div>
                {/* NAV */}
                <nav aria-label="Main navigation">
                    <ul className="flex gap-10 text-lg" role="menubar">
                        <li role="none"><a href="/about" role="menuitem">About</a></li>
                        <li role="none"><a href="/product" role="menuitem">Product</a></li>
                        <li role="none"><a href="/verif-checker" role="menuitem">Verification Checker</a></li>
                        <li role="none"><a href="/pricing" role="menuitem">Pricing</a></li>
                        <li role="none"><a href="/help" role="menuitem">Help</a></li>
                        <li role="none"><a href="/api-docs" role="menuitem">API</a></li>
                        <li role="none"><a href="/privacy" role="menuitem">Privacy</a></li>
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