import React, { ReactNode, useEffect, useState } from 'react'
import { Button } from "../ui"
import { OwnerData } from '@/types/mainTypes'

interface CreateAuditProfileProps {
    ownerData: OwnerData
    isOpen: boolean
    onClose: () => void
    children?: ReactNode
    onConfirm: (arg0: string, arg1: string, arg2: string[], arg3: object) => void
}

const scheduleItemsList = [
    "On-demand",
    "Daily",
    "Bi-daily",
    "Weekly",
    "Bi-weekly",
    "Monthly"
]

const scheduleDaysList = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
]

const scheduleTimesList = [
    "00:00","00:30",
    "01:00","01:30",
    "02:00","02:30",
    "03:00","03:30",
    "04:00","04:30",
    "05:00","05:30",
    "06:00","06:30",
    "07:00","07:30",
    "08:00","08:30",
    "09:00","09:30",
    "10:00","10:30",
    "11:00","11:30",
    "12:00","12:30",
    "13:00","13:30",
    "14:00","14:30",
    "15:00","15:30",
    "16:00","16:30",
    "17:00","17:30",
    "18:00","18:30",
    "19:00","19:30",
    "20:00","20:30",
    "21:00","21:30",
    "22:00","22:30",
    "23:00","23:30"
]

export const CreateAuditProfileAlert: React.FC<CreateAuditProfileProps> = ({ ownerData, isOpen, onClose, onConfirm }) => {
    const [name, setName] = useState<string>("")
    const [desc, setDesc] = useState<string>("")
    const [scheduleDay, setScheduleDay] = useState<string>("")
    const [scheduleTime, setScheduleTime] = useState<string>("")
    const [scheduleFreq, setScheduleFreq] = useState<string>("")
    const [pages, setPages] = useState<string>("")

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const schedule_obj = {
            "day": scheduleDay,
            "time": scheduleTime,
            "freq": scheduleFreq
        }
        if (["Daily", "On-demand"].includes(scheduleFreq)) {
            schedule_obj["day"] = ""
            if ("On-demand" === scheduleFreq) {
                schedule_obj["time"] = ""
            }
        }
        const page_list = pages.split("\n")
        onConfirm(name, desc, page_list, schedule_obj)
    }

    // Prevent background scroll when modal is open
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => {
            document.body.style.overflow = ''
        }
    }, [])

    if (!isOpen) return null

    return (
        <div className="fixed inset-0 z-100 flex items-center justify-center">
            {/* Overlay */}
            <div className="fixed inset-0 bg-black/80 transition-opacity" aria-hidden="true" onClick={onClose} />
            {/* Modal */}
            <div className="bento-card relative z-10 mx-auto w-full max-w-lg rounded-lg p-6 shadow-2xl shadow-black">
                <button
                    className="content-body absolute top-0 right-1 h-6 w-6 cursor-pointer text-3xl text-gray-400 hover:text-gray-600"
                    onClick={onClose}
                    aria-label="Close"
                >
                    &times;
                </button>
                <h2 className="content-subtitle mb-6 text-xl">Create Audit Profile</h2>
                <form className='flex flex-col gap-2' onSubmit={(e) => handleSubmit(e)}>
                    <div className="content-body w-full">
                        <h3 className='content-subtitle-acc text-lg'>Name*</h3>
                        <input
                            required
                            className='text-base mt-2 w-full rounded-sm border border-neutral-800 px-2 py-1'
                            value={name || ""}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="content-body w-full">
                        <h3 className='content-subtitle-acc text-lg'>Description</h3>
                        <textarea
                            className='min-h-[60px] text-sm mt-2 w-full rounded-sm border border-neutral-800 px-2 py-1'
                            value={desc || ""}
                            onChange={(e) => setDesc(e.target.value)}
                        />
                    </div>
                    <div className="content-body w-full">
                        <h3 className='content-subtitle-acc text-lg'>Pages*</h3>
                        <textarea 
                            required
                            className='min-h-[100px] text-sm mt-2 w-full rounded-sm border border-neutral-800 px-2 py-1'
                            placeholder='One page link per line, "https://your-website.com/page"'
                            value={pages || ""}
                            onChange={(e) => setPages(e.target.value)}
                        />
                    </div>
                    <div className="content-body w-full">
                        <h3 className='content-subtitle-acc text-lg'>Schedule*</h3>
                        <div className='flex gap-4'>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <select
                                    className='text-base mt-2 w-full rounded-sm border border-neutral-800 px-2 py-1 bg-neutral-900'
                                    value={scheduleFreq || ""}
                                    required
                                    onChange={(e) => setScheduleFreq(e.target.value)}
                                >
                                    <option value="" disabled />
                                    {
                                        scheduleItemsList.map((val, key) => {
                                            return <option key={key} value={val}>
                                                {val}
                                            </option>
                                        })
                                    }
                                </select>
                                <select
                                    className={`${["Daily", "On-demand"].includes(scheduleFreq) ? "text-neutral-600" : ""} text-base w-full rounded-sm border border-neutral-800 px-2 py-1 bg-neutral-900`}
                                    value={scheduleDay || ""}
                                    required={!["Daily", "On-demand"].includes(scheduleFreq)}
                                    onChange={(e) => {
                                        setScheduleDay(e.target.value)
                                        if (["Daily", "On-demand"].includes(scheduleFreq)) {
                                            setScheduleDay("")
                                        }
                                    }}
                                    disabled={["Daily", "On-demand"].includes(scheduleFreq)}
                                >
                                    <option value="" disabled />
                                    {
                                        scheduleDaysList.map((val, key) => {
                                            return <option key={key} value={val}>
                                                {val}
                                            </option>
                                        })
                                    }
                                </select>
                            </div>
                            <div className='w-full flex flex-col gap-2 items-center'>
                                <select
                                    className={`${["On-demand"].includes(scheduleFreq) ? "text-neutral-600" : ""} text-base mt-2 w-full rounded-sm border border-neutral-800 px-2 py-1 bg-neutral-900 scrollbar-custom`}
                                    value={scheduleTime || ""}
                                    required={!["On-demand"].includes(scheduleFreq)}
                                    onChange={(e) => {
                                        setScheduleTime(e.target.value)
                                        if (["Daily", "On-demand"].includes(scheduleFreq)) {
                                            setScheduleTime("")
                                        }
                                    }}
                                    disabled={["On-demand"].includes(scheduleFreq)}
                                >
                                    <option value="" disabled />
                                    {
                                        scheduleTimesList.map((val, key) => {
                                            return <option key={key} value={val}>
                                                {val}
                                            </option>
                                        })
                                    }
                                </select>
                                <p className='text-base'>UTC+00:00</p>
                            </div>
                        </div>
                    </div>
                    <div className="content-body mt-6 flex justify-end">
                        <Button className="px-4 py-2 text-base" value={'CONFIRM'} />
                    </div>
                </form>
            </div>
        </div>
    )
}
