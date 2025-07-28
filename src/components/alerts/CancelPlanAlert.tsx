import React, { ReactNode, useEffect, useState } from 'react'
import { Button } from '../ui'
import { OwnerData } from '@/types/mainTypes'

interface CancelPlanProps {
    ownerData: OwnerData
    isOpen: boolean
    onClose: () => void
    children?: ReactNode
    onConfirm: () => void
}

export const CancelPlanAlert: React.FC<CancelPlanProps> = ({ isOpen, onClose, onConfirm }) => {
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
            <div className="bento-card relative z-10 mx-auto w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
                <button
                    className="content-body absolute top-0 right-1 h-6 w-6 cursor-pointer text-3xl text-gray-400 hover:text-gray-600"
                    onClick={onClose}
                    aria-label="Close"
                >
                    &times;
                </button>
                <h2 className="content-subtitle mb-6 text-2xl">Cancel Plan</h2>
                <p className="content-body mb-3 text-base">
                    Are you sure you want to cancel your current plan?
                    <br />
                    <br />
                    All services will still be active until your plan ends.
                </p>
                <div className="content-body mb-8 w-full"></div>
                <div className="content-body mt-6 flex justify-end">
                    <Button className="px-4 py-2 text-base" onClick={() => onConfirm()} value={'CONFIRM'} />
                </div>
            </div>
        </div>
    )
}
