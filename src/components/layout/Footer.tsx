'use client'

import React, { useEffect, useState } from 'react'

export const Footer: React.FC = () => {
    const [showFooter, setShowFooter] = useState(true)

    const pagesWithoutFooter = ['signin', 'signup', 'account']

    useEffect(() => {
        setShowFooter(!pagesWithoutFooter.includes(window.location.pathname.split('/')[1]))
    }, [])

    return (
        <>
            {showFooter ? (
                <footer className="front-z flex h-[500px] flex-col bg-black p-16" aria-labelledby="footer-heading">
                    <div className="flex w-full justify-around">
                        <div className="flex items-center justify-center">
                            <span className="font-logo">HEIMDALL</span>
                        </div>
                        <div className="content-body mr-32">
                            <ul className="flex flex-col gap-2">
                                <li>Home</li>
                                <li>About</li>
                                <li>Features</li>
                                <li>Verification Checker</li>
                                <li>Pricing</li>
                                <li>Help</li>
                                <li>API</li>
                                <li>Privacy</li>
                                <li>Account</li>
                            </ul>
                        </div>
                        <div></div>
                    </div>
                </footer>
            ) : (
                <></>
            )}
        </>
    )
}
