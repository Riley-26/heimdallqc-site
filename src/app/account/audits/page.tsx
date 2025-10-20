"use client"

import { useEffect, useState } from 'react'
import { useOwnerData } from "@/hooks/useOwnerData"
import { useSession } from "next-auth/react"
import { useQueryClient } from '@tanstack/react-query'
import { AuditProfile, AuditProfileSchedule, AuditProfileType, ConfirmType, CreateProfileType, EditProfileType, WarningType } from '@/types/mainTypes'
import { AlertToast, ConfirmAlert } from '@/components/alerts'
import { IconContainer } from '@/components/ui'
import { Add, Delete, Edit, Pause, PlayArrow, Stop } from '@mui/icons-material'
import { CreateAuditProfileAlert } from '@/components/alerts/CreateAuditProfileAlert'
import { useGetAuditProfiles } from '@/hooks/useGetAuditProfiles'
import { EditAuditProfileAlert } from '@/components/alerts/EditAuditProfileAlert'

export default function Audits() {
    const { data: session, status } = useSession()
    const { data: ownerData, isLoading: ownerDataLoading, isError: isOwnerDataError, error: ownerDataError } = useOwnerData()
    const { data: auditProfilesData, isLoading: auditProfilesLoading, isError: isAuditProfilesError, error: auditProfilesError } = useGetAuditProfiles()
    const [newAlert, setNewAlert] = useState<string | null>(null)
    const [alertType, setAlertType] = useState<WarningType>('alert')
    const [createProfile, setCreateProfile] = useState<CreateProfileType | null>(null)
    const [editProfile, setEditProfile] = useState<EditProfileType | null>(null)
    const queryClient = useQueryClient();

    const handleCreateAuditProfile = async () => {
        const profileConfig = await createProfileDialog()
    
        if (!!profileConfig) {
            try {
                const auditProfile = await fetch("/api/audit-profiles/create-profile", {
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
                
                queryClient.invalidateQueries({ queryKey: ['auditProfiles'] })
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

    const handleEditAuditProfile = async (profile: AuditProfileType, profileId: string) => {
        const profileConfig = await editProfileDialog(profile)
    
        if (!!profileConfig) {
            try {
                const auditProfile = await fetch("/api/audit-profiles/edit-profile", {
                    method: "PATCH",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        id: profileId,
                        name: profileConfig.name,
                        desc: profileConfig.desc,
                        pages: profileConfig.pages,
                        schedule: profileConfig.schedule
                    })
                })
                const auditProfileResponse = await auditProfile.json()
                if (!auditProfile.ok) throw new Error(auditProfileResponse.message)
                
                queryClient.invalidateQueries({ queryKey: ['auditProfiles'] })
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

    const handleDeleteAuditProfile = async (id: string) => {
        try {
            const auditProfile = await fetch("/api/audit-profiles/delete-profile", {
                method: "DELETE",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    profileId: `${id}`
                })
            })
            const auditProfileResponse = await auditProfile.json()
            if (!auditProfile.ok) throw new Error(auditProfileResponse.message)
            
            queryClient.invalidateQueries({ queryKey: ['auditProfiles'] })
        } catch (err: unknown) {
            if (err instanceof Error) {
                setNewAlert(err.message)
            } else {
                setNewAlert('An unknown error occurred')
            }
            setAlertType('error')
        }
    }

    const createProfileDialog = (): Promise<AuditProfileType | null> => {
        return new Promise((resolve) => {
            setCreateProfile({
                onConfirm: (name: string, pages: string[], schedule: AuditProfileSchedule, desc?: string) => {
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

    const editProfileDialog = (profile: AuditProfileType): Promise<AuditProfileType | null> => {
        return new Promise((resolve) => {
            setEditProfile({
                profile: profile,
                onConfirm: (name: string, pages: string[], schedule: AuditProfileSchedule, desc?: string) => {
                    setEditProfile(null)
                    resolve({name, desc, pages, schedule})
                },
                onCancel: () => {
                    setEditProfile(null)
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
            {editProfile && (
                <EditAuditProfileAlert profile={editProfile.profile} isOpen={!!editProfile} onClose={editProfile.onCancel} onConfirm={editProfile.onConfirm}></EditAuditProfileAlert>
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
                            <div className="content-body mt-4 flex min-h-[300px] lg:min-h-[400px] w-full flex-col justify-between gap-4 rounded-sm border border-neutral-800 p-4">
                                <div className="scrollbar-custom max-h-[300px] lg:max-h-[400px] flex flex-col gap-4 overflow-y-auto">
                                    {
                                        !auditProfilesLoading ? (!isAuditProfilesError &&
                                            auditProfilesData.length > 0 && auditProfilesData.map((val: AuditProfile, key: number) => {
                                                return (
                                                    <div key={key} className="font-body flex justify-between items-center rounded-sm bg-neutral-900 px-4 py-3 h-14">
                                                        <div className='flex justify-between items-center w-full'>
                                                            <span>{val.name}</span>
                                                            <span className='text-sm md:text-base text-neutral-500'>{val.desc && val.desc.slice(0, 60)}</span>
                                                        </div>
                                                        <div className='flex items-center gap-2 content-body text-base'>
                                                            <div className="h-[20px] w-0.5 bg-neutral-700 mx-8" />
                                                            {
                                                                val.is_active ? <button
                                                                    className="hidden lg:flex items-center cursor-pointer opacity-50 transition-all hover:opacity-70 mr-4"
                                                                    onClick={() => {}}
                                                                >
                                                                    Stop<Stop sx={{ color: 'darkred', fontSize: '32px' }} />
                                                                </button> : <button
                                                                    className="hidden lg:flex items-center cursor-pointer opacity-50 transition-all hover:opacity-70 mr-4"
                                                                    onClick={() => {}}
                                                                >
                                                                    Run<PlayArrow sx={{ color: 'green', fontSize: '32px' }} />
                                                                </button>
                                                            }
                                                            <button
                                                                className="hidden lg:flex items-center cursor-pointer opacity-30 transition-all hover:opacity-60"
                                                                onClick={() => handleEditAuditProfile(val, val.id)}
                                                            >
                                                                <Edit sx={{ fontSize: '20px' }} />
                                                            </button>
                                                            <button
                                                                className="hidden lg:flex items-center cursor-pointer opacity-30 transition-all hover:opacity-60"
                                                                onClick={() => handleDeleteAuditProfile(val.id)}
                                                            >
                                                                <Delete sx={{ color: 'red' }} />
                                                            </button>
                                                        </div>
                                                    </div>
                                                )
                                            })) : <div className="flex items-center rounded-sm bg-neutral-900 px-4 py-3 h-14">
                                                <div className='bg-neutral-800 h-6 w-20 rounded-sm'></div>
                                            </div>
                                    }
                                </div>
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