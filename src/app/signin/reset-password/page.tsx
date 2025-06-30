"use client"

import React, { useEffect, useState } from "react"
import { signIn } from 'next-auth/react'
import { IconContainer, Button } from "@/components/ui/index"
import { ArrowForward } from "@mui/icons-material"

export default function ResetPassword() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState<any>('');

    const handleSubmit = async () => {
        const resetPassword = await fetch(
            "http://127.0.0.1:8000/api/reset-password",
            {
                method: "POST",
                headers: {
                    "Content-type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    token: token,
                    new_password: password
                })
            }
        )

    }

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search);

        const tokenFromUrl = urlParams.get('token');
    
        setToken(tokenFromUrl)
    }, [])

    return (
        <section className="min-h-screen flex flex-col gap-4 justify-center items-center">
            <div className="relative w-max flex flex-col gap-3 items-center justify-center mb-6">
                <img src={"/images/SVG/Asset 4.svg"} className="w-[160px] drop-shadow-xl drop-shadow-black/30 brightness-60 contrast-100" />
                <span className="font-logo text-neutral-300 text-4xl">HEIMDALL</span>
            </div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 justify-center items-center content-body section-container-sm">
                <input
                    className="bento-card p-4 border-2 border-neutral-700 text-white min-w-[600px] foreground-z"
                    id="emailInput"
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
                <Button full={false} value={"RESET"} className="border-neutral-700 hover:border-neutral-200" />
            </form>
        </section>
    )
}