'use client'

import { Button, IconContainer } from '@/components/ui/index'
import { ArrowForward } from '@mui/icons-material'
import { signIn } from 'next-auth/react'
import { useState } from 'react'

export default function SignIn() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        const signInResponse = await signIn('credentials', {
            email,
            password,
            redirect: false,
        })
        if (signInResponse?.status === 200) {
            window.location.href = '/'
        } else {
            alert('Email or password incorrect. Please try again')
        }
    }

    const handleForgotPassword = async () => {
        const emailInput = (document.getElementById('emailInput') as HTMLInputElement)?.value
        if (!emailInput || !emailInput.includes('@')) return alert('Please input a valid email')
        console.log(emailInput)

        const forgotPassword = await fetch('http://127.0.0.1:8000/api/forgot-password', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                email: emailInput,
            }),
        })

        //alert("We have sent a reset password link to your email if it exists")
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
    )
}
