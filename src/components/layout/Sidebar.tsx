'use client'

import { Button } from '@/components/ui/index'
import { AccountBalance, Dashboard, Description, ExitToApp, Home, Key, Person, Settings } from '@mui/icons-material'
import Tooltip from '@mui/material/Tooltip'
import { signOut } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

const navLinks = [
    { name: 'Home', href: '/', icon: <Home /> },
    { name: 'API Docs', href: '/api-docs', icon: <Description /> },
    { name: 'Account', href: '/account', icon: <Person /> },
    { name: 'Dashboard', href: '/account/dashboard', icon: <Dashboard /> },
    { name: 'API Management', href: '/account/api-management', icon: <Key /> },
    { name: 'Billing', href: '/account/billing', icon: <AccountBalance /> },
    { name: 'Settings', href: '/account/settings', icon: <Settings /> },
]

export const Sidebar: React.FC = () => {
    const [windowHref, setWindowHref] = useState('')
    const [windowWidth, setWindowWidth] = useState<number>()

    const handleSubmit = async () => {
        if (confirm('Are you sure you want to sign out?')) await signOut({ callbackUrl: '/' })
    }

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        setWindowHref(window.location.pathname)
        setWindowWidth(window.innerWidth)
    }, [])

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div className="fixed top-0 left-0 flex min-h-screen flex-col bg-neutral-950 px-4 pt-8 text-start">
            <div className="flex h-full items-center justify-center">
                <a href="/" aria-label="Home" className="flex items-center justify-center gap-2">
                    <img src="/images/SVG/Asset 3.svg" className="w-8 brightness-75 sm:w-10" alt="Heimdall Logo" />
                    <span className="font-logo hidden text-xl text-neutral-400 sm:text-2xl xl:block">HEIMDALL</span>
                </a>
            </div>
            <ul className="mt-10 mb-6 flex flex-col gap-2">
                {navLinks.map((val, key) => {
                    if (windowWidth && windowWidth < 1275) {
                        return (
                            <Tooltip key={key} title={val.name} placement="right">
                                <li>
                                    <div className="flex items-center">
                                        <a
                                            className={`${val.href === windowHref ? 'bg-neutral-900' : ''} content-body flex w-full items-center justify-between rounded-full px-3 py-3 transition-all hover:bg-neutral-900 xl:px-6`}
                                            href={val.href}
                                        >
                                            <span className="mr-12 hidden xl:block">{val.name}</span>
                                            {val.icon}
                                        </a>
                                    </div>
                                    {val.name === 'API Docs' && (
                                        <div className="my-2 h-[2px] w-full rounded-full bg-gradient-to-r from-transparent via-[#d8af41] to-transparent opacity-30" />
                                    )}
                                </li>
                            </Tooltip>
                        )
                    } else {
                        return (
                            <li key={key}>
                                <div className="flex items-center">
                                    <a
                                        className={`${val.href === windowHref ? 'bg-neutral-900' : ''} content-body flex w-full items-center justify-between rounded-full px-3 py-3 text-lg transition-all hover:bg-neutral-900 xl:px-6`}
                                        href={val.href}
                                    >
                                        <span className="mr-12 hidden xl:block">{val.name}</span>
                                        {val.icon}
                                    </a>
                                </div>
                                {val.name === 'API Docs' && (
                                    <div className="my-2 h-[2px] w-full rounded-full bg-gradient-to-r from-transparent via-[#d8af41] to-transparent opacity-30" />
                                )}
                            </li>
                        )
                    }
                })}
            </ul>
            <Tooltip title="Sign Out" placement="right">
                <button
                    className="mx-auto block cursor-pointer rounded-md border-2 border-neutral-500 px-2 py-2 text-base hover:border-neutral-300 xl:hidden xl:px-4"
                    onClick={() => handleSubmit()}
                >
                    <ExitToApp />
                </button>
            </Tooltip>
            <Button
                className="mx-auto hidden border-neutral-500 px-4 py-2 text-base hover:border-neutral-300 xl:block"
                value={'SIGN OUT'}
                onClick={() => handleSubmit()}
            />
        </div>
    )
}
