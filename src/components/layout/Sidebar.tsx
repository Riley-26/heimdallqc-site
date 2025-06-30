"use client"

import { Dashboard, Key, Money, Person, Settings, Support, Help, AccountBalance, ExitToApp } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/index";
import { signOut } from 'next-auth/react'
import Tooltip from "@mui/material/Tooltip";

const navLinks = [
    { name: "Account", href: "/account", icon: <Person /> },
    { name: "Dashboard", href: "/account/dashboard", icon: <Dashboard /> },
    { name: "API Management", href: "/account/api-management", icon: <Key /> },
    { name: "Billing", href: "/account/billing", icon: <AccountBalance /> },
    { name: "Support", href: "/account/support", icon: <Help /> },
    { name: "Settings", href: "/account/settings", icon: <Settings /> },
]

export const Sidebar: React.FC = () => {
    const [windowHref, setWindowHref] = useState("")
    const [windowWidth, setWindowWidth] = useState<number>()

    const handleSubmit = async () => {
        if (confirm("Are you sure you want to log out?")) await signOut({ callbackUrl: '/' })
    }

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }
    
    useEffect(() => {
        setWindowHref(window.location.pathname)
        setWindowWidth(window.innerWidth)
    }, [])

    useEffect(() => {
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [])

    return (
        <div className="min-h-screen bg-neutral-950 fixed left-0 top-0 pt-32 px-4 text-start flex flex-col">
            <ul className="flex flex-col gap-2 mb-6">
                {navLinks.map((val, key) => {
                    if (windowWidth && windowWidth < 1275){
                        return (
                            <Tooltip key={key} title={val.name} placement="right">
                                <li className="flex items-center">
                                    <a className={`${val.href === windowHref ? "bg-neutral-900" : ""} w-full flex items-center justify-between px-3 xl:px-6 py-3 rounded-full content-body transition-all hover:bg-neutral-900`} href={val.href}>
                                        <span className="mr-12 hidden xl:block">{val.name}</span>
                                        {val.icon}
                                    </a>
                                </li>
                            </Tooltip>
                        )
                    } else {
                        return (
                            <li key={key} className="flex items-center">
                                <a className={`${val.href === windowHref ? "bg-neutral-900" : ""} w-full flex items-center justify-between px-3 xl:px-6 py-3 rounded-full content-body transition-all hover:bg-neutral-900`} href={val.href}>
                                    <span className="mr-12 hidden xl:block">{val.name}</span>
                                    {val.icon}
                                </a>
                            </li>
                        )
                    }
                })}
            </ul>
            {
                windowWidth && windowWidth >= 1275 ? <Button className="px-4 py-2 text-base mx-auto border-neutral-500 hover:border-neutral-300" value={"LOG OUT"} onClick={() => handleSubmit()}/> :
                <Tooltip title="Log Out" placement="right">
                    <button className="px-2 xl:px-4 py-2 text-base mx-auto border-2 rounded-md border-neutral-500 hover:border-neutral-300 cursor-pointer" onClick={() => handleSubmit()}>
                        <ExitToApp />
                    </button>
                </Tooltip>
            }
        </div>
    )
}