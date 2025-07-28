'use client'

import React from 'react'

interface SectionProps {
    children: React.ReactNode
    id?: string
    className?: string
}

export const Section: React.FC<SectionProps> = ({ children, id, className }) => {
    return (
        <section id={id} className={className + ' py-24'}>
            {children}
        </section>
    )
}
