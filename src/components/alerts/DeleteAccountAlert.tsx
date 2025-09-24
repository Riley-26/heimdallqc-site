import React, { ReactNode, SetStateAction, useEffect, useState } from 'react'
import { Button } from '../ui'

interface DeleteProps {
    isOpen: boolean
    onClose: () => void
    onConfirm: (arg0: string | null) => void
}

export const DeleteAccountAlert: React.FC<DeleteProps> = ({ isOpen, onClose, onConfirm }) => {
    const [show, setShow] = useState(false)
    const [password, setPassword] = useState<string>("")

    // Prevent background scroll when modal is open
    useEffect(() => {
        setShow(true)
        setPassword("")
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
                <h2 className="content-body mb-4 text-xl text-red-400">Delete Account</h2>
                <p className='content-body text-base my-4'>This is permanent. Please type your password to confirm that you understand.</p>
                <input type="password" onChange={(e) => setPassword(e.target.value)} className='border border-neutral-400 p-1 rounded-lg w-full' />
                <div className="content-body mt-6 flex justify-end">
                    <Button className="px-4 py-2 text-base" onClick={() => onConfirm(password)} value={'DELETE'} />
                </div>
            </div>
        </div>
    )
}
