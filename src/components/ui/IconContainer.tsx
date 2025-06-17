"use client"

import React, { useState } from "react"

type IconProps = {
    children: React.ReactNode;
    role?: string;
    extra?: string;
    link?: boolean;
    href?: string;
}

export const IconContainer: React.FC<IconProps> = ({ children, extra, role="submit", link=false, href }) => {
    const [toggled, setToggled] = useState(false)

    const iconClasses = `w-max flex items-center justify-center border-2 border-neutral-400 transition-all p-2 rounded-full ${extra} hover:border-neutral-600 cursor-pointer ${toggled && "button-full"}`

    return (
        <>
            {
                !link ? <button className={iconClasses} role={role} onClick={() => setToggled(!toggled)}>
                    {children}
                </button> : <a className={iconClasses} href={href}>
                    {children}
                </a>

            }
        </>
    )
}