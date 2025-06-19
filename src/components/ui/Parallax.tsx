import React, { useEffect, useState, ReactNode } from 'react';

interface ParallaxProps {
    children: ReactNode;
    className?: string;
    speed?: number;
}

export const Parallax = ({ children, className = '', speed=0.5 }: ParallaxProps) => {
    const [offset, setOffset] = useState(0);

    const handleScroll = () => {
        setOffset(window.scrollY);
    };

    useEffect(() => {
        console.log(offset)
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    useEffect(() => {
        setOffset(window.scrollY)
    }, [])

    return (
        <div className={`${className}`} style={{ transform: `translate3d(0, ${speed * offset}px, 0)` }}>
            {children}
        </div>
    );
};