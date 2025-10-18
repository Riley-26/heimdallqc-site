import React, { ReactNode, useEffect, useState } from 'react'
import { Button } from '../ui'
import { OwnerData } from '@/types/mainTypes'

interface BuyTokensProps {
    ownerData: OwnerData
    isOpen: boolean
    onClose: () => void
    children?: ReactNode
    onConfirm: (arg0: string | null) => void
}

const packs = [
    {
        name: 'sm',
        tokens: 1000,
        price: 5,
    },
    {
        name: 'md',
        tokens: 4000,
        price: 18,
    },
    {
        name: 'lg',
        tokens: 10000,
        price: 40,
    },
    {
        name: 'xl',
        tokens: 50000,
        price: 175,
    },
]

export const BuyTokensAlert: React.FC<BuyTokensProps> = ({ ownerData, isOpen, onClose, onConfirm }) => {
    const [selectedPack, setSelectedPack] = useState<string | null>(null)

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
                <h2 className="content-subtitle mb-4 text-xl">Buy Tokens</h2>
                <div className="content-body mb-8 w-full">
                    <select
                        className="font-body mt-2 w-full cursor-pointer rounded-sm border border-neutral-800 bg-neutral-900 px-3 py-2 text-neutral-200"
                        value={selectedPack || ''}
                        onChange={(e) => setSelectedPack(e.target.value)}
                    >
                        <option value="" disabled></option>
                        {packs &&
                            packs.map((val, key) => (
                                <option key={key} value={val.name}>
                                    {val.tokens}
                                </option>
                            ))}
                    </select>
                    {selectedPack &&
                        packs
                            .filter((val) => val.name === selectedPack)
                            .map((val, key) => {
                                return (
                                    <div key={key} className="mt-6 mr-8 mb-4 flex flex-col gap-2">
                                        <div className="flex items-center justify-between">
                                            <span>Price per token</span>
                                            <span>£{(val.price / val.tokens).toFixed(4)}/t</span>
                                        </div>
                                        <div className="flex items-center justify-between">
                                            <span>New token total</span>
                                            <span>{val.tokens + ownerData.current_tokens}</span>
                                        </div>
                                        <div className="my-1 h-[2px] w-full rounded-full separator opacity-30" />
                                        <div className="flex items-center justify-between">
                                            <span>Cost</span>
                                            <span>
                                                <strong>£{val.price}</strong>
                                            </span>
                                        </div>
                                    </div>
                                )
                            })}
                </div>
                <div className="content-body mt-6 flex justify-end">
                    <Button className="px-4 py-2 text-base" onClick={() => onConfirm(selectedPack)} value={'CONFIRM'} />
                </div>
            </div>
        </div>
    )
}
