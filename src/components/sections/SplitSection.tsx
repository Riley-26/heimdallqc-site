import React from 'react'
import Image from 'next/image'

interface SplitSectionProps {
    className?: string
}

const compSections: [{ title: string; desc: string }, { title: string; desc: string }, { title: string; desc: string }] = [
    { title: 'Analysis', desc: 'A submitted text is analysed. This would happen via user submission, site audit or manual upload.' },
    { title: 'Modification', desc: 'If the result meets certain criteria, the text is modified in real-time using a webhook.' },
    { title: 'Action', desc: 'In your dashboard, you will see which entries are problematic and need permanent action.' },
]

export const SplitSection: React.FC<SplitSectionProps> = ({ className = '' }) => {
    return (
        <div className={`mx-auto grid min-h-[380px] w-full max-w-[500px] grid-cols-1 gap-8 sm:mt-0 xl:max-w-none xl:grid-cols-3 xl:gap-2 ${className}`}>
            {/* First Section - Highest */}
            <div className="relative">
                <div className="bento-card aspect-6/5 translate-0 overflow-hidden rounded-r-none xl:-translate-y-8">
                    <div className="mr-auto flex h-full flex-col justify-start p-4 pr-8 text-start">
                        <h3 className="content-subtitle mb-4 text-2xl">{compSections[0].title}</h3>
                        <p className="content-body foreground-z">{compSections[0].desc}</p>
                        <Image
                            alt="Text Analysis"
                            src={'/images/analysis.png'}
                            width={500}
                            height={350}
                            className="absolute right-0 bottom-0 w-[380px] brightness-90 contrast-120 drop-shadow-2xl drop-shadow-[#d9cdad55] sm:w-[400px]"
                        />
                    </div>
                </div>
                <div>
                    <div className="separator-glow absolute hidden h-[550px] w-0.5 xl:-top-24 xl:-right-1.5 xl:block" />
                    <div className="separator absolute right-[50%] -bottom-4 block h-0.5 w-[350px] translate-x-[50%] sm:w-[650px] xl:-top-24 xl:-right-1.5 xl:hidden" />
                </div>
            </div>
            <div className="relative">
                <div className="bento-card aspect-6/5 translate-0 overflow-hidden rounded-none">
                    <div className="mr-auto flex h-full flex-col justify-start p-4 pr-8 text-start">
                        <h3 className="content-subtitle mb-4 text-2xl">{compSections[1].title}</h3>
                        <p className="content-body foreground-z">{compSections[1].desc}</p>
                        <Image
                            alt="Text Modification"
                            src={'/images/modif.png'}
                            width={500}
                            height={350}
                            className="absolute right-0 bottom-0 w-[380px] brightness-90 contrast-120 drop-shadow-2xl drop-shadow-[#d9cdad55] sm:w-[400px]"
                        />
                    </div>
                </div>
                <div>
                    <div className="separator-glow absolute hidden h-[550px] w-0.5 xl:-top-12 xl:-right-1.5 xl:block" />
                    <div className="separator absolute right-[50%] -bottom-4 block h-0.5 w-[350px] translate-x-[50%] sm:w-[650px] xl:-top-12 xl:-right-1.5 xl:hidden" />
                </div>
            </div>
            <div className="relative">
                <div className="bento-card aspect-6/5 translate-0 overflow-hidden rounded-l-none xl:translate-y-8">
                    <div className="mr-auto flex h-full flex-col justify-start p-4 pr-8 text-start">
                        <h3 className="content-subtitle mb-4 text-2xl">{compSections[2].title}</h3>
                        <p className="content-body foreground-z">{compSections[2].desc}</p>
                        <Image
                            alt="Analysis Alert"
                            src={'/images/action.png'}
                            width={500}
                            height={350}
                            className="absolute right-0 bottom-0 w-[380px] brightness-90 contrast-120 drop-shadow-2xl drop-shadow-[#d9cdad55] sm:w-[400px]"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
