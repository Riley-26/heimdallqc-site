'use client'

import { Button, IconContainer } from '@/components/ui/index'
import { Close, Menu, Person } from '@mui/icons-material'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const navLinks = [
    { name: 'About', href: '/about' },
    { name: 'Features', href: '/features' },
    { name: 'Verification Checker', href: '/verif-checker' },
    { name: 'Pricing', href: '/pricing' },
    { name: 'Help', href: '/help' },
    { name: 'API', href: '/api-docs' },
    { name: 'Privacy', href: '/privacy' },
]

type HeaderProps = {
    scrolled?: boolean
}

export const Header: React.FC<HeaderProps> = ({ scrolled }) => {
    const [isScrolled, setIsScrolled] = useState(scrolled || false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const { data: session, status } = useSession()

    const handleScroll = () => {
        if (!scrolled) {
            setIsScrolled(window.scrollY > 20)
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [handleScroll])

    useEffect(() => {
        handleScroll()
    })

    return (
        <>
            {
                <header
                    className={`font-body fixed z-100 w-full text-white transition-all duration-150 ${isScrolled ? 'bg-header h-[60px] shadow-xl shadow-[rgb(0,0,0,0.5)]' : 'h-20 bg-transparent'}`}
                    role="banner"
                >
                    <div className="section-container flex h-[100%] items-center justify-between">
                        {/* LOGO (PLACEHOLDER) */}
                        <div className="flex h-full items-center justify-center">
                            <Link href="/" aria-label="Home" className="flex items-center justify-center gap-2">
                                <Image src="/images/SVG/Asset 3.svg" width={40} height={40} alt="Heimdall logo" className="brightness-75" />
                                <span className="font-logo text-2xl text-neutral-400">HEIMDALL</span>
                            </Link>
                        </div>
                        {/* NAV */}
                        <nav aria-label="Main navigation" role="navigation" className="hidden xl:block">
                            <ul className="flex gap-6 text-lg xl:gap-8" role="menubar">
                                {navLinks.map((link, key) => (
                                    <li role="none" key={key} className="relative">
                                        <Link href={link.href} role="menuitem" tabIndex={0} className="nav-link">
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                        {/* SIGN UP / ACCOUNT */}
                        <div className="hidden items-center justify-center gap-3 xl:flex">
                            {status === 'loading' ? (
                                <div className="h-8 w-30 rounded-lg bg-neutral-800"></div>
                            ) : session ? (
                                <div className="flex items-center justify-center gap-3" aria-label="User account">
                                    <IconContainer className="relative" href="/account" aria-label="Account">
                                        <Person className="z-92" sx={{ fontSize: '24px', color: '#d9cdad' }} />
                                        <Person className="absolute z-91 blur-sm" sx={{ fontSize: '28px', color: '#d8af41' }} />
                                    </IconContainer>
                                    <span className="content-title hidden text-xl font-bold xl:block">{session.user?.name}</span>
                                </div>
                            ) : (
                                <div aria-label="Sign in options">
                                    <Button full={true} value={'SIGN IN'} href="/signin" className="px-3 py-1 text-lg" />
                                </div>
                            )}
                        </div>
                        {/* Hamburger - Mobile */}
                        <button
                            className="z-93 flex cursor-pointer items-center justify-center p-2 xl:hidden"
                            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                            onClick={() => setMobileMenuOpen((open) => !open)}
                        >
                            {mobileMenuOpen ? <Close sx={{ fontSize: '2rem', color: '#fff' }} /> : <Menu sx={{ fontSize: '2rem', color: '#fff' }} />}
                        </button>
                    </div>
                    {/* Mobile Menu */}
                    {mobileMenuOpen && (
                        <>
                            <div className="absolute top-0 right-0 z-92 h-screen w-screen bg-black opacity-40" />
                            <div className="bg-header absolute top-full right-0 z-93 w-max shadow-xl shadow-[rgb(0,0,0,0.5)] xl:hidden">
                                <nav aria-label="Mobile navigation" role="navigation">
                                    <ul className="flex flex-col gap-4 px-6 py-4 text-lg" role="menubar">
                                        {navLinks.map((link, key) => (
                                            <li role="none" key={key}>
                                                <Link
                                                    href={link.href}
                                                    role="menuitem"
                                                    tabIndex={0}
                                                    className="nav-link block w-max py-2"
                                                    onClick={() => setMobileMenuOpen(false)}
                                                >
                                                    {link.name}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                    <div className="flex flex-col gap-3 px-6 pb-4">
                                        {status === 'loading' ? (
                                            <div className="h-8 w-24 rounded-lg bg-neutral-800"></div>
                                        ) : session ? (
                                            <div className="flex items-center gap-2 py-2">
                                                <IconContainer className="relative" href="/account" aria-label="Account">
                                                    <Person className="z-92" sx={{ fontSize: '24px', color: '#d9cdad' }} />
                                                    <Person className="absolute z-91 blur-sm" sx={{ fontSize: '28px', color: '#d8af41' }} />
                                                </IconContainer>
                                                <span className="text-lg font-bold">{session.user?.name}</span>
                                            </div>
                                        ) : (
                                            <Button full={true} value={'SIGN IN'} href="/signin" className="w-max px-3 py-2 text-lg" />
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
