'use client'

import { AlertToast } from "@/components/alerts"
import { IconContainer } from "@/components/ui"
import { lib } from "@/services/lib"
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
    const [showAltText, setShowAltText] = useState(false)
    
    const [query, setQuery] = useState<string>("")
    const [entry, setEntry] = useState<Entry | null>(null)

    const handleSearch =  async () => {
        setEntryLoading(true)
        setEntry(null)
        try {
            if (query.length > 0){
                const entryResult = await fetch(`/api/submissions/workId/${query}`)
                const entryResponse = await entryResult.json()
                if (!entryResult.ok) throw new Error(entryResponse.message)
    
                setEntry(entryResponse.entry)
            }
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
                        <h2 className="content-subtitle text-lg md:text-xl">
                            Search by Work ID
                            <div className="mt-2 h-[2px] w-full rounded-full bento-separator opacity-30" />
                        </h2>
                        <div className="flex flex-col relative mt-4">
                            <input
                                name="jobInput"
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="content-subtitle text-lg md:text-xl w-full rounded-4xl border-2 border-neutral-600 px-6 py-3 pr-16"
                                placeholder="hmdl-wk-..."
                            />
                            <IconContainer className="absolute right-2 top-[50%] translate-y-[-50%]" onClick={() => handleSearch()}>
                                <Search sx={{ fontSize: '24px' }} />
                            </IconContainer>
                        </div>
                    </div>
                    <div className="bento-card min-h-124">
                        <div
                            className="scrollbar-custom flex flex-col justify-between min-h-full w-full overflow-y-auto rounded-sm border border-neutral-800 p-4"
                            style={{ resize: 'vertical' }}
                        >
                            {
                                !entryLoading ? (entry ? <div className="font-body md:mx-4 flex flex-col gap-4 rounded-sm bg-neutral-900 py-4 px-6 shadow-md shadow-neutral-950/20">
                                        {/* WORK ID */}
                                        <div className="flex gap-8">
                                            <div className="flex flex-col gap-2 w-full">
                                                <span className="rounded-sm text-sm md:text-lg bg-neutral-800 px-2 py-1 max-w-max text-wrap">
                                                    <strong className="text-neutral-300">{entry.work_id}</strong>
                                                </span>
                                                <span className="rounded-sm text-xs md:text-sm bg-neutral-800 px-2 py-1 max-w-max text-wrap">
                                                    <strong className="text-neutral-400">{lib.toIdTag(entry.id)}</strong>
                                                </span>
                                                <div className="flex flex-col justify-between items-start mt-2">
                                                    {
                                                        !showAltText ? (expanded ? <p className="hidden sm:block content-body text-xs md:text-base max-w-[90%]">
                                                            {
                                                                entry.edited ? (
                                                                    entry.edit_text
                                                                ) : (
                                                                    entry.orig_text
                                                                )
                                                            }
                                                        </p> : <p className="content-body text-xs md:text-base max-w-[90%]">
                                                            {
                                                                entry.edited ? (
                                                                    `${entry.edit_text.slice(0,140)} ${entry.edit_text.length > 140 ? "..." : ""}`
                                                                ) : (
                                                                    `${entry.orig_text.slice(0,140)} ${entry.orig_text.length > 140 ? "..." : ""}`
                                                                )
                                                            }
                                                        </p>) : <p className="content-body text-xs md:text-base max-w-[90%]">
                                                            {entry.temp_text}
                                                        </p>
                                                    }
                                                    {
                                                        expanded && !!entry.temp_text && (
                                                            <div className="mt-6 mr-16 flex items-center justify-center gap-4">
                                                                <button
                                                                    className={`${!showAltText ? 'bg-neutral-800 text-sm font-bold' : 'text-xs'} min-h-[30px] cursor-pointer rounded-sm px-3 py-1 text-neutral-400 transition-all`}
                                                                    onClick={() => setShowAltText(false)}
                                                                >
                                                                    ORIGINAL
                                                                </button>
                                                                <div className="h-[20px] w-0.5 bg-neutral-700" />
                                                                <button
                                                                    className={`${showAltText ? 'bg-neutral-800 text-sm font-bold' : 'text-xs'} min-h-[30px] cursor-pointer rounded-sm px-3 py-1 text-neutral-400 transition-all`}
                                                                    onClick={() => setShowAltText(true)}
                                                                >
                                                                    MODIFIED
                                                                </button>
                                                            </div>
                                                        )
                                                    }
                                                </div>
                                            </div>
                                            <button
                                                className="hidden sm:block cursor-pointer text-gray-400 transition-colors hover:text-gray-600"
                                                onClick={() => setExpanded(!expanded)}
                                            >
                                                <KeyboardArrowDown className={`${expanded && 'rotate-180'}`} sx={{ fontSize: '32px' }} />
                                            </button>
                                        </div>
                                        <div className="separator max-w-[600px]" />
                                        <div className="flex flex-col gap-2 max-w-[800px]">
                                            <h3 className="content-subtitle-acc">Analysis</h3>
                                            <div className="content-body relative rounded-sm bg-neutral-800 text-neutral-400 px-2 py-1 w-max overflow-hidden">
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
                                                }
                                            </div>
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
                                        <span className="content-subtitle text-lg">No job found. Check for errors or whitespaces in the ID.</span>
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