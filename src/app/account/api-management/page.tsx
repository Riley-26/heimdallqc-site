'use client'

import { KeyDisplayAlert } from '@/components/alerts'
import type { ConfirmType, OwnerData, OwnerKey, OwnerWebhook, WarningType } from '@/types/mainTypes'
import { AlertToast } from '@/components/alerts/AlertToast'
import { ConfirmAlert } from '@/components/alerts/ConfirmAlert'
import { ChangePlanButton } from '@/components/buttons/ChangePlanButton'
import { BuyTokensButton } from '@/components/buttons/index'
import { IconContainer, Loading } from '@/components/ui'
import { apiService } from '@/services/apiService'
import { lib } from '@/services/lib'
import { Add, Delete } from '@mui/icons-material'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { FreeTrialButton } from '@/components/buttons/FreeTrialButton'
import { useQueryClient } from '@tanstack/react-query'
import { useGetKeys } from '@/hooks/useGetKeys'
import { useOwnerData } from '@/hooks/useOwnerData'
import { useGetWebhooks } from '@/hooks/useGetWebhooks'

export default function ApiManagement() {
    const { data: session, status } = useSession()
    const { data: ownerData, isLoading: ownerDataLoading, isError: isOwnerDataError, error: ownerDataError } = useOwnerData()
    const { data: keyData, isLoading: keysLoading, isError: isKeyError, error: keyError } = useGetKeys()
    const { data: webhookData, isLoading: webhookDataLoading, isError: isWebhookError, error: webhookError } = useGetWebhooks()
    const queryClient = useQueryClient();
    
    const [newAlert, setNewAlert] = useState<string | null>(null)
    const [alertType, setAlertType] = useState<WarningType>('alert')
    const [newConfirm, setNewConfirm] = useState<ConfirmType | null>(null)

    const [keyName, setKeyName] = useState<string>('')
    const [webhookName, setWebhookName] = useState<string>('')
    const [endpointInput, setEndpointInput] = useState<string>('')
    const [displayKey, setDisplayKey] = useState('')

    // -- EVENT HANDLERS

    const handleDeleteKey = async (id: string) => {
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

                queryClient.invalidateQueries({ queryKey: ['keyData'] })
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setNewAlert(err.message)
                } else {
                    setNewAlert('An unknown error occurred')
                }
                setAlertType('error')
            }
        }
    }

    const handleDeleteWebhook = async (id: string) => {
        const confirmed = await confirmDialog('Delete webhook', 'Are you sure you want to delete this webhook?')

        if (confirmed) {
            try {
                const deleted = await fetch("/api/webhooks/delete-webhook", {
                    method: "DELETE",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        webhookId: id
                    })
                })
                const deletedResponse = await deleted.json()
                if (!deleted.ok) throw new Error(deletedResponse.message)

                queryClient.invalidateQueries({ queryKey: ['webhookData'] })
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setNewAlert(err.message)
                } else {
                    setNewAlert('An unknown error occurred')
                }
                setAlertType('error')
            }
        }
    }

    const handleCreateNewKey = async () => {
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
                
                queryClient.invalidateQueries({ queryKey: ['keyData'] })
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
    }

    const handleCreateNewWebhook = async () => {
        const confirmed = await confirmDialog('Create webhook', 'Are you sure you want to create a new webhook?')
    
        if (confirmed) {
            try {
                const webhook = await fetch("/api/webhooks/create-webhook", {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        webhookName: webhookName,
                        endpoint: endpointInput
                    })
                })
                const webhookResponse = await webhook.json()
                if (!webhook.ok) throw new Error(webhookResponse.message)
                
                queryClient.invalidateQueries({ queryKey: ['webhookData'] })
                setWebhookName("")
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setNewAlert(err.message)
                } else {
                    setNewAlert('An unknown error occurred')
                }
                setAlertType('error')
            }
        }
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

    if (ownerDataLoading) {
        return <section id="account" className="min-h-screen flex justify-center items-center">
            <Loading />
        </section>
    }

    if (ownerData) {
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
                                Current Plan - <strong className="capitalize text-neutral-300 tracking-wide">{ownerData.plan.name}</strong>
                                <div className="mt-2 h-[2px] w-full rounded-full bento-separator opacity-30" />
                            </h2>
                            <div className="mt-4 flex flex-col lg:flex-row w-full justify-between gap-8 rounded-sm border border-neutral-800 p-4">
                                <div className="flex lg:min-w-[420px] flex-col">
                                    <h3 className="content-subtitle mb-4 text-xl">Tokens</h3>
                                    <ul className="content-body flex flex-col gap-2">
                                        <li className="flex items-center justify-between">
                                            <span>Tokens remaining</span>
                                            {
                                                !ownerDataLoading ? <strong>{ownerData.current_tokens}</strong> : <div className='min-w-20 min-h-full bg-neutral-900 rounded-sm'></div>
                                            }
                                        </li>
                                        <li className="flex items-center justify-between">
                                            <span>Total tokens used</span>
                                            {
                                                !ownerDataLoading ? <strong>{ownerData.tokens_used}</strong> : <div className='min-w-14 min-h-full bg-neutral-900 rounded-sm'></div>
                                            }
                                        </li>
                                        <li className="flex items-center justify-between">
                                            <span>Next token reset</span>
                                            {
                                                !ownerDataLoading ? <strong>{ownerData.is_verified ? lib.formatDate(ownerData.verified_month_end) : 'N/A'}</strong> : <div className='min-w-28 min-h-full bg-neutral-900 rounded-sm'></div>
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
                                        {
                                            !ownerData.trial_used ? <div className="flex flex-col items-center gap-2">
                                                <FreeTrialButton setNewAlert={setNewAlert} setAlertType={setAlertType} />
                                            </div> : <></>
                                        }
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
                                                !ownerDataLoading ? <strong>{ownerData.texts_analysed}</strong> : <div className='min-w-14 min-h-full bg-neutral-900 rounded-sm'></div>
                                            }
                                        </li>
                                        <li className="flex items-center justify-between">
                                            <span>Potential plagiarisms prevented</span>
                                            {
                                                !ownerDataLoading ? <strong>{ownerData.plagiarisms_prevented}</strong> : <div className='min-w-14 min-h-full bg-neutral-900 rounded-sm'></div>
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
                                            !keysLoading ? (!isKeyError &&
                                                keyData.map((val: OwnerKey, key: number) => {
                                                    if (val.is_active) {
                                                        return (
                                                            <div key={key} className="font-body flex justify-between items-center rounded-sm bg-neutral-900 px-4 py-3 h-14">
                                                                <div className='flex justify-between items-center w-full max-w-[400px]'>
                                                                    <span>{val.name}</span>
                                                                    <span className='text-sm md:text-base text-neutral-500'>{val.masked_key}</span>
                                                                </div>
                                                                <button
                                                                    className="hidden lg:block cursor-pointer opacity-30 transition-all hover:opacity-60 ml-4"
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
                                    Webhooks
                                    <div className="mt-2 h-[2px] w-full rounded-full bento-separator opacity-30" />
                                </h2>
                                <div className="content-body mt-4 flex min-h-[300px] lg:min-h-[400px] w-full flex-col justify-between gap-4 rounded-sm border border-neutral-800 p-4">
                                    <div className="scrollbar-custom flex max-h-[300px] flex-col gap-4 overflow-y-auto">
                                        {
                                            !webhookDataLoading ? (!isWebhookError &&
                                                webhookData.map((val: OwnerWebhook, key: number) => {
                                                    return (
                                                        <div key={key} className="font-body flex justify-between items-center rounded-sm bg-neutral-900 px-4 py-3 h-14">
                                                            <div className='flex justify-between items-center w-full max-w-[400px]'>
                                                                <span>{val.name}</span>
                                                                <span className='text-sm md:text-base text-neutral-500'>{val.endpoint}</span>
                                                            </div>
                                                            <button
                                                                className="hidden lg:block cursor-pointer opacity-30 transition-all hover:opacity-60 ml-4"
                                                                onClick={() => handleDeleteWebhook(val.id)}
                                                            >
                                                                <Delete sx={{ color: 'red' }} />
                                                            </button>
                                                        </div>
                                                    )
                                                })) : <div className="flex items-center rounded-sm bg-neutral-900 px-4 py-3 h-14">
                                                    <div className='bg-neutral-800 h-6 w-20 rounded-sm'></div>
                                                </div>
                                        }
                                    </div>
                                    <div className="hidden lg:flex flex-col gap-2">
                                        <div className="h-0.5 w-full bg-gradient-to-r from-transparent via-neutral-600 to-transparent" />
                                        <span className="my-1">Create new webhook</span>
                                        <div className="flex gap-4 w-full max-w-[400px]">
                                            <input
                                                onChange={(e) => setWebhookName(e.target.value)}
                                                className="w-full py-2 mr-15 rounded-sm border border-neutral-600 px-2 text-base"
                                                placeholder="Input name of webhook"
                                            />
                                        </div>
                                        <div className="flex gap-4 w-full max-w-[400px]">
                                            <input
                                                onChange={(e) => setEndpointInput(e.target.value)}
                                                className="w-full rounded-sm border border-neutral-600 px-2 py-1 text-base"
                                                placeholder="Input your API endpoint"
                                            />
                                            <IconContainer onClick={handleCreateNewWebhook}>
                                                <Add sx={{ fontSize: '24px' }} />
                                            </IconContainer>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}