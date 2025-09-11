'use client'

import { KeyDisplayAlert } from '@/components/alerts'
import type { ConfirmType, OwnerData, OwnerKey, WarningType } from '@/types/mainTypes'
import { AlertToast } from '@/components/alerts/AlertToast'
import { ConfirmAlert } from '@/components/alerts/ConfirmAlert'
import { ChangePlanButton } from '@/components/buttons/ChangePlanButton'
import { BuyTokensButton } from '@/components/buttons/index'
import { IconContainer } from '@/components/ui'
import { apiService } from '@/services/apiService'
import { lib } from '@/services/lib'
import { Add, Delete } from '@mui/icons-material'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { FreeTrialButton } from '@/components/buttons/FreeTrialButton'

export default function ApiManagement() {
    const { data: session, status } = useSession()
    const [newAlert, setNewAlert] = useState<string | null>(null)
    const [alertType, setAlertType] = useState<WarningType>('alert')
    const [newConfirm, setNewConfirm] = useState<ConfirmType | null>(null)

    // -- ITEM STATES

    const [keyName, setKeyName] = useState<string>('')
    const [ownerData, setOwnerData] = useState<OwnerData | null>(null)
    const [ownerKeys, setOwnerKeys] = useState<OwnerKey[]>([])

    // -- LOADING STATES

    const [ownerLoading, setOwnerLoading] = useState(true)
    const [keysLoading, setKeysLoading] = useState(true)
    const [deletingKey, setDeletingKey] = useState(false)
    const [creatingKey, setCreatingKey] = useState(false)
    const [displayKey, setDisplayKey] = useState('')

    // -- INITIAL FETCHES

    const fetchOwner = async () => {
        setOwnerLoading(true)
        try {
            const owner = await fetch("/api/owners/self/detailed")
            const ownerResponse = await owner.json()
            if (!owner.ok) throw new Error(ownerResponse.message)

            setOwnerData(ownerResponse.owner)
        } catch (err: unknown) {
            if (err instanceof Error) {
                setNewAlert(err.message)
            } else {
                setNewAlert('An unknown error occurred')
            }
            setAlertType('error')
        }
        setOwnerLoading(false)
    }

    const fetchOwnerKeys = async () => {
        setKeysLoading(true)
        try {
            const keys = await fetch("/api/api-keys/self")
            const keysResponse = await keys.json()
            if (!keys.ok) throw new Error(keysResponse.message)

            setOwnerKeys(keysResponse.keys)
        } catch (err: unknown) {
            if (err instanceof Error) {
                setNewAlert(err.message)
            } else {
                setNewAlert('An unknown error occurred')
            }
            setAlertType('error')
        }
        setKeysLoading(false)
    }

    // -- EVENT HANDLERS

    const handleDeleteKey = async (id: string) => {
        setDeletingKey(true)
        const confirmed = await confirmDialog('Delete key', 'Are you sure you want to delete this key?')

        if (confirmed) {
            try {
                const deleted = await fetch("/api/api-keys/deactivate-key", {
                    method: "PATCH", // NOT DELETE - Deactivate for audit trail
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        keyId: id
                    })
                })
                const deletedResponse = await deleted.json()
                if (!deleted.ok) throw new Error(deletedResponse.message)

                window.location.reload()
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setNewAlert(err.message)
                } else {
                    setNewAlert('An unknown error occurred')
                }
                setAlertType('error')
            }
        }
        setDeletingKey(false)
    }

    const handleCreateNewKey = async () => {
        setCreatingKey(true)
        const confirmed = await confirmDialog('Create key', 'Are you sure you want to create a new key?')
    
        if (confirmed) {
            try {
                const key = await fetch("/api/api-keys/create-key", {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        keyName: keyName
                    })
                })
                const keyResponse = await key.json()
                if (!key.ok) throw new Error(keyResponse.message)

                setDisplayKey(keyResponse.key.key)
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setNewAlert(err.message)
                } else {
                    setNewAlert('An unknown error occurred')
                }
                setAlertType('error')
            }
        }
        setCreatingKey(false)
    }

    // -- HELPERS

    const confirmDialog = (title: string, message: string): Promise<boolean> => {
        return new Promise((resolve) => {
            setNewConfirm({
                title,
                message,
                onConfirm: () => {
                    setNewConfirm(null)
                    resolve(true)
                },
                onCancel: () => {
                    setNewConfirm(null)
                    resolve(false)
                },
            })
        })
    }

    useEffect(() => {
        if (status === 'authenticated') {
            fetchOwner()
            fetchOwnerKeys()
        }
    }, [status])

    return (
        <>
            <section id="settings" className="flex min-h-screen flex-col px-8 pt-12 xl:px-16">
                {newAlert && <AlertToast warning={alertType} message={`${newAlert}`} onClose={() => setNewAlert(null)}></AlertToast>}
                {newConfirm && (
                    <ConfirmAlert isOpen={!!newConfirm} onClose={newConfirm.onCancel} hasConfirmed={newConfirm.onConfirm} title={newConfirm.title}>
                        {newConfirm.message}
                    </ConfirmAlert>
                )}
                {displayKey && displayKey.length > 0 && (
                    <KeyDisplayAlert
                        isOpen={!!(displayKey.length > 0)}
                        onClose={() => {
                            setDisplayKey('')
                            window.location.reload()
                        }}
                    >
                        {displayKey}
                    </KeyDisplayAlert>
                )}
                <h3 className="content-miniheading text-[16px]">ACCOUNT</h3>
                <h2 className="content-title text-4xl">API Management</h2>
                <div className="my-8 grid gap-6">
                    <div className="bento-card">
                        <h2 className="content-subtitle text-xl">
                            Current Plan - <strong className="capitalize text-neutral-300 tracking-wide">{ownerData && ownerData.plan.name}</strong>
                            <div className="mt-2 h-[2px] w-full rounded-full bento-separator opacity-30" />
                        </h2>
                        <div className="mt-4 flex flex-col lg:flex-row w-full justify-between gap-8 rounded-sm border border-neutral-800 p-4">
                            <div className="flex lg:min-w-[420px] flex-col">
                                <h3 className="content-subtitle mb-4 text-xl">Tokens</h3>
                                <ul className="content-body flex flex-col gap-2">
                                    <li className="flex items-center justify-between">
                                        <span>Tokens remaining</span>
                                        {
                                            !ownerLoading ? <strong>{ownerData && ownerData.current_tokens}</strong> : <div className='min-w-20 min-h-full bg-neutral-900 rounded-sm'></div>
                                        }
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span>Total tokens used</span>
                                        {
                                            !ownerLoading ? <strong>{ownerData && ownerData.tokens_used}</strong> : <div className='min-w-14 min-h-full bg-neutral-900 rounded-sm'></div>
                                        }
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span>Next token reset</span>
                                        {
                                            !ownerLoading ? <strong>{ownerData && ownerData.is_verified ? lib.formatDate(ownerData.verified_month_end) : 'N/A'}</strong> : <div className='min-w-28 min-h-full bg-neutral-900 rounded-sm'></div>
                                        }
                                    </li>
                                </ul>
                                <div className="hidden md:flex mt-6 mb-2 items-center justify-center gap-8">
                                    <div className="flex flex-col items-center gap-2">
                                        <BuyTokensButton ownerData={ownerData} setNewAlert={setNewAlert} setAlertType={setAlertType} />
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <ChangePlanButton ownerData={ownerData} setNewAlert={setNewAlert} setAlertType={setAlertType} />
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <FreeTrialButton setNewAlert={setNewAlert} setAlertType={setAlertType} />
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="hidden lg:block w-0.5 h-full rounded-full bg-gradient-to-t from-transparent via-neutral-700 to-transparent" />
                                <div className="block lg:hidden w-full h-0.5 rounded-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
                            </div>
                            <div className="flex lg:w-[70%] flex-col">
                                <h3 className="content-subtitle mb-4 text-xl">Stats</h3>
                                <ul className="content-body flex flex-col gap-2">
                                    <li className="flex items-center justify-between">
                                        <span>Texts analysed</span>
                                        {
                                            !ownerLoading ? <strong>{ownerData && '0'}</strong> : <div className='min-w-14 min-h-full bg-neutral-900 rounded-sm'></div>
                                        }
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span>Watermarks created</span>
                                        {
                                            !ownerLoading ? <strong>{ownerData && ownerData.watermarks_made}</strong> : <div className='min-w-14 min-h-full bg-neutral-900 rounded-sm'></div>
                                        }
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span>Potential plagiarisms prevented</span>
                                        {
                                            !ownerLoading ? <strong>{ownerData && ownerData.plagiarisms_prevented}</strong> : <div className='min-w-14 min-h-full bg-neutral-900 rounded-sm'></div>
                                        }
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 gap-6">
                        <div className="bento-card">
                            <h2 className="content-subtitle text-xl">
                                API Keys
                                <div className="mt-2 h-[2px] w-full rounded-full bento-separator opacity-30" />
                            </h2>
                            <div className="content-body mt-4 flex min-h-[300px] lg:min-h-[400px] w-full flex-col justify-between gap-4 rounded-sm border border-neutral-800 p-4">
                                <div className="scrollbar-custom flex max-h-[300px] flex-col gap-4 overflow-y-auto">
                                    {
                                        !keysLoading ? (ownerKeys &&
                                            ownerKeys.map((val, key) => {
                                                if (val.is_active) {
                                                    return (
                                                        <div key={key} className="font-body flex justify-between items-center rounded-sm bg-neutral-900 px-4 py-3 h-14">
                                                            <span>{val.name}</span>
                                                            <button
                                                                className="hidden lg:block cursor-pointer opacity-30 transition-all hover:opacity-60"
                                                                onClick={() => handleDeleteKey(val.id)}
                                                            >
                                                                <Delete sx={{ color: 'red' }} />
                                                            </button>
                                                        </div>
                                                    )
                                                }
                                            })) : <div className="flex items-center rounded-sm bg-neutral-900 px-4 py-3 h-14">
                                                <div className='bg-neutral-800 h-6 w-20 rounded-sm'></div>
                                            </div>
                                    }
                                </div>
                                <div className="hidden lg:flex flex-col gap-2">
                                    <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-neutral-600 to-transparent" />
                                    <span className="my-1">Create new key</span>
                                    <div className="flex gap-4 w-full max-w-[400px]">
                                        <input
                                            onChange={(e) => setKeyName(e.target.value)}
                                            className="w-full rounded-sm border border-neutral-600 px-2 py-1 text-base"
                                            placeholder="Input name of key"
                                        />
                                        <IconContainer onClick={handleCreateNewKey}>
                                            <Add sx={{ fontSize: '24px' }} />
                                        </IconContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bento-card">
                            <h2 className="content-subtitle text-xl">
                                Team Members
                                <div className="mt-2 h-[2px] w-full rounded-full bento-separator opacity-30" />
                            </h2>
                            <div className="mt-4 flex min-h-[400px] w-full items-center justify-center rounded-sm border border-neutral-800 p-4">
                                <p className="content-body">Coming soon</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
