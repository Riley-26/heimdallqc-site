"use client"

import { Button, IconContainer } from "@/components/ui/index"
import { ArrowBackIos, ArrowDownward, ArrowUpward, CheckBox, Delete, Edit, KeyboardArrowDown } from "@mui/icons-material"
import FormControl from "@mui/material/FormControl"
import FormControlLabel from "@mui/material/FormControlLabel"
import FormLabel from "@mui/material/FormLabel"
import RadioGroup from "@mui/material/RadioGroup"
import Radio from '@mui/material/Radio';
import { useSession } from "next-auth/react"
import React, { Ref, useEffect, useRef, useState } from "react"
import EntryCard from "@/components/ui/EntryCard"
import { ThemeProvider } from "@mui/material/styles"
import { mainTheme } from "@/themes/themes"
import Checkbox from "@mui/material/Checkbox"
import FormGroup from "@mui/material/FormGroup"

export default function Dashboard() {
    const [uploadText, setUploadText] = useState<any>()
    const { data: session, status } = useSession()
    const [entryText, setEntryText] = useState<string>()
    const editAreaRef = useRef<HTMLTextAreaElement>(null)
    const [expanded, setExpanded] = useState(false)
    const [expandedEntries, setExpandedEntries] = useState(new Set())
    const [expandedActionEntries, setExpandedActionEntries] = useState(new Set())
    const [editEntryText, setEditEntryText] = useState<string>("")
    const [editEntry, setEditEntry] = useState<number>()

    type Entry = { id: string | number;[key: string]: any };
    const [loadedEntries, setLoadedEntries] = useState<Entry[]>([])
    const [orderedEntries, setOrderedEntries] = useState<Entry[]>([])
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
            setOrderedEntries(entriesResponse)

            const required = entriesResponse.filter((entry: any) => entry.action_needed === true)
            setActionRequired(required)
        }
    }

    const handleEditEntry = async (entry_id: number) => {
        scrollToSection("edit")
        const fullEntry = await fetch(`http://127.0.0.1:8000/api/owners/${session?.user.id}/submissions/${entry_id}`)
        const fullEntryResponse = await fullEntry.json()
        const textarea = editAreaRef.current

        const newText = fullEntryResponse.edit_text ? fullEntryResponse.edit_text : fullEntryResponse.orig_text

        textarea!.value = newText
        setEditEntryText(newText)
        setEditEntry(entry_id)
    }

    const handleDeleteEntry = async (entry_id: number) => {
        if (confirm("Are you sure that you want to delete this submission's record?")) {
            const deletion = await fetch(
                `http://127.0.0.1:8000/api/owners/${session?.user.id}/submissions/${entry_id}/delete-submission`,
                {
                    method: "DELETE",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({
                        owner_id: session?.user.id,
                        submission_id: entry_id
                    })
                }
            )
            const deletionResponse = await deletion.json()

            if (deletion.status === 200) {
                alert("Submission record successfully deleted")
                setLoadedEntries(prevEntries => prevEntries.filter(entry => entry.id !== entry_id))
                setOrderedEntries(prevEntries => prevEntries.filter(entry => entry.id !== entry_id))
                setActionRequired(prevEntries => prevEntries.filter(entry => entry.id !== entry_id))

                const textarea = editAreaRef.current
                textarea!.value = ""
            } else {
                alert("Something went wrong. Please try again")
            }
        }
    }

    const handleFilterEntries = (e: any) => {
        e.preventDefault();
        const radiosGroup1 = e.target.elements["radio-buttons-group-1"];
        let sortValue = null;
        const entries = loadedEntries;

        if (radiosGroup1 && radiosGroup1.length) {
            for (let i = 0; i < radiosGroup1.length; i++) {
                if (radiosGroup1[i].checked) {
                    sortValue = radiosGroup1[i].value;
                    break;
                }
            }
        } else if (radiosGroup1 && radiosGroup1.checked) {
            sortValue = radiosGroup1.value;
        }

        const filterValues: string[] = [];
        const checkboxNames = ["ai", "manual", "auto"];
        checkboxNames.forEach(name => {
            const el = e.target.elements[name];
            if (el) {
                if (el.length) {
                    for (let i = 0; i < el.length; i++) {
                        if (el[i].checked) filterValues.push(el[i].value);
                    }
                } else if (el.checked) {
                    filterValues.push(el.value);
                }
            }
        });

        console.log(filterValues)

        let filteredEntries = entries;
        if (filterValues.length > 0) {
            filteredEntries = entries.filter(entry => {
                return filterValues.some(filterValue => {
                    switch (filterValue) {
                        case "ai":
                            return entry.ai_result["score"] >= 40;
                        case "manual":
                            return entry.manual_upload;
                        case "auto":
                            return !entry.manual_upload;
                        default:
                            return true;
                    }
                });
            });
        }

        // Sort entries by sortValue
        if (sortValue === "recent") {
            setOrderedEntries(filteredEntries);
        } else if (sortValue === "oldest") {
            setOrderedEntries([...filteredEntries].reverse());
        } else if (sortValue === "ai-score") {
            setOrderedEntries(
                [...filteredEntries].sort((a, b) => (b.ai_result["score"] ?? 0) - (a.ai_result["score"] ?? 0))
            );
        } else if (sortValue === "plag-score") {
            setOrderedEntries(
                [...filteredEntries].sort((a, b) => (b.plag_result["score"] ?? 0) - (a.plag_result["score"] ?? 0))
            );
        }
    }

    const handleApplyEdit = async (entry_id: number | undefined) => {
        const textarea = editAreaRef.current
        if (confirm("Are you sure you want edit this record?")) {
            const apply = await fetch(
                `http://127.0.0.1:8000/api/owners/${session?.user.id}/submissions/${entry_id}/edit-submission`,
                {
                    method: "POST",
                    headers: {
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({
                        id: entry_id,
                        owner_id: session?.user.id,
                        new_text: textarea!.value
                    })
                }
            )
            const applyResponse = await apply.json()

            window.location.reload()
        }
    }

    const handleDiscardEdits = () => {
        console.log(editEntryText)
        if (confirm("Are you sure you want to discard your edits?")) {
            const textarea = editAreaRef.current

            textarea!.value = editEntryText
        }
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

    const toggleExpanded = (id: string | number, isAction: boolean) => {
        if (!isAction) {
            const newExpanded = new Set(expandedEntries);
            if (newExpanded.has(id)) {
                newExpanded.delete(id);
            } else {
                newExpanded.add(id);
            }
            console.log(newExpanded)
            setExpandedEntries(newExpanded);
        } else {
            const newActionExpanded = new Set(expandedActionEntries);
            if (newActionExpanded.has(id)) {
                newActionExpanded.delete(id);
            } else {
                newActionExpanded.add(id);
            }
            console.log(newActionExpanded)
            setExpandedActionEntries(newActionExpanded);
        }
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
                        <div className={`${actionRequired.length === 0 ? "flex items-center justify-center h-[200px]" : "h-[400px]"} mt-4 w-full p-4 border rounded-sm border-neutral-800 overflow-y-auto scrollbar-custom`}>
                            {
                                actionRequired.length > 0 ? <ul className="content-body text-base flex flex-col gap-12">
                                    {
                                        actionRequired && actionRequired.map((val, key) => {
                                            const isExpanded = expandedActionEntries.has(key)

                                            return <EntryCard
                                                key={key}
                                                val={val}
                                                itemKey={key}
                                                isExpanded={isExpanded}
                                                isAction={true}
                                                toggleExpanded={toggleExpanded}
                                                toIdTag={toIdTag}
                                                handleEditEntry={handleEditEntry}
                                                handleDeleteEntry={handleDeleteEntry}
                                                formatDate={formatDate}
                                            />
                                        })
                                    }
                                </ul> : <span className="content-subtitle text-xl">You are all up to date</span>
                            }
                        </div>
                    </div>
                    <div className="grid gap-6">
                        <div className="bento-card col-span-2">
                            <h2 className="content-subtitle text-2xl my-2">
                                View Entries
                                <div className="h-[2px] mt-2 w-full opacity-30 bg-gradient-to-r from-[#d8af41] to-transparent rounded-full" />
                            </h2>
                            <div className="flex gap-4">
                                <div className="max-h-[550px] mt-4 min-w-[80%] p-4 border rounded-sm border-neutral-800 overflow-y-auto scrollbar-custom">
                                    <ul className="content-body text-base flex flex-col gap-12">
                                        {
                                            orderedEntries && orderedEntries.map((val, key) => {
                                                const isExpanded = expandedEntries.has(key)

                                                return <EntryCard
                                                    key={key + actionRequired.length}
                                                    val={val}
                                                    itemKey={key}
                                                    isExpanded={isExpanded}
                                                    isAction={false}
                                                    toggleExpanded={toggleExpanded}
                                                    toIdTag={toIdTag}
                                                    handleEditEntry={handleEditEntry}
                                                    handleDeleteEntry={handleDeleteEntry}
                                                    formatDate={formatDate}
                                                />
                                            })
                                        }
                                    </ul>
                                </div>
                                <div className="w-full flex flex-col items-center">
                                    <ThemeProvider theme={mainTheme}>
                                        <div className="h-[550px] mt-4 w-full p-4 border rounded-sm border-neutral-800">
                                            <h3 className="content-subtitle text-xl text-neutral-300">Filter</h3>
                                            <div className="h-[2px] mt-2 w-full opacity-30 bg-gradient-to-r from-[#d8af41] to-transparent rounded-full" />
                                            <div className="content-body text-base text-neutral-400 py-4">
                                                <div className="w-max">
                                                    <form onSubmit={(e) => handleFilterEntries(e)} className="">
                                                        <div className="">
                                                            <span>Sort By</span>
                                                            <RadioGroup defaultValue="recent" name="radio-buttons-group-1">
                                                                <FormControlLabel value="recent" control={<Radio />} label="Recent" />
                                                                <FormControlLabel value="oldest" control={<Radio />} label="Oldest" />
                                                                <FormControlLabel value="ai-score" control={<Radio />} label="AI score" />
                                                                <FormControlLabel value="plag-score" control={<Radio />} label="Plagiarism score" />
                                                            </RadioGroup>
                                                        </div>
                                                        <div className="mt-4">
                                                            <span>Show only</span>
                                                            <FormGroup role="checkbox-group">
                                                                <FormControlLabel name="ai" value="ai" sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }, marginRight: "0" }} control={<Checkbox sx={{ color: "text.primary" }} />} label="AI" />
                                                                <FormControlLabel name="manual" value="manual" sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }, marginRight: "0" }} control={<Checkbox sx={{ color: "text.primary" }} />} label="Manual" />
                                                                <FormControlLabel name="auto" value="auto" sx={{ '& .MuiSvgIcon-root': { fontSize: 28 }, marginRight: "0" }} control={<Checkbox sx={{ color: "text.primary" }} />} label="Auto" />
                                                            </FormGroup>
                                                        </div>
                                                        <Button value={"APPLY"} full className="px-3 py-1 mt-4 text-base" />
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </ThemeProvider>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-cols-3 gap-6 mb-24">
                        <div id="edit" className="bento-card col-span-2">
                            <h2 className="content-subtitle text-2xl my-2">
                                View and Modify Entry Content
                                <div className="h-[2px] mt-2 w-full opacity-30 bg-gradient-to-r from-[#d8af41] to-transparent rounded-full" />
                            </h2>
                            <textarea className="text-base min-h-[500px] mt-2 w-full p-4 content-body border rounded-sm border-neutral-800" placeholder="Paste text here" ref={editAreaRef} />
                            <Button value={"APPLY"} full className="px-4 py-2 mt-4 ml-8 text-lg" onClick={() => handleApplyEdit(editEntry)} />
                            <Button value={"DISCARD"} className="border-neutral-500 hover:border-neutral-300 px-4 py-2 mt-4 ml-8 text-lg" onClick={() => handleDiscardEdits()} />
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