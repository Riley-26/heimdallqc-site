import React, { useEffect, useState } from 'react';

interface SplitSectionProps {
    className?: string;
}

const compSections: [{ title: string; desc: string }, { title: string; desc: string }, { title: string; desc: string }] = [
    { title: "Analysis", desc: "A submitted text is analysed. This would happen via user submission, site audit or manual upload." },
    { title: "Modification", desc: "If the result meets certain criteria, the text is modified in real-time using a webhook." },
    { title: "Action", desc: "In your dashboard, you will see which entries are problematic and need permanent action." }
]

export const SplitSection: React.FC<SplitSectionProps> = ({
    className = ""
}) => {

    return (
        <div className={`w-full grid grid-cols-1 xl:grid-cols-3 max-w-[500px] xl:max-w-none gap-8 xl:gap-2 min-h-[380px] mx-auto sm:mt-0 ${className}`}>
            {/* First Section - Highest */}
            <div className='relative'>
                <div className='bento-card overflow-hidden rounded-r-none aspect-6/5 translate-0 xl:-translate-y-8'>
                    <div className="p-4 pr-8 h-full mr-auto flex flex-col justify-start text-start">
                        <h3 className='content-subtitle text-2xl mb-4'>{compSections[0].title}</h3>
                        <p className='content-body foreground-z'>{compSections[0].desc}</p>
                        <img src={"/images/analysis.png"} className='absolute bottom-0 right-0 w-[380px] sm:w-[400px] drop-shadow-2xl drop-shadow-[#d9cdad55] contrast-120 brightness-90' />
                    </div>
                </div>
                <div>
                    <div className='hidden xl:block absolute xl:-top-24 xl:-right-1.5 separator-glow h-[550px] w-0.5' />
                    <div className='block xl:hidden absolute -bottom-4 xl:-top-24 right-[50%] translate-x-[50%] xl:-right-1.5 separator h-0.5 w-[350px] sm:w-[650px]' />
                </div>
            </div>
            <div className='relative'>
                <div className='bento-card overflow-hidden rounded-none aspect-6/5 translate-0'>
                    <div className="p-4 pr-8 h-full mr-auto flex flex-col justify-start text-start">
                        <h3 className='content-subtitle text-2xl mb-4'>{compSections[1].title}</h3>
                        <p className='content-body foreground-z'>{compSections[1].desc}</p>
                        <img src={"/images/modif.png"} className='absolute bottom-0 right-0 w-[380px] sm:w-[400px] drop-shadow-2xl drop-shadow-[#d9cdad55] contrast-120 brightness-90' />
                    </div>
                </div>
                <div>
                    <div className='hidden xl:block absolute xl:-top-12 xl:-right-1.5 separator-glow h-[550px] w-0.5' />
                    <div className='block xl:hidden absolute -bottom-4 xl:-top-12 right-[50%] translate-x-[50%] xl:-right-1.5 separator h-0.5 w-[350px] sm:w-[650px]' />
                </div>
            </div>
            <div className='relative'>
                <div className='bento-card overflow-hidden rounded-l-none aspect-6/5 translate-0 xl:translate-y-8'>
                    <div className="p-4 pr-8 h-full mr-auto flex flex-col justify-start text-start">
                        <h3 className='content-subtitle text-2xl mb-4'>{compSections[2].title}</h3>
                        <p className='content-body foreground-z'>{compSections[2].desc}</p>
                        <img src={"/images/action.png"} className='absolute bottom-0 right-0 w-[380px] sm:w-[400px] drop-shadow-2xl drop-shadow-[#d9cdad55] contrast-120 brightness-90' />
                    </div>
                </div>
            </div>
        </div>
    );
};