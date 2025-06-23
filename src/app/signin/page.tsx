"use client"

import React, { useEffect, useState } from "react"
import { signIn, getSession } from 'next-auth/react'
import { IconContainer, Button } from "@/components/ui/index"
import { ArrowForward } from "@mui/icons-material"

export default function SignIn () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = async (e:any) => {
        e.preventDefault()
        await signIn('credentials', {
            email,
            password,
            callbackUrl: '/'
        })
    }

    const handleForgotPword = async () => {
        
    }

    return (
        <section className="min-h-screen flex flex-col gap-4 justify-center items-center">
            <div className="relative w-max flex flex-col gap-3 items-center justify-center mb-6">
                <img src={"images/SVG/Asset 4.svg"} className="w-[160px] drop-shadow-xl drop-shadow-black/30 brightness-60 contrast-100" />
                <span className="font-logo text-neutral-300 text-4xl">HEIMDALL</span>
                <IconContainer className="rotate-180 absolute bottom-12 -left-18" href="/">
                    <ArrowForward />
                </IconContainer>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 justify-center items-center content-body section-container-sm">
                <input
                    className="bento-card p-4 border-2 border-neutral-700 text-white min-w-[600px] foreground-z"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                />
                <input
                    className="bento-card p-4 border-2 border-neutral-700 text-white min-w-[600px] foreground-z"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                />
                <div className="w-full flex justify-end mr-12 -mt-4">
                    <button type="button" className="content-subtitle text-lg underline underline-offset-2 text-end cursor-pointer transition-all hover:text-neutral-300" onClick={() => handleForgotPword()}>Forgot Password</button>
                </div>
                <Button full={false} value={"SIGN IN"} className="border-neutral-700 hover:border-neutral-200" />
            </form>
            <a href="/signup" className="content-subtitle text-xl underline underline-offset-8 transition-all hover:text-neutral-300">Sign Up</a>
        </section>
    )
}