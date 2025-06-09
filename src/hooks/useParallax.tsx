'use client'

import { useEffect, useRef, useState } from 'react'

interface UseParallaxOptions {
    speed?: number
    offset?: number
    disabled?: boolean
    triggerOffset?: string
    onUpdate?: (progress: number, offset: number) => void
}

export function useParallax({
    speed = 0.5,
    offset = 0,
    disabled = false,
    triggerOffset = '0px',
    onUpdate
}: UseParallaxOptions = {}) {
    const ref = useRef<HTMLElement>(null)
    const [progress, setProgress] = useState(0) // 0 to 1, element's progress through viewport

    useEffect(() => {
        const element = ref.current
        if (!element || disabled) return

        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
        if (prefersReducedMotion) return

        let isVisible = false
        let currentY = 0
        let requestId: number

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    isVisible = entry.isIntersecting
                })
            },
            {
                rootMargin: `${triggerOffset} 0px ${triggerOffset} 0px`,
                threshold: 0
            }
        )

        observer.observe(element)

        const updateParallax = () => {
            if (!isVisible) {
                requestId = requestAnimationFrame(updateParallax)
                return
            }

            const rect = element.getBoundingClientRect()
            const elementTop = rect.top
            const elementHeight = rect.height
            const windowHeight = window.innerHeight

            // Calculate progress (0 = top of viewport, 1 = bottom of viewport)
            const elementProgress = Math.max(0, Math.min(1,
                (windowHeight - elementTop) / (windowHeight + elementHeight)
            ))

            setProgress(elementProgress)

            // Calculate parallax offset
            const elementCenter = elementTop + elementHeight / 2
            const viewportCenter = windowHeight / 2
            const distanceFromCenter = elementCenter - viewportCenter
            const targetY = distanceFromCenter * speed + offset

            // Smooth interpolation
            currentY += (targetY - currentY) * 0.1

            // Apply transform
            element.style.transform = `translate3d(0, ${currentY}px, 0)`

            // Call update callback
            onUpdate?.(elementProgress, currentY)

            requestId = requestAnimationFrame(updateParallax)
        }

        updateParallax()

        return () => {
            observer.disconnect()
            if (requestId) {
                cancelAnimationFrame(requestId)
            }
            if (element) {
                element.style.transform = 'translate3d(0, 0, 0)'
            }
        }
    }, [speed, offset, disabled, triggerOffset, onUpdate])

    return { ref, progress }
}