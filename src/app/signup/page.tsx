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
            const signUp = await apiService.createOwner(
                email,
                name,
                company,
                window.location.hostname,
                password
            )

            await signIn('credentials', {
                email: signUp['owner_data']['email'],
                password: signUp['owner_data']['password'],
            })
            window.location.href = '/'
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
            <section className="flex min-h-screen flex-col items-center justify-center gap-4">
                <div className="relative mb-6 flex w-max flex-col items-center justify-center gap-3">
                    <Image src={'images/SVG/Asset 8.svg'} width={160} height={160} alt="Heimdall logo" className="brightness-60 contrast-100 drop-shadow-xl drop-shadow-black/30" />
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
                    <Button full={false} value={'SIGN UP'} className="border-neutral-700 hover:border-neutral-200" />
                </form>
                <a href="/signin" className="content-subtitle text-lg underline underline-offset-8 transition-all hover:text-neutral-300 lg:text-xl">
                    Sign In
                </a>
            </section>
        </>
    )
}
