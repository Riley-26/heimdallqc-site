'use client'

import { Button } from '@/components/ui/index'
import { mainTheme } from '@/themes/themes'
import Radio from '@mui/material/Radio'
import { ThemeProvider } from '@mui/material/styles'
import Switch from '@mui/material/Switch'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

const switches = [
    {
        name: 'Auto-citations',
        ref_name: 'auto_cite',
        checked: false,
        type: 'pref',
    },
    {
        name: 'Emergency AI rewrite',
        ref_name: 'ai_rewrite',
        checked: false,
        type: 'pref',
    },
    { name: 'Auto-removal', ref_name: 'redact', checked: false, type: 'pref' },
    { name: 'Widget', ref_name: 'widget', checked: true, type: 'ui' },
    { name: 'Watermarks', ref_name: 'watermarks', checked: true, type: 'ui' },
]

export default function Settings() {
    const { data: session, status } = useSession()
    const [prefStates, setPrefStates] = useState(switches)

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const functionPrefs: any = {}
        const uiPrefs: any = {}

        prefStates.map((val, key) => {
            if (val.type === 'pref') functionPrefs[val.ref_name] = val.checked
            if (val.type === 'ui') uiPrefs[val.ref_name] = val.checked
            return
        })

        const apply = await fetch(`http://127.0.0.1:8000/api/owners/update-settings`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                id: session?.user.id,
                function_pref: functionPrefs,
                ui_pref: uiPrefs,
            }),
        })
        const applyResponse = await apply.json()

        if (apply.status === 200) {
            window.location.reload()
        }
    }

    const handleSwitchesDefault = async () => {
        // API CALL - GET DEFAULT SWITCH VALUES
        const preferences = await fetch(`http://127.0.0.1:8000/api/owners/${session?.user.id}`)
        const preferencesResponse = await preferences.json()
        const functionPrefs = preferencesResponse.function_pref
        const uiPrefs = preferencesResponse.ui_pref

        if (preferences.status === 200) {
            const updatedSwitches = switches.map((val, key) => {
                if (Object.keys(functionPrefs).includes(val.ref_name)) {
                    return { ...val, checked: functionPrefs[val.ref_name] }
                }
                if (Object.keys(uiPrefs).includes(val.ref_name)) {
                    return { ...val, checked: uiPrefs[val.ref_name] }
                }
                return val
            })
            setPrefStates(updatedSwitches)
        }
    }

    useEffect(() => {
        if (status === 'authenticated') handleSwitchesDefault()
    }, [status])

    return (
        <>
            <section id="settings" className="flex min-h-screen flex-col px-8 pt-12 xl:px-16">
                <h3 className="content-miniheading text-[16px]">ACCOUNT</h3>
                <h1 className="content-title text-4xl">Settings</h1>
                <ThemeProvider theme={mainTheme}>
                    <div className="grid grid-cols-2 gap-6">
                        <form className="bento-card my-8 flex flex-col gap-2 py-4" onSubmit={(e) => handleSubmit(e)}>
                            <h2 className="content-subtitle my-4 text-center text-2xl">Preferences</h2>
                            <div className="h-[2px] w-full rounded-full bg-gradient-to-r from-transparent via-[#d8af41] to-transparent opacity-30" />
                            <ul>
                                {prefStates
                                    .filter((val) => val.type === 'pref')
                                    .map((val, key) => (
                                        <li key={key} className="flex items-center justify-between py-2">
                                            <h3 className="content-subtitle text-lg font-semibold tracking-wide">
                                                {val.name}
                                            </h3>
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
                            <div className="h-[2px] w-full rounded-full bg-gradient-to-r from-transparent via-[#d8af41] to-transparent opacity-30" />
                            <Button
                                className="mt-4 ml-auto w-max border-neutral-500 px-4 py-2 text-base hover:border-neutral-300"
                                value={'APPLY'}
                            />
                        </form>
                        <form className="bento-card my-8 flex flex-col gap-2 py-4" onSubmit={(e) => handleSubmit(e)}>
                            <h2 className="content-subtitle my-4 text-center text-2xl">Interface</h2>
                            <div className="h-[2px] w-full rounded-full bg-gradient-to-r from-transparent via-[#d8af41] to-transparent opacity-30" />
                            {prefStates.map((val, key) => {
                                if (val.type !== 'ui') return
                                return (
                                    <li key={key} className="flex items-center justify-between py-2">
                                        <h3 className="content-subtitle text-lg font-semibold tracking-wide">
                                            {val.name}
                                        </h3>
                                        <Switch
                                            checked={val.checked}
                                            onChange={() => {
                                                setPrefStates((prev) =>
                                                    prev.map((item, idx) =>
                                                        idx === key
                                                            ? {
                                                                  ...item,
                                                                  checked: !item.checked,
                                                              }
                                                            : item
                                                    )
                                                )
                                            }}
                                        />
                                    </li>
                                )
                            })}
                            <div className="h-[2px] w-full rounded-full bg-gradient-to-r from-transparent via-[#d8af41] to-transparent opacity-30" />
                            <Button
                                className="mt-4 ml-auto w-max border-neutral-500 px-4 py-2 text-base hover:border-neutral-300"
                                value={'APPLY'}
                            />
                        </form>
                    </div>
                </ThemeProvider>
            </section>
        </>
    )
}
