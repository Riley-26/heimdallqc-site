"use client"

import { IconContainer } from "@/components/ui"
import { Add, ChangeCircle, ChangeCircleOutlined, Delete, Token } from "@mui/icons-material"
import { useSession } from "next-auth/react"
import React, { useEffect, useState } from "react"

export default function ApiManagement() {
    const { data: session, status } = useSession();
    const [keyName, setKeyName] = useState<string>()
    const [ownerData, setOwnerData] = useState<any>()
    const [ownerKeys, setOwnerKeys] = useState<any[]>([])

    const handleNewKey = async (e: any) => {
        e.preventDefault()

        if (confirm("Are you sure you want to create a new API key?")) {
            const keyCreate = await fetch(
                `http://127.0.0.1:8000/api/owners/${session?.user.id}/api-keys`,
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({
                        name: keyName
                    })
                }
            )
            const keyCreateResponse = await keyCreate.json()

            if (keyCreate.status === 200) {
                alert(`You will only see your key once: ${keyCreateResponse.key}`)
                window.location.reload()
            } else {
                alert("Failed to generate key. Please try again or contact us for more help.")
            }
        }
    }

    const fetchOwnerPlan = async () => {
        const owner = await fetch(`http://127.0.0.1:8000/api/owners/${session?.user.id}`)
        const ownerResponse = await owner.json()

        if (owner.status === 200) {
            setOwnerData(ownerResponse)
        }
    }

    const fetchOwnerKeys = async () => {
        const keys = await fetch(`http://127.0.0.1:8000/api/owners/${session?.user.id}/api-key`)
        const keysResponse = await keys.json()

        if (keys.status === 200) {
            setOwnerKeys(keysResponse)
        }
    }

    const handleDeleteKey = async (id: number) => {
        if (confirm("Are you sure that you want to delete this key?")) {
            const deletion = await fetch(
                `http://127.0.0.1:8000/api/api-keys/${id}/delete-key`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({
                        owner_id: session?.user.id
                    })
                }
            )
            const deletionResponse = await deletion.json()

            if (deletion.status === 200) {
                alert("Key successfully deleted")
                fetchOwnerKeys()

            } else {
                alert("Something went wrong. Please try again")
            }
        }
    }

    const handleBuyTokens = async () => {

    }

    const handleUpgradePlan = async () => {
        
    }


    const formatDate = (dateString: string) => {
        let date = new Date(dateString);
        const now = new Date();

        if (date < now) {
            date.setMonth(date.getMonth() + 1);
        }
        return date.toLocaleDateString('en-UK', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };

    useEffect(() => {
        if (status === "authenticated") {
            fetchOwnerPlan()
            fetchOwnerKeys()
        }
    }, [status])

    return (
        <>
            <section id="settings" className="min-h-screen pt-12 flex flex-col px-8 xl:px-16">
                <h3 className="content-miniheading text-[16px]">ACCOUNT</h3>
                <h2 className="content-title text-4xl">API Management</h2>
                <div className="grid gap-6 my-8">
                    <div className="bento-card">
                        <h2 className="content-subtitle text-xl">
                            Current Plan - <i className="text-lg">{ownerData && ownerData.plan}</i>
                            <div className="h-[2px] mt-2 w-full opacity-30 bg-gradient-to-r from-[#d8af41] to-transparent rounded-full" />
                        </h2>
                        <div className="mt-4 w-full p-4 border rounded-sm border-neutral-800 flex justify-between gap-8">
                            <div className="min-w-[420px] flex flex-col">
                                <h3 className="content-subtitle text-xl mb-4">Tokens</h3>
                                <ul className="content-body flex flex-col gap-2">
                                    <li className="flex justify-between items-center">
                                        <span>Tokens remaining</span>
                                        <span><strong>{ownerData && ownerData.current_tokens}</strong></span>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span>Total tokens used</span>
                                        <span><strong>{ownerData && ownerData.tokens_used}</strong></span>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span>Next token reset</span>
                                        <span><strong>{ownerData && formatDate(ownerData.created_at)}</strong></span>
                                    </li>
                                </ul>
                                <div className="flex gap-8 items-center justify-center mt-6 mb-2">
                                    <div className="flex flex-col items-center gap-2">
                                        <IconContainer>
                                            <Token sx={{ fontSize: "32px" }} />
                                        </IconContainer>
                                        <span className="content-body text-base">Buy Tokens</span>
                                    </div>
                                    <div className="flex flex-col items-center gap-2">
                                        <IconContainer>
                                            <ChangeCircleOutlined sx={{ fontSize: "32px" }} />
                                        </IconContainer>
                                        <span className="content-body text-base">Change Plan</span>
                                    </div>
                                </div>
                            </div>
                            <div className="hidden lg:block w-0.5 rounded-full bg-gradient-to-t from-transparent via-neutral-700 to-transparent" />
                            <div className="w-[70%] flex flex-col">
                                <h3 className="content-subtitle text-xl mb-4">Stats</h3>
                                <ul className="content-body flex flex-col gap-2">
                                    <li className="flex justify-between items-center">
                                        <span>Texts analysed</span>
                                        <span><strong>{ownerData && ownerData.current_tokens}</strong></span>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span>Watermarks created</span>
                                        <span><strong>{ownerData && ownerData.tokens_used}</strong></span>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span>Plagiarisms prevented</span>
                                        <span><strong>{ownerData && ownerData.plagiarisms_prevented}</strong></span>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span>Total audits</span>
                                        <span><strong>{ownerData && ownerData.total_audits}</strong></span>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span>Total rewrites</span>
                                        <span><strong>{ownerData && ownerData.total_audits}</strong></span>
                                    </li>
                                    <li className="flex justify-between items-center">
                                        <span>Total redactions</span>
                                        <span><strong>{ownerData && ownerData.total_audits}</strong></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bento-card">
                            <h2 className="content-subtitle text-xl">
                                API Keys
                                <div className="h-[2px] mt-2 w-full opacity-30 bg-gradient-to-r from-[#d8af41] to-transparent rounded-full" />
                            </h2>
                            <div className="min-h-[400px] flex flex-col justify-between mt-4 w-full p-4 content-body gap-4 border rounded-sm border-neutral-800">
                                <div className="flex flex-col gap-4 max-h-[300px] overflow-y-auto scrollbar-custom">
                                    {
                                        ownerKeys && ownerKeys.map((val: any, key: any) => {
                                            if (val.is_active) {
                                                return <div key={key} className="bg-neutral-900 rounded-sm px-4 py-3 flex justify-between font-body">
                                                    <span>{val.name}</span>
                                                    <button className="opacity-30 hover:opacity-60 cursor-pointer transition-all" onClick={() => handleDeleteKey(val.id)}>
                                                        <Delete sx={{ color: "red" }} />
                                                    </button>
                                                </div>
                                            }
                                        })
                                    }
                                </div>
                                <div className="flex flex-col gap-2">
                                    <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-neutral-600 to-transparent" />
                                    <span className="my-1">Create new key</span>
                                    <div className="flex gap-4">
                                        <input onChange={(e) => setKeyName(e.target.value)} className="border border-neutral-600 rounded-sm px-2 py-1 text-base min-w-[400px]" placeholder="Input name of key" />
                                        <IconContainer onClick={(e) => handleNewKey(e)}>
                                            <Add sx={{ fontSize: "24px" }} />
                                        </IconContainer>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bento-card">
                            <h2 className="content-subtitle text-xl">
                                Team Members
                                <div className="h-[2px] mt-2 w-full opacity-30 bg-gradient-to-r from-[#d8af41] to-transparent rounded-full" />
                            </h2>
                            <div className="min-h-[400px] flex justify-center items-center mt-4 w-full p-4 border rounded-sm border-neutral-800">
                                <p className="content-body">
                                    Coming soon
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}