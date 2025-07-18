'use client'

import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, IconContainer } from "@/components/ui/index";
import { Person, Menu, Close } from "@mui/icons-material";

const navLinks = [
    { name: "About", href: "/about" },
    { name: "Features", href: "/features" },
    { name: "Verification Checker", href: "/verif-checker" },
    { name: "Pricing", href: "/pricing" },
    { name: "Help", href: "/help" },
    { name: "API", href: "/api-docs" },
    { name: "Privacy", href: "/privacy" },
]

type HeaderProps = {
    scrolled?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ scrolled }) => {
    const [isScrolled, setIsScrolled] = useState(scrolled || false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const { data: session, status } = useSession()

    const handleScroll = () => {
        if (!scrolled) {
            setIsScrolled(window.scrollY > 20);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        handleScroll()
    }, [])

    return (
        <>
            {
                <header className={`z-100 fixed w-full transition-all duration-150 text-white font-body ${isScrolled ? 'bg-header h-[60px] shadow-xl shadow-[rgb(0,0,0,0.5)]' : 'bg-transparent h-20'}`} role="banner">
                    <div className="flex justify-between items-center h-[100%] section-container">
                        {/* LOGO (PLACEHOLDER) */}
                        <div className="h-full flex items-center justify-center">
                            <a href="/" aria-label="Home" className="flex justify-center items-center gap-2">
                                <img src="/images/SVG/Asset 3.svg" className="w-8 sm:w-10 brightness-75" alt="Heimdall Logo"/>
                                <span className="font-logo text-neutral-400 text-xl sm:text-2xl">HEIMDALL</span>
                            </a>
                        </div>
                        {/* NAV */}
                        <nav aria-label="Main navigation" role="navigation" className="hidden xl:block">
                            <ul className="flex gap-6 text-lg xl:gap-8" role="menubar">
                                {navLinks.map((link, key) => (
                                    <li role="none" key={key} className="relative">
                                        <a
                                            href={link.href}
                                            role="menuitem"
                                            tabIndex={0}
                                            className="nav-link"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        {/* SIGN UP / ACCOUNT */}
                        <div className="hidden xl:flex items-center justify-center gap-3">
                            {status === "loading" ? (
                                <div className="w-30 h-8 bg-neutral-800 rounded-lg"></div>
                            ) : session ? (
                                <div className="flex items-center justify-center gap-3" aria-label="User account">
                                    <IconContainer className="relative" href="/account" aria-label="Account">
                                        <Person className="z-92" sx={{ fontSize: "24px", color: "#d9cdad" }} />
                                        <Person className="z-91 absolute blur-sm" sx={{ fontSize: "28px", color: "#d8af41" }} />
                                    </IconContainer>
                                    <span className="text-xl content-title font-bold hidden xl:block">{session.user?.name}</span>
                                </div>
                            ) : (
                                <div aria-label="Sign in options">
                                    <Button full={true} value={"SIGN IN"} href="/signin" className="px-3 py-1 text-lg" />
                                </div>
                            )}
                        </div>
                        {/* Hamburger - Mobile */}
                        <button
                            className="xl:hidden flex items-center justify-center p-2 cursor-pointer z-93"
                            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                            onClick={() => setMobileMenuOpen((open) => !open)}
                        >
                            {mobileMenuOpen ? (
                                <Close sx={{ fontSize: "2rem", color: "#fff" }} />
                            ) : (
                                <Menu sx={{ fontSize: "2rem", color: "#fff" }} />
                            )}
                        </button>
                    </div>
                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <>
                            <div className="absolute right-0 top-0 h-screen w-screen bg-black opacity-40 z-92" />
                            <div className="xl:hidden absolute top-full right-0 w-max bg-header shadow-xl shadow-[rgb(0,0,0,0.5)] z-93">
                                <nav aria-label="Mobile navigation" role="navigation">
                                    <ul className="flex flex-col gap-4 py-4 px-6 text-lg" role="menubar">
                                        {navLinks.map((link, key) => (
                                            <li role="none" key={key}>
                                                <a
                                                    href={link.href}
                                                    role="menuitem"
                                                    tabIndex={0}
                                                    className="block py-2 nav-link w-max"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    {link.name}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-col gap-3 px-6 pb-4">
                                        {status === "loading" ? (
                                            <div className="w-24 h-8 bg-neutral-800 rounded-lg"></div>
                                        ) : session ? (
                                            <div className="flex items-center gap-2 py-2">
                                                <IconContainer className="relative" href="/account" aria-label="Account">
                                                    <Person className="z-92" sx={{ fontSize: "24px", color: "#d9cdad" }} />
                                                    <Person className="z-91 absolute blur-sm" sx={{ fontSize: "28px", color: "#d8af41" }} />
                                                </IconContainer>
                                                <span className="text-lg font-bold">{session.user?.name}</span>
                                            </div>
                                        ) : (
                                            <Button full={true} value={"SIGN IN"} href="/signin" className="w-max px-3 py-2 text-lg" />
                                        )}
                                    </div>
                                </nav>
                            </div>
                        </>
                    )}
                </header>
            }
        </>
    )
}