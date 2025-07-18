import { Delete, Edit, KeyboardArrowDown } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'

type EntryProps = {
    val: any;
    itemKey: number;
    isExpanded: boolean;
    isAction: boolean;
    toggleExpanded: (arg0: string | number, arg1: boolean) => void;
    toIdTag: (arg0: string | number) => React.ReactNode;
    handleEditEntry: (arg0: number) => Promise<void>;
    handleDeleteEntry: (arg0: number) => Promise<void>;
    formatDate: (arg0: string) => React.ReactNode;
}

const functionNames: any = {
    "redact": "Auto-removal",
    "ai_rewrite": "AI Rewrite",
    "auto_cite": "Auto-citation"
}

export const EntryCard: React.FC<EntryProps> = ({ val, itemKey, isExpanded, isAction, toggleExpanded, toIdTag, handleEditEntry, handleDeleteEntry, formatDate }) => {
    const [showAltText, setShowAltText] = useState(false);

    useEffect(() => {
        if (!isExpanded) setShowAltText(false)
    }, [isExpanded])

    return (
        <li className="bg-neutral-900 rounded-sm p-4 flex flex-col font-body mx-4 shadow-md shadow-neutral-950/20">
            <div className="flex justify-between text-neutral-400">
                <div className="flex items-center gap-4">
                    <span className="bg-neutral-800 rounded-sm px-2 py-1"><strong>{toIdTag(val.id)}</strong></span>
                    <span><strong>AI</strong> - {val.status === "success" && (val.ai_result["score"] < 1 ? "<1" : val.ai_result["score"])}%</span>
                    <span><strong>Plagiarism</strong> - {val.status === "success" && (val.plag_result["score"] < 1 ? "<1" : val.plag_result["score"])}%</span>
                    <div className="h-[20px] w-0.5 bg-neutral-700" />
                    <span>
                        {`${val.manual_upload ? "Manual" : "Auto"}`}
                    </span>
                    <div className="h-[20px] w-0.5 bg-neutral-700" />
                    <span>
                        {`${functionNames[val.function_pref]}`}
                    </span>
                </div>
                <div className="flex items-center gap-6">
                    {
                        val.action_needed && <span className="text-red-300 bg-red-900 opacity-80 rounded-sm px-2 py-1"><strong>Action Needed</strong></span>
                    }
                    <button className="cursor-pointer text-gray-400 hover:text-gray-600 transition-colors" onClick={() => toggleExpanded(itemKey, isAction)}>
                        <KeyboardArrowDown className={`${isExpanded && "rotate-180"}`} sx={{ fontSize: "28px" }} />
                    </button>
                </div>
            </div>
            <div className="mt-4">
                <div className='flex gap-8 items-center justify-between'>
                    <p className={`${isExpanded && "text-sm min-h-[100px]"}`}>
                        {!showAltText
                            ? (isExpanded ? val.orig_text : val.orig_text_preview)
                            : <>
                                {val.temp_text}
                                {
                                    val.function_pref === "auto_cite" && <>
                                        <br/>
                                        <br/>
                                        {`- ${val.plag_result.result.citations[0].title}, ${val.plag_result.result.citations[0].url}`}
                                    </>
                                }
                            </>
                        }
                    </p>
                    <div className="flex gap-2">
                        <div onClick={() => handleEditEntry(val.id)}>
                            <Edit sx={{ fontSize: "20px" }} className="text-neutral-300 cursor-pointer transition-all hover:text-neutral-400" />
                        </div>
                        <div onClick={() => handleDeleteEntry(val.id)}>
                            <Delete sx={{ fontSize: "20px" }} className="text-neutral-300 cursor-pointer transition-all hover:text-neutral-400" />
                        </div>
                    </div>
                </div>
                {
                    isExpanded && <div className='flex items-center justify-center gap-4 mr-16 mt-6'>
                        <button className={`${!showAltText ? "text-sm font-bold bg-neutral-800" : "text-xs"} min-h-[30px] px-3 py-1 rounded-sm text-neutral-400 cursor-pointer transition-all`}
                            onClick={() => setShowAltText(false)}>ORIGINAL</button>
                        <div className="h-[20px] w-0.5 bg-neutral-700" />
                        <button className={`${showAltText ? "text-sm font-bold bg-neutral-800" : "text-xs"} min-h-[30px] px-3 py-1 rounded-sm text-neutral-400 cursor-pointer transition-all`}
                            onClick={() => setShowAltText(true)}>MODIFIED</button>
                    </div>
                }
            </div>
            <div className="mb-2 mt-4 w-full h-0.5 bg-gradient-to-r from-transparent via-neutral-600 to-transparent" />
            <div className="flex justify-between w-full text-neutral-400">
                {
                    !val.manual_upload && <div className='flex gap-4'>
                        <span><strong>{val.domain}</strong></span>
                        <div className="h-[20px] w-0.5 bg-neutral-700" />
                        <span>{!val.manual_upload && val.page_link && <a href="/" className="text-blue-400/60 italic">{val.page_link.slice(0, 40) + "..."}</a>}</span>
                    </div>
                }
                <div className='flex gap-2 ml-auto'>
                    { val.edited && <span>(edited)</span> }
                    { val.edited && val.edited_at ? <span>{formatDate(val.edited_at)}</span> : <span>{formatDate(val.created_at)}</span> }
                </div>
            </div>
            <div className={isExpanded ? "block" : "hidden"}>
                <div className="flex flex-col gap-4 mt-2 px-4">
                    <span className="text-lg"><strong>Analysis Details</strong></span>
                    <div className="mb-2 max-w-[90%]">
                        <span className=""><strong>Prediction:</strong></span>
                        <div className="mt-4 w-full flex items-center gap-4">
                            <div className="w-full h-2 rounded-full bg-neutral-800 max-w-[85%]">
                                <div id="ai-confidence" style={{ width: `${val.status === "success" && (val.ai_result["score"] < 1 ? "1" : val.ai_result["score"])}%` }} className={`h-2 rounded-full bg-blue-400/50`} />
                            </div>
                            <span>{val.status === "success" && (val.ai_result["score"] < 1 ? "<1" : val.ai_result["score"])}%</span>
                        </div>
                        <div className="mt-2 w-full flex items-center gap-4">
                            <div className="w-full h-2 rounded-full bg-neutral-800 max-w-[85%]">
                                <div id="plag-confidence" style={{ width: `${val.status === "success" && (val.plag_result["score"] < 1 ? "1" : val.plag_result["score"])}%` }} className={`w-[${val.status === "success" && (val.plag_result["score"] < 1 ? "0" : val.plag_result["score"])}%] h-2 rounded-full bg-green-600/50`} />
                            </div>
                            <span>{val.status === "success" && (val.plag_result["score"] < 1 ? "<1" : val.plag_result["score"])}%</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <span><strong>Key:</strong></span>
                        <div className="flex items-center gap-2">
                            <span className="text-blue-100 bg-blue-400/50 opacity-80 rounded-sm px-2 w-max"><strong>AI</strong></span>
                            <span className="text-green-100 bg-green-600/50 opacity-80 rounded-sm px-2 w-max"><strong>Plagiarism</strong></span>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    )
}

export default EntryCard