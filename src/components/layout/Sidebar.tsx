'use client'

import { Button } from '@/components/ui/index'
import { ConfirmType, WarningType } from '@/types/mainTypes'
import { AccountBalance, Dashboard, Description, ExitToApp, Home, Key, Person, Settings } from '@mui/icons-material'
import Tooltip from '@mui/material/Tooltip'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import { AlertToast, ConfirmAlert } from '../alerts'
import { styled } from '@mui/material/styles'

const navLinks = [
    { name: 'Home', href: '/', icon: <Home /> },
    { name: 'API Docs', href: '/api-docs', icon: <Description /> },
    { name: 'Account', href: '/account', icon: <Person /> },
    { name: 'Dashboard', href: '/account/dashboard', icon: <Dashboard /> },
    { name: 'API Management', href: '/account/api-management', icon: <Key /> },
    { name: 'Billing', href: '/account/billing', icon: <AccountBalance /> },
    { name: 'Settings', href: '/account/settings', icon: <Settings /> },
]

const CustomTooltip = styled(
    ({ className, children, ...props }: React.ComponentProps<typeof Tooltip>) => (
        <Tooltip {...props} classes={{ popper: className }}>
            {children}
        </Tooltip>
    )
)`
    & .MuiTooltip-tooltip {
        background-color: #1a1a1a;
        color: #ffffff;
        padding: 8px 12px;
        border-radius: 6px;
        white-space: pre-wrap;
        box-shadow: 0 0 20px #00000077;
        max-width: 480px;
    }

    @media (max-width: 768px) {
        & .MuiTooltip-tooltip {
            padding: 8px;
            max-width: 280px;
        }
    }

    & .MuiTooltip-arrow {
        color: #1a1a1a;
    }
`;

export const Sidebar: React.FC = () => {
    const [windowWidth, setWindowWidth] = useState<number>()
    const pathname = usePathname()
    const [newAlert, setNewAlert] = useState<string | null>(null)
    const [alertType, setAlertType] = useState<WarningType>('alert')
    const [newConfirm, setNewConfirm] = useState<ConfirmType | null>(null)
    const [entryCount, setEntryCount] = useState<number>()

    // FETCHES

    const fetchActionEntries = async () => {
        try {
            const entries = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/submissions/self/action-needed`)
            const entriesResponse = await entries.json()
            if (!entries.ok) throw new Error()

            setEntryCount(entriesResponse.entries.length)
        } catch (err: unknown) {
            return
        }
    }

    // HANDLERS

    const handleSignOut = async () => {
        const confirmed = await confirmDialog('Sign out', 'Are you sure you want to sign out?')

        if (confirmed) {
            try {
                await signOut({ callbackUrl: '/' })
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

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
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

    useEffect(() => {
        setWindowWidth(window.innerWidth)
        fetchActionEntries()
    }, [])

    useEffect(() => {
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [handleResize])

    return (
        <>
            {newAlert && <AlertToast warning={alertType} message={`${newAlert}`} onClose={() => setNewAlert(null)}></AlertToast>}
            {newConfirm && (
                <ConfirmAlert isOpen={!!newConfirm} onClose={newConfirm.onCancel} hasConfirmed={newConfirm.onConfirm} title={newConfirm.title}>
                    {newConfirm.message}
                </ConfirmAlert>
            )}
            <div className="fixed top-0 left-0 flex min-h-screen flex-col bg-neutral-950 px-4 pt-8 text-start foreground-z">
                <div className="flex h-full items-center justify-center">
                    <Link href="/" aria-label="Home" className="flex items-center justify-center gap-2">
                        <Image src="/images/SVG/Asset 15.svg" className="brightness-75 hidden xl:block" width={180} height={180} alt='Heimdall logo' />
                        <Image src="/images/SVG/Asset 8.svg" className="brightness-75 block xl:hidden" width={40} height={40} alt='Heimdall logo' />
                    </Link>
                </div>
                <ul className="mt-10 mb-6 flex flex-col gap-2">
                    {navLinks.map((val, key) => {
                        if (windowWidth && windowWidth < 1275) {
                            return (
                                <CustomTooltip key={key} title={<span className='content-body'>{val.name}</span>} arrow placement="right">
                                    <li className='relative'>
                                        <div className="flex items-center">
                                            <Link
                                                className={`${val.href === pathname ? 'bg-neutral-900' : ''} content-body flex w-full items-center justify-between rounded-full px-3 py-3 transition-all hover:bg-neutral-900 xl:px-6`}
                                                href={val.href}
                                            >
                                                <span className="mr-12 hidden xl:block">{val.name}</span>
                                                {val.icon}
                                            </Link>
                                        </div>
                                        {val.name === 'API Docs' && (
                                            <div className="my-2 h-[2px] w-full rounded-full separator opacity-30" />
                                        )}
                                        {val.name === 'Dashboard' && (
                                            entryCount ? (entryCount > 0 && <span className='absolute top-0 right-0 font-logo ml-6 text-xs bg-red-500 text-white w-5 h-5 rounded-full flex justify-center items-center'>{entryCount}</span>) : <></>
                                        )}
                                    </li>
                                </CustomTooltip>
                            )
                        } else {
                            return (
                                <li key={key} className='relative'>
                                    <div className="flex items-center">
                                        <Link
                                            className={`${val.href === pathname ? 'bg-neutral-900' : ''} content-body flex w-full items-center justify-between rounded-full px-3 py-3 text-lg transition-all hover:bg-neutral-900 xl:px-6`}
                                            href={val.href}
                                            target={val.name === 'API Docs' ? "_blank": ""}
                                        >
                                            <span className="mr-12 hidden xl:block">{val.name}</span>
                                            {val.icon}
                                        </Link>
                                    </div>
                                    {val.name === 'API Docs' && (
                                        <div className="my-2 h-[2px] w-full rounded-full separator opacity-30" />
                                    )}
                                    {val.name === 'Dashboard' && (
                                        entryCount ? (entryCount > 0 && <span className='absolute top-0 right-0 font-logo ml-6 text-xs bg-red-500 text-white w-5 h-5 rounded-full flex justify-center items-center'>{entryCount}</span>) : <></>
                                    )}
                                </li>
                            )
                        }
                    })}
                </ul>
                <Tooltip title="Sign Out" placement="right">
                    <button
                        className="mx-auto block cursor-pointer rounded-md border-2 border-neutral-500 px-2 py-2 text-base hover:border-neutral-300 xl:hidden xl:px-4"
                        onClick={() => handleSignOut()}
                    >
                        <ExitToApp />
                    </button>
                </Tooltip>
                <Button
                    className="mx-auto hidden border-neutral-500 px-4 py-2 text-base hover:border-neutral-300 xl:block"
                    value={'SIGN OUT'}
                    onClick={() => handleSignOut()}
                />
            </div>
        </>
    )
}
