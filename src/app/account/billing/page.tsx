'use client'

import type { OwnerData, WarningType } from '@/types/mainTypes'
import { AlertToast } from '@/components/alerts/AlertToast'
import { ChangePlanButton } from '@/components/buttons/ChangePlanButton'
import { BuyTokensButton, CancelPlanButton } from '@/components/buttons/index'
import { IconContainer } from '@/components/ui'
import { apiService } from '@/services/apiService'
import { Refresh } from '@mui/icons-material'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

export default function Billing() {
    const { data: session, status } = useSession()
    const [newAlert, setNewAlert] = useState<string | null>(null)
    const [alertType, setAlertType] = useState<WarningType>('alert')

    const [ownerData, setOwnerData] = useState<OwnerData | null>(null)
    const [ownerLoading, setOwnerLoading] = useState(true)

    // -- INITIAL FETCHES

    const fetchOwner = async () => {
        try {
            const owner = await apiService.fetchOwner(session?.user.id)

            setOwnerData(owner)
        } catch (err: unknown) {
            if (err instanceof Error) {
                setNewAlert(err.message)
            } else {
                setNewAlert('An unknown error occurred')
            }
            setAlertType('error')
        }
        setOwnerLoading(false)
    }

    useEffect(() => {
        if (status === 'authenticated') fetchOwner()
    }, [status, fetchOwner])

    return (
        <>
            <section id="billing" className="min-h-screen px-8 pt-12 xl:px-16">
                {newAlert && <AlertToast warning={alertType} message={`${newAlert}`} onClose={() => setNewAlert(null)}></AlertToast>}
                <h3 className="content-miniheading text-[16px]">ACCOUNT</h3>
                <h1 className="content-title text-4xl">Billing</h1>
                <div className="my-8 grid grid-cols-6 grid-rows-2 gap-6">
                    <div className="bento-card relative col-span-2 row-span-1 flex min-h-[300px] flex-col">
                        <h2 className="content-subtitle text-xl">
                            Account Info
                            <div className="mt-2 h-[2px] w-full rounded-full bg-gradient-to-r from-[#d8af41] to-transparent opacity-30" />
                        </h2>
                        <div className="content-body mt-4 flex h-full w-full items-center justify-center rounded-sm border border-neutral-800 p-4">
                            Coming soon
                        </div>
                    </div>
                    <div className="bento-card relative col-span-2 row-span-1 flex flex-col">
                        <h2 className="content-subtitle text-xl">
                            Payment Details
                            <div className="mt-2 h-[2px] w-full rounded-full bg-gradient-to-r from-[#d8af41] to-transparent opacity-30" />
                        </h2>
                        <div className="content-body mt-4 flex h-full w-full items-center justify-center rounded-sm border border-neutral-800 p-4">
                            Coming soon
                        </div>
                    </div>
                    <div className="bento-card relative col-span-2 row-span-1 flex flex-col">
                        <h2 className="content-subtitle text-xl">
                            Plan Settings
                            <div className="mt-2 h-[2px] w-full rounded-full bg-gradient-to-r from-[#d8af41] to-transparent opacity-30" />
                        </h2>
                        <div className="content-body mt-4 flex h-full w-full items-center justify-center gap-8 rounded-sm border border-neutral-800 p-4"></div>
                    </div>
                    <div className="bento-card relative col-span-3 row-span-1 flex flex-col">
                        <h2 className="content-subtitle text-xl">
                            Invoices
                            <div className="mt-2 h-[2px] w-full rounded-full bg-gradient-to-r from-[#d8af41] to-transparent opacity-30" />
                        </h2>
                        <div className="content-body mt-4 flex h-full w-full items-center justify-center rounded-sm border border-neutral-800 p-4">
                            Coming soon
                        </div>
                    </div>
                    <div className="bento-card relative col-span-3 row-span-1 flex flex-col">
                        <h2 className="content-subtitle text-xl">
                            Plan Options
                            <div className="mt-2 h-[2px] w-full rounded-full bg-gradient-to-r from-[#d8af41] to-transparent opacity-30" />
                        </h2>
                        <div className="content-body mt-4 flex h-full w-full items-center justify-center gap-8 rounded-sm border border-neutral-800 p-4">
                            <div className="flex items-center justify-center gap-8">
                                <div className="flex flex-col items-center gap-2">
                                    { session?.user.id && <BuyTokensButton ownerData={ownerData} id={session?.user.id} setNewAlert={setNewAlert} setAlertType={setAlertType} /> }
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <IconContainer>
                                        <Refresh sx={{ fontSize: '36px' }} />
                                    </IconContainer>
                                    <span>Auto-refresh</span>
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    { session?.user.id && <ChangePlanButton ownerData={ownerData} id={session?.user.id} setNewAlert={setNewAlert} setAlertType={setAlertType} /> }
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    { session?.user.id && <CancelPlanButton ownerData={ownerData} id={session?.user.id} setNewAlert={setNewAlert} setAlertType={setAlertType} /> }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
