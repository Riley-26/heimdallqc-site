'use client'

import React from 'react'

type IconProps = {
    children: React.ReactNode
    role?: string
    className?: string
    href?: string
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

export const IconContainer: React.FC<IconProps> = ({ children, className, role = 'submit', href, onClick }) => {
    const iconClasses = `w-max flex items-center justify-center border-2 border-neutral-600 transition-all p-2 rounded-full hover:border-neutral-400 cursor-pointer ${className}`

    return (
        <>
            {!href ? (
                <button className={iconClasses} role={role} onClick={onClick}>
                    {children}
                </button>
            ) : (
                <a className={iconClasses} href={href}>
                    {children}
                </a>
            )}
        </>
    )
}
