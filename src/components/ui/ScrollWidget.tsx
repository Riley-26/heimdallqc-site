"use client"

import React, { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';

interface Section {
    id: string;
    name: string;
}

interface ScrollWidgetProps {
    sections: Section[];
    offset?: number; // Optional offset for when to consider a section "active"
    position?: 'left' | 'right'; // Position of the widget
}

export function ScrollWidget({
    sections,
    offset = 0,
    position = 'right',
}: ScrollWidgetProps) {

    const [activeSection, setActiveSection] = useState<string>('');
    const [hoveredSection, setHoveredSection] = useState<string | null>(null);
    const router = useRouter();

    // Determine which section is currently in view
    const handleScroll = useCallback(() => {
        const scrollPosition = window.scrollY + offset;

        for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i].id);
            if (section && section.offsetTop <= scrollPosition) {
                setActiveSection(sections[i].id);
                return;
            }
        }

        // If no section is found (at the very top), default to first section
        if (sections.length > 0) {
            setActiveSection(sections[0].id);
        }
    }, [sections, offset]);

    // Scroll to the section when a dot is clicked
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            window.scrollTo({
                top: section.offsetTop - offset + 1, // +1 to ensure we trigger the section
                behavior: 'smooth',
            });
        }
    };

    // Set up scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Initial check

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    return (
        <div
            className="-mr-8 xl:-mr-0 hidden sm:flex fixed flex-col items-center z-91 border-2 border-neutral-800 rounded-2xl bg-neutral-900"
            style={{
                [position]: '40px',
                top: '50%',
                transform: 'translateY(-50%)',
            }}
        >
            <div className="py-2 px-3 rounded-full backdrop-blur-sm">
                {sections.map((section) => (
                    <div
                        key={section.id}
                        className="relative"
                        onMouseEnter={() => setHoveredSection(section.id)}
                        onMouseLeave={() => setHoveredSection(null)}
                    >
                        <button
                            className={`w-2 h-2 cursor-pointer rounded-full transition-all duration-300 ${activeSection === section.id
                                ? 'bg-white scale-110'
                                : 'bg-gray-400 hover:bg-gray-200'
                                }`}
                            onClick={() => scrollToSection(section.id)}
                            aria-label={`Scroll to ${section.name}`}
                        />

                        {/* Tooltip */}
                        {hoveredSection === section.id && (
                            <div
                                className={`absolute top-0 font-body text-[14px] transition-all ${position === 'right' ? 'right-8' : 'left-8'
                                    } bg-neutral-900 bg-opacity-30 border-2 border-neutral-800 text-white text-sm p-3 py-2 rounded-2xl whitespace-nowrap`}
                            >
                                {section.name}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};