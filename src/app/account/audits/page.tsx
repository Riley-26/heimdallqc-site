"use client"

import { useEffect, useState } from 'react'
import { useOwnerData } from "@/hooks/useOwnerData"
import { useSession } from "next-auth/react"
import { useQueryClient } from '@tanstack/react-query'
import { AuditProfile, AuditProfileSchedule, AuditProfileType, AuditReport, ConfirmType, CreateProfileType, EditProfileType, WarningType } from '@/types/mainTypes'
import { AlertToast, ConfirmAlert } from '@/components/alerts'
import { IconContainer } from '@/components/ui'
import { Add, Delete, Download, Edit, Pause, PlayArrow, Stop } from '@mui/icons-material'
import { CreateAuditProfileAlert } from '@/components/alerts/CreateAuditProfileAlert'
import { useGetAuditProfiles } from '@/hooks/useGetAuditProfiles'
import { EditAuditProfileAlert } from '@/components/alerts/EditAuditProfileAlert'
import { useGetAuditReports } from '@/hooks/useGetAuditReports'
import { lib } from "@/services/lib"

export default function Audits() {
    const { data: session, status } = useSession()
    const { data: ownerData, isLoading: ownerDataLoading, isError: isOwnerDataError, error: ownerDataError } = useOwnerData()
    const { data: auditProfilesData, isLoading: auditProfilesLoading, isError: isAuditProfilesError, error: auditProfilesError } = useGetAuditProfiles()
    const { data: auditReportsData, isLoading: auditReportsLoading, isError: isAuditReportsError, error: auditReportsError } = useGetAuditReports()
    const queryClient = useQueryClient();

    const [newAlert, setNewAlert] = useState<string | null>(null)
    const [alertType, setAlertType] = useState<WarningType>('alert')

    const [createProfile, setCreateProfile] = useState<CreateProfileType | null>(null)
    const [editProfile, setEditProfile] = useState<EditProfileType | null>(null)
    const [newConfirm, setNewConfirm] = useState<ConfirmType | null>(null)

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
                        id: `${profileId}`,
                        name: profileConfig.name,
                        desc: profileConfig.desc,
                        pages: profileConfig.pages,
                        schedule: profileConfig.schedule
                    })
                })
                const auditProfileResponse = await auditProfile.json()
                if (!auditProfile.ok) throw new Error(auditProfileResponse.message)
                
                setNewAlert('Audit profile edited')
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
        const confirmed = await confirmDialog("Delete audit profile", "Are you sure you want to delete this audit profile?")

        if (confirmed) {
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
    }

    const handleToggleAudit = async (profile: AuditProfile, id: string) => {
        let confirmed;
        if (profile.is_active) {
            confirmed = await confirmDialog("Stop audit", "Are you sure you want to stop running this Audit Profile?")
        } else {
            confirmed = await confirmDialog("Run audit", "Are you sure you want to start running this Audit Profile?")
        }

        if (confirmed) {
            try {
                const toggleAudit = await fetch("/api/audit-profiles/toggle-audit", {
                    method: "PATCH",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        profileId: `${id}`,
                        toggleSetting: !profile.is_active
                    })
                })
                const toggleAuditResponse = await toggleAudit.json()
                if (!toggleAudit.ok) throw new Error(toggleAuditResponse.message)
                
                setNewAlert(toggleAuditResponse.message)
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

    return (
        <>
            {newAlert && <AlertToast warning={alertType} message={`${newAlert}`} onClose={() => setNewAlert(null)}></AlertToast>}
            {newConfirm && (
                <ConfirmAlert isOpen={!!newConfirm} onClose={newConfirm.onCancel} hasConfirmed={newConfirm.onConfirm} title={newConfirm.title}>
                    {newConfirm.message}
                </ConfirmAlert>
            )}
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
                                className="scrollbar-custom mt-4 flex min-h-[400px] h-[400px] w-full flex-col justify-between items-center overflow-y-auto rounded-sm border border-neutral-800 p-4"
                                style={{ resize: 'vertical' }}
                            >
                                <ul className="content-body flex flex-col items-center gap-8 text-base w-full 2xl:px-6">
                                    {
                                    !auditReportsLoading ? (!isAuditReportsError &&
                                        auditReportsData.length > 0 && auditReportsData.map((val: AuditReport, key: number) => {
                                            return (
                                                <li key={key} className="relative overflow-hidden content-body min-w-full flex flex-col gap-6 items-center rounded-sm bg-neutral-900 p-4 shadow-md shadow-neutral-950/20">
                                                    {
                                                        val.status === "success" ? <span
                                                            className="absolute top-0 left-0 h-full w-36"
                                                            style={{
                                                                background: "linear-gradient(-45deg, transparent 40%, #00dd00 100%)",
                                                                opacity: 0.2,
                                                            }}
                                                        /> : (val.status === "failed" ? <span
                                                            className="absolute top-0 left-0 h-full w-36"
                                                            style={{
                                                                background: "linear-gradient(-45deg, transparent 40%, #ff0000 100%)",
                                                                opacity: 0.2,
                                                            }}
                                                        /> : <span
                                                            className="absolute top-0 left-0 h-full w-36"
                                                            style={{
                                                                background: "linear-gradient(-45deg, transparent 40%, #ffaa00 100%)",
                                                                opacity: 0.2,
                                                            }}
                                                        />)
                                                    }
                                                    <div className='flex items-center w-full'>
                                                        <div className='w-[180px]'>
                                                            <p>{lib.formatDate(val.created_at)}</p>
                                                        </div>
                                                        <div className="h-[20px] w-0.5 bg-neutral-700 mx-4" />
                                                        <div className="max-w-[300px] w-full">
                                                            <p>{val.name.length > 18 ? `${val.name.slice(0, 20)}...` : val.name}</p>

                                                        </div>
                                                        <div className="h-[20px] w-0.5 bg-neutral-700 mx-4" />
                                                        <div className="max-w-[200px] w-full">
                                                            <div className="w-full flex gap-4">
                                                                <p className='text-neutral-400'>Status:</p>
                                                                <p className='capitalize'>{val.status}</p>
                                                            </div>
                                                        </div>
                                                        <div className="w-max ml-auto mr-4">
                                                            <button
                                                                onClick={() => {
                                                                    if (val.pdf_link) {
                                                                        window.open(val.pdf_link, '_blank')
                                                                    }
                                                                }}
                                                                title="Download PDF"
                                                            >
                                                                <Download sx={{ fontSize: '24px' }} className="text-neutral-400 cursor-pointer" />
                                                            </button>
                                                        </div>
                                                    </div>
                                                    <div className='flex items-center w-full'>
                                                        <div className="max-w-[200px] w-full flex gap-4">
                                                            <p className='text-neutral-400'>Plagiarism Score:</p>
                                                            <strong>{val.score}</strong>
                                                        </div>
                                                        <div className="h-[20px] w-0.5 bg-neutral-700 mx-4" />
                                                        <div className="max-w-[350px] w-full flex gap-4">
                                                            <p className='text-neutral-400'>Plagiarisms Detected:</p>
                                                            <strong>{val.plagiarism_count}</strong>
                                                        </div>
                                                        {val.plagiarism_count > 0 && (
                                                            <span className="rounded-sm bg-red-900 px-2 py-1 text-red-300 opacity-80">
                                                                {
                                                                    <strong>Action Needed</strong>
                                                                }
                                                            </span>
                                                        )}
                                                    </div>
                                                </li>
                                            )
                                        })) : <div className="flex min-w-full items-center rounded-sm bg-neutral-900 px-4 py-3 h-14">
                                            <div className='bg-neutral-800 h-6 w-20 rounded-sm'></div>
                                        </div>
                                    }
                                </ul>
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
                                                            <div className="h-[20px] w-0.5 bg-neutral-700 mx-4" />
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
                                                            <div className="h-[20px] w-0.5 bg-neutral-700 ml-4 mr-8" />
                                                            {
                                                                val.is_active ? <button
                                                                    className="hidden lg:flex items-center cursor-pointer opacity-50 transition-all hover:opacity-70 mr-4"
                                                                    onClick={() => handleToggleAudit(val, val.id)}
                                                                >
                                                                    Stop<Stop sx={{ color: 'darkred', fontSize: '32px' }} />
                                                                </button> : <button
                                                                    className="hidden lg:flex items-center cursor-pointer opacity-50 transition-all hover:opacity-70 mr-4"
                                                                    onClick={() => handleToggleAudit(val, val.id)}
                                                                >
                                                                    Run<PlayArrow sx={{ color: 'green', fontSize: '32px' }} />
                                                                </button>
                                                            }
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