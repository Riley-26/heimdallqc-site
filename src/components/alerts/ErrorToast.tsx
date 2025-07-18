import React, { useEffect, useRef, useState } from 'react'

interface ErrorToastProps {
    message: string
    duration?: number // in ms
    onClose?: () => void
}

export const ErrorToast: React.FC<ErrorToastProps> = ({ message, duration = 5000, onClose }) => {
    const [visible, setVisible] = useState(true)
    const [progress, setProgress] = useState(100)
    const [show, setShow] = useState(false)
    const [isPaused, setIsPaused] = useState(false)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)
    const elapsedRef = useRef(0)
    const lastTickRef = useRef(Date.now())

    useEffect(() => {
        const showTimeout = setTimeout(() => setShow(true), 10)

        function tick() {
            if (!isPaused) {
                const now = Date.now()
                elapsedRef.current += now - lastTickRef.current
                lastTickRef.current = now
                const percent = Math.max(0, 100 - (elapsedRef.current / duration) * 100)
                setProgress(percent)
                if (elapsedRef.current >= duration) {
                    setShow(false)
                    setTimeout(() => {
                        setVisible(false)
                        if (onClose) onClose()
                    }, 250)
                    clearInterval(intervalRef.current!)
                }
            } else {
                lastTickRef.current = Date.now()
            }
        }

        lastTickRef.current = Date.now()
        intervalRef.current = setInterval(tick, 30)

        return () => {
            clearTimeout(showTimeout)
            if (intervalRef.current) clearInterval(intervalRef.current)
        }
    }, [duration, onClose, isPaused])

    if (!visible) return null

    return (
        <div
            className={`fixed top-6 left-1/2 z-50 -translate-x-1/2 transform transition-all duration-300 ease-in-out ${
                show ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'
            }`}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
        >
            <button
                className="content-body absolute top-0 right-0 h-6 w-6 cursor-pointer text-xl text-gray-400 hover:text-gray-600"
                onClick={() => {
                    setShow(false)
                    setTimeout(() => {
                        setVisible(false)
                        if (onClose) onClose()
                    }, 250)
                }}
                aria-label="Close"
            >
                &times;
            </button>
            <div className="bento-card flex min-w-[320px] flex-col items-start rounded border border-red-400/30 px-6 py-4 shadow-lg">
                <span className="content-body text-red-400">{message}</span>
                <div className="mt-3 h-1 w-full overflow-hidden rounded bg-neutral-700">
                    <div className="h-full bg-red-400 transition-all duration-100" style={{ width: `${progress}%` }} />
                </div>
            </div>
        </div>
    )
}
