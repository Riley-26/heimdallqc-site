"use client"

import { Button, IconContainer } from "@/components/ui/index"
import { ArrowBackIos, ArrowDownward, ArrowUpward, Delete, Edit, KeyboardArrowDown } from "@mui/icons-material"
import { useSession } from "next-auth/react"
import React, { Ref, useEffect, useRef, useState } from "react"

export default function Dashboard() {
    const [uploadText, setUploadText] = useState<any>()
    const { data: session, status } = useSession()
    const [entryText, setEntryText] = useState<string>()
    const textareaRef = useRef<HTMLTextAreaElement>(null)
    const [expanded, setExpanded] = useState(false)
    const [expandedEntries, setExpandedEntries] = useState(new Set())

    type Entry = { id: string | number;[key: string]: any };
    const [loadedEntries, setLoadedEntries] = useState<Entry[]>([])
    const [actionRequired, setActionRequired] = useState<Entry[]>([])

    const handleUploadEntry = async () => {
        if (confirm("Are you sure you want to upload this?")) {
            const upload = await fetch(
                "http://127.0.0.1:8000/api/upload-submission",
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({
                        owner_id: session?.user.id,
                        orig_text: uploadText,
                        question_result: false
                    })
                }
            )

            const uploadResponse = await upload.json()
            if (upload.status === 200) {
                alert("Successfully uploaded")
                window.location.reload()
            } else {
                alert("Something went wrong. Please try again")
            }
        }
    }

    const handleLoadEntries = async () => {
        const entries = await fetch(`http://127.0.0.1:8000/api/owners/${session?.user.id}/submissions`)
        const entriesResponse = await entries.json()

        if (entriesResponse.length > 0) {
            setLoadedEntries(entriesResponse)

            const required = entriesResponse.filter((entry: any) => entry.action_needed === true)
            setActionRequired(required)
        }
    }

    const handleEditEntry = async (entry_id: number) => {
        scrollToSection("edit")
        const fullEntry = await fetch(`http://127.0.0.1:8000/api/owners/${session?.user.id}/submissions/${entry_id}`)
        const fullEntryResponse = await fullEntry.json()
        const textarea = textareaRef.current
        console.log(fullEntryResponse)

        textarea!.value = fullEntryResponse.edit_text ? fullEntryResponse.edit_text : fullEntryResponse.orig_text
    }

    const handleDeleteEntry = async () => {
        console.log("delete")
    }

    const scrollToSection = (id: string) => {
        const section = document.getElementById(id);

        if (section) {
            console.log(section.offsetTop)
            window.scrollTo({
                top: section.offsetTop + 1, // +1 to ensure we trigger the section
                behavior: 'smooth',
            });
        }
    };

    const toggleExpanded = (id: string | number) => {
        const newExpanded = new Set(expandedEntries);
        if (newExpanded.has(id)) {
            newExpanded.delete(id);
        } else {
            newExpanded.add(id);
        }
        console.log(newExpanded)
        setExpandedEntries(newExpanded);
    };


    const toIdTag = (id: string | number) => {
        const str = id.toString().padStart(8, "0");
        return `${str.slice(0, 4)}-${str.slice(4, 8)}`;
    }

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-UK', {
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
    };


    useEffect(() => {
        if (status === "authenticated") handleLoadEntries()
    }, [status])

    return (
        <>
            <section id="settings" className="min-h-screen pt-[100px] flex flex-col px-8 xl:px-16">
                <h3 className="content-miniheading text-[16px]">ACCOUNT</h3>
                <h2 className="content-title text-5xl">Dashboard</h2>
                <div className="grid grid-cols-1 gap-6 my-8">
                    <div className="bento-card">
                        <h2 className="content-subtitle text-2xl my-2">
                            Action Required
                            <div className="h-[2px] mt-2 w-full opacity-30 bg-gradient-to-r from-[#d8af41] to-transparent rounded-full" />
                        </h2>
                        <div className="h-[200px] mt-4 w-full p-4 border rounded-sm border-neutral-800 overflow-y-auto">
                            <ul className="content-body text-base flex flex-col gap-4">
                                {
                                    actionRequired && actionRequired.map((val, key) => {
                                        return <li key={key} className="w-full flex justify-between items-center bg-neutral-900 px-4 py-2 rounded-sm">
                                            <div>
                                                <div className="flex gap-8 items-center">
                                                    <span className="font-bold w-[100px] text-end">{val.id}</span>
                                                    <div className="h-[20px] w-0.5 bg-neutral-700" />
                                                    <span><strong>AI</strong> - {val.processing_result["result"] * 100}%</span>
                                                    <span><strong>Plagiarism</strong> - {val.processing_result["result"] * 100}%</span>
                                                    <div className="h-[20px] w-0.5 bg-neutral-700" />
                                                    <span>
                                                        {`${val.manual_upload === true ? "Manual" : "Auto"}`} - {val.page_link && <a href="/" className="">{val.page_link.slice(0, 40)}</a>}
                                                    </span>
                                                </div>
                                                <span>{val.edit_text_preview ? <strong>{`${val.edit_text_preview}`}</strong> : `${val.orig_text_preview}`}</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <div onClick={() => handleEditEntry(val.id as number)}>
                                                    <Edit sx={{ fontSize: "20px" }} className="text-neutral-300 cursor-pointer transition-all hover:text-neutral-400" />
                                                </div>
                                                <div onClick={() => handleDeleteEntry()}>
                                                    <Delete sx={{ fontSize: "20px" }} className="text-neutral-300 cursor-pointer transition-all hover:text-neutral-400" />
                                                </div>
                                            </div>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="grid gap-6">
                        <div className="bento-card col-span-2">
                            <h2 className="content-subtitle text-2xl my-2">
                                View Entries
                                <div className="h-[2px] mt-2 w-full opacity-30 bg-gradient-to-r from-[#d8af41] to-transparent rounded-full" />
                            </h2>
                            <div className="h-[500px] mt-4 w-full p-4 border rounded-sm border-neutral-800 overflow-y-auto">
                                <ul className="content-body text-base flex flex-col gap-12">
                                    {
                                        loadedEntries && loadedEntries.map((val, key) => {
                                            const isExpanded = expandedEntries.has(key)

                                            return <li key={key} className="bg-neutral-900 rounded-sm p-4 flex flex-col font-body">
                                                <div className="flex justify-between text-neutral-400">
                                                    <div className="flex items-center gap-4">
                                                        <span className="bg-neutral-800 rounded-sm px-2 py-1"><strong>{toIdTag(val.id)}</strong></span>
                                                        <span><strong>AI</strong> - {val.processing_result["result"] * 100}%</span>
                                                        <span><strong>Plagiarism</strong> - {val.processing_result["result"] * 100}%</span>
                                                        <div className="h-[20px] w-0.5 bg-neutral-700" />
                                                        <span>
                                                            {`${val.manual_upload ? "Manual" : "Auto - "}`} {!val.manual_upload && val.page_link && <a href="/" className="text-blue-400/60 italic">{val.page_link.slice(0, 40) + "..."}</a>}
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-6">
                                                        <span className="text-red-300 bg-red-900 opacity-80 rounded-sm px-2 py-1"><strong>Action Needed</strong></span>
                                                        <button className="cursor-pointer text-gray-400 hover:text-gray-600 transition-colors" onClick={() => toggleExpanded(key)}>
                                                            <KeyboardArrowDown className={`${expanded && "rotate-180"}`} sx={{ fontSize: "28px" }} />
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="my-4 flex gap-8 items-center justify-between">
                                                    <p className={`${isExpanded && "text-sm"}`}>
                                                        {
                                                            isExpanded ? val.edit_text || val.orig_text : val.edit_text_preview || val.orig_text_preview
                                                        }
                                                    </p>
                                                    <div className="flex gap-2">
                                                        <div onClick={() => handleEditEntry(val.id as number)}>
                                                            <Edit sx={{ fontSize: "20px" }} className="text-neutral-300 cursor-pointer transition-all hover:text-neutral-400" />
                                                        </div>
                                                        <div onClick={() => handleDeleteEntry()}>
                                                            <Delete sx={{ fontSize: "20px" }} className="text-neutral-300 cursor-pointer transition-all hover:text-neutral-400" />
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="flex justify-between w-full text-neutral-400">
                                                    <span><strong>{val.domain}</strong></span>
                                                    <span>{formatDate(val.created_at)}</span>
                                                </div>
                                                <div className={isExpanded ? "block": "hidden"}>
                                                    <div className="my-4 w-full h-0.5 bg-gradient-to-r from-transparent via-neutral-600 to-transparent" />
                                                    <div className="flex flex-col gap-4">
                                                        <span className="text-lg"><strong>Analysis Details</strong></span>
                                                        <div className="mb-2 max-w-[90%]">
                                                            <span className=""><strong>Confidence:</strong></span>
                                                            <div className="mt-4 w-full flex items-center gap-4">
                                                                <div className="w-full h-2 rounded-full bg-neutral-800">
                                                                    <div className={`w-[${val.processing_result["result"] * 100}%] h-2 rounded-full bg-blue-400/50`} />
                                                                </div>
                                                                <span>{val.processing_result["result"] * 100}%</span>
                                                            </div>
                                                            <div className="mt-2 w-full flex items-center gap-4">
                                                                <div className="w-full h-2 rounded-full bg-neutral-800">
                                                                    <div className={`w-[${val.processing_result["result"] * 100}%] h-2 rounded-full bg-green-600/50`} />
                                                                </div>
                                                                <span>{val.processing_result["result"] * 100}%</span>
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
                                        })
                                    }

                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6 mb-24">
                        <div id="edit" className="bento-card col-span-2">
                            <h2 className="content-subtitle text-2xl my-2">
                                View and Modify Entry Content
                                <div className="h-[2px] mt-2 w-full opacity-30 bg-gradient-to-r from-[#d8af41] to-transparent rounded-full" />
                            </h2>
                            <textarea className="text-base min-h-[500px] mt-2 w-full p-4 content-body border rounded-sm border-neutral-800" placeholder="Paste text here" ref={textareaRef} />
                            <Button value={"APPLY"} full className="px-4 py-2 mt-4 ml-8 text-lg" />
                            <Button value={"DISCARD"} className="border-neutral-500 hover:border-neutral-300 px-4 py-2 mt-4 ml-8 text-lg" />
                        </div>
                        <div className="bento-card col-span-1">
                            <h2 className="content-subtitle text-2xl my-2">
                                Manual upload
                                <div className="h-[2px] mt-2 w-full opacity-30 bg-gradient-to-r from-[#d8af41] to-transparent rounded-full" />
                            </h2>
                            <textarea value={uploadText} onChange={(e) => setUploadText(e.target.value)} className="min-h-[400px] mt-2 w-full p-4 content-body text-sm border rounded-sm border-neutral-800 resize-none" placeholder="Paste text here" />
                            <Button value={"UPLOAD"} className="border-neutral-500 hover:border-neutral-300 px-4 py-2 mt-4 ml-8 text-lg" onClick={() => handleUploadEntry()} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}