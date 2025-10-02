import { Button, IconContainer } from '@/components/ui/index'
import { ArrowForwardIos } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'

export const PricingTiers: React.FC = () => {
    const [seeMore, setSeeMore] = useState(true)

    useEffect(() => {
        if (window.location.pathname === "/pricing") setSeeMore(false)
    }, [])

    return (
        <>
            <div className="section-container mb-6 flex flex-col items-center justify-center gap-4 px-0 leading-6 lg:flex-row lg:gap-8">
                <div className="bento-card relative flex h-[520px] flex-col justify-between gap-4 w-[400px] overflow-hidden">
                    <span
                        className="absolute top-0 left-0 h-48 w-72"
                        style={{
                            background: "linear-gradient(340deg, transparent 60%, #ecd9a8 100%)",
                            opacity: 0.3,
                        }}
                    />
                    <div className="flex flex-col gap-2">
                        <h3 className="content-subtitle py-0 text-2xl text-neutral-300 md:text-3xl">Extrinsic Plan</h3>
                        <h4 className="content-subtitle-acc text-lg tracking-wider">&apos;Circuit Breaker&apos;</h4>
                    </div>
                    <div className="flex flex-col items-center justify-end">
                        <h3 className="content-subtitle mt-1 mb-3 py-0 text-2xl text-neutral-300 md:text-4xl">
                            £34<span className="text-lg text-neutral-400 md:text-xl ml-2">monthly</span>
                        </h3>
                    </div>
                    <div className='separator w-full' />
                    <ul className="content-body flex flex-col gap-3 pl-4 text-start text-sm xl:text-base">
                        <li className="list-disc">Auto Plagiarism + AI check at submission</li>
                        <li className="list-disc">Emergency response on problematic content</li>
                        <li className="list-disc">Webhook for live analysis results</li>
                        <li className="list-disc">Optional widget for site</li>
                        <li className="list-disc">+8,000 tokens per month</li>
                    </ul>
                    <div className='flex justify-center items-center'>
                        <Button href='/account/api-management' value={'SELECT'} full={true} className={'px-4 py-1 text-base'} />
                    </div> 
                </div>
                <div className="bento-card brightness-75 relative flex h-[520px] w-[400px] flex-col gap-4">
                    <div className="flex flex-col gap-2">
                        <h3 className="content-subtitle py-0 text-xl font-bold text-neutral-300 md:text-2xl">Intrinsic Plan</h3>
                        <h4 className="content-miniheading text-base">Made for verifying your site&apos;s content</h4>
                    </div>
                    <div className='h-full flex justify-center items-center'>
                        <h3 className="content-subtitle my-4 py-0 text-lg text-neutral-300 md:text-2xl">Coming Soon</h3>
                    </div>
                </div>
            </div>
            {
                seeMore && <div className="flex items-center justify-center gap-4">
                    <p className="content-body">Not sure what plan you need?</p>
                    <IconContainer href="/pricing">
                        <ArrowForwardIos sx={{ fontSize: '20px' }} />
                    </IconContainer>
                </div>
            }
        </>
    )
}
