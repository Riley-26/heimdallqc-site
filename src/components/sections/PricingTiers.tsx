import { Button, IconContainer } from '@/components/ui/index'
import { ArrowForwardIos } from '@mui/icons-material'
import React from 'react'

export const PricingTiers: React.FC<any> = () => {
    return (
        <>
            <div className="section-container mb-6 flex flex-col items-center justify-center gap-4 px-0 leading-6 lg:flex-row lg:gap-8">
                <div className="bento-card relative flex h-[560px] w-[350px] min-w-[28%] flex-col gap-4 sm:w-[400px] lg:w-full">
                    <div className="flex flex-col gap-2">
                        <h3 className="content-subtitle py-0 text-xl font-bold text-neutral-300 md:text-2xl">Extrinsic Plan</h3>
                        <h4 className="content-miniheading">Made for verifying your users&apos; content</h4>
                    </div>
                    <hr />
                    <ul className="content-body flex flex-col gap-3 pl-4 text-start text-base xl:text-lg">
                        <li className="list-disc">Automatic AI check on submission</li>
                        <li className="list-disc">Plagiarism check on AI, with auto-citations/AI rewrite</li>
                        <li className="list-disc">Optional interactive widget for site visitors</li>
                        <li className="list-disc">Optional AI watermark</li>
                        <li className="list-disc">8,000 tokens per month</li>
                    </ul>
                    <div className="flex h-full flex-col items-center justify-end">
                        <hr className="w-full" />
                        <h3 className="content-subtitle my-4 py-0 text-xl text-neutral-300 md:text-2xl">
                            <span className="text-lg text-neutral-400 md:text-xl">from</span> £54 / month
                        </h3>
                        <Button value={'SELECT'} full={true} className={'px-4 py-1 text-base'} />
                    </div>
                </div>
                <div className="order-2">
                    <div className="hidden h-[400px] w-0.5 rounded-full bg-gradient-to-t from-transparent via-[#d8af41] to-transparent lg:block" />
                    <div className="block h-0.5 w-[250px] rounded-full bg-gradient-to-r from-transparent via-[#d8af41] to-transparent lg:hidden" />
                </div>
                <div className="bento-card relative order-5 flex h-[600px] w-[350px] min-w-[30%] flex-col gap-4 sm:w-[400px] lg:order-3 lg:w-full">
                    <div className="flex flex-col gap-2">
                        <h3 className="content-subtitle text-xl font-bold text-neutral-300 md:text-2xl">Combo-plan</h3>
                        <h4 className="content-miniheading">Made for verifying all sources</h4>
                    </div>
                    <hr />
                    <ul className="content-body flex flex-col gap-3 pl-4 text-start text-base xl:text-lg">
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
                        <h3 className="content-subtitle my-4 py-0 text-xl text-neutral-300 md:text-2xl">Coming Soon</h3>
                        <Button value={'SELECT'} full={true} className={'px-4 py-1 text-base hover:cursor-not-allowed'} />
                    </div>
                </div>
                <div className="order-4">
                    <div className="hidden h-[400px] w-0.5 rounded-full bg-gradient-to-t from-transparent via-[#d8af41] to-transparent lg:block" />
                    <div className="block h-0.5 w-[250px] rounded-full bg-gradient-to-r from-transparent via-[#d8af41] to-transparent lg:hidden" />
                </div>
                <div className="bento-card relative order-3 flex h-[560px] w-[350px] min-w-[28%] flex-col gap-4 sm:w-[400px] lg:order-5 lg:w-full">
                    <div className="flex flex-col gap-2">
                        <h3 className="content-subtitle py-0 text-xl font-bold text-neutral-300 md:text-2xl">Intrinsic Plan</h3>
                        <h4 className="content-miniheading">Made for verifying your site&apos;s content</h4>
                    </div>
                    <hr />
                    <ul className="content-body flex flex-col gap-3 pl-4 text-start text-base xl:text-lg">
                        <li className="list-disc">AI check on site audit</li>
                        <li className="list-disc">AI check on manual upload</li>
                        <li className="list-disc">Plagiarism check on AI, with automatic source citing</li>
                        <li className="list-disc">Optional AI watermark</li>
                        <li className="list-disc">6,000 tokens</li>
                    </ul>
                    <div className="flex h-full flex-col items-center justify-end">
                        <hr className="w-full" />
                        <h3 className="content-subtitle my-4 py-0 text-xl text-neutral-300 md:text-2xl">Coming Soon</h3>
                        <Button value={'SELECT'} full={true} className={'px-4 py-1 text-base hover:cursor-not-allowed'} />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center gap-4">
                <p className="content-body">For more info, click here</p>
                <IconContainer href="/pricing">
                    <ArrowForwardIos sx={{ fontSize: '20px' }} />
                </IconContainer>
            </div>
        </>
    )
}
