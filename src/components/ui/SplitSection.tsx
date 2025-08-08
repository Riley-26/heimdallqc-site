import React, { useEffect, useState } from 'react';

interface SectionData {
    title: string;
    desc: string;
    imageUrl?: string;
    imageAlt?: string;
}

interface SplitSectionProps {
    sections: [SectionData, SectionData, SectionData];
    className?: string;
    showLines?: boolean;
}

export const SplitSection: React.FC<SplitSectionProps> = ({
    sections,
    className = ""
}) => {
    const [windowSize, setWindowSize] = useState<number>()

    useEffect(() => {
        if (window.onload) setWindowSize(window.innerWidth)
    }, [])

    return (
        <div className={`w-full grid grid-cols-1 xl:grid-cols-3 max-w-[500px] xl:max-w-none gap-8 xl:gap-2 min-h-[380px] mx-auto sm:mt-0 ${className}`}>
            {/* First Section - Highest */}
            <div className='relative'>
                <div className='bento-card overflow-hidden rounded-r-none aspect-6/5 translate-0 xl:-translate-y-8'>
                    <div className="p-4 pr-8 h-full mr-auto flex flex-col justify-start text-start">
                        <h3 className='content-subtitle text-2xl mb-4'>{sections[0].title}</h3>
                        <p className='content-body foreground-z'>{sections[0].desc}</p>
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
                        <h3 className='content-subtitle text-2xl mb-4'>{sections[1].title}</h3>
                        <p className='content-body foreground-z'>{sections[1].desc}</p>
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
                        <h3 className='content-subtitle text-2xl mb-4'>{sections[2].title}</h3>
                        <p className='content-body foreground-z'>{sections[2].desc}</p>
                        <img src={"/images/action.png"} className='absolute bottom-0 right-0 w-[380px] sm:w-[400px] drop-shadow-2xl drop-shadow-[#d9cdad55] contrast-120 brightness-90' />
                    </div>
                </div>
            </div>
        </div>
    );
};