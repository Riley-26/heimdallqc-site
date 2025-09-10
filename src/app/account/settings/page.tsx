'use client'

import { Button } from '@/components/ui/index'
import { Tip } from '@/components/ui/Tip'
import { mainTheme } from '@/themes/themes'
import type { WarningType } from '@/types/mainTypes'
import Radio from '@mui/material/Radio'
import { ThemeProvider } from '@mui/material/styles'
import Switch from '@mui/material/Switch'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

interface BaseSwitchItem {
    name: string
    ref_name: string
    checked: boolean
}

interface PrefSwitchItem extends BaseSwitchItem {
    type: 'pref'
    desc: string
    ex: string
    strength: string
}

interface UiSwitchItem extends BaseSwitchItem {
    type: 'ui'
    desc?: string
    ex?: string
}

type SwitchItem = PrefSwitchItem | UiSwitchItem

interface OptionItem {
    name: string
    default: number | boolean
    desc: string
    ex?: string
}

interface OwnerData {
    function_pref: Record<string, boolean>
    ui_pref: Record<string, boolean>
    ai_threshold_option: number
    is_private: boolean
    [key: string]: unknown
}

const switches: SwitchItem[] = [
    //{ name: 'Auto-citations', ref_name: 'auto_cite', checked: false, type: 'pref', desc: 'Generates the most relevant citation, based on our search.', strength: '~20-45%', ex: 'Original:\nLorem ipsum dolor sit, amet consectetur adipisicing elit.\n\nModified:\n"Lorem ipsum dolor sit, amet consectetur adipisicing elit."\n- Lorem ipsum, https://www.lorem.com' },
    {
        name: 'AI rewrites',
        ref_name: 'ai_rewrite',
        checked: false,
        type: 'pref',
        desc: 'Rewrites the content using ChatGPT.',
        strength: '~60-85%',
        ex: 'Original:\nLorem ipsum dolor sit, amet consectetur adipisicing elit.\n\nModified:\nMorbi id erat accumsan, rutrum ante eu, gravida libero. Aenean vel nibh.',
    },
    {
        name: 'Auto-removals',
        ref_name: 'redact',
        checked: false,
        type: 'pref',
        desc: 'Removes the content, replacing it with [REDACTED]',
        strength: '~90-100%',
        ex: 'Original:\nLorem ipsum dolor sit, amet consectetur adipisicing elit.\n\nModified:\n[REDACTED].',
    },
    { name: 'Widget', ref_name: 'widget', checked: true, type: 'ui' },
    { name: 'Watermarks', ref_name: 'watermarks', checked: true, type: 'ui' },
]

const options: OptionItem[] = [
    {
        name: 'AI Threshold',
        default: 40,
        desc: 'Only create entries for submissions that receive an AI score prediction over the threshold. Submissions with high plagiarism scores will be saved regardless.',
        ex: "40-99. A higher threshold means that only the more important entries are saved, taking up less space in both your dashboard and our storage. We wouldn't recommend a threshold higher than 80%.",
    },
    {
        name: 'Privacy Mode',
        default: false,
        desc: 'Set your account to private. Your site will not show up in any form of search, and watermarks will not be available.',
    },
]

export default function Settings() {
    const { data: session, status } = useSession()
    const [windowWidth, setWindowWidth] = useState<number>(0)
    const [newAlert, setNewAlert] = useState<string | null>(null)
    const [alertType, setAlertType] = useState<WarningType>('alert')

    const [prefStates, setPrefStates] = useState<SwitchItem[]>(switches)
    const [optionStates, setOptionStates] = useState<OptionItem[]>()
    const [threshold, setThreshold] = useState<number>()
    const [privacyMode, setPrivacyMode] = useState<boolean>(false)
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
            const updated = await fetch('/api/owners/update-settings', {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json',
                },
                body: JSON.stringify({
                    functionPrefs: functionPrefs,
                    uiPrefs: uiPrefs,
                    aiThreshold: threshold,
                    privacyMode: privacyMode,
                }),
            })
            const updatedResponse = await updated.json()
            if (!updated.ok) throw new Error(updatedResponse.message)

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
            const owner = await fetch('/api/owners/self/detailed')
            const ownerResponse = await owner.json()
            if (!owner.ok) throw new Error(ownerResponse.message)
            const ownerSettings: OwnerData = ownerResponse.owner

            const functionPrefs = ownerSettings.function_pref
            const uiPrefs = ownerSettings.ui_pref

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
            setThreshold(ownerSettings.ai_threshold_option)
            setPrivacyMode(ownerSettings.is_private)
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
    }, [status])

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth)
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <>
            <section id="settings" className="flex min-h-screen flex-col px-8 pt-12 xl:px-16">
                <h3 className="content-miniheading text-[16px]">ACCOUNT</h3>
                <h1 className="content-title text-4xl">Settings</h1>
                <ThemeProvider theme={mainTheme}>
                    <form className="mt-8 flex flex-col gap-6 lg:mb-8" onSubmit={(e) => handleSubmit(e)}>
                        <div className="flex flex-col gap-6 lg:flex-row">
                            <div className="bento-card flex flex-col gap-2 py-4 lg:w-[50%]">
                                <h2 className="content-subtitle-acc text-center md:my-2 lg:my-4">Preferences</h2>
                                <div className="separator h-[2px] w-full rounded-full opacity-30" />
                                <ul className="mb-1 lg:mb-4">
                                    {prefStates
                                        .filter((val) => val.type === 'pref')
                                        .map((val, key) => (
                                            <li key={key} className="flex items-center justify-between py-2">
                                                <div className="flex items-center gap-2">
                                                    <h3 className="content-subtitle-acc text-base lg:text-lg">{val.name}</h3>
                                                    <Tip
                                                        tooltip={{ title: val.name, desc: val.desc, strength: val.strength, ex: val.ex }}
                                                        windowWidth={windowWidth}
                                                    />
                                                </div>
                                                <Radio
                                                    checked={val.checked}
                                                    onChange={() => {
                                                        setPrefStates((prev) =>
                                                            prev.map((item, idx) => (item.type === 'pref' ? { ...item, checked: idx === key } : item))
                                                        )
                                                    }}
                                                    size={windowWidth < 1024 ? 'small' : 'medium'}
                                                />
                                            </li>
                                        ))}
                                </ul>
                            </div>
                            <div className="bento-card flex flex-col gap-2 py-4 lg:w-[50%]">
                                <h2 className="content-subtitle-acc text-center md:my-2 lg:my-4">Interface</h2>
                                <div className="separator h-[2px] w-full rounded-full opacity-30" />
                                <ul className="mb-1 lg:mb-4">
                                    {prefStates
                                        .filter((val) => val.type === 'ui')
                                        .map((val, key) => (
                                            <li key={key} className="flex items-center justify-between py-2">
                                                <h3 className="content-subtitle-acc text-base lg:text-lg">{val.name}</h3>
                                                <Switch
                                                    checked={val.checked}
                                                    onChange={() => {
                                                        setPrefStates((prev) =>
                                                            prev.map((item) =>
                                                                item.type === 'ui' && item.ref_name === val.ref_name
                                                                    ? { ...item, checked: !item.checked }
                                                                    : item
                                                            )
                                                        )
                                                    }}
                                                    size={windowWidth < 1024 ? 'small' : 'medium'}
                                                />
                                            </li>
                                        ))}
                                </ul>
                            </div>
                        </div>
                        <div className="flex flex-col gap-6 lg:flex-row">
                            <div className="bento-card flex flex-col gap-2 py-4 lg:w-[50%]">
                                <h2 className="content-subtitle-acc text-center md:my-2 lg:my-4">Options</h2>
                                <div className="separator h-[2px] w-full rounded-full opacity-30" />
                                <ul className="mb-1 lg:mb-4">
                                    {options.map((val, key) => {
                                        return (
                                            <li key={key} className="flex items-center justify-between py-2">
                                                <div className="flex items-center gap-2">
                                                    <h3 className="content-subtitle-acc text-base lg:text-lg">{val.name}</h3>
                                                    <Tip tooltip={{ title: val.name, desc: val.desc, ex: val.ex }} windowWidth={windowWidth} />
                                                </div>
                                                {typeof val.default == 'number' ? (
                                                    <input
                                                        min={40}
                                                        max={99}
                                                        step={10}
                                                        type="number"
                                                        className="content-body w-[50px] rounded-sm border border-neutral-700 text-end md:w-[100px]"
                                                        placeholder="40-99"
                                                        value={threshold ?? ''}
                                                        onChange={(e) => setThreshold(Number(e.target.value))}
                                                    />
                                                ) : (
                                                    <Switch
                                                        checked={privacyMode}
                                                        onChange={(e) => setPrivacyMode(e.target.checked)}
                                                        size={windowWidth < 1024 ? 'small' : 'medium'}
                                                    />
                                                )}
                                            </li>
                                        )
                                    })}
                                </ul>
                            </div>
                            <div className="hidden lg:block lg:w-[50%]"></div>
                        </div>
                        {!windowWidth && <div></div>}
                        <Button className="mr-auto ml-8 w-max px-6 py-3 text-lg lg:mt-4" value={'APPLY'} />
                    </form>
                </ThemeProvider>
            </section>
        </>
    )
}
