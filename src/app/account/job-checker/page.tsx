'use client'

import { AlertToast } from "@/components/alerts"
import { IconContainer } from "@/components/ui"
import { Entry, WarningType } from "@/types/mainTypes"
import { KeyboardArrowDown, Search } from "@mui/icons-material"
import { useSession } from "next-auth/react"
import { useState } from "react"

export default function JobChecker() {
    const { data: session, status } = useSession()
    const [newAlert, setNewAlert] = useState<string | null>(null)
    const [alertType, setAlertType] = useState<WarningType>('alert')
    const [entryLoading, setEntryLoading] = useState<boolean>(false)
    const [expanded, setExpanded] = useState<boolean>(false)
    
    const [query, setQuery] = useState<string>()
    const [entry, setEntry] = useState<Entry | null>(null)

    const handleSearch =  async () => {
        setEntryLoading(true)
        setEntry(null)
        try {
            const entryResult = await fetch(`/api/submissions/workId/${query}`)
            const entryResponse = await entryResult.json()
            if (!entryResult.ok) throw new Error(entryResponse.message)

            setEntry(entryResponse.entry)
        } catch (err: unknown) {
            if (err instanceof Error) {
                setNewAlert(err.message)
            } else {
                setNewAlert('An unknown error occurred')
            }
            setAlertType('error')
        }
        setEntryLoading(false)
    }

    return (
        <>
            {newAlert && <AlertToast warning={alertType} message={`${newAlert}`} onClose={() => setNewAlert(null)}></AlertToast>}
            <section id="job-checker" className="flex min-h-screen flex-col px-8 pt-12 xl:px-16">
                <h3 className="content-miniheading text-[16px]">ACCOUNT</h3>
                <h1 className="content-title text-4xl">Job Checker</h1>
                <div className="my-8 grid gap-6">
                    <div className="bento-card max-w-[650px] flex flex-col">
                        <h2 className="content-subtitle text-xl">
                            Search by Work ID
                            <div className="mt-2 h-[2px] w-full rounded-full bento-separator opacity-30" />
                        </h2>
                        <div className="flex flex-col relative mt-4">
                            <input
                                onChange={(e) => setQuery(e.target.value)}
                                className="content-subtitle text-xl w-full rounded-4xl border-2 border-neutral-600 px-6 py-3"
                                placeholder="hmdl-wk-..."
                            />
                            <IconContainer className="absolute right-2 top-[50%] translate-y-[-50%]" onClick={() => handleSearch()}>
                                <Search sx={{ fontSize: '24px' }} />
                            </IconContainer>
                        </div>
                    </div>
                    <div className="bento-card min-h-124">
                        <div
                            className="scrollbar-custom flex flex-col justify-between min-h-full min-w-[80%] overflow-y-auto rounded-sm border border-neutral-800 p-4"
                            style={{ resize: 'vertical' }}
                        >
                            {
                                !entryLoading ? (entry ? <div className="font-body md:mx-4 flex flex-col gap-4 rounded-sm bg-neutral-900 py-4 px-6 shadow-md shadow-neutral-950/20">
                                        {/* WORK ID */}
                                        <div className="flex gap-8">
                                            <div className="flex flex-col gap-4 w-full">
                                                <span className="rounded-sm text-lg bg-neutral-800 text-neutral-400 px-2 py-1 w-max">
                                                    <strong className="text-neutral-300">{entry.work_id}</strong>
                                                </span>
                                                <div className="flex justify-between">
                                                    {
                                                        expanded ? <p className="content-body text-base max-w-[90%]">
                                                            {
                                                                entry.edited ? (
                                                                    entry.edit_text
                                                                ) : (
                                                                    entry.orig_text
                                                                )
                                                            }
                                                        </p> : <p className="content-body text-base max-w-[90%]">
                                                            {
                                                                entry.edited ? (
                                                                    `${entry.edit_text.slice(0,140)} ${entry.edit_text.length > 140 ? "..." : ""}`
                                                                ) : (
                                                                    `${entry.orig_text.slice(0,140)} ${entry.orig_text.length > 140 ? "..." : ""}`
                                                                )
                                                            }
                                                        </p>
                                                    }
                                                    <button
                                                        className="hidden md:block cursor-pointer text-gray-400 transition-colors hover:text-gray-600"
                                                        onClick={() => setExpanded(!expanded)}
                                                    >
                                                        <KeyboardArrowDown className={`${expanded && 'rotate-180'}`} sx={{ fontSize: '32px' }} />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="separator max-w-[600px]" />
                                        <div className="flex flex-col gap-2 max-w-[800px]">
                                            <h3 className="content-subtitle-acc">Analysis</h3>
                                            <span className="relative rounded-sm bg-neutral-800 text-neutral-400 px-2 py-1 w-max overflow-hidden">
                                                {/* SUCCESS, FAILED, PROCESSING */}
                                                Processing Status: <strong className="text-neutral-300 capitalize">{entry.status}</strong>
                                                {
                                                    entry.status === "success" ? <span
                                                        className="absolute bottom-0 right-0 h-4 w-12"
                                                        style={{
                                                            background: "linear-gradient(160deg, transparent 40%, #00dd00 100%)",
                                                            opacity: 0.3,
                                                        }}
                                                    /> : (entry.status === "failed" ? <span
                                                        className="absolute bottom-0 right-0 h-4 w-12"
                                                        style={{
                                                            background: "linear-gradient(160deg, transparent 40%, #ff0000 100%)",
                                                            opacity: 0.3,
                                                        }}
                                                    /> : <span
                                                        className="absolute bottom-0 right-0 h-4 w-12"
                                                        style={{
                                                            background: "linear-gradient(160deg, transparent 40%, #ffaa00 100%)",
                                                            opacity: 0.3,
                                                        }}
                                                    />)
                                                    // hmdl-wk-22fb4045-68db-40d9-9522-8a420b88ed96 failed
                                                    // hmdl-wk-3efbbb90-9f4f-4ffe-b236-02de426a1062 success
                                                    // hmdl-wk-4b112b55-552a-46fe-8738-75ef74059b58 processing
                                                }
                                            </span>
                                            <div className="mt-2 flex w-full items-center gap-4">
                                                <div className="h-2 w-full max-w-[85%] rounded-full bg-neutral-800">
                                                    <div
                                                        id="ai-confidence"
                                                        style={{ width: `${!!entry.ai_result ? entry.ai_result.score : 0}%` }}
                                                        className={`h-2 rounded-full bg-blue-400/50`}
                                                    />
                                                </div>
                                                <span>{!!entry.ai_result ? `${entry.ai_result.score}%` : "N/A"}</span>
                                            </div>
                                            <div className="flex w-full items-center gap-4">
                                                <div className="h-2 w-full max-w-[85%] rounded-full bg-neutral-800">
                                                    <div
                                                        id="plag-confidence"
                                                        style={{ width: `${!!entry.plag_result ? entry.plag_result.score : 0}%` }}
                                                        className={`w-[50%] h-2 rounded-full bg-green-600/50`}
                                                    />
                                                </div>
                                                <span>{!!entry.plag_result ? `${entry.plag_result.score}%` : "N/A"}</span>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-2">
                                                <span className="w-max rounded-sm bg-blue-400/50 px-2 text-blue-100 opacity-80">
                                                    <strong>AI</strong>
                                                </span>
                                                <span className="w-max rounded-sm bg-green-600/50 px-2 text-green-100 opacity-80">
                                                    <strong>Plagiarism</strong>
                                                </span>
                                            </div>
                                        </div>
                                    </div> : (
                                        <span className="content-subtitle text-lg">No job found</span>
                                    )) : <div>
                                    {/* LOADING STATE */}
                                </div>
                            }
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}