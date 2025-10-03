'use client'

import { AlertToast } from '@/components/alerts'
import { WelcomeEmail } from '@/components/emailTemplates/WelcomeEmail'
import { Button, IconContainer } from '@/components/ui/index'
import { apiService } from '@/services/apiService'
import type { WarningType } from '@/types/mainTypes'
import { ArrowForward } from '@mui/icons-material'
import { signIn, useSession } from 'next-auth/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function SignIn() {
    const { data: Session, status } = useSession()
    const [alertType, setAlertType] = useState<WarningType>('alert')
    const [newAlert, setNewAlert] = useState<string | null>(null)
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const signInResponse = await signIn('credentials', {
            email,
            password,
            redirect: false,
        })

        if (signInResponse && !signInResponse.ok) {
            setAlertType('error')
            setNewAlert("Failed to login")
        } else {
            window.location.href = "/account"
        }
    }

    const handleForgotPassword = async () => {
        const emailInput = (document.getElementById('emailInput') as HTMLInputElement)?.value

        try {
            const forgot = await fetch("/api/owners/forgot-password", {
                method: "PATCH",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: emailInput
                })
            })
            const forgotResponse = await forgot.json()
            if (!forgot.ok) throw new Error(forgotResponse.message)
                
            setNewAlert("We have sent a reset link to your email, if it exists")
        } catch (err: unknown) {
            if (err instanceof Error){
                setNewAlert(err.message)
            } else {
                setNewAlert("Unknown error occurred")
            }
            setAlertType('error')
        }
    }

    return (
        <>
            {newAlert && <AlertToast warning={alertType} message={newAlert} onClose={() => setNewAlert(null)}></AlertToast>}
            <section className="flex min-h-[100svh] flex-col items-center justify-center gap-4 p-4 sm:p-0">
                <div className="relative mb-6 flex w-max flex-col items-center justify-center gap-3">
                    <Image src={'images/SVG/logo-tall-main.svg'} width={180} height={180} alt="Heimdall logo" className="brightness-60 contrast-100 drop-shadow-xl drop-shadow-black/30 md:w-[240px]" />
                    <IconContainer className="absolute bottom-12 -left-18 rotate-180" href="/">
                        <ArrowForward />
                    </IconContainer>
                </div>
                <form onSubmit={handleSubmit} className="content-body section-container-sm flex w-full max-w-[600px] flex-col items-center justify-center gap-6">
                    <input
                        className="bento-card foreground-z w-full border-2 border-neutral-700 p-4 text-white"
                        id="emailInput"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        required
                    />
                    <input
                        className="bento-card foreground-z w-full border-2 border-neutral-700 p-4 text-white"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        required
                    />
                    <div className="-mt-4 mr-12 flex w-full justify-end">
                        <button
                            type="button"
                            className="content-subtitle cursor-pointer text-end text-lg underline underline-offset-2 transition-all hover:text-neutral-300"
                            onClick={() => handleForgotPassword()}
                        >
                            Forgot Password
                        </button>
                    </div>
                    <Button full={false} value={'SIGN IN'} className="border-neutral-700 hover:border-neutral-200" />
                </form>
                <a href="/signup" className="content-subtitle text-lg underline underline-offset-8 transition-all hover:text-neutral-300 lg:text-xl">
                    Sign Up
                </a>
            </section>
        </>
    )
}
