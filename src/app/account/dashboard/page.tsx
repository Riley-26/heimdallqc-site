"use client"

import { Button, IconContainer } from "@/components/ui/index"
import { Delete, Edit } from "@mui/icons-material"
import { useSession } from "next-auth/react"
import React, { Ref, useEffect, useRef, useState } from "react"

export default function Dashboard(){
    const [uploadText, setUploadText] = useState<any>()
    const { data: session, status } = useSession()
    const [entryText, setEntryText] = useState<string>()
    const textareaRef = useRef<HTMLTextAreaElement>(null)

    type Entry = { id: string | number; [key: string]: any };
    const [loadedEntries, setLoadedEntries] = useState<Entry[]>([])
    const [actionRequired, setActionRequired] = useState<Entry[]>([])

    const handleUploadEntry = async () => {
        if (confirm("Are you sure you want to upload this?")){
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
            if (upload.status === 200){
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

        if (entriesResponse.length > 0){
            setLoadedEntries(entriesResponse)

            const required = entriesResponse.filter((entry: any) => entry.action_needed === true)
            setActionRequired(required)
        }
    }

    const handleEditEntry = async (entry_id:number) => {
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
                                                        {`${val.manual_upload === true ? "Manual": "Auto"}`} - { val.page_link && <a href="/" className="">{val.page_link.slice(0,40)}</a> }
                                                    </span>
                                                </div>
                                                <span>{val.edit_text_preview ? <strong>{`${val.edit_text_preview}`}</strong> : `${val.orig_text_preview}`}</span>
                                            </div>
                                            <div className="flex gap-2">
                                                <div onClick={() => handleEditEntry(val.id as number)}>
                                                    <Edit sx={{ fontSize: "20px" }} className="text-neutral-300 cursor-pointer transition-all hover:text-neutral-400"/>
                                                </div>
                                                <div onClick={() => handleDeleteEntry()}>
                                                    <Delete sx={{ fontSize: "20px" }} className="text-neutral-300 cursor-pointer transition-all hover:text-neutral-400"/>
                                                </div>
                                            </div>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6">
                        <div className="bento-card col-span-2">
                            <h2 className="content-subtitle text-2xl my-2">
                                View Entries
                                <div className="h-[2px] mt-2 w-full opacity-30 bg-gradient-to-r from-[#d8af41] to-transparent rounded-full" />
                            </h2>
                            <div className="h-[500px] mt-4 w-full p-4 border rounded-sm border-neutral-800 overflow-y-auto">
                                <ul className="content-body text-base flex flex-col gap-4">
                                    {
                                        loadedEntries && loadedEntries.map((val, key) => {
                                            return <li key={key} className="w-full flex justify-between items-center bg-neutral-900 px-4 py-2 rounded-sm">
                                                <div>
                                                    <div className="flex gap-8 items-center">
                                                        <span className="font-bold w-[100px] text-end">{val.id}</span>
                                                        <div className="h-[20px] w-0.5 bg-neutral-700" />
                                                        <span><strong>AI</strong> - {val.processing_result["result"] * 100}%</span>
                                                        <span><strong>Plagiarism</strong> - {val.processing_result["result"] * 100}%</span>
                                                        <div className="h-[20px] w-0.5 bg-neutral-700" />
                                                        <span>
                                                            {`${val.manual_upload === true ? "Manual": "Auto"}`} - { val.page_link && <a href="/" className="">{val.page_link.slice(0,40)}</a> }
                                                        </span>
                                                    </div>
                                                    <span>{val.edit_text_preview ? <strong>{`${val.edit_text_preview}`}</strong> : `${val.orig_text_preview}`}</span>
                                                </div>
                                                <div className="flex gap-2">
                                                    <div onClick={() => handleEditEntry(val.id as number)}>
                                                        <Edit sx={{ fontSize: "20px" }} className="text-neutral-300 cursor-pointer transition-all hover:text-neutral-400"/>
                                                    </div>
                                                    <div onClick={() => handleDeleteEntry()}>
                                                        <Delete sx={{ fontSize: "20px" }} className="text-neutral-300 cursor-pointer transition-all hover:text-neutral-400"/>
                                                    </div>
                                                </div>
                                            </li>
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div className="bento-card">
                            <h2 className="content-subtitle text-2xl my-2">
                                Manual upload
                                <div className="h-[2px] mt-2 w-full opacity-30 bg-gradient-to-r from-[#d8af41] to-transparent rounded-full" />
                            </h2>
                            <textarea value={uploadText} onChange={(e) => setUploadText(e.target.value)} className="min-h-[400px] mt-2 w-full p-4 content-body text-sm border rounded-sm border-neutral-800 resize-none" placeholder="Paste text here"/>
                            <Button value={"UPLOAD"} className="border-neutral-500 hover:border-neutral-300 px-4 py-2 mt-4 ml-8 text-lg" onClick={() => handleUploadEntry()}/>
                        </div>
                    </div>
                    <div id="edit" className="bento-card mb-24">
                        <h2 className="content-subtitle text-2xl my-2">
                            View and Modify Entry Content
                            <div className="h-[2px] mt-2 w-full opacity-30 bg-gradient-to-r from-[#d8af41] to-transparent rounded-full" />
                        </h2>
                        <textarea className="min-h-[500px] mt-2 w-full p-4 content-body border rounded-sm border-neutral-800" placeholder="Paste text here" ref={textareaRef}/>
                        <Button value={"APPLY"} full className="px-4 py-2 mt-4 ml-8 text-lg" />
                        <Button value={"DISCARD"} className="border-neutral-500 hover:border-neutral-300 px-4 py-2 mt-4 ml-8 text-lg" />
                    </div>
                </div>
            </section>
        </>
    )
}