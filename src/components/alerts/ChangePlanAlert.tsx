import React, { ReactNode, useEffect, useState } from 'react'
import { Button } from '../ui'
import { OwnerData } from '@/types/mainTypes'

interface ChangePlanProps {
    ownerData: OwnerData
    isOpen: boolean
    onClose: () => void
    children?: ReactNode
    onConfirm: (arg0: string | null) => void
}

const plans = [
    {
        name: 'Extrinsic',
        tokens: 8000,
        price: 34,
    },
    {
        name: 'Intrinsic',
        tokens: 6000,
        price: 26,
    },
    {
        name: 'Combo',
        tokens: 16500,
        price: 55,
    },
]

export const ChangePlanAlert: React.FC<ChangePlanProps> = ({ ownerData, isOpen, onClose, onConfirm }) => {
    const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

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
            <div className="fixed inset-0 bg-black/80 transition-opacity" aria-hidden="true" onClick={onClose} />
            {/* Modal */}
            <div className="bento-card relative z-10 mx-auto w-full max-w-lg rounded-lg p-6 shadow-2xl shadow-black">
                <button
                    className="content-body absolute top-0 right-1 h-6 w-6 cursor-pointer text-3xl text-gray-400 hover:text-gray-600"
                    onClick={onClose}
                    aria-label="Close"
                >
                    &times;
                </button>
                <h2 className="content-subtitle mb-6 text-2xl">Change Plan</h2>
                <p className="content-body mb-3 text-base">
                    Current plan: <strong className="capitalize">{ownerData.plan['name']}</strong>
                </p>
                <div className="content-body mb-8 w-full">
                    <select
                        className="font-body mt-2 w-full cursor-pointer rounded-sm border border-neutral-800 bg-neutral-900 px-3 py-2 text-neutral-200"
                        value={selectedPlan || ''}
                        onChange={(e) => setSelectedPlan(e.target.value)}
                    >
                        <option value="" disabled></option>
                        {plans &&
                            plans.map((val, key) => (
                                <option key={key} value={val.name} disabled={val.name.toLowerCase() === ownerData.plan['name'] || val.name !== "Extrinsic" ? true : false}>
                                    {val.name}
                                </option>
                            ))}
                    </select>
                    <div className='mb-4'>
                        {selectedPlan &&
                            plans
                                .filter((val) => val.name == selectedPlan)
                                .map((val, key) => {
                                    return (
                                        <div key={key} className="mt-6 mr-8 mb-4 flex flex-col gap-2">
                                            <div className="flex items-center justify-between">
                                                <span>Min. tokens per month</span>
                                                <span>{val.tokens}</span>
                                            </div>
                                            <div className="flex items-center justify-between">
                                                <span>Monthly cost</span>
                                                <span>£{val.price}</span>
                                            </div>
                                            <div className="my-1 h-[2px] w-full rounded-full separator opacity-30" />
                                            <div className="flex items-center justify-between">
                                                <span>Difference to { val.price - ownerData.plan['price'] >= 0 ? "pay": "refund" }</span>
                                                <span>
                                                    <strong>£{Math.abs(val.price - ownerData.plan['price'])}</strong>
                                                </span>
                                            </div>
                                        </div>
                                    )
                                })}
                    </div>
                    {
                        ownerData.is_verified && <span className='text-neutral-400 text-base'>The difference will be added/taken from next month&apos;s payment if applicable.</span>
                    }
                </div>
                <div className="content-body mt-6 flex justify-end">
                    <Button className="px-4 py-2 text-base" onClick={() => onConfirm(selectedPlan)} value={'CONFIRM'} />
                </div>
            </div>
        </div>
    )
}
