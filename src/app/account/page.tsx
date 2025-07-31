'use client'

import { apiService } from '@/services/apiService'
import type { ConfirmType, OwnerData, WarningType } from '@/types/mainTypes'
import { ManageSearch, Token } from '@mui/icons-material'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function Account() {
    const { data: session, status } = useSession()
    const [newAlert, setNewAlert] = useState<string | null>(null)
    const [alertType, setAlertType] = useState<WarningType>('alert')

    const [ownerData, setOwnerData] = useState<OwnerData | null>(null)

    // -- INITIAL FETCHES

    const fetchOwnerData = async () => {
        try {
            const owner = await apiService.fetchOwner(session?.user.id)

            setOwnerData(owner)
        } catch (err: unknown) {
            setAlertType('caution')
            if (err instanceof Error) {
                setNewAlert(err.message)
            } else {
                setNewAlert('An unknown error occurred')
            }
        }
    }

    useEffect(() => {
        if (status === 'authenticated') fetchOwnerData()
    }, [status])

    return (
        <>
            {/* INTRO */}
            <section id="account" className="min-h-screen px-8 pt-12 xl:px-16">
                <h3 className="content-miniheading text-[16px]">ACCOUNT</h3>
                <h1 className="content-title text-4xl">Account</h1>
                <div className="my-8 flex flex-col gap-8">
                    <div className="grid min-h-[200px] grid-cols-3 gap-8">
                        <div className="bento-card relative flex flex-col">
                            <h2 className="content-subtitle w-max text-xl">
                                Tokens Remaining
                                <div className="mt-2 h-[2px] w-full rounded-full bg-gradient-to-r from-[#d8af41] to-transparent opacity-30" />
                            </h2>
                            <span className="content-body mt-8 h-full w-full pr-16 text-center text-4xl font-semibold tracking-wider">
                                {ownerData?.current_tokens}
                            </span>
                            <div className="absolute right-8 bottom-6 flex items-center justify-center text-[140px]">
                                <Token className="opacity-10" fontSize="inherit" />
                            </div>
                        </div>
                        <div className="bento-card relative flex flex-col">
                            <h2 className="content-subtitle w-max text-xl">
                                Watermarks Created
                                <div className="mt-2 h-[2px] w-full rounded-full bg-gradient-to-r from-[#d8af41] to-transparent opacity-30" />
                            </h2>
                            <span className="content-body mt-8 h-full w-full pr-16 text-center text-4xl font-semibold tracking-wider">
                                {ownerData?.watermarks_made}
                            </span>
                            <div className="absolute right-10 bottom-8 flex items-center justify-center text-[100px]">
                                <Image src={'/images/SVG/Asset 7.svg'} className="opacity-10 contrast-0" width={120} height={120} alt="Watermark image" />
                            </div>
                        </div>
                        <div className="bento-card relative flex flex-col">
                            <h2 className="content-subtitle w-max text-xl">
                                Plagiarisms Prevented
                                <div className="mt-2 h-[2px] w-full rounded-full bg-gradient-to-r from-[#d8af41] to-transparent opacity-30" />
                            </h2>
                            <span className="content-body mt-8 h-full w-full pr-16 text-center text-4xl font-semibold tracking-wider">
                                {ownerData?.plagiarisms_prevented}
                            </span>
                            <div className="absolute right-8 bottom-6 flex items-center justify-center text-[140px]">
                                <ManageSearch className="opacity-10" fontSize="inherit" />
                            </div>
                        </div>
                    </div>
                    <div className="bento-card col-span-3">
                        <h2 className="content-subtitle text-xl">
                            Hours of manual reviewing saved
                            <div className="mt-2 h-[2px] w-full rounded-full bg-gradient-to-r from-[#d8af41] to-transparent opacity-30" />
                        </h2>
                        <div className="content-body mt-4 flex min-h-[500px] w-full items-center justify-center rounded-sm border border-neutral-800 p-4">
                            Coming soon
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
