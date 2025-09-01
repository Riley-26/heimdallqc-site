'use client'

import Link from 'next/link'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { GitHub, LinkedIn } from '@mui/icons-material'

export const Footer: React.FC = () => {

    return (
        <footer className="front-z flex flex-col bg-black p-8 md:p-16" aria-labelledby="footer-heading">
            <div className='flex h-full'>
                <div className="flex flex-col items-start h-full lg:w-[40%] mr-8 md:mr-24">
                    <Link href="/" aria-label="Home" className="flex items-center justify-center gap-2 mb-4">
                        <Image src="/images/SVG/Asset 15.svg" width={250} height={250} alt="Heimdall logo" className="hidden lg:block brightness-75 mr-4" />
                        <Image src="/images/SVG/Asset 8.svg" width={80} height={80} alt="Heimdall logo" className="block lg:hidden brightness-70 mr-2 sm:mr-0" />
                    </Link>
                    <p className='hidden content-body text-xl lg:block'>
                        The Digital Circuit Breaker, automating plagiarism prevention and AI disclosure. Designed for businesses.
                    </p>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 w-full lg:w-[60%]">
                    <div className="content-body col-span-1 mb-8 pr-4">
                        <h3 className='content-subtitle mb-2 md:mb-4'>Product</h3>
                        <ul className="flex flex-col gap-2">
                            <li><Link href={'/features'}>Features</Link></li>
                            <li><Link href={'/pricing'}>Pricing</Link></li>
                            <li><Link href={'/account/dashboard'}>Dashboard</Link></li>
                        </ul>
                    </div>
                    <div className="content-body col-span-1 mb-8 pr-4">
                        <h3 className='content-subtitle mb-2 md:mb-4'>Tools</h3>
                        <ul className="flex flex-col gap-2">
                            <li><Link href={'/verif-checker'}>Verification Checker</Link></li>
                        </ul>
                    </div>
                    <div className="content-body col-span-1 mb-8 pr-4">
                        <h3 className='content-subtitle mb-2 md:mb-4'>Resources</h3>
                        <ul className="flex flex-col gap-2">
                            <li><Link href={'/api-docs'}>API Docs</Link></li>
                        </ul>
                    </div>
                    <div className="content-body col-span-1 mb-8">
                        <h3 className='content-subtitle mb-2 md:mb-4'>Company</h3>
                        <ul className="flex flex-col gap-2">
                            <li><Link href={'/about'}>About</Link></li>
                            <li><Link href={'/privacy'}>Privacy</Link></li>
                            <li><Link href={'/help#contact'}>Contact</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='grid grid-cols-6 grid-rows-2 md:grid-rows-1 lg:mt-4'>
                <div className='content-body text-neutral-400 flex flex-col justify-end gap-2 col-span-6 order-2 md:order-1 md:col-span-4 pr-8'>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita beatae suscipit totam?</p>
                    <div className='flex justify-between'>
                        <div className='text-sm flex gap-6'>
                            <Link href={'/'} className='hover:underline'>Terms</Link>
                            <Link href={'/'} className='hover:underline'>Privacy</Link>
                        </div>
                        
                    </div>
                </div>
                <div className='mb-4 md:mb-0 col-span-6 order-1 md:order-2 md:col-span-2 flex flex-col gap-4'>
                    <div className='flex gap-4'>
                        <GitHub sx={{ fontSize: "28px" }} />
                        <LinkedIn sx={{ fontSize: "28px" }} />
                    </div>
                    <div className='flex flex-col'>
                        <p className='text-sm text-neutral-400'>
                            AI/Plagiarism detectors powered by <a href='https://gowinston.ai' target='_blank' className='underline'>Winston AI</a>
                        </p>
                        <p className='text-sm text-neutral-400'>
                            AI Rewrite powered by <a href='https://platform.openai.com/docs/overview' target='_blank' className='underline'>ChatGPT</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    )
}
