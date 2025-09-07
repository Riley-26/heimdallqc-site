'use client'

import { AlertToast } from '@/components/alerts'
import { Button, IconContainer } from '@/components/ui/index'
import { apiService } from '@/services/apiService'
import type { WarningType } from '@/types/mainTypes'
import { ArrowForward } from '@mui/icons-material'
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { useState } from 'react'

export default function SignUp() {
    const [alertType, setAlertType] = useState<WarningType>('alert')
    const [newAlert, setNewAlert] = useState<string | null>(null)
    
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [company, setCompany] = useState('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const elements = e.currentTarget.elements as HTMLFormControlsCollection & {
            [index: number]: HTMLInputElement
        }
        const email = elements[0].value
        const name = elements[1].value
        const company = elements[2].value
        const password = elements[3].value

        try {
            const signUp = await fetch("/api/owners/create-owner", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    email: email,
                    name: name,
                    company: company,
                    domain: window.location.hostname,
                    password: password
                })
            })
            const signUpResponse = await signUp.json()
            if (!signUp.ok) throw new Error(signUpResponse.message)

            await signIn('credentials', {
                email: signUpResponse.login.email,
                password: signUpResponse.login.password,
            })
            window.location.href = '/account'
        } catch (err: unknown) {
            if (err instanceof Error) {
                setNewAlert(err.message)
            } else {
                setNewAlert("Unknown error occurred")
            }
            setAlertType('error')
        }
    }

    return (
        <>
            {newAlert && <AlertToast warning={alertType} message={`${newAlert}`} onClose={() => setNewAlert(null)}></AlertToast>}
            <section className="flex min-h-[100svh] flex-col items-center justify-center gap-4">
                <div className="relative mb-6 flex w-max flex-col items-center justify-center gap-3">
                    <Image src={'images/SVG/Asset 8.svg'} width={120} height={120} alt="Heimdall logo" className="brightness-60 contrast-100 drop-shadow-xl drop-shadow-black/30 md:w-[160px]" />
                    <span className="font-logo text-4xl text-neutral-300">HEIMDALL</span>
                    <IconContainer className="absolute bottom-12 -left-18 rotate-180" href="/">
                        <ArrowForward />
                    </IconContainer>
                </div>
                <form onSubmit={handleSubmit} className="content-body section-container-sm flex w-full max-w-[600px] flex-col items-center justify-center gap-6">
                    <input
                        className="bento-card foreground-z w-full border-2 border-neutral-700 p-4 text-white"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email*"
                        required
                    />
                    <div className="flex w-full justify-between gap-6">
                        <input
                            className="bento-card foreground-z w-full border-2 border-neutral-700 p-4 text-white"
                            type="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Name*"
                            required
                        />
                        <input
                            className="bento-card foreground-z w-full border-2 border-neutral-700 p-4 text-white"
                            type="company"
                            value={company}
                            onChange={(e) => setCompany(e.target.value)}
                            placeholder="Company"
                        />
                    </div>
                    <input
                        className="bento-card foreground-z w-full border-2 border-neutral-700 p-4 text-white"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password*"
                        required
                    />
                    <div className="flex items-center justify-center w-full">
                        <input
                            type="checkbox"
                            required
                            className="mr-2 accent-neutral-700 w-[16px] h-[16px] cursor-pointer"
                        />
                        <label htmlFor="terms" className="text-neutral-300 text-base select-none">
                            I agree to the <a href="/privacy#terms" className="underline underline-offset-2 hover:text-neutral-400">Terms of Service</a> and <a href="/privacy" className="underline underline-offset-2 hover:text-neutral-400">Privacy Policy</a>
                        </label>
                    </div>
                    <Button full={false} value={'SIGN UP'} className="border-neutral-700 hover:border-neutral-200" />
                </form>
                <a href="/signin" className="content-subtitle text-lg underline underline-offset-8 transition-all hover:text-neutral-300 lg:text-xl">
                    Sign In
                </a>
            </section>
        </>
    )
}
