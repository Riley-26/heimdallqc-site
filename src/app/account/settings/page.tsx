'use client'

import type { WarningType } from '@/types/mainTypes'
import { Button } from '@/components/ui/index'
import { apiService } from '@/services/apiService'
import { mainTheme } from '@/themes/themes'
import Radio from '@mui/material/Radio'
import { ThemeProvider } from '@mui/material/styles'
import Switch from '@mui/material/Switch'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

type SwitchType = 'pref' | 'ui'

interface SwitchItem {
    name: string
    ref_name: string
    checked: boolean
    type: SwitchType
}

interface OwnerData {
    function_pref: Record<string, boolean>
    ui_pref: Record<string, boolean>
    ai_threshold_option: number
    [key: string]: unknown
}

const switches: SwitchItem[] = [
    { name: 'Auto-citations', ref_name: 'auto_cite', checked: false, type: 'pref' },
    { name: 'Emergency AI rewrites', ref_name: 'ai_rewrite', checked: false, type: 'pref' },
    { name: 'Auto-removals', ref_name: 'redact', checked: false, type: 'pref' },
    { name: 'Widget', ref_name: 'widget', checked: true, type: 'ui' },
    { name: 'Watermarks', ref_name: 'watermarks', checked: true, type: 'ui' },
]

const options = [{ name: 'AI Threshold', default: 0 }]

export default function Settings() {
    const { data: session, status } = useSession()
    const [newAlert, setNewAlert] = useState<string | null>(null)
    const [alertType, setAlertType] = useState<WarningType>('alert')
    
    const [prefStates, setPrefStates] = useState<SwitchItem[]>(switches)
    const [threshold, setThreshold] = useState<number>()
    const [settingsLoading, setSettingsLoading] = useState(true)

    // HANDLERS

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const functionPrefs: Record<string, boolean> = {}
        const uiPrefs: Record<string, boolean> = {}

        prefStates.forEach((val) => {
            if (val.type === 'pref') functionPrefs[val.ref_name] = val.checked
            if (val.type === 'ui') uiPrefs[val.ref_name] = val.checked
        })

        try {
            await apiService.saveSettings(session?.user.id, functionPrefs, uiPrefs, threshold)

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

    const handleSwitchesDefault = async () => {
        try {
            const owner: OwnerData = await apiService.fetchOwner(session?.user.id)

            const functionPrefs = owner.function_pref
            const uiPrefs = owner.ui_pref

            const updatedSwitches = switches.map((val) => {
                if (Object.keys(functionPrefs).includes(val.ref_name)) {
                    return { ...val, checked: functionPrefs[val.ref_name] }
                }
                if (Object.keys(uiPrefs).includes(val.ref_name)) {
                    return { ...val, checked: uiPrefs[val.ref_name] }
                }
                return val
            })
            setPrefStates(updatedSwitches)
            setThreshold(owner.ai_threshold_option)
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

    useEffect(() => {
        if (status === 'authenticated') handleSwitchesDefault()
    }, [status, handleSwitchesDefault])

    return (
        <>
            <section id="settings" className="flex min-h-screen flex-col px-8 pt-12 xl:px-16">
                <h3 className="content-miniheading text-[16px]">ACCOUNT</h3>
                <h1 className="content-title text-4xl">Settings</h1>
                <ThemeProvider theme={mainTheme}>
                    <form className="my-8 grid grid-cols-2 gap-6" onSubmit={(e) => handleSubmit(e)}>
                        <div className="bento-card flex flex-col gap-2 py-4">
                            <h2 className="content-subtitle my-4 text-center text-2xl">Preferences</h2>
                            <div className="h-[2px] w-full rounded-full bg-gradient-to-r from-transparent via-[#d8af41] to-transparent opacity-30" />
                            <ul className="mb-4">
                                {prefStates
                                    .filter((val) => val.type === 'pref')
                                    .map((val, key) => (
                                        <li key={key} className="flex items-center justify-between py-2">
                                            <h3 className="content-subtitle text-lg font-semibold tracking-wide">{val.name}</h3>
                                            <Radio
                                                checked={val.checked}
                                                onChange={() => {
                                                    setPrefStates((prev) =>
                                                        prev.map((item, idx) =>
                                                            item.type === 'pref'
                                                                ? {
                                                                      ...item,
                                                                      checked: idx === key,
                                                                  }
                                                                : item
                                                        )
                                                    )
                                                }}
                                            />
                                        </li>
                                    ))}
                            </ul>
                        </div>
                        <div className="bento-card flex flex-col gap-2 py-4">
                            <h2 className="content-subtitle my-4 text-center text-2xl">Interface</h2>
                            <div className="h-[2px] w-full rounded-full bg-gradient-to-r from-transparent via-[#d8af41] to-transparent opacity-30" />
                            <ul className="mb-4">
                                {prefStates
                                    .filter((val) => val.type === 'ui')
                                    .map((val, key) => (
                                        <li key={key} className="flex items-center justify-between py-2">
                                            <h3 className="content-subtitle text-lg font-semibold tracking-wide">{val.name}</h3>
                                            <Switch
                                                checked={val.checked}
                                                onChange={() => {
                                                    setPrefStates((prev) =>
                                                        prev.map((item) =>
                                                            item.type === 'ui' && item.ref_name === val.ref_name ? { ...item, checked: !item.checked } : item
                                                        )
                                                    )
                                                }}
                                            />
                                        </li>
                                    ))}
                            </ul>
                        </div>
                        <div className="bento-card flex flex-col gap-2 py-4">
                            <h2 className="content-subtitle my-4 text-center text-2xl">Options</h2>
                            <div className="h-[2px] w-full rounded-full bg-gradient-to-r from-transparent via-[#d8af41] to-transparent opacity-30" />
                            <ul className="mb-4">
                                {options.map((val, key) => {
                                    return (
                                        <li key={key} className="flex items-center justify-between py-2">
                                            <h3 className="content-subtitle text-lg font-semibold tracking-wide">{val.name}</h3>
                                            <input
                                                min={0}
                                                max={99}
                                                step={10}
                                                type="number"
                                                className="content-body w-[100px] rounded-sm border border-neutral-700 text-end"
                                                placeholder="0-99"
                                                value={threshold ?? ''}
                                                onChange={(e) => setThreshold(Number(e?.target.value))}
                                            />
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <div></div>
                        <Button className="mt-4 mr-auto ml-8 w-max px-6 py-3 text-lg" value={'APPLY'} />
                    </form>
                </ThemeProvider>
            </section>
        </>
    )
}
