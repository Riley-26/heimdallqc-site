"use client"

import { useEffect, useState } from 'react'
import { useOwnerData } from "@/hooks/useOwnerData"
import { useSession } from "next-auth/react"
import { useQueryClient } from '@tanstack/react-query'
import { ConfirmType, CreateProfileType, WarningType } from '@/types/mainTypes'
import { AlertToast, ConfirmAlert } from '@/components/alerts'
import { IconContainer } from '@/components/ui'
import { Add } from '@mui/icons-material'
import { CreateAuditProfileAlert } from '@/components/alerts/CreateAuditProfileAlert'

interface AuditProfileType {
    name: string
    desc: string
    pages: string[]
    schedule: object
}

export default function Audits() {
    const { data: session, status } = useSession()
    const { data: ownerData, isLoading: ownerDataLoading, isError: isOwnerDataError, error: ownerDataError } = useOwnerData()
    const [newAlert, setNewAlert] = useState<string | null>(null)
    const [alertType, setAlertType] = useState<WarningType>('alert')
    const [createProfile, setCreateProfile] = useState<CreateProfileType | null>(null)
    const queryClient = useQueryClient();

    const handleCreateAuditProfile = async () => {
        const profileConfig = await createProfileDialog()
    
        if (!!profileConfig) {
            try {
                const auditProfile = await fetch("/api/audits/create-profile", {
                    method: "POST",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: profileConfig.name,
                        desc: profileConfig.desc,
                        pages: profileConfig.pages,
                        schedule: profileConfig.schedule
                    })
                })
                const auditProfileResponse = await auditProfile.json()
                if (!auditProfile.ok) throw new Error(auditProfileResponse.message)
                
                queryClient.invalidateQueries({ queryKey: ['auditProfileData'] })
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

    const createProfileDialog = (): Promise<AuditProfileType | null> => {
        return new Promise((resolve) => {
            setCreateProfile({
                onConfirm: (name: string, desc: string, pages: string[], schedule: object) => {
                    setCreateProfile(null)
                    resolve({name, desc, pages, schedule})
                },
                onCancel: () => {
                    setCreateProfile(null)
                    resolve(null)
                },
            })
        })
    }

    return (
        <>
            {newAlert && <AlertToast warning={alertType} message={`${newAlert}`} onClose={() => setNewAlert(null)}></AlertToast>}
            {createProfile && ownerData && (
                <CreateAuditProfileAlert ownerData={ownerData} isOpen={!!createProfile} onClose={createProfile.onCancel} onConfirm={createProfile.onConfirm}></CreateAuditProfileAlert>
            )}
            <section id="job-checker" className="flex min-h-screen flex-col px-8 pt-12 xl:px-16">
                <h3 className="content-miniheading text-[16px]">ACCOUNT</h3>
                <h1 className="content-title text-4xl">Audits</h1>
                <div className='mt-8 mb-16 flex flex-col gap-6 w-full'>
                    <div className="grid gap-6 grid-cols-3">
                        <div className="bento-card col-span-3 flex flex-col">
                            <h2 className="content-subtitle text-xl">Audit Reports</h2>
                            <div className="bento-separator mt-2 h-[2px] w-full rounded-full opacity-30" />
                            <div
                                className="scrollbar-custom mt-4 flex min-h-[450px] h-full w-full flex-col justify-between items-center overflow-y-auto rounded-sm border border-neutral-800 p-4"
                                style={{ resize: 'vertical' }}
                            >

                            </div>
                        </div>
                    </div>
                    <div className="grid gap-6 grid-cols-1 xl:grid-cols-3">
                        <div className="bento-card col-span-2 flex flex-col">
                            <h2 className="content-subtitle text-xl">Audit Profiles</h2>
                            <div className="bento-separator mt-2 h-[2px] w-full rounded-full opacity-30" />
                            <div className="scrollbar-custom mt-4 flex min-h-[400px] h-full w-full flex-col justify-between items-center overflow-y-auto rounded-sm border border-neutral-800 p-4">
                                
                            </div>
                            <div className="hidden md:flex items-center gap-2 content-body pt-4 ml-4">
                                <span className="my-1">Create new Audit Profile</span>
                                <div className="flex gap-4 max-w-[400px]">
                                    <IconContainer onClick={() => handleCreateAuditProfile()}>
                                        <Add sx={{ fontSize: '24px' }} />
                                    </IconContainer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}