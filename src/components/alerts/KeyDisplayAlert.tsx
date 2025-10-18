import React, { ReactNode, useEffect, useState } from 'react'
import { Button } from '../ui'

interface KeyDisplayProps {
    isOpen: boolean
    onClose: () => void
    children?: ReactNode
}

export const KeyDisplayAlert: React.FC<KeyDisplayProps> = ({ isOpen, onClose, children }) => {
    // Prevent background scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = ''
        }
    }, [])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center">
            {/* Overlay */}
            <div className="fixed inset-0 bg-black/70 transition-opacity" aria-hidden="true" onClick={onClose} />
            {/* Modal */}
            <div className="bento-card relative z-10 mx-auto w-full max-w-max rounded-lg bg-white p-6 shadow-lg">
                <button
                    className="content-body absolute top-0 right-1 h-6 w-6 cursor-pointer text-3xl text-gray-400 hover:text-gray-600"
                    onClick={onClose}
                    aria-label="Close"
                >
                    &times;
                </button>
                <h2 className="content-subtitle mb-6 text-xl">Your key</h2>
                <p className="content-body mb-3 text-base">
                    Save your key, you will only see it once
                </p>
                <div className="mt-2 h-[2px] w-full rounded-full bg-gradient-to-r from-[#d8af41] to-transparent opacity-30" />
                <p className="content-body mt-4 mb-8 text-base font-bold">
                    {children}
                </p>
            </div>
        </div>
    )
}
