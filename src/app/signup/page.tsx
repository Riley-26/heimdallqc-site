'use client'

import { Button, IconContainer } from '@/components/ui/index'
import { ArrowForward } from '@mui/icons-material'
import { signIn } from 'next-auth/react'
import { useState } from 'react'

export default function SignUp() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [company, setCompany] = useState('')

    const handleSubmit = async (e: any) => {
        e.preventDefault()

        const email = e.target[0].value
        const name = e.target[1].value
        const company = e.target[2].value
        const password = e.target[3].value

        const signup = await fetch('http://127.0.0.1:8000/api/owners', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                name: name,
                company: company,
                domain: window.location.hostname,
                password: password,
            }),
        })

        const status = signup.status
        const signupResponse = await signup.json()

        if (status === 400) {
            alert(signupResponse.detail)
        } else if (status === 200) {
            await signIn('credentials', {
                email: signupResponse['owner_data']['email'],
                password: signupResponse['owner_data']['password'],
            })
            window.location.href = '/'
        }
    }

    return (
        <section className="flex min-h-screen flex-col items-center justify-center gap-4">
            <div className="relative mb-6 flex w-max flex-col items-center justify-center gap-3">
                <img src={'images/SVG/Asset 4.svg'} className="w-[160px] brightness-60 contrast-100 drop-shadow-xl drop-shadow-black/30" />
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
    )
}
