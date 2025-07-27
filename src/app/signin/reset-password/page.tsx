'use client'

import { Button } from '@/components/ui/index'
import { useEffect, useState } from 'react'

export default function ResetPassword() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [token, setToken] = useState<any>('')

    const handleSubmit = async () => {
        const resetPassword = await fetch('http://127.0.0.1:8000/api/reset-password', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            body: JSON.stringify({
                email: email,
                token: token,
                new_password: password,
            }),
        })
    }

    useEffect(() => {
        const urlParams = new URLSearchParams(window.location.search)

        const tokenFromUrl = urlParams.get('token')

        setToken(tokenFromUrl)
    }, [])

    return (
        <section className="flex min-h-screen flex-col items-center justify-center gap-4">
            <div className="relative mb-6 flex w-max flex-col items-center justify-center gap-3">
                <img src={'/images/SVG/Asset 4.svg'} className="w-[160px] brightness-60 contrast-100 drop-shadow-xl drop-shadow-black/30" />
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
    )
}
