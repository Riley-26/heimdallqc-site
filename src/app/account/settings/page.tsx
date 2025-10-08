'use client'

import { AlertToast, ConfirmAlert } from '@/components/alerts'
import { DeleteAccountAlert } from '@/components/alerts/DeleteAccountAlert'
import { Button, Loading } from '@/components/ui/index'
import { Tip } from '@/components/ui/Tip'
import { useOwnerData } from '@/hooks/useOwnerData'
import { mainTheme } from '@/themes/themes'
import type { ConfirmType, DeleteAccountType, WarningType } from '@/types/mainTypes'
import Radio from '@mui/material/Radio'
import { ThemeProvider } from '@mui/material/styles'
import Switch from '@mui/material/Switch'
import { useQueryClient } from '@tanstack/react-query'
import { signOut, useSession } from 'next-auth/react'
import { FormEvent, useEffect, useState } from 'react'

interface SwitchItem {
    name: string
    ref_name: string
    val: string
    desc: string
    ex?: string
}

interface OptionItem {
    name: string
    default: number | boolean | string
    desc: string
    ex?: string
}

interface DeleteItem {
    name: string
    desc: string
}

interface OwnerData {
    placeholder: string
    ai_threshold_option: number
    is_private: boolean
    [key: string]: unknown
}

const options: OptionItem[] = [
    {
        name: 'Placeholder',
        default: "[CONTENT UNDER REVIEW]",
        desc: 'Removes the content, replacing it with the placeholder',
        ex: 'Original:\nLorem ipsum dolor sit, amet consectetur adipisicing elit.\n\nModified:\n[*PLACEHOLDER*].',
    },
    {
        name: 'AI Threshold',
        default: 40,
        desc: 'Only create entries for submissions that receive an AI score prediction over the threshold. Submissions with high plagiarism scores will be saved regardless.',
        ex: "40-99. A higher threshold means that only the more important entries are saved, taking up less space in both your dashboard and our storage. We wouldn't recommend a threshold higher than 80%.",
    },
]

const deletes: DeleteItem[] = [
    {
        name: "Delete Account",
        desc: "Delete all the data tied to your account, including all your submissions, payment methods etc. This is permanent, for more information, contact us at support@heimdallqc.com"
    }
]

export default function Settings() {
    const { data: session, status } = useSession()
    const { data: ownerData, isLoading: ownerDataLoading, isError: isOwnerDataError, error: ownerDataError } = useOwnerData()
    const queryClient = useQueryClient();
    
    const [windowWidth, setWindowWidth] = useState<number>(0)
    const [newAlert, setNewAlert] = useState<string | null>(null)
    const [deleteOwner, setDeleteOwner] = useState<DeleteAccountType | null>(null)
    const [alertType, setAlertType] = useState<WarningType>('alert')

    const [placeholderValue, setPlaceholderValue] = useState<string>("")
    const [threshold, setThreshold] = useState<number>()
    const [settingsLoading, setSettingsLoading] = useState(true)

    // HANDLERS

    const handleSubmit = async () => {
        try {
            const updated = await fetch('/api/owners/update-settings', {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    placeholder: placeholderValue,
                    aiThreshold: threshold
                }),
            })
            const updatedResponse = await updated.json()
            if (!updated.ok) throw new Error(updatedResponse.message)

            queryClient.invalidateQueries({ queryKey: ['ownerData'] })
            setNewAlert(updatedResponse.message)
        } catch (err: unknown) {
            if (err instanceof Error) {
                setNewAlert(err.message)
            } else {
                setNewAlert('An unknown error occurred')
            }
            setAlertType('error')
        }
    }

    const handleSwitchesDefault = async () => {
        try {
            setPlaceholderValue(ownerData.placeholder)
            setThreshold(ownerData.ai_threshold_option)
        } catch (err: unknown) {
            if (err instanceof Error) {
                setNewAlert(err.message)
            } else {
                setNewAlert('An unknown error occurred')
            }
            setAlertType('error')
        }
        setSettingsLoading(false)
    }

    const handleDeleteAccount = async () => {
        const confirmed = await deleteConfirmDialog()

        if (!!confirmed) {
            try {
                const deleted = await fetch('/api/owners/delete-account', {
                    method: 'DELETE',
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        password: confirmed
                    }),
                })
                const deletedResponse = await deleted.json()
                if (!deleted.ok) throw new Error(deletedResponse.message)
    
                setNewAlert(deletedResponse.message)
                await signOut({ callbackUrl: '/' })
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

    const deleteConfirmDialog = (): Promise<string | null> => {
        return new Promise((resolve) => {
            setDeleteOwner({
                onConfirm: (password: string | null) => {
                    setDeleteOwner(null)
                    resolve(password)
                },
                onCancel: () => {
                    setDeleteOwner(null)
                    resolve(null)
                },
            })
        })
    }

    useEffect(() => {
        if (ownerData) handleSwitchesDefault()
    }, [ownerData])

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth)
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

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
                    {deleteOwner && (
                        <DeleteAccountAlert isOpen={!!deleteOwner} onClose={deleteOwner.onCancel} onConfirm={deleteOwner.onConfirm}></DeleteAccountAlert>
                    )}
                    <h3 className="content-miniheading text-[16px]">ACCOUNT</h3>
                    <h1 className="content-title text-4xl">Settings</h1>
                    <div className='flex flex-col gap-6'>
                        <div className="mt-8 flex flex-col gap-6 lg:mb-8">
                            <div className="flex flex-col gap-6 lg:flex-row">
                                <div className="bento-card flex flex-col gap-2 py-4 lg:w-[700px]">
                                    <h2 className="content-subtitle-acc text-center md:my-2 lg:my-4">Options</h2>
                                    <div className="separator h-[2px] w-full rounded-full opacity-30" />
                                    <ul className="mb-1 lg:mb-4">
                                        {options.map((val, key) => {
                                            return (
                                                <li key={key} className="flex flex-col gap-1 sm:flex-row sm:items-center justify-between py-2">
                                                    <div className="flex items-center gap-2">
                                                        <h3 className="content-subtitle-acc text-base lg:text-lg">{val.name}</h3>
                                                        <Tip tooltip={{ title: val.name, desc: val.desc, ex: val.ex }} windowWidth={windowWidth} />
                                                    </div>
                                                    {typeof val.default == 'number' ? 
                                                        <input
                                                            min={40}
                                                            max={99}
                                                            step={10}
                                                            type="number"
                                                            className="p-1 pl-4 content-body rounded-sm border border-neutral-700 text-sm sm:text-end sm:text-base w-[100px]"
                                                            placeholder="40-99"
                                                            value={threshold ?? ''}
                                                            onChange={(e) => setThreshold(Number(e.target.value))}
                                                        /> : <input
                                                            type="string"
                                                            className="p-1 pl-4 content-body rounded-sm border border-neutral-700 text-sm sm:text-end sm:text-base w-full max-w-[300px]"
                                                            placeholder="e.g. [CONTENT UNDER REVIEW]"
                                                            value={placeholderValue ?? ''}
                                                            onChange={(e) => setPlaceholderValue(e.target.value)}
                                                        />
                                                    }
                                                </li>
                                            )
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 lg:flex-row">
                            <div className="bento-card flex flex-col gap-2 py-4 lg:w-[700px]">
                                <h2 className="content-subtitle-acc text-center md:my-2 lg:my-4">Delete</h2>
                                <div className="separator h-[2px] w-full rounded-full opacity-30" />
                                <ul className="mb-1 lg:mb-4">
                                    {deletes.map((val, key) => {
                                        return (
                                            <li key={key} className="flex items-center justify-between py-2">
                                                <div className="flex items-center gap-2">
                                                    <h3 className="content-subtitle-acc text-base lg:text-lg w-max">{val.name}</h3>
                                                    <Tip tooltip={{ title: val.name, desc: val.desc }} windowWidth={windowWidth} />
                                                </div>
                                                <Button value={"DELETE"} className='hidden sm:block h-8 text-sm px-2 p-0 border-red-400 text-red-500 hover:bg-red-400 hover:text-neutral-900' onClick={handleDeleteAccount}/>
                                                <Button value={"x"} className='block sm:hidden w-max h-8 text-md px-4 p-0 border-red-400 text-red-500 hover:bg-red-400 hover:text-neutral-900' onClick={handleDeleteAccount}/>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                        </div>
                        <Button className="mr-auto mb-12 ml-8 w-max px-6 py-3 text-lg mt-8" value={'APPLY'} onClick={() => handleSubmit()} />
                    </div>
                </section>
            </>
        )
    }
}
