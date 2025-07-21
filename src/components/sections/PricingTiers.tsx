import React from 'react'
import { Button, IconContainer } from "@/components/ui/index"
import { Section } from "@/components/layout/index"
import { ArrowForwardIos } from '@mui/icons-material'

export const PricingTiers: React.FC<any> = ({ id }) => {
    return (
        <>
            <div className="flex flex-col lg:flex-row justify-center items-center px-0 gap-4 lg:gap-8 section-container mb-6 leading-6">
                <div className="bento-card flex flex-col gap-4 h-[560px] relative w-[350px] sm:w-[400px] lg:w-full min-w-[28%]">
                    <div className="flex flex-col gap-2">
                        <h3 className="content-subtitle text-xl md:text-2xl font-bold text-neutral-300 py-0">Extrinsic Plan</h3>
                        <h4 className="content-miniheading">Made for verifying your users' content</h4>
                    </div>
                    <hr />
                    <ul className="content-body text-base xl:text-lg text-start flex flex-col gap-3 pl-4">
                        <li className="list-disc">Automatic AI check on submission</li>
                        <li className="list-disc">Plagiarism check on AI, with auto-citations/AI rewrite</li>
                        <li className="list-disc">Optional interactive widget for site visitors</li>
                        <li className="list-disc">Optional AI watermark</li>
                        <li className="list-disc">8,000 tokens per month</li>
                    </ul>
                    <div className="h-full flex flex-col items-center justify-end">
                        <hr className="w-full" />
                        <h3 className="content-subtitle text-xl md:text-2xl text-neutral-300 py-0 my-4"><span className='text-neutral-400 text-lg md:text-xl'>from</span> £54 / month</h3>
                        <Button value={"SELECT"} full={true} className={"px-4 py-1 text-base"} />
                    </div>
                </div>
                <div className="order-2">
                    <div className="hidden lg:block h-[400px] w-0.5 rounded-full bg-gradient-to-t from-transparent via-[#d8af41] to-transparent" />
                    <div className="block lg:hidden h-0.5 w-[250px] rounded-full bg-gradient-to-r from-transparent via-[#d8af41] to-transparent" />
                </div>
                <div className="bento-card flex flex-col gap-4 h-[600px] relative w-[350px] sm:w-[400px] lg:w-full order-5 lg:order-3 min-w-[30%]">
                    <div className="flex flex-col gap-2">
                        <h3 className="content-subtitle font-bold text-xl md:text-2xl text-neutral-300">Combo-plan</h3>
                        <h4 className="content-miniheading">Made for verifying all sources</h4>
                    </div>
                    <hr />
                    <ul className="content-body text-base xl:text-lg text-start flex flex-col gap-3 pl-4">
                        <li className="list-disc"><i>Everything in Extrinsic plan</i></li>
                        <li className="list-disc"><i>Everything in Intrinsic plan</i></li>
                        <li className="list-disc">12,000 tokens</li>
                    </ul>
                    <div className="h-full flex flex-col items-center justify-end">
                        <hr className="w-full" />
                        <h3 className="content-subtitle text-xl md:text-2xl text-neutral-300 py-0 my-4">Coming Soon</h3>
                        <Button value={"SELECT"} full={true} className={"px-4 py-1 text-base hover:cursor-not-allowed"} />
                    </div>
                </div>
                <div className="order-4">
                    <div className="hidden lg:block h-[400px] w-0.5 rounded-full bg-gradient-to-t from-transparent via-[#d8af41] to-transparent" />
                    <div className="block lg:hidden h-0.5 w-[250px] rounded-full bg-gradient-to-r from-transparent via-[#d8af41] to-transparent" />
                </div>
                <div className="bento-card flex flex-col gap-4 h-[560px] relative w-[350px] sm:w-[400px] lg:w-full order-3 lg:order-5 min-w-[28%]">
                    <div className="flex flex-col gap-2">
                        <h3 className="content-subtitle font-bold text-xl md:text-2xl text-neutral-300 py-0">Intrinsic Plan</h3>
                        <h4 className="content-miniheading">Made for verifying your site's content</h4>
                    </div>
                    <hr />
                    <ul className="content-body text-base xl:text-lg text-start flex flex-col gap-3 pl-4">
                        <li className="list-disc">AI check on site audit</li>
                        <li className="list-disc">AI check on manual upload</li>
                        <li className="list-disc">Plagiarism check on AI, with automatic source citing</li>
                        <li className="list-disc">Optional AI watermark</li>
                        <li className="list-disc">6,000 tokens</li>
                    </ul>
                    <div className="h-full flex flex-col items-center justify-end">
                        <hr className="w-full" />
                        <h3 className="content-subtitle text-xl md:text-2xl text-neutral-300 py-0 my-4">Coming Soon</h3>
                        <Button value={"SELECT"} full={true} className={"px-4 py-1 text-base hover:cursor-not-allowed"} />
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center gap-4">
                <p className="content-body">
                    For more info, click here
                </p>
                <IconContainer href="/pricing">
                    <ArrowForwardIos sx={{ fontSize: "20px" }} />
                </IconContainer>
            </div>
        </>
    )
}
