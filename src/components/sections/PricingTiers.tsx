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
                <div className="bento-card relative flex h-[520px] flex-col gap-4 max-w-[400px] lg:w-full">
                    <div className="flex flex-col gap-2">
                        <h3 className="content-subtitle py-0 text-xl font-bold text-neutral-300 md:text-2xl">Extrinsic Plan</h3>
                        <h4 className="content-miniheading text-base">Made for verifying your users&apos; content</h4>
                    </div>
                    <hr />
                    <ul className="content-body flex flex-col gap-3 pl-4 text-start text-sm xl:text-base">
                        <li className="list-disc">Automatic AI check on submission</li>
                        <li className="list-disc">Plagiarism check on AI, with AI rewrite/Auto-removal</li>
                        <li className="list-disc">Optional interactive widget for site visitors</li>
                        <li className="list-disc">Optional AI watermark</li>
                        <li className="list-disc">8,000 tokens per month</li>
                    </ul>
                    <div className="flex h-full flex-col items-center justify-end">
                        <hr className="w-full" />
                        <h3 className="content-subtitle my-4 py-0 text-xl text-neutral-300 md:text-2xl">
                            <span className="text-lg text-neutral-400 md:text-xl">from</span> £34 / month
                        </h3>
                        <Button value={'SELECT'} full={true} className={'px-4 py-1 text-base'} />
                    </div>
                </div>
                <div className="order-2">
                    <div className="hidden h-[400px] w-0.5 rounded-full separator-glow lg:block" />
                    <div className="block h-0.5 w-[250px] rounded-full separator lg:hidden" />
                </div>
                <div className="bento-card relative order-5 flex h-[550px] max-w-[400px] flex-col gap-4 sm:w-[400px] lg:order-3 lg:w-full">
                    <div className="flex flex-col gap-2">
                        <h3 className="content-subtitle text-xl font-bold text-neutral-300 md:text-2xl">Combo-plan</h3>
                        <h4 className="content-miniheading text-base">Made for verifying all sources</h4>
                    </div>
                    <hr />
                    <ul className="content-body flex flex-col gap-3 pl-4 text-start text-sm xl:text-base">
                        <li className="list-disc">
                            <i>Everything in Extrinsic plan</i>
                        </li>
                        <li className="list-disc">
                            <i>Everything in Intrinsic plan</i>
                        </li>
                        <li className="list-disc">12,000 tokens</li>
                    </ul>
                    <div className="flex h-full flex-col items-center justify-end">
                        <hr className="w-full" />
                        <h3 className="content-subtitle my-4 py-0 text-lg text-neutral-300 md:text-2xl">Coming Soon</h3>
                        <Button value={'SELECT'} full={true} className={'px-4 py-1 text-base hover:cursor-not-allowed'} />
                    </div>
                </div>
                <div className="order-4">
                    <div className="hidden h-[400px] w-0.5 rounded-full separator-glow lg:block" />
                    <div className="block h-0.5 w-[250px] rounded-full separator lg:hidden" />
                </div>
                <div className="bento-card relative order-3 flex h-[520px] max-w-[400px] flex-col gap-4 lg:order-5 lg:w-full">
                    <div className="flex flex-col gap-2">
                        <h3 className="content-subtitle py-0 text-xl font-bold text-neutral-300 md:text-2xl">Intrinsic Plan</h3>
                        <h4 className="content-miniheading text-base">Made for verifying your site&apos;s content</h4>
                    </div>
                    <hr />
                    <ul className="content-body flex flex-col gap-3 pl-4 text-start text-sm xl:text-base">
                        <li className="list-disc">AI check on site audit</li>
                        <li className="list-disc">AI check on manual upload</li>
                        <li className="list-disc">Plagiarism check on AI, with AI rewrite/Auto-removal</li>
                        <li className="list-disc">Optional AI watermark</li>
                        <li className="list-disc">6,000 tokens</li>
                    </ul>
                    <div className="flex h-full flex-col items-center justify-end">
                        <hr className="w-full" />
                        <h3 className="content-subtitle my-4 py-0 text-lg text-neutral-300 md:text-2xl">Coming Soon</h3>
                        <Button value={'SELECT'} full={true} className={'px-4 py-1 text-base hover:cursor-not-allowed'} />
                    </div>
                </div>
            </div>
            {
                seeMore && <div className="flex items-center justify-center gap-4">
                    <p className="content-body">For more info, click here</p>
                    <IconContainer href="/pricing">
                        <ArrowForwardIos sx={{ fontSize: '20px' }} />
                    </IconContainer>
                </div>
            }
        </>
    )
}
