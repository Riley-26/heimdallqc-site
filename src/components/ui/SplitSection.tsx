import React from 'react';

interface SectionData {
    title: string;
    desc: string;
    imageUrl?: string;
    imageAlt?: string;
}

interface DiagonalSplitSectionProps {
    sections: [SectionData, SectionData, SectionData];
    className?: string;
    showLines?: boolean;
}

const DiagonalSplitSection: React.FC<DiagonalSplitSectionProps> = ({
    sections,
    className = ""
}) => {

    return (
        <div className={`w-full min-h-[380px] max-w-[1200px] mx-auto ${className}`}>
            {/* First Section - Highest */}
            <div className='relative'>
                <div
                    className="absolute -top-24 left-[32.6%] front-z pointer-events-none bg-gradient-to-t from-transparent via-[#d8af41] to-transparent"
                    style={{
                        width: '2px',
                        height: '600px',
                        transform: 'rotate(9deg)',
                        transformOrigin: 'center',
                    }}
                />
                <div
                    className="absolute -top-8 -left-2 bento-card inset-0 min-h-[380px] rounded-l-2xl overflow-hidden"
                    style={{
                        clipPath: 'polygon(0% 0%, 35.83% 0%, 30.83% 100%, 0% 100%)'
                    }}
                >
                    <div className="p-4 pr-14 h-full w-[33.3%] mr-auto flex flex-col justify-start text-start">
                        <h3 className='content-subtitle text-2xl mb-4'>{sections[0].title}</h3>
                        <p className='content-body'>{sections[0].desc}</p>
                        <img src={"/images/analysis.png"} className='absolute -bottom-2 left-6 w-[400px] drop-shadow-2xl drop-shadow-[#d9cdad55] contrast-120 brightness-100' />
                    </div>
                </div>
            </div>

            {/* Second Section - Lowest */}
            <div className='relative'>
                <div
                    className="absolute -top-24 left-[66.7%] front-z pointer-events-none bg-gradient-to-t from-transparent via-[#d8af41] to-transparent"
                    style={{
                        width: '2px',
                        height: '600px',
                        transform: 'rotate(9deg)',
                        transformOrigin: 'center',
                    }}
                />
                <div
                    className="absolute -top-2 left-0 inset-0 min-h-[380px] bento-card overflow-hidden text-center"
                    style={{
                        clipPath: 'polygon(30.83% 100%, 35.83% 0%, 69.16% 0%, 64.16% 100%)'
                    }}
                >
                    <div className="p-4 px-10 h-full w-[33.3%] mx-auto flex flex-col justify-start text-start">
                        <h3 className='content-subtitle text-2xl mb-4'>{sections[1].title}</h3>
                        <p className='content-body'>{sections[1].desc}</p>
                        <img src={"/images/modif.png"} className='absolute -bottom-7 right-26 -translate-x-[50%] w-[450px] drop-shadow-2xl drop-shadow-[#d9cdad55] contrast-125 brightness-100' />
                    </div>
                </div>
            </div>

            {/* Third Section - Middle Height */}
            <div className='relative'>
                <div
                    className="absolute top-4 left-4 inset-0 min-h-[380px] bento-card rounded-r-2xl overflow-hidden"
                    style={{
                        clipPath: 'polygon(64.16% 100%, 69.16% 0%, 100% 0%, 100% 100%)'
                    }}
                >
                    <div className="p-4 pl-14 h-full w-[33.3%] ml-auto flex flex-col justify-start text-start">
                        <h3 className='content-subtitle text-2xl mb-4'>{sections[2].title}</h3>
                        <p className='content-body'>{sections[2].desc}</p>
                        <img src={"/images/action.png"} className='absolute -bottom-12 -right-28 w-[500px] drop-shadow-2xl drop-shadow-[#d9cdad55] contrast-125 brightness-100' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DiagonalSplitSection;