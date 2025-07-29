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
        try {
            const owner = await apiService.fetchOwner(session?.user.id)

            setOwnerData(owner)
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
        try {
            const keys = await apiService.fetchKeys(session?.user.id)

            setOwnerKeys(keys)
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
                await apiService.deleteKey(session?.user.id, id)

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
                const creation = await apiService.createKey(session?.user.id, keyName)
    
                setDisplayKey(creation.key)
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
                {displayKey.length > 0 && (
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
                            Current Plan - <i className="text-lg capitalize">{ownerData && ownerData.plan.name}</i>
                            <div className="mt-2 h-[2px] w-full rounded-full bg-gradient-to-r from-[#d8af41] to-transparent opacity-30" />
                        </h2>
                        <div className="mt-4 flex w-full justify-between gap-8 rounded-sm border border-neutral-800 p-4">
                            <div className="flex min-w-[420px] flex-col">
                                <h3 className="content-subtitle mb-4 text-xl">Tokens</h3>
                                <ul className="content-body flex flex-col gap-2">
                                    <li className="flex items-center justify-between">
                                        <span>Tokens remaining</span>
                                        <span>
                                            <strong>{ownerData && ownerData.current_tokens}</strong>
                                        </span>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span>Total tokens used</span>
                                        <span>
                                            <strong>{ownerData && ownerData.tokens_used}</strong>
                                        </span>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span>Next token reset</span>
                                        <span>
                                            <strong>{ownerData && ownerData.is_verified ? lib.formatDate(ownerData.verified_month_end) : 'N/A'}</strong>
                                        </span>
                                    </li>
                                </ul>
                                <div className="mt-6 mb-2 flex items-center justify-center gap-8">
                                    <div className="flex flex-col items-center gap-2">
                                        { session?.user.id && <BuyTokensButton ownerData={ownerData} id={session?.user.id} setNewAlert={setNewAlert} setAlertType={setAlertType} /> }
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        { session?.user.id && <ChangePlanButton ownerData={ownerData} id={session?.user.id} setNewAlert={setNewAlert} setAlertType={setAlertType} /> }
                                    </div>
                                </div>
                            </div>
                            <div className="hidden w-0.5 rounded-full bg-gradient-to-t from-transparent via-neutral-700 to-transparent lg:block" />
                            <div className="flex w-[70%] flex-col">
                                <h3 className="content-subtitle mb-4 text-xl">Stats</h3>
                                <ul className="content-body flex flex-col gap-2">
                                    <li className="flex items-center justify-between">
                                        <span>Texts analysed</span>
                                        <span>
                                            <strong>{ownerData && '0'}</strong>
                                        </span>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span>Watermarks created</span>
                                        <span>
                                            <strong>{ownerData && ownerData.watermarks_made}</strong>
                                        </span>
                                    </li>
                                    <li className="flex items-center justify-between">
                                        <span>Potential plagiarisms prevented</span>
                                        <span>
                                            <strong>{ownerData && ownerData.plagiarisms_prevented}</strong>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bento-card">
                            <h2 className="content-subtitle text-xl">
                                API Keys
                                <div className="mt-2 h-[2px] w-full rounded-full bg-gradient-to-r from-[#d8af41] to-transparent opacity-30" />
                            </h2>
                            <div className="content-body mt-4 flex min-h-[400px] w-full flex-col justify-between gap-4 rounded-sm border border-neutral-800 p-4">
                                <div className="scrollbar-custom flex max-h-[300px] flex-col gap-4 overflow-y-auto">
                                    {ownerKeys &&
                                        ownerKeys.map((val, key) => {
                                            if (val.is_active) {
                                                return (
                                                    <div key={key} className="font-body flex justify-between rounded-sm bg-neutral-900 px-4 py-3">
                                                        <span>{val.name}</span>
                                                        <button
                                                            className="cursor-pointer opacity-30 transition-all hover:opacity-60"
                                                            onClick={() => handleDeleteKey(val.id)}
                                                        >
                                                            <Delete sx={{ color: 'red' }} />
                                                        </button>
                                                    </div>
                                                )
                                            }
                                        })}
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-neutral-600 to-transparent" />
                                    <span className="my-1">Create new key</span>
                                    <div className="flex gap-4">
                                        <input
                                            onChange={(e) => setKeyName(e.target.value)}
                                            className="min-w-[400px] rounded-sm border border-neutral-600 px-2 py-1 text-base"
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
                                <div className="mt-2 h-[2px] w-full rounded-full bg-gradient-to-r from-[#d8af41] to-transparent opacity-30" />
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
