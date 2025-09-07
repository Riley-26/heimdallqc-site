'use client'

import type { WarningType, ConfirmType, OwnerKey, Entry, EntryParams } from '@/types/mainTypes'
import { ConfirmAlert } from '@/components/alerts/ConfirmAlert'
import { AlertToast } from '@/components/alerts/index'
import EntryCard from '@/components/ui/EntryCard'
import { Button, IconContainer, Loading } from '@/components/ui/index'
import { apiService } from '@/services/apiService'
import { lib } from '@/services/lib'
import { mainTheme } from '@/themes/themes'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormGroup from '@mui/material/FormGroup'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import { ThemeProvider } from '@mui/material/styles'
import { useSession } from 'next-auth/react'
import React, { useEffect, useRef, useState } from 'react'
import { ArrowBack, ArrowForward } from '@mui/icons-material'

const pageLimit = 10

export default function Dashboard() {
    const { data: session, status } = useSession()
    const editAreaRef = useRef<HTMLTextAreaElement>(null)

    const [newAlert, setNewAlert] = useState<string | null>(null)
    const [newConfirm, setNewConfirm] = useState<ConfirmType | null>(null)
    const [alertType, setAlertType] = useState<WarningType>('alert')

    // -- ITEM STATES

    const [ownerKeys, setOwnerKeys] = useState<OwnerKey[]>([])
    const [selectedKey, setSelectedKey] = useState<string>()
    const [loadedEntries, setLoadedEntries] = useState<Entry[]>([]) // Result from fetch, does not change
    const [orderedEntries, setOrderedEntries] = useState<Entry[]>([]) // Changes depending on filter, use this only
    const [actionEntries, setActionEntries] = useState<Entry[]>([])
    const [expandedEntries, setExpandedEntries] = useState(new Set())
    const [expandedActionEntries, setExpandedActionEntries] = useState(new Set())
    const [uploadText, setUploadText] = useState<string>("")
    const [entryToEdit, setEntryToEdit] = useState<string>("")
    const [editEntryText, setEditEntryText] = useState<string>("")
    const [pageNum, setPageNum] = useState(1)
    const [actionPageNum, setActionPageNum] = useState(1)
    const [entryCount, setEntryCount] = useState<number>()
    const [successEntryCount, setSuccessEntryCount] = useState<number>()
    const [actionEntryCount, setActionEntryCount] = useState<number>()
    const [successActionEntryCount, setSuccessActionEntryCount] = useState<number>()

    // -- LOADING STATES

    const [entriesLoading, setEntriesLoading] = useState(true)
    const [entryLoading, setEntryLoading] = useState(true)
    const [actionEntriesLoading, setActionEntriesLoading] = useState(true)
    const [keysLoading, setKeysLoading] = useState(true)
    const [uploading, setUploading] = useState(false)
    const [applyingEdit, setApplyingEdit] = useState(false)
    const [entriesFailed, setEntriesFailed] = useState(false)
    const [deletingEntry, setDeletingEntry] = useState(false)

    // -- INITIAL FETCHES

    const getEntries = async (params?: EntryParams) => {
        setEntriesLoading(true)
        try {
            const url = new URL("http://localhost:3000/api/submissions/self")
            if (params){ 
                Object.keys(params).forEach(key => {
                    url.searchParams.append(key, `${params[key]}`);
                });
            }

            const entriesFetched = await fetch(url)
            const entriesResponse = await entriesFetched.json()
            if (!entriesFetched.ok) throw new Error(entriesResponse.message)
            let entries = entriesResponse.entries

            setEntryCount(entriesResponse.entryCount["entry_count"])
            setActionEntryCount(entriesResponse.entryCount["action_entry_count"])
            setSuccessEntryCount(entriesResponse.entryCount["success_entry_count"])
            setSuccessActionEntryCount(entriesResponse.entryCount["success_action_entry_count"])

            setLoadedEntries(entries)
            setOrderedEntries(entries)
        } catch (err: unknown) {
            if (err instanceof Error) {
                setNewAlert(err.message)
            } else {
                setNewAlert('An unknown error occurred')
            }
            setAlertType('error')
            setEntriesFailed(true)
        }
        setEntriesLoading(false)
    }

    const getActionEntries = async (params?: EntryParams) => {
        setActionEntriesLoading(true)
        try {
            const url = new URL("http://localhost:3000/api/submissions/self/action-needed")
            if (params){ 
                Object.keys(params).forEach(key => {
                    url.searchParams.append(key, `${params[key]}`);
                });
            }

            const entriesFetched = await fetch(url)
            const entriesResponse = await entriesFetched.json()
            if (!entriesFetched.ok) throw new Error(entriesResponse.message)
            let entries = entriesResponse.entries

            setActionEntries(entries)
        } catch (err: unknown) {
            if (err instanceof Error) {
                setNewAlert(err.message)
            } else {
                setNewAlert('An unknown error occurred')
            }
            setAlertType('error')
            setEntriesFailed(true)
        }
        setActionEntriesLoading(false)
    }

    const getOwnerKeys = async () => {
        try {
            const keys = await fetch("/api/api-keys/self")
            const keysResponse = await keys.json()
            if (!keys.ok) throw new Error(keysResponse.message)

            setOwnerKeys(keysResponse.keys)
        } catch (err: unknown) {
            if (err instanceof Error) {
                setNewAlert(err.message)
            } else {
                setNewAlert('An unknown error occurred')
            }
            setAlertType('error')
        }
        setKeysLoading(false)
    }

    // -- EVENT HANDLERS

    const handleUploadEntry = async () => {
        setUploading(true)
        try {
            const upload = await fetch("/api/submissions/upload-submission", {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    text: uploadText,
                    keyId: selectedKey
                })
            })
            const uploadResponse = await upload.json()
            if (!upload.ok) throw new Error(uploadResponse.message)

            window.location.reload()
        } catch (err: unknown) {
            setAlertType('error')
            if (err instanceof Error) {
                setNewAlert(err.message)
            } else {
                setNewAlert('An unknown error occurred')
            }
        }
        setUploading(false)
    }

    const handleStartEdit = async (entryUniqueId: string) => {
        setEntryLoading(true)
        try {
            const entry = await fetch(`/api/submissions/${entryUniqueId}`)
            const entryResponse = await entry.json()
            if (!entry.ok) throw new Error(entryResponse.message)

            const textarea = editAreaRef.current
            const newText = entryResponse.entry.edit_text ? entryResponse.entry.edit_text : entryResponse.entry.orig_text

            textarea!.value = newText
            setEntryToEdit(entryUniqueId)
            setEditEntryText(newText)
            lib.scrollToSection('edit')
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

    const handleDeleteEntry = async (entryId: string) => {
        setDeletingEntry(true)
        const confirmed = await confirmDialog('Delete entry', 'Are you sure you want to delete this entry?')

        if (confirmed) {
            try {
                const deletion = await fetch("/api/submissions/delete-submission", {
                    method: "DELETE",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        entryId: entryId
                    })
                })
                const deletionResponse = await deletion.json()
                if (!deletion) throw new Error(deletionResponse.message)

                window.location.reload()
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setNewAlert(err.message)
                } else {
                    setNewAlert('An unknown error occurred')
                }
                setAlertType('error')
            }
        }
        setDeletingEntry(false)
    }

    const handleFilterEntries = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget
        const radiosGroup1 = form.elements.namedItem('radio-buttons-group-1');
        let sortValue = null
        const entries = loadedEntries

        if (radiosGroup1 instanceof RadioNodeList) {
            for (let i = 0; i < radiosGroup1.length; i++) {
                const radio = radiosGroup1[i] as HTMLInputElement;
                if (radio.checked) {
                    sortValue = radio.value;
                    break;
                }
            }
        } else if (radiosGroup1 instanceof HTMLInputElement && radiosGroup1.checked) {
            sortValue = radiosGroup1.value;
        }

        const filterValues: string[] = []
        const checkboxNames = ['ai', 'manual', 'auto']
        checkboxNames.forEach((name) => {
            const el = form.elements.namedItem(name) as RadioNodeList | HTMLInputElement | null
            if (el) {
                if ((el as RadioNodeList).length !== undefined) {
                    for (let i = 0; i < (el as RadioNodeList).length; i++) {
                        const input = (el as RadioNodeList)[i] as HTMLInputElement
                        if (input.checked) filterValues.push(input.value)
                    }
                } else if ((el as HTMLInputElement).checked) {
                    filterValues.push((el as HTMLInputElement).value)
                }
            }
        })

        let filteredEntries = entries
        if (filterValues.length > 0) {
            filteredEntries = entries.filter((entry) => {
                return filterValues.some((filterValue) => {
                    switch (filterValue) {
                        case 'ai':
                            if (typeof(entry.ai_result.score) === "number") return entry.ai_result.score >= 40
                            else return null
                        case 'manual':
                            return entry.manual_upload
                        case 'auto':
                            return !entry.manual_upload
                        default:
                            return true
                    }
                })
            })
        }

        // Sort entries by sortValue
        if (sortValue === 'recent') {
            setOrderedEntries(filteredEntries)
        } else if (sortValue === 'oldest') {
            setOrderedEntries([...filteredEntries].reverse())
        } else if (sortValue === 'ai-score') {
            setOrderedEntries(
                [...filteredEntries]
                    .sort(
                        (a, b) =>
                            (typeof b.ai_result.score === "number" ? b.ai_result.score : 0) -
                            (typeof a.ai_result.score === "number" ? a.ai_result.score : 0)
                    )
            )
        } else if (sortValue === 'plag-score') {
            setOrderedEntries(
                [...filteredEntries]
                    .sort(
                        (a, b) =>
                            (typeof b.plag_result.score === "number" ? b.plag_result.score : 0) -
                            (typeof a.plag_result.score === "number" ? a.plag_result.score : 0)
                    )
            )
        }
    }

    const handleApplyEdit = async (entryId: string) => {
        setApplyingEdit(true)
        const textarea = editAreaRef.current
        const confirmed = await confirmDialog('Edit entry', 'Are you sure you want to edit this entry?')
        if (confirmed) {
            try {
                const edited = await fetch("/api/submissions/edit-submission", {
                    method: "PATCH",
                    headers: {
                        'Content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        text: textarea?.value,
                        entryUniqueId: entryId
                    })
                })
                const editedResponse = await edited.json()
                if (!edited.ok) throw new Error(editedResponse.message)

                window.location.reload()
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setNewAlert(err.message)
                } else {
                    setNewAlert('An unknown error occurred')
                }
                setAlertType('error')
            }
        }
        setApplyingEdit(false)
    }

    const handleDiscardEdits = async () => {
        const confirmed = await confirmDialog('Discard edits', 'Are you sure you want to discard your edits?')
        if (confirmed) {
            const textarea = editAreaRef.current

            textarea!.value = editEntryText
        }
    }

    // -- FRONTEND FUNCTIONALITY

    const toggleExpanded = (isAction: boolean, id?: string | number) => {
        if (!id && id != 0) {
            setExpandedEntries(new Set())
            setExpandedActionEntries(new Set())
        } else {
            if (!isAction) {
                const newExpanded = new Set(expandedEntries)
                if (newExpanded.has(id)) {
                    newExpanded.delete(id)
                } else {
                    newExpanded.add(id)
                }
                setExpandedEntries(newExpanded)
            } else {
                const newActionExpanded = new Set(expandedActionEntries)
                if (newActionExpanded.has(id)) {
                    newActionExpanded.delete(id)
                } else {
                    newActionExpanded.add(id)
                }
                setExpandedActionEntries(newActionExpanded)
            }
        }
    }

    // -- HELPERS AND FORMATTING

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

    useEffect(() => {
        if (status === 'authenticated') {
            getEntries()
            getActionEntries()
            getOwnerKeys()
        }
    }, [status])

    return (
        <>
            <section id="settings" className="flex min-h-screen flex-col px-8 pt-12 xl:px-16">
                {newAlert && <AlertToast warning={alertType} message={`${newAlert}`} onClose={() => setNewAlert(null)}></AlertToast>}
                {newConfirm && (
                    <ConfirmAlert isOpen={!!newConfirm} onClose={newConfirm.onCancel} hasConfirmed={newConfirm.onConfirm} title={newConfirm.title}>
                        {newConfirm.message}
                    </ConfirmAlert>
                )}
                <h3 className="content-miniheading text-[16px]">ACCOUNT</h3>
                <h2 className="content-title text-4xl">Dashboard</h2>
                <div className="my-8 grid grid-cols-1 gap-6">
                    <div className="grid grid-cols-4 gap-6">
                        <div className="bento-card col-span-4">
                            <div className='flex items-center'>
                                <h2 className="content-subtitle text-xl">
                                    Action Required
                                </h2>
                                { actionEntries.length > 0 && <span className='font-logo ml-6 text-xs bg-red-500 text-white w-5 h-5 rounded-full flex justify-center items-center'>{actionEntries.length}</span> }
                            </div>
                            <div className="mt-2 h-[2px] w-full rounded-full bento-separator opacity-30" />
                            <div
                                className={`${!entriesLoading && actionEntries.length === 0 ? 'flex items-center justify-center' : ''} scrollbar-custom flex flex-col justify-between mt-4 h-[400px] w-full overflow-y-auto rounded-sm border border-neutral-800 p-4`}
                                style={{ resize: 'vertical', minHeight: '400px' }}
                            >
                                {!actionEntriesLoading ? (
                                    !!successActionEntryCount && successActionEntryCount > 0 ? (
                                        <ul className="content-body flex flex-col gap-12 text-base">
                                            {actionEntries &&
                                                actionEntries.map((val, key) => {
                                                    const isExpanded = expandedActionEntries.has(key)

                                                    return (
                                                        <EntryCard
                                                            key={key}
                                                            val={val}
                                                            itemKey={key}
                                                            isExpanded={isExpanded}
                                                            isAction={true}
                                                            toggleExpanded={toggleExpanded}
                                                            handleStartEdit={handleStartEdit}
                                                            handleDeleteEntry={handleDeleteEntry}
                                                        />
                                                    )
                                                })}
                                        </ul>
                                    ) : (
                                        <span className="content-subtitle text-lg">{entriesFailed ? 'Failed to fetch entries' : 'You are all up to date'}</span>
                                    )
                                ) : (
                                    <div className="font-body mx-4 flex flex-col rounded-sm bg-neutral-900 p-4 shadow-md shadow-neutral-950/20">
                                        <div className="flex w-full items-center gap-4">
                                            <div className="h-[32px] w-[102px] rounded-sm bg-neutral-800 px-2 py-1"></div>
                                            <div className="h-[24px] w-[400px] rounded-sm bg-neutral-800/60 px-2 py-1"></div>
                                        </div>
                                        <div className="mt-4 flex w-full items-center gap-4">
                                            <div className="h-[24px] w-[75%] rounded-sm bg-neutral-800/80 px-2 py-1"></div>
                                        </div>
                                        <div className="my-4 h-0.5 w-full bg-gradient-to-r from-transparent via-neutral-600/40 to-transparent" />
                                        <div className="flex w-full items-center justify-between gap-4">
                                            <div className="h-[24px] w-[250px] rounded-sm bg-neutral-800/80 px-2 py-1"></div>
                                            <div className="h-[24px] w-[150px] rounded-sm bg-neutral-800/80 px-2 py-1"></div>
                                        </div>
                                    </div>
                                )}
                                {
                                    !!successActionEntryCount && successActionEntryCount > 0 && <div className='flex items-center justify-center gap-4 mt-8'>
                                        {
                                            actionPageNum != 1 && <IconContainer className="p-1" onClick={() => {
                                                getActionEntries({ "page": Math.max(1, actionPageNum - 1) })
                                                setActionPageNum(Math.max(1, actionPageNum - 1))
                                            }}>
                                                <ArrowBack sx={{ fontSize: "20px" }} />
                                            </IconContainer>
                                        }
                                        <span className='text-xl'>{`${actionPageNum} / ${Math.ceil(successActionEntryCount/pageLimit)}`}</span>
                                        {
                                            !(actionPageNum == Math.ceil(successActionEntryCount/pageLimit)) && <IconContainer className="p-1" onClick={() => {
                                                getActionEntries({ "page": Math.max(1, actionPageNum + 1) })
                                                setActionPageNum(Math.max(1, actionPageNum + 1))
                                            }}>
                                                <ArrowForward sx={{ fontSize: "20px" }} />
                                            </IconContainer>
                                        }
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="grid gap-6">
                        <div className="bento-card col-span-2">
                            <h2 className="content-subtitle text-xl">
                                View Entries
                                <div className="mt-2 h-[2px] w-full rounded-full bento-separator opacity-30" />
                            </h2>
                            <div className="flex flex-col 2xl:flex-row gap-4">
                                <div
                                    className="scrollbar-custom flex flex-col justify-between mt-4 h-[550px] min-w-[80%] overflow-y-auto rounded-sm border border-neutral-800 p-4"
                                    style={{ resize: 'vertical', minHeight: '550px' }}
                                >
                                    <ul className="content-body flex flex-col gap-12 text-base">
                                        {!entriesLoading ? (
                                            orderedEntries &&
                                            orderedEntries.map((val, key) => {
                                                const isExpanded = expandedEntries.has(key)

                                                return (
                                                    <EntryCard
                                                        key={key + actionEntries.length}
                                                        val={val}
                                                        itemKey={key}
                                                        isExpanded={isExpanded}
                                                        isAction={false}
                                                        toggleExpanded={toggleExpanded}
                                                        handleStartEdit={handleStartEdit}
                                                        handleDeleteEntry={handleDeleteEntry}
                                                    />
                                                )
                                            })
                                        ) : (
                                            <div className="font-body mx-4 flex flex-col rounded-sm bg-neutral-900 p-4 shadow-md shadow-neutral-950/20">
                                                <div className="flex w-full items-center gap-4">
                                                    <div className="h-[32px] w-[102px] rounded-sm bg-neutral-800 px-2 py-1"></div>
                                                    <div className="h-[24px] w-[400px] rounded-sm bg-neutral-800/60 px-2 py-1"></div>
                                                </div>
                                                <div className="mt-4 flex w-full items-center gap-4">
                                                    <div className="h-[24px] w-[75%] rounded-sm bg-neutral-800/80 px-2 py-1"></div>
                                                </div>
                                                <div className="my-4 h-0.5 w-full bg-gradient-to-r from-transparent via-neutral-600/40 to-transparent" />
                                                <div className="flex w-full items-center justify-between gap-4">
                                                    <div className="h-[24px] w-[250px] rounded-sm bg-neutral-800/80 px-2 py-1"></div>
                                                    <div className="h-[24px] w-[150px] rounded-sm bg-neutral-800/80 px-2 py-1"></div>
                                                </div>
                                            </div>
                                        )}
                                    </ul>
                                    {
                                        !!successEntryCount && successEntryCount > 0 && <div className='flex items-center justify-center gap-4 mt-8'>
                                            {
                                                pageNum != 1 && <IconContainer className="p-1" onClick={() => {
                                                    getEntries({ "page": Math.max(1, pageNum - 1) })
                                                    setPageNum(Math.max(1, pageNum - 1))
                                                }}>
                                                    <ArrowBack sx={{ fontSize: "20px" }} />
                                                </IconContainer>
                                            }
                                            <span className='text-xl'>{`${pageNum} / ${Math.ceil(successEntryCount/pageLimit)}`}</span>
                                            {
                                                !(pageNum == Math.ceil(successEntryCount/pageLimit)) && <IconContainer className="p-1" onClick={() => {
                                                    getEntries({ "page": Math.max(1, pageNum + 1) })
                                                    setPageNum(Math.max(1, pageNum + 1))
                                                }}>
                                                    <ArrowForward sx={{ fontSize: "20px" }} />
                                                </IconContainer>
                                            }
                                        </div>
                                    }
                                </div>
                                <div className="flex w-full items-center">
                                    <ThemeProvider theme={mainTheme}>
                                        <div className="mt-4 2xl:h-[550px] w-full rounded-sm border border-neutral-800 p-4">
                                            <h3 className="content-subtitle text-xl text-neutral-300">Filter</h3>
                                            <div className="mt-2 h-[2px] w-full rounded-full bento-separator opacity-30" />
                                            <div className="content-body py-4 text-base text-neutral-400">
                                                <div className="w-full">
                                                    <form onSubmit={(e) => handleFilterEntries(e)} className="flex flex-col md:flex-row 2xl:block w-full">
                                                        <div className="md:w-[35%] 2xl:w-full">
                                                            <span>Sort By</span>
                                                            <RadioGroup defaultValue="recent" name="radio-buttons-group-1">
                                                                <FormControlLabel value="recent" control={<Radio />} label="Recent" />
                                                                <FormControlLabel value="oldest" control={<Radio />} label="Oldest" />
                                                                <FormControlLabel value="ai-score" control={<Radio />} label="AI score" />
                                                                <FormControlLabel value="plag-score" control={<Radio />} label="Plagiarism score" />
                                                            </RadioGroup>
                                                        </div>
                                                        <div className="mt-4 md:mt-0 2xl:mt-4 md:w-[35%] 2xl:w-full">
                                                            <span>Show only</span>
                                                            <FormGroup role="checkbox-group">
                                                                <FormControlLabel
                                                                    name="ai"
                                                                    value="ai"
                                                                    sx={{
                                                                        '& .MuiSvgIcon-root': {
                                                                            fontSize: 28,
                                                                        },
                                                                        marginRight: '0',
                                                                    }}
                                                                    control={
                                                                        <Checkbox
                                                                            sx={{
                                                                                color: 'text.primary',
                                                                            }}
                                                                        />
                                                                    }
                                                                    label="AI"
                                                                />
                                                                <FormControlLabel
                                                                    name="manual"
                                                                    value="manual"
                                                                    sx={{
                                                                        '& .MuiSvgIcon-root': {
                                                                            fontSize: 28,
                                                                        },
                                                                        marginRight: '0',
                                                                    }}
                                                                    control={
                                                                        <Checkbox
                                                                            sx={{
                                                                                color: 'text.primary',
                                                                            }}
                                                                        />
                                                                    }
                                                                    label="Manual"
                                                                />
                                                                <FormControlLabel
                                                                    name="auto"
                                                                    value="auto"
                                                                    sx={{
                                                                        '& .MuiSvgIcon-root': {
                                                                            fontSize: 28,
                                                                        },
                                                                        marginRight: '0',
                                                                    }}
                                                                    control={
                                                                        <Checkbox
                                                                            sx={{
                                                                                color: 'text.primary',
                                                                            }}
                                                                        />
                                                                    }
                                                                    label="Auto"
                                                                />
                                                            </FormGroup>
                                                        </div>
                                                        <Button value={'APPLY'} className="mt-4 px-3 py-2 text-base h-max w-max border-neutral-500 hover:border-neutral-300" />
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </ThemeProvider>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex flex-col 2xl:flex-row mb-24 gap-6">
                        <div id="edit" className="bento-card col-span-2 w-full 2xl:w-[60%]">
                            <h2 className="content-subtitle text-xl">
                                View and Modify Entry Content
                                <div className="mt-2 h-[2px] w-full rounded-full bento-separator opacity-30" />
                            </h2>
                            <textarea
                                className="content-body mt-4 min-h-[350px] 2xl:min-h-[500px] w-full rounded-sm border border-neutral-800 p-4 text-base"
                                placeholder="Paste text here"
                                ref={editAreaRef}
                            />
                            <Button value={'APPLY'} full className="mt-4 ml-8 px-4 py-2 text-lg" onClick={() => handleApplyEdit(entryToEdit)} />
                            <Button
                                value={'DISCARD'}
                                className="mt-4 ml-8 border-neutral-500 px-4 py-2 text-lg hover:border-neutral-300"
                                onClick={() => handleDiscardEdits()}
                            />
                        </div>
                        <div className="bento-card w-full 2xl:w-[40%]">
                            <h2 className="content-subtitle text-xl">
                                Manual upload
                                <div className="mt-2 h-[2px] w-full rounded-full bento-separator opacity-30" />
                            </h2>
                            <textarea
                                value={uploadText}
                                onChange={(e) => setUploadText(e.target.value)}
                                className="content-body mt-4 min-h-[200px] 2xl:min-h-[400px] w-full resize-none rounded-sm border border-neutral-800 p-4 text-sm"
                                placeholder="Paste text here"
                            />
                            <div className="flex flex-col items-start">
                                <div className="my-2 flex w-full flex-col">
                                    {!keysLoading ? (
                                        <>
                                            <span className="content-body">Select a key</span>
                                            <select
                                                className="font-body mt-2 w-[350px] cursor-pointer rounded-sm border border-neutral-800 bg-neutral-900 px-4 py-3 text-neutral-200"
                                                value={selectedKey || ''}
                                                onChange={(e) => setSelectedKey(e.target.value)}
                                            >
                                                <option value="" disabled></option>
                                                {ownerKeys &&
                                                    ownerKeys
                                                        .filter((key) => key.is_active)
                                                        .map((val) => (
                                                            <option key={val.id} value={val.id}>
                                                                {val.name}
                                                            </option>
                                                        ))}
                                            </select>
                                        </>
                                    ) : (
                                        <Loading />
                                    )}
                                </div>
                                {!uploading ? (
                                    <Button
                                        value={'UPLOAD'}
                                        className="mt-4 h-max border-neutral-500 px-4 py-2 text-base hover:border-neutral-300"
                                        onClick={() => handleUploadEntry()}
                                    />
                                ) : (
                                    <div className="flex items-center gap-4">
                                        <span className="content-body text-xl">Uploading...</span>
                                        <Loading />
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
