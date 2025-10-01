import { Entry } from '@/types/mainTypes'
import { Delete, Edit, KeyboardArrowDown } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'

type EntryProps = {
    val: Entry
    itemKey: number
    isExpanded: boolean
    isAction: boolean
    toggleExpanded: (arg0: boolean, arg1?: string | number) => void
    handleStartEdit: (arg0: string) => Promise<void>
    handleDeleteEntry: (arg0: string) => Promise<void>
}

const functionNames: Record<string, string> = {
    redact: 'Auto-removal',
    ai_rewrite: 'AI Rewrite',
    auto_cite: 'Auto-citation',
}

export const EntryCard: React.FC<EntryProps> = ({ val, itemKey, isExpanded, isAction, toggleExpanded, handleStartEdit, handleDeleteEntry }) => {
    const [showAltText, setShowAltText] = useState(false)
    const [success, setSuccess] = useState(false)
    const [windowWidth, setWindowWidth] = useState<number>(0)

    // -- FORMATTING

    const toIdTag = (id: string | number) => {
        const str = id.toString().padStart(8, '0')
        return `${str.slice(0, 4)}-${str.slice(4, 8)}`
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-UK', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
        })
    }

    useEffect(() => {
        if (!isExpanded) setShowAltText(false)
    }, [isExpanded])

    useEffect(() => {
        if (val.status === 'success') setSuccess(true)
    }, [val])

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth)
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    useEffect(() => {
        if (isExpanded) {
            if (windowWidth < 768) toggleExpanded(false)
        }
    }, [windowWidth])

    return (
        <li className="font-body md:mx-4 flex flex-col rounded-sm bg-neutral-900 p-4 shadow-md shadow-neutral-950/20">
            {success && (
                <>
                    <div className="flex justify-between text-neutral-400">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-sm md:text-base">
                            <span className="rounded-sm bg-neutral-800 px-2 py-1 w-max">
                                <strong>{toIdTag(val.id)}</strong>
                            </span>
                            <div className='flex flex-col md:flex-row md:gap-4'>
                                <span>
                                    <strong>AI</strong> - &nbsp;
                                    {val.ai_result.score === 'N/A' ? 'N/A' : `${val.ai_result['score'] >= 1 ? val.ai_result['score'] + '%' : '<1%'}`}
                                </span>
                                <span>
                                    <strong>Plagiarism</strong> - &nbsp;
                                    {val.plag_result['score'] === 'N/A' ? 'N/A' : `${val.plag_result['score'] >= 1 ? val.plag_result['score'] + '%' : '<1%'}`}
                                </span>
                            </div>
                            {
                                windowWidth > 1350 && <>
                                    <div className="h-[20px] w-0.5 bg-neutral-700" />
                                    <span>{`${val.manual_upload ? 'Manual' : 'Auto'}`}</span>
                                    {
                                        val.temp_text && <>
                                            <div className="h-[20px] w-0.5 bg-neutral-700" />
                                            <span>{`${functionNames[val.function_pref]}`}</span>
                                        </>
                                    }
                                </>
                            }
                        </div>
                        <div className="flex items-center gap-6">
                            {val.action_needed && (
                                <span className="rounded-sm bg-red-900 px-2 py-1 text-red-300 opacity-80">
                                    {
                                        windowWidth > 870 ? <strong>Action Needed</strong> : <strong className='px-1 rounded-full'>!</strong>
                                    }
                                </span>
                            )}
                            <button
                                className="hidden md:block cursor-pointer text-gray-400 transition-colors hover:text-gray-600"
                                onClick={() => toggleExpanded(isAction, itemKey)}
                            >
                                <KeyboardArrowDown className={`${isExpanded && 'rotate-180'}`} sx={{ fontSize: '28px' }} />
                            </button>
                        </div>
                    </div>
                    {
                        windowWidth > 565 && <div className="mt-4">
                            <div className="flex items-center justify-between gap-8 text-sm md:text-base">
                                <p className={`${isExpanded && 'min-h-[100px] text-sm'}`}>
                                    {!showAltText ? (
                                        isExpanded ? (
                                            val.edited ? (
                                                val.edit_text
                                            ) : (
                                                val.orig_text
                                            )
                                        ) : val.edited ? (
                                            `${val.edit_text.slice(0,80) + "..."}`
                                        ) : (
                                            `${val.orig_text.slice(0,80) + "..."}`
                                        )
                                    ) : (
                                        <>
                                            {val.temp_text}
                                        </>
                                    )}
                                </p>
                                <div className="hidden md:flex gap-2">
                                    <div onClick={() => handleStartEdit(val.unique_id)}>
                                        <Edit sx={{ fontSize: '20px' }} className="cursor-pointer text-neutral-300 transition-all hover:text-neutral-400" />
                                    </div>
                                    <div onClick={() => handleDeleteEntry(val.unique_id)}>
                                        <Delete sx={{ fontSize: '20px' }} className="cursor-pointer text-neutral-300 transition-all hover:text-neutral-400" />
                                    </div>
                                </div>
                            </div>
                            {isExpanded && val.temp_text && (
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
                            )}
                        </div>
                    }
                    <div className="mt-4 mb-2 h-0.5 w-full bg-gradient-to-r from-transparent via-neutral-600 to-transparent" />
                    <div className="flex flex-col sm:flex-row w-full justify-between text-neutral-400">
                        {!val.manual_upload && (
                            <div className="flex gap-4 text-sm lg:text-base">
                                {
                                    windowWidth > 768 && <>
                                        <span>
                                            <strong className={`${windowWidth < 870 && "text-sm"}`}>{val.domain}</strong>
                                        </span>
                                        <div className="h-[20px] w-0.5 bg-neutral-700" />
                                    </>
                                }
                                <span>
                                    {!val.manual_upload && val.page_link && (
                                        <a href={val.page_link} target="_blank" className="text-blue-400/60 italic hover:text-blue-400/80">
                                            {val.page_link.length < 40 ? val.page_link : val.page_link.slice(0, 40) + '...'}
                                        </a>
                                    )}
                                </span>
                            </div>
                        )}
                        <div className="text-sm lg:text-base ml-auto flex gap-2 mt-1 sm:mt-0">
                            {val.edited && windowWidth > 870 && <span>(edited)</span>}
                            {val.edited && val.edited_at ? <span>{formatDate(val.edited_at)}</span> : <span>{formatDate(val.created_at)}</span>}
                        </div>
                    </div>
                    <div className={isExpanded ? 'block' : 'hidden'}>
                        <div className="mt-6 mb-4 flex flex-col gap-4 px-4">
                            <span className="rounded-sm bg-neutral-800 px-2 py-1 w-max">
                                Work ID: <strong>{val.work_id}</strong>
                            </span>
                            <p className="text-lg">
                                <strong>Analysis Details</strong>
                            </p>
                            <div className="mb-2 max-w-[90%]">
                                <span className="">
                                    <strong>Prediction:</strong>
                                </span>
                                <div className="mt-4 flex w-full items-center gap-4">
                                    <div className="h-2 w-full max-w-[85%] rounded-full bg-neutral-800">
                                        <div
                                            id="ai-confidence"
                                            style={{ width: `${val.ai_result.score === 'N/A' || val.ai_result.score < 1 ? '1' : val.ai_result.score}%` }}
                                            className={`h-2 rounded-full bg-blue-400/50`}
                                        />
                                    </div>
                                    <span>{val.ai_result.score === 'N/A' || val.ai_result.score < 1 ? '<1' : val.ai_result.score}%</span>
                                </div>
                                <div className="mt-2 flex w-full items-center gap-4">
                                    <div className="h-2 w-full max-w-[85%] rounded-full bg-neutral-800">
                                        <div
                                            id="plag-confidence"
                                            style={{ width: `${val.plag_result.score === 'N/A' || val.plag_result.score < 1 ? '1' : val.plag_result.score}%` }}
                                            className={`w-[${val.plag_result.score === 'N/A' || val.plag_result.score < 1 ? '0' : val.plag_result.score}%] h-2 rounded-full bg-green-600/50`}
                                        />
                                    </div>
                                    <span>{val.plag_result.score === 'N/A' ? "N/A" : val.plag_result.score < 1 ? '<1' : val.plag_result.score}%</span>
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
                        </div>
                    </div>
                </>
            )}
        </li>
    )
}

export default EntryCard
