"use client"

import React, { useEffect, useState } from "react";

type ButtonOptions = {
    full?: boolean;
    value: string;
    href?: string;
    target?: '_blank' | '_self';
    extra?: string;
}

export const Button: React.FC<ButtonOptions> = ({ full, value, href, target = '_self', extra }) => {
    const [isHovered, setIsHovered] = useState(false);

    const className = `font-button ${isHovered ? (full ? "button-outline" : "button-full") : (full ? "button-full" : "button-outline")} ${extra}`;

    const sharedProps = {
        className,
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false)
    };

    return href ? (
        <a href={href} target={target} {...sharedProps}>
            {value}
        </a>
    ) : (
        <button {...sharedProps}>
            {value}
        </button>
    );
}