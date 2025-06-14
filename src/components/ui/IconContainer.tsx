"use client"

import React from "react"

type IconProps = {
    children: React.ReactNode;
    size?: number;
    role?: string;
    extra?: string;
    link?: boolean;
    href?: string;
}

export const IconContainer: React.FC<IconProps> = ({ size, children, extra, role="submit", link=false, href }) => {

    const iconClasses = `w-[${size}px] h-[${size}px] border-2 border-neutral-400 transition-all p-2 rounded-full ${extra} hover:border-neutral-600 cursor-pointer`

    return (
        <>
            {
                !link ? <button className={iconClasses} role={role}>
                    {children}
                </button> : <a className={iconClasses} href={href}>
                    {children}
                </a>

            }
        </>
    )
}