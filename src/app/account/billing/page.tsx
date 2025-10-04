'use client'

import { ConfirmAlert } from '@/components/alerts'
import { AlertToast } from '@/components/alerts/AlertToast'
import { ChangePlanButton } from '@/components/buttons/ChangePlanButton'
import { BuyTokensButton, CancelPlanButton } from '@/components/buttons/index'
import { Button } from '@/components/ui'
import { Tip } from '@/components/ui/Tip'
import { lib } from '@/services/lib'
import { mainTheme } from '@/themes/themes'
import type { ConfirmType, PaymentData, OwnerData, PaymentMethodData, WarningType } from '@/types/mainTypes'
import { Delete, Download } from '@mui/icons-material'
import { ThemeProvider } from '@mui/material/styles'
import Switch from '@mui/material/Switch'
import { useSession } from 'next-auth/react'
import { useEffect, useState } from 'react'

interface PrefItem {
    name: string
    ref_name: string
    value?: number
    checked?: boolean
    desc: string
}

const prefs: PrefItem[] = [
    {
        name: 'Low Tokens',
        ref_name: 'low_tokens_option',
        checked: true,
        desc: 'Get alerted when your tokens fall below the threshold.',
    },
    {
        name: 'Tokens Threshold',
        ref_name: 'tokens_threshold',
        value: 500,
        desc: 'Token threshold for the notification. To help, 12 tokens is the average for a ~300 character submission. Default value is 500.',
    },
]

export default function Billing() {
    const { data: session, status } = useSession()
    const [newAlert, setNewAlert] = useState<string | null>(null)
    const [alertType, setAlertType] = useState<WarningType>('alert')
    const [windowWidth, setWindowWidth] = useState<number>(0)

    const [ownerData, setOwnerData] = useState<OwnerData | null>(null)
    const [paymentData, setPaymentData] = useState<PaymentData[] | null>(null)
    const [methodsData, setMethodsData] = useState<PaymentMethodData[] | null>(null)
    const [ownerLoading, setOwnerLoading] = useState(true)
    const [paymentsLoading, setPaymentsLoading] = useState(true)
    const [methodsLoading, setMethodsLoading] = useState(true)
    const [newConfirm, setNewConfirm] = useState<ConfirmType | null>(null)
    const [prefStates, setPrefStates] = useState<PrefItem[]>(prefs)

    // -- INITIAL FETCHES

    const fetchPrefs = (owner: OwnerData) => {
        setPrefStates((prev) =>
            prev.map((pref) => {
                if (pref.ref_name === 'low_tokens_option') {
                    return { ...pref, checked: owner.low_tokens_option }
                }
                if (pref.ref_name === 'tokens_threshold') {
                    return { ...pref, value: owner.tokens_threshold }
                }
                return pref
            })
        )
    }

    const fetchOwner = async () => {
        try {
            const owner = await fetch('/api/owners/self/detailed')
            const ownerResponse = await owner.json()

            fetchPrefs(ownerResponse.owner)

            setOwnerData(ownerResponse.owner)
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

    const fetchPayments = async () => {
        setPaymentsLoading(true)
        try {
            const payments = await fetch('/api/payments/self')
            const paymentsResponse = await payments.json()

            setPaymentData(paymentsResponse.payments)
        } catch (err: unknown) {
            if (err instanceof Error) {
                setNewAlert(err.message)
            } else {
                setNewAlert('An unknown error occurred')
            }
            setAlertType('error')
        }
        setPaymentsLoading(false)
    }

    const fetchPaymentMethods = async () => {
        setMethodsLoading(true)
        try {
            const methods = await fetch('/api/owners/payment-methods/self')
            const methodsResponse = await methods.json()

            setMethodsData(methodsResponse.methods)
        } catch (err: unknown) {
            if (err instanceof Error) {
                setNewAlert(err.message)
            } else {
                setNewAlert('An unknown error occurred')
            }
            setAlertType('error')
        }
        setMethodsLoading(false)
    }

    // -- HANDLERS

    const handleDeletePaymentMethod = async (paymentMethodId: string) => {
        const confirmed = await confirmDialog('Delete payment method', 'Are you sure you want to delete this payment method?')

        if (confirmed) {
            try {
                const deletion = await fetch('/api/owners/payment-methods/delete-payment-method', {
                    method: 'DELETE',
                    headers: {
                        'Content-type': 'application/json',
                    },
                    body: JSON.stringify({
                        pmId: paymentMethodId,
                    }),
                })
                const deletionResponse = await deletion.json()
                if (!deletion.ok) throw new Error(deletionResponse.message)

                window.location.reload()
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

    const handleSavePrefs = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const lowTokens: Record<string, boolean> = {}
        const tokensThreshold: Record<string, number> = {}

        prefStates.forEach((val) => {
            if (typeof(val.checked) == "boolean") lowTokens[val.ref_name] = val.checked
            if (typeof(val.value) == "number") tokensThreshold[val.ref_name] = val.value
        })

        try {
            const saved = await fetch("/api/owners/save-email-prefs", {
                method: "PATCH",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    lowTokens: lowTokens,
                    tokensThreshold: tokensThreshold
                })
            })
            const savedResponse = await saved.json()
            if (!saved.ok) throw new Error(savedResponse.message)

            setNewAlert(savedResponse.message)
        } catch (err: unknown) {
            if (err instanceof Error) {
                setNewAlert(err.message)
            } else {
                setNewAlert('An unknown error occurred')
            }
            setAlertType('error')
        }
    }

    // -- HELPERS

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
            fetchPayments()
            fetchPaymentMethods()
        }
    }, [status])

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth)
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

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
                <div className="my-8 flex grid-cols-6 grid-rows-2 flex-col gap-6 xl:grid">
                    <div className="bento-card col-span-3 row-span-1 flex min-h-[350px] flex-col">
                        <h2 className="content-subtitle text-xl">
                            Account Info
                            <div className="bento-separator mt-2 h-[2px] w-full rounded-full opacity-30" />
                        </h2>
                        <div className="content-body mt-4 flex h-full w-full flex-col gap-4 rounded-sm border border-neutral-800 p-4">
                            <ul className="content-body flex w-full flex-col gap-2">
                                <li className="flex items-center justify-between">
                                    <span>Current plan</span>
                                    {!ownerLoading ? (
                                        <strong className="capitalize">{ownerData && ownerData.plan['name']}{ownerData?.cancelled_plan ? " (Cancelled)": ""}</strong>
                                    ) : (
                                        <div className="min-h-full min-w-18 rounded-sm bg-neutral-900"></div>
                                    )}
                                </li>
                                <li className="flex items-center justify-between">
                                    <span>Monthly cost</span>
                                    {!ownerLoading ? (
                                        <strong>{ownerData && '£' + ownerData.plan['price']}</strong>
                                    ) : (
                                        <div className="min-h-full min-w-14 rounded-sm bg-neutral-900"></div>
                                    )}
                                </li>
                                {
                                    !ownerData?.cancelled_plan ? <li className="flex items-center justify-between">
                                        <span>Next payment due</span>
                                        {!ownerLoading ? (
                                            <strong>{ownerData && ownerData.is_verified ? lib.formatDate(ownerData.verified_month_end) : 'N/A'}</strong>
                                        ) : (
                                            <div className="min-h-full min-w-24 rounded-sm bg-neutral-900"></div>
                                        )}
                                    </li> : <li className="flex items-center justify-between">
                                        <span>Plan ends at</span>
                                        {!ownerLoading ? (
                                            <strong>{ownerData && ownerData.is_verified ? lib.formatDate(ownerData.verified_month_end) : 'N/A'}</strong>
                                        ) : (
                                            <div className="min-h-full min-w-24 rounded-sm bg-neutral-900"></div>
                                        )}
                                    </li>
                                }
                            </ul>
                            <div className="block h-0.5 w-full rounded-full bg-gradient-to-r from-transparent via-neutral-700 to-transparent" />
                            <ul className="content-body flex w-full flex-col gap-2">
                                <li className="flex items-center justify-between">
                                    <span>Tokens remaining</span>
                                    {!ownerLoading ? (
                                        <strong>{ownerData && ownerData.current_tokens}</strong>
                                    ) : (
                                        <div className="min-h-full min-w-16 rounded-sm bg-neutral-900"></div>
                                    )}
                                </li>
                                <li className="flex items-center justify-between">
                                    <span>Est. submissions remaining</span>
                                    {!ownerLoading ? (
                                        <strong>{ownerData && Math.floor(ownerData.current_tokens / 12)}</strong>
                                    ) : (
                                        <div className="min-h-full min-w-12 rounded-sm bg-neutral-900"></div>
                                    )}
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="bento-card relative col-span-3 flex flex-col">
                        <h2 className="content-subtitle text-xl">
                            Previous Payments
                            <div className="bento-separator mt-2 h-[2px] w-full rounded-full opacity-30" />
                        </h2>
                        <div className="content-body scrollbar-custom mt-4 flex h-[250px] w-full flex-col gap-3 overflow-y-auto rounded-sm border border-neutral-800 p-4">
                            {!paymentsLoading ? (
                                paymentData &&
                                [...paymentData]
                                    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
                                    .map((val: PaymentData, key) => {
                                        return (
                                            <div key={key} className="flex h-max w-full justify-between rounded-md bg-neutral-900 px-4 py-2">
                                                <div className="flex gap-2 text-base">
                                                    <span className="text-neutral-400">{lib.formatDate(val.created_at.toString())}</span>
                                                </div>
                                                <div className="flex cursor-pointer items-center gap-2 text-base">
                                                    <span>£{val.amount / 100}</span>
                                                    {/* DOWNLOAD PAYMENT */}
                                                    <div
                                                        onClick={() => {
                                                            if (val.receipt_url) {
                                                                window.open(val.receipt_url, '_blank')
                                                            }
                                                        }}
                                                        title="Open Payment"
                                                    >
                                                        <Download sx={{ fontSize: '20px' }} className="text-neutral-400" />
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                            ) : (
                                <div className="flex h-10 items-center rounded-sm bg-neutral-900 px-4 py-3">
                                    <div className="h-4 w-28 rounded-sm bg-neutral-800"></div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="bento-card relative col-span-2 row-span-1 flex flex-col">
                        <h2 className="content-subtitle text-xl">
                            Payment Details
                            <div className="bento-separator mt-2 h-[2px] w-full rounded-full opacity-30" />
                        </h2>
                        <div className="content-body scrollbar-custom mt-4 flex h-[250px] w-full flex-col gap-4 overflow-y-auto rounded-sm border border-neutral-800 p-4">
                            {!methodsLoading ? (
                                methodsData &&
                                [...methodsData]
                                    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
                                    .map((val: PaymentMethodData, key) => {
                                        return (
                                            <div key={key} className="flex h-max w-full flex-col justify-between gap-2 rounded-md bg-neutral-900 px-4 py-2 max-w-[400px]">
                                                <div className="flex justify-between gap-4 text-base">
                                                    <div className="flex gap-2">
                                                        <span className="uppercase">{val.card.brand}</span>
                                                        <span>**** **** **** {val.card.last4}</span>
                                                    </div>
                                                    <div
                                                        className="cursor-pointer transition-all hover:brightness-75"
                                                        onClick={() => handleDeletePaymentMethod(val.payment_method_id)}
                                                    >
                                                        <Delete sx={{ fontSize: '20px' }} />
                                                    </div>
                                                </div>
                                                <div className="flex flex-col justify-between gap-1 text-sm">
                                                    <div className="flex items-center gap-1">
                                                        <span className="text-xs text-neutral-400">Exp: </span>
                                                        <span>
                                                            {val.card.exp_month}/{val.card.exp_year}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-1">
                                                        <span className="text-xs text-neutral-400">Created at: </span>
                                                        <span>{lib.formatDate(val.created_at.toString())}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    })
                            ) : (
                                <div className="flex h-16 flex-col gap-2 rounded-sm bg-neutral-900 px-4 py-2">
                                    <div className="h-10 w-42 rounded-sm bg-neutral-800"></div>
                                    <div className="h-10 w-22 rounded-sm bg-neutral-800"></div>
                                </div>
                            )}
                        </div>
                    </div>
                    <div className="bento-card relative col-span-2 row-span-1 flex flex-col">
                        <h2 className="content-subtitle text-xl">
                            Email Preferences
                            <div className="bento-separator mt-2 h-[2px] w-full rounded-full opacity-30" />
                        </h2>
                        <ThemeProvider theme={mainTheme}>
                            <form className="content-body mt-4 flex flex-col h-full w-full items-center justify-center gap-8 rounded-sm border border-neutral-800 p-4" onSubmit={(e) => handleSavePrefs(e)}>
                                <ul className="mb-1 h-full w-full lg:mb-4">
                                    {prefStates.map((val, key) => (
                                        <li key={key} className="flex items-center justify-between pb-2">
                                            <div className="flex items-center gap-2 mr-2 lg:mr-4">
                                                <h3 className="content-subtitle-acc text-sm md:text-base lg:text-lg">{val.name}</h3>
                                                <Tip tooltip={{ title: val.name, desc: val.desc }} windowWidth={windowWidth} />
                                            </div>
                                            {
                                                typeof(val.checked) == "boolean" ? <Switch
                                                    checked={val.checked}
                                                    onChange={() => {
                                                        setPrefStates((prev) =>
                                                            prev.map((item) =>
                                                                item.ref_name === val.ref_name
                                                                    ? { ...item, checked: !item.checked }
                                                                    : item
                                                            )
                                                        )
                                                    }}
                                                /> : <input
                                                    type="number"
                                                    value={val.value}
                                                    onChange={(e) => {
                                                        setPrefStates((prev) =>
                                                            prev.map((item) =>
                                                                item.ref_name === val.ref_name
                                                                    ? { ...item, value: Number(e.target.value) }
                                                                    : item
                                                            )
                                                        )
                                                    }}
                                                    min={0}
                                                    max={10000}
                                                    step={500}
                                                    placeholder={"500"}
                                                    className="content-body w-[65px] rounded-sm border border-neutral-700 text-end md:w-[100px]"
                                                />
                                            }
                                        </li>
                                    ))}
                                </ul>
                                <Button className="ml-auto w-max px-4 py-2 text-base lg:mt-2" value={'APPLY'} />
                            </form>
                        </ThemeProvider>
                    </div>
                    <div className="bento-card relative col-span-2 hidden flex-col md:flex">
                        <h2 className="content-subtitle text-xl">
                            Plan Options
                            <div className="bento-separator mt-2 h-[2px] w-full rounded-full opacity-30" />
                        </h2>
                        <div className="content-body mt-4 flex h-full w-full items-center justify-center gap-8 rounded-sm border border-neutral-800 p-4">
                            <div className="flex items-center justify-center gap-8">
                                <div className="flex flex-col items-center gap-2">
                                    <BuyTokensButton ownerData={ownerData} setNewAlert={setNewAlert} setAlertType={setAlertType} />
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <ChangePlanButton ownerData={ownerData} setNewAlert={setNewAlert} setAlertType={setAlertType} />
                                </div>
                                <div className="flex flex-col items-center gap-2">
                                    <CancelPlanButton ownerData={ownerData} setNewAlert={setNewAlert} setAlertType={setAlertType} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
