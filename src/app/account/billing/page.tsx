'use client'

import type { ConfirmType, InvoiceData, OwnerData, PaymentMethodData, WarningType } from '@/types/mainTypes'
import { AlertToast } from '@/components/alerts/AlertToast'
import { ChangePlanButton } from '@/components/buttons/ChangePlanButton'
import { BuyTokensButton, CancelPlanButton } from '@/components/buttons/index'
import { IconContainer } from '@/components/ui'
import { apiService } from '@/services/apiService'
import { Delete, Download, Refresh } from '@mui/icons-material'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'
import { lib } from '@/services/lib'
import { ConfirmAlert } from '@/components/alerts'

export default function Billing() {
    const { data: session, status } = useSession()
    const [newAlert, setNewAlert] = useState<string | null>(null)
    const [alertType, setAlertType] = useState<WarningType>('alert')

    const [ownerData, setOwnerData] = useState<OwnerData | null>(null)
    const [invoiceData, setInvoicesData] = useState<InvoiceData[] | null>(null)
    const [methodsData, setMethodsData] = useState<PaymentMethodData[] | null>(null)
    const [ownerLoading, setOwnerLoading] = useState(true)
    const [newConfirm, setNewConfirm] = useState<ConfirmType | null>(null)

    // -- INITIAL FETCHES

    const fetchOwner = async () => {
        try {
            const owner = await apiService.fetchOwnerDetailed(session?.user.id)

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

    const fetchInvoices = async () => {
        try {
            const invoices = await apiService.fetchInvoices(session?.user.id)

            setInvoicesData(invoices)
        } catch (err: unknown) {
            if (err instanceof Error) {
                setNewAlert(err.message)
            } else {
                setNewAlert('An unknown error occurred')
            }
            setAlertType('error')
        }
    }

    const fetchPaymentMethods = async () => {
        try {
            const methods = await apiService.fetchPaymentMethods(session?.user.id)

            setMethodsData(methods)
        } catch (err: unknown) {
            if (err instanceof Error) {
                setNewAlert(err.message)
            } else {
                setNewAlert('An unknown error occurred')
            }
            setAlertType('error')
        }
    }

    // HANDLERS

    const handleDeletePaymentMethod = async (paymentMethodId: string) => {
        const confirmed = await confirmDialog('Delete payment method', 'Are you sure you want to delete this payment method?')

        if (confirmed) {
            try {
                const deletion = await apiService.deletePaymentMethod(session?.user.id, paymentMethodId)
    
                if (deletion) window.location.reload()
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setNewAlert(err.message)
                } else {
                    setNewAlert('An unknown error occurred')
                }
                setAlertType('error')
            }
        }
    }

    // HELPERS

    const confirmDialog = (title: string, message: string): Promise<boolean> => {
        return new Promise((resolve) => {
            setNewConfirm({
                title,
                message,
                onConfirm: () => {
                    setNewConfirm(null)
                    resolve(true)
                },
                onCancel: () => {
                    setNewConfirm(null)
                    resolve(false)
                },
            })
        })
    }

    useEffect(() => {
        if (status === 'authenticated') {
            fetchOwner()
            fetchInvoices()
            fetchPaymentMethods()
        }
    }, [status])

    return (
        <>
            <section id="billing" className="min-h-screen px-8 pt-12 xl:px-16">
                {newAlert && <AlertToast warning={alertType} message={`${newAlert}`} onClose={() => setNewAlert(null)}></AlertToast>}
                {newConfirm && (
                    <ConfirmAlert isOpen={!!newConfirm} onClose={newConfirm.onCancel} hasConfirmed={newConfirm.onConfirm} title={newConfirm.title}>
                        {newConfirm.message}
                    </ConfirmAlert>
                )}
                <h3 className="content-miniheading text-[16px]">ACCOUNT</h3>
                <h1 className="content-title text-4xl">Billing</h1>
                <div className="my-8 flex flex-col xl:grid grid-cols-6 grid-rows-2 gap-6">
                    <div className="bento-card col-span-3 row-span-1 flex flex-col min-h-[350px]">
                        <h2 className="content-subtitle text-xl">
                            Account Info
                            <div className="mt-2 h-[2px] w-full rounded-full bento-separator opacity-30" />
                        </h2>
                        <div className="content-body mt-4 flex flex-col gap-4 h-full w-full rounded-sm border border-neutral-800 p-4">
                            <ul className="content-body flex flex-col gap-2 w-full">
                                <li className="flex items-center justify-between">
                                    <span>Current plan</span>
                                    <span>
                                        <strong className='capitalize'>{ownerData && ownerData.plan["name"]}</strong>
                                    </span>
                                </li>
                                <li className="flex items-center justify-between">
                                    <span>Monthly cost</span>
                                    <span>
                                        <strong>{ownerData && "£" + ownerData.plan["price"]}</strong>
                                    </span>
                                </li>
                                <li className="flex items-center justify-between">
                                    <span>Next payment due</span>
                                    <span>
                                        <strong>{ownerData && ownerData.is_verified ? lib.formatDate(ownerData.verified_month_end) : 'N/A'}</strong>
                                    </span>
                                </li>
                            </ul>
                            <div className="block w-full h-0.5 rounded-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
                            <ul className="content-body flex flex-col gap-2 w-full">
                                <li className="flex items-center justify-between">
                                    <span>Tokens remaining</span>
                                    <span>
                                        <strong>{ownerData && ownerData.current_tokens}</strong>
                                    </span>
                                </li>
                                <li className="flex items-center justify-between">
                                    <span>Est. submissions remaining</span>
                                    <span>
                                        <strong>{ownerData && Math.floor(ownerData.current_tokens/12)}</strong>
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="bento-card relative col-span-3 flex flex-col">
                        <h2 className="content-subtitle text-xl">
                            Previous Payments
                            <div className="mt-2 h-[2px] w-full rounded-full bento-separator opacity-30" />
                        </h2>
                        <div className="content-body mt-4 flex flex-col gap-3 h-[250px] w-full rounded-sm border border-neutral-800 p-4 overflow-y-auto scrollbar-custom">
                            {
                                invoiceData &&
                                    [...invoiceData]
                                        .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
                                        .map((val:InvoiceData, key) => {
                                            return (
                                                <div key={key} className='w-full h-max bg-neutral-900 rounded-md flex justify-between px-4 py-2'>
                                                    <div className='flex gap-2 text-base'>
                                                        <span className='text-neutral-400'>{lib.formatDate(val.created_at.toString())}</span>
                                                    </div>
                                                    <div
                                                        className='flex gap-2 items-center text-base cursor-pointer'
                                                        
                                                    >
                                                        <span>£{val.amount / 100}</span>
                                                        {/* DOWNLOAD INVOICE */}
                                                        <div onClick={() => {
                                                                if (val.pdf_link) {
                                                                    window.open(val.pdf_link, '_blank');
                                                                }
                                                            }}
                                                            title="Download Invoice">
                                                            <Download sx={{ fontSize: "20px" }} className='text-neutral-400' />
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                            }
                        </div>
                    </div>
                    <div className="bento-card relative col-span-2 row-span-1 flex flex-col">
                        <h2 className="content-subtitle text-xl">
                            Payment Details
                            <div className="mt-2 h-[2px] w-full rounded-full bento-separator opacity-30" />
                        </h2>
                        <div className="content-body mt-4 flex flex-col gap-4 h-[250px] overflow-y-auto scrollbar-custom w-full rounded-sm border border-neutral-800 p-4">
                            {
                                methodsData && 
                                    [...methodsData]
                                        .sort((a: any, b: any) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
                                        .map((val:PaymentMethodData, key) => {
                                            return (
                                                <div key={key} className='w-full h-max bg-neutral-900 rounded-md flex flex-col justify-between px-4 py-2 gap-2'>
                                                    <div className='flex gap-4 justify-between text-base'>
                                                        <div className='flex gap-2'>
                                                            <span className='uppercase'>{val.card.brand}</span>
                                                            <span>**** **** **** {val.card.last4}</span>
                                                        </div>
                                                        <div className='cursor-pointer transition-all hover:brightness-75' onClick={() => handleDeletePaymentMethod(val.payment_method_id)}>
                                                            <Delete sx={{ fontSize: "20px" }} />
                                                        </div>
                                                    </div>
                                                    <div className='flex justify-between gap-4 text-sm'>
                                                        <div>
                                                            <span>{val.card.exp_month}/{val.card.exp_year}</span>
                                                        </div>
                                                        <div className='flex gap-2 items-center'>
                                                            <span className='text-neutral-400 text-xs'>Created at</span>
                                                            <span>{lib.formatDate(val.created_at.toString())}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })
                            }
                        </div>
                    </div>
                    <div className="bento-card relative col-span-2 row-span-1 flex flex-col">
                        <h2 className="content-subtitle text-xl">
                            Email Preferences
                            <div className="mt-2 h-[2px] w-full rounded-full bento-separator opacity-30" />
                        </h2>
                        <div className="content-body mt-4 flex h-full w-full items-center justify-center gap-8 rounded-sm border border-neutral-800 p-4">

                        </div>
                    </div>
                    <div className="hidden md:flex bento-card relative col-span-2 flex-col">
                        <h2 className="content-subtitle text-xl">
                            Plan Options
                            <div className="mt-2 h-[2px] w-full rounded-full bento-separator opacity-30" />
                        </h2>
                        <div className="content-body mt-4 flex h-full w-full items-center justify-center gap-8 rounded-sm border border-neutral-800 p-4">
                            <div className="flex items-center justify-center gap-8">
                                <div className="flex flex-col items-center gap-2">
                                    { session?.user.id && <BuyTokensButton ownerData={ownerData} id={session?.user.id} setNewAlert={setNewAlert} setAlertType={setAlertType} /> }
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
