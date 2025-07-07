"use client"

import { IconContainer } from "@/components/ui"
import { Add } from "@mui/icons-material"
import { useSession } from "next-auth/react"
import React from "react"

export default function ApiManagement(){
    const { data: session, status } = useSession();

    const handleNewKey = async (e:any) => {
        e.preventDefault()
        console.log(session)
        if (confirm("Are you sure you want to create a new API key? Your current key will be deactivated")){
            const keyCreate = await fetch(
                `http://127.0.0.1:8000/api/owners/${session?.user.id}/api-keys`,
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({
                        "name": session?.user.name
                    })
                }
            )
            const keyCreateResponse = await keyCreate.json()
            console.log(keyCreateResponse)
            if (keyCreate.status === 200){
                alert(`You will only see your key once: ${keyCreateResponse.key}`)
            } else {
                alert("Failed to generate key. Please try again or contact us for more help.")
            }

        }
    }

    return (
        <>
            <section id="settings" className="min-h-screen pt-[100px] flex flex-col px-8 xl:px-16">
                <h3 className="content-miniheading text-[16px]">ACCOUNT</h3>
                <h2 className="content-title text-5xl">API Management</h2>
                <div className="grid gap-6 my-8">
                    <div className="bento-card">
                        <h2 className="content-subtitle text-2xl my-2">
                            Current Plan
                            <div className="h-[2px] mt-2 w-full opacity-30 bg-gradient-to-r from-[#d8af41] to-transparent rounded-full" />
                        </h2>
                        <div className="min-h-[300px] mt-4 w-full p-4 border rounded-sm border-neutral-800">
                            
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-6">
                        <div className="bento-card">
                            <h2 className="content-subtitle text-2xl my-2">
                                Generate API Key
                                <div className="h-[2px] mt-2 w-full opacity-30 bg-gradient-to-r from-[#d8af41] to-transparent rounded-full" />
                            </h2>
                            <div className="min-h-[300px] flex justify-center items-center mt-4 w-full p-4 border rounded-sm border-neutral-800">
                                <IconContainer onClick={(e) => handleNewKey(e)}>
                                    <Add sx={{ fontSize: "48px" }}/>
                                </IconContainer>
                            </div>
                        </div>
                        <div className="bento-card">
                            <h2 className="content-subtitle text-2xl my-2">
                                Team Members
                                <div className="h-[2px] mt-2 w-full opacity-30 bg-gradient-to-r from-[#d8af41] to-transparent rounded-full" />
                            </h2>
                            <div className="min-h-[300px] flex justify-center items-center mt-4 w-full p-4 border rounded-sm border-neutral-800">
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