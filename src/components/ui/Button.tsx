"use client"

import React, { useEffect, useState } from "react";

type ButtonOptions = {
    full?: boolean;
    value: string | React.ReactNode;
    href?: string;
    target?: '_blank' | '_self';
    className?: string;
    onClick?: () => {} | void;
}

export const Button: React.FC<ButtonOptions> = ({ full, value, href, target = '_self', className, onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    const sharedClass = `font-button ${isHovered ? (full ? "button-outline" : "button-full") : (full ? "button-full" : "button-outline")} ${className}`;

    const sharedProps = {
        className: sharedClass,
        onMouseEnter: () => setIsHovered(true),
        onMouseLeave: () => setIsHovered(false)
    };

    return href ? (
        <a href={href} target={target} {...sharedProps}>
            {value}
        </a>
    ) : (
        <button {...sharedProps} onClick={onClick}>
            {value}
        </button>
    );
}