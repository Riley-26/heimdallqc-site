"use client"

import React, { useState, useEffect } from 'react'

export const Section: React.FC<any> = ({ children, ...props }) => {
    const [mounted, setMounted] = useState(false);
    const [height, setHeight] = useState('100vh');

    useEffect(() => {
        setMounted(true);
        setHeight(`${window.screen.height - 120}px`);
    }, []);

    return (
        <section id={props.id} className={props.className} style={{ minHeight: height }}>
            {children}
        </section>
    )
}
