"use client"

import { ThemeProvider } from '@mui/material/styles';
import { mainTheme } from "@/themes/themes"
import Switch from "@mui/material/Switch";
import React, { useEffect, useState } from "react";
import { Button } from '@/components/ui/index';

const switches = [
    { name: "Auto-citations", checked: true },
    { name: "Emergency AI rewrite", checked: true },
    { name: "Widget", checked: true },
    { name: "Watermarks", checked: true },
]

export default function Settings() {
    const [switchDefaults, setSwitchDefaults] = useState(switches)
    
    const handleSubmit = (e:any) => {
        console.log("hello")
    }

    const handleSwitchesDefault = () => {
        // API CALL - GET DEFAULT SWITCH VALUES
        const vals = [true, false, true, false]

        const newSwitches = switchDefaults.map((val, key) => {
            return { name: val.name, checked: vals[key] }
        })

        setSwitchDefaults(newSwitches)
    }

    useEffect(() => {
        handleSwitchesDefault()
    }, [])

    return (
        <>
            <section id="settings" className="min-h-screen pt-[100px] flex flex-col px-8 xl:px-16">
                <h3 className="content-miniheading text-[16px]">ACCOUNT</h3>
                <h1 className="content-title text-5xl">Settings</h1>
                <ThemeProvider theme={mainTheme}>
                    <form className="flex flex-col gap-2 bento-card max-w-[500px] py-4 my-8" onSubmit={(e) => handleSubmit(e)}>
                        <h2 className='content-subtitle my-2 text-center'>Options</h2>
                        <div className="h-[2px] w-full opacity-30 bg-gradient-to-r from-transparent via-[#d8af41] to-transparent rounded-full" />
                        {
                            switchDefaults.map((val, key) => {
                                return (
                                    <li key={key} className="py-2 flex justify-between items-center">
                                        <h3 className="content-subtitle text-xl font-semibold tracking-wide">{val.name}</h3>
                                        <Switch
                                            checked={val.checked}
                                            onChange={() => {
                                                setSwitchDefaults(prev =>
                                                    prev.map((item, idx) =>
                                                        idx === key ? { ...item, checked: !item.checked } : item
                                                    )
                                                );
                                        }}/>
                                    </li>
                                )
                            })
                        }
                        <div className="h-[2px] w-full opacity-30 bg-gradient-to-r from-transparent via-[#d8af41] to-transparent rounded-full" />
                        <Button className="mt-4 ml-auto px-4 py-2 text-base w-max border-neutral-500 hover:border-neutral-300" value={"APPLY"}/>
                    </form>
                </ThemeProvider>
            </section>
        </>
    )
}