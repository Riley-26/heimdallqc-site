'use client'

import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

interface Section {
    id: string
    name: string
}

interface ScrollWidgetProps {
    sections: Section[]
    offset?: number // Optional offset for when to consider a section "active"
    position?: 'left' | 'right' // Position of the widget
}

export function ScrollWidget({ sections, offset = 0, position = 'right' }: ScrollWidgetProps) {
    const [activeSection, setActiveSection] = useState<string>('')
    const [hoveredSection, setHoveredSection] = useState<string | null>(null)
    const router = useRouter()

    // Determine which section is currently in view
    const handleScroll = useCallback(() => {
        const scrollPosition = window.scrollY + offset

        for (let i = sections.length - 1; i >= 0; i--) {
            const section = document.getElementById(sections[i].id)
            if (section && section.offsetTop <= scrollPosition) {
                setActiveSection(sections[i].id)
                return
            }
        }

        // If no section is found (at the very top), default to first section
        if (sections.length > 0) {
            setActiveSection(sections[0].id)
        }
    }, [sections, offset])

    // Scroll to the section when a dot is clicked
    const scrollToSection = (id: string) => {
        const section = document.getElementById(id)
        if (section) {
            window.scrollTo({
                top: section.offsetTop - offset + 1, // +1 to ensure we trigger the section
                behavior: 'smooth',
            })
        }
    }

    // Set up scroll event listener
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
        handleScroll() // Initial check

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [handleScroll])

    return (
        <div
            className="fixed z-91 -mr-8 hidden flex-col items-center rounded-2xl border-2 border-neutral-800 bg-neutral-900 sm:flex xl:-mr-0"
            style={{
                [position]: '40px',
                top: '50%',
                transform: 'translateY(-50%)',
            }}
        >
            <div className="rounded-full px-3 py-2 backdrop-blur-sm">
                {sections.map((section) => (
                    <div key={section.id} className="relative" onMouseEnter={() => setHoveredSection(section.id)} onMouseLeave={() => setHoveredSection(null)}>
                        <button
                            className={`h-2 w-2 cursor-pointer rounded-full transition-all duration-300 ${
                                activeSection === section.id ? 'scale-110 bg-white' : 'bg-gray-400 hover:bg-gray-200'
                            }`}
                            onClick={() => scrollToSection(section.id)}
                            aria-label={`Scroll to ${section.name}`}
                        />

                        {/* Tooltip */}
                        {hoveredSection === section.id && (
                            <div
                                className={`font-body absolute top-0 text-[14px] transition-all ${
                                    position === 'right' ? 'right-8' : 'left-8'
                                } bg-opacity-30 rounded-2xl border-2 border-neutral-800 bg-neutral-900 p-3 py-2 text-sm whitespace-nowrap text-white`}
                            >
                                {section.name}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
