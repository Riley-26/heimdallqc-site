"use client"

import Link from 'next/link'
import React, { useEffect, useState } from "react";

export const Footer: React.FC = () => {
    return (
        <footer className="front-z bg-black h-[500px] p-16 flex flex-col" aria-labelledby="footer-heading">
            <div className='flex justify-around w-full'>
                <div className='flex justify-center items-center'>
                    <span className='font-logo'>HEIMDALL</span>
                </div>
                <div className='content-body mr-32'>
                    <ul className='flex flex-col gap-2'>
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
                <div>

                </div>
            </div>
        </footer>
    )
}