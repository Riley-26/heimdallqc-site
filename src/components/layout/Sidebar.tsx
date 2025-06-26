"use client"

import { Dashboard, Key, Money, Settings, Support } from "@mui/icons-material";
import React from "react";

const navLinks = [
    { name: "Dashboard", href: "/account/dashboard", icon: <Dashboard /> },
    { name: "API Management", href: "/account/api-management", icon: <Key /> },
    { name: "Billing", href: "/account/billing", icon: <Money /> },
    { name: "Support", href: "/account/support", icon: <Support /> },
    { name: "Settings", href: "/account/settings", icon: <Settings /> },
]

export const Sidebar: React.FC = () => {

    return (
        <div className="min-h-screen min-w-[300px] bg-neutral-950 fixed left-0 top-0 pt-32 px-4 text-start">
            <ul className="flex flex-col min-w-full">
                {navLinks.map((val, key) => {
                    return (
                        <li key={key} className="w-full flex items-center">
                            <a className="w-full flex justify-between px-6 py-4 rounded-full content-body transition-all hover:bg-neutral-900" href={val.href}>{val.name}{val.icon}</a>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}