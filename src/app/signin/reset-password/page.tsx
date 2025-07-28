'use client'

import { AlertToast } from '@/components/alerts'
import { Button } from '@/components/ui/index'
import { apiService } from '@/services/apiService'
import { WarningType } from '@/types/mainTypes'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function ResetPassword() {
    const [alertType, setAlertType] = useState<WarningType>('alert')
    const [newAlert, setNewAlert] = useState<string | null>(null)

    const [email, setEmail] = useState<string>('')
    const [password, setPassword] = useState<string>('')
    const [token, setToken] = useState<string | null>(null)

    const handleSubmit = async () => {
        try {
            const reset = await apiService.sendResetEmail(email)

            return reset
        } catch (err: unknown) {
            if (err instanceof Error) {
                setNewAlert(err.message)
            } else {
                setNewAlert('Unknown error occurred')
            }
            setAlertType('error')
        }
    }

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search)
        const tokenFromUrl = urlParams.get('token')

        setToken(tokenFromUrl)
    }, [])

    return (
        <>
            {newAlert && <AlertToast warning={alertType} message={newAlert}></AlertToast>}
            <section className="flex min-h-screen flex-col items-center justify-center gap-4">
                <div className="relative mb-6 flex w-max flex-col items-center justify-center gap-3">
                    <Image
                        src={'/images/SVG/Asset 4.svg'}
                        width={160}
                        height={160}
                        alt="Heimdall logo"
                        className="brightness-60 contrast-100 drop-shadow-xl drop-shadow-black/30"
                    />
                    <span className="font-logo text-4xl text-neutral-300">HEIMDALL</span>
                </div>
                <form onSubmit={handleSubmit} className="content-body Section-container-sm flex flex-col items-center justify-center gap-6">
                    <input
                        className="bento-card foreground-z min-w-[600px] border-2 border-neutral-700 p-4 text-white"
                        id="emailInput"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                    <input
                        className="bento-card foreground-z min-w-[600px] border-2 border-neutral-700 p-4 text-white"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    <Button full={false} value={'RESET'} className="border-neutral-700 hover:border-neutral-200" />
                </form>
            </section>
        </>
    )
}
