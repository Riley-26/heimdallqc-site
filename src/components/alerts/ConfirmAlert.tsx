import React, { ReactNode, SetStateAction, useEffect, useState } from 'react'
import { Button } from '../ui'

interface ConfirmAlert {
    isOpen: boolean
    onClose: () => void
    hasConfirmed: (value: SetStateAction<boolean>) => void
    children?: ReactNode
    title?: string
}

export const ConfirmAlert: React.FC<ConfirmAlert> = ({ isOpen, onClose, hasConfirmed, children, title }) => {
    const [show, setShow] = useState(false)

    // Prevent background scroll when modal is open
    useEffect(() => {
        setShow(true)
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = ''
        }
    }, [])

    if (!isOpen) return null

    return (
        <div className={`fixed inset-0 z-100 mt-16 flex items-start justify-center`}>
            {/* Overlay */}
            <div className="fixed inset-0 bg-black/70 transition-opacity" aria-hidden="true" onClick={onClose} />
            {/* Modal */}
            <div
                className={`bento-card relative z-10 mx-auto w-full max-w-md transform rounded-lg bg-white p-6 shadow-lg transition-all duration-300 ease-in-out ${show ? 'translate-y-0 opacity-100' : '-translate-y-8 opacity-0'}`}
            >
                <button
                    className="content-body absolute top-0 right-1 h-6 w-6 cursor-pointer text-3xl text-gray-400 hover:text-gray-600"
                    onClick={onClose}
                    aria-label="Close"
                >
                    &times;
                </button>
                <h2 className="content-body mb-4 text-xl">{title || 'Confirm'}</h2>
                {children ? children : <p className="content-body text-base">Confirm</p>}
                <div className="content-body mt-6 flex justify-end">
                    <Button className="px-4 py-2 text-base" onClick={() => hasConfirmed(true)} value={'CONFIRM'} />
                </div>
            </div>
        </div>
    )
}
