import React from 'react';

interface SectionData {
    title: string;
    description: string;
    imageUrl?: string;
    imageAlt?: string;
}

interface LineStyle {
    color?: string;
    width?: string;
    style?: 'solid' | 'dashed' | 'dotted';
    opacity?: string;
}

interface DiagonalSplitSectionProps {
    sections: [SectionData, SectionData, SectionData];
    className?: string;
    showLines?: boolean;
    lineStyle?: LineStyle;
}

const DiagonalSplitSection: React.FC<DiagonalSplitSectionProps> = ({
    sections,
    className = "",
    showLines = true,
    lineStyle = {}
}) => {
    const {
        color = 'rgba(0, 0, 0, 0.2)',
        width = '2px',
        style = 'solid',
        opacity = '1'
    } = lineStyle;

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
                        opacity: opacity,
                        borderStyle: style
                    }}
                />
                <div
                    className="absolute -top-8 -left-2 bento-card inset-0 min-h-[380px] rounded-l-2xl overflow-hidden"
                    style={{
                        clipPath: 'polygon(0% 0%, 35.83% 0%, 30.83% 100%, 0% 100%)'
                    }}
                >
                    <div className="p-6 h-full w-[33.3%] mr-auto flex flex-col justify-center">
                        <p className='content-body'>hello</p>
                    </div>
                </div>
            </div>

            {/* Second Section - Lowest */}
            <div className='relative'>
                <div
                    className="absolute -top-24 left-[66.5%] front-z pointer-events-none bg-gradient-to-t from-transparent via-[#d8af41] to-transparent"
                    style={{
                        width: '2px',
                        height: '600px',
                        transform: 'rotate(9deg)',
                        transformOrigin: 'center',
                        opacity: opacity,
                        borderStyle: style
                    }}
                />
                <div
                    className="absolute top-0 inset-0 min-h-[380px] bento-card overflow-hidden text-center"
                    style={{
                        clipPath: 'polygon(30.83% 100%, 35.83% 0%, 69.16% 0%, 64.16% 100%)'
                    }}
                >
                    <div className="p-6 h-full w-[33.3%] mx-auto flex flex-col justify-center">
                        <p className='content-body'>hello</p>
                    </div>
                </div>
            </div>

            {/* Third Section - Middle Height */}
            <div className='relative'>
                <div
                    className="absolute -top-4 left-2 inset-0 min-h-[380px] bento-card rounded-r-2xl overflow-hidden"
                    style={{
                        clipPath: 'polygon(64.16% 100%, 69.16% 0%, 100% 0%, 100% 100%)'
                    }}
                >
                    <div className="p-6 h-full w-[33.3%] ml-auto flex flex-col justify-center">
                        <p className='content-body'>hello</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

// Example usage component
const ExampleUsage: React.FC = () => {
    const sampleData: [SectionData, SectionData, SectionData] = [
        {
            title: "Design",
            description: "Beautiful, modern interfaces that engage users and drive results.",
            imageUrl: "/api/placeholder/64/64",
            imageAlt: "Design icon"
        },
        {
            title: "Develop",
            description: "Robust, scalable solutions built with cutting-edge technology.",
            imageUrl: "/api/placeholder/64/64",
            imageAlt: "Development icon"
        },
        {
            title: "Deploy",
            description: "Seamless launches with ongoing support and optimization.",
            imageUrl: "/api/placeholder/64/64",
            imageAlt: "Deploy icon"
        }
    ];

    return (
        <div className="p-8 bg-white space-y-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                Our Process
            </h2>

            {/* Default lines */}
            <DiagonalSplitSection sections={sampleData} />

            {/* Custom line styling */}
            <DiagonalSplitSection
                sections={sampleData}
                lineStyle={{
                    color: '#3b82f6',
                    width: '3px',
                    style: 'solid',
                    opacity: '0.8'
                }}
            />

            {/* Dashed lines */}
            <DiagonalSplitSection
                sections={sampleData}
                lineStyle={{
                    color: '#ef4444',
                    width: '2px',
                    style: 'dashed',
                    opacity: '0.6'
                }}
            />

            {/* No lines */}
            <DiagonalSplitSection
                sections={sampleData}
                showLines={false}
            />
        </div>
    );
};

export default DiagonalSplitSection;
export { ExampleUsage };