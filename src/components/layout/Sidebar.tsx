"use client"

import { Dashboard, Key, Money, Person, Settings, Support, Help, AccountBalance } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/index";
import { signOut } from 'next-auth/react'

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

    const handleSubmit = async () => {
        if (confirm("Are you sure you want to log out?")) await signOut({ callbackUrl: '/' })
    }

    useEffect(() => {
        setWindowHref(window.location.pathname)
    }, [])

    return (
        <div className="min-h-screen min-w-[300px] bg-neutral-950 fixed left-0 top-0 pt-32 px-4 text-start flex flex-col">
            <ul className="flex flex-col min-w-full gap-2 mb-6">
                {navLinks.map((val, key) => {
                    return (
                        <li key={key} className="w-full flex items-center">
                            <a className={`${val.href === windowHref ? "bg-neutral-900" : ""} w-full flex items-center justify-between px-6 py-3 rounded-full content-body transition-all hover:bg-neutral-900`} href={val.href}>{val.name}{val.icon}</a>
                        </li>
                    )
                })}
            </ul>
            <Button className="px-4 py-2 text-base mx-auto border-neutral-500 hover:border-neutral-300" value={"LOG OUT"} onClick={() => handleSubmit()}/>
        </div>
    )
}