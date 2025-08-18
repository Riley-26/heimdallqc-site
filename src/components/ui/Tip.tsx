import { InfoOutline } from '@mui/icons-material'
import Tooltip from '@mui/material/Tooltip'
import { styled } from '@mui/material/styles'
import Link from 'next/link';
import React from 'react'

const CustomTooltip = styled(
    ({ className, children, ...props }: React.ComponentProps<typeof Tooltip>) => (
        <Tooltip {...props} classes={{ popper: className }}>
            {children}
        </Tooltip>
    )
)`
    & .MuiTooltip-tooltip {
        background-color: #1a1a1a;
        color: #ffffff;
        padding: 12px 16px;
        border-radius: 6px;
        white-space: pre-wrap;
        box-shadow: 0 0 20px #00000077;
        max-width: 480px;
    }

    @media (max-width: 768px) {
        & .MuiTooltip-tooltip {
            padding: 8px;
            max-width: 280px;
        }
    }

    & .MuiTooltip-arrow {
        color: #1a1a1a;
    }
`;

interface TipProps {
    className?: string
    size?: number
    tooltip: {
        title: string
        desc: string
        ex?: string
        strength?: string
    }
    windowWidth: number
}

export const Tip: React.FC<TipProps> = ({ className, size = 22, tooltip, windowWidth }) => {
    return (
        <CustomTooltip title={
            <div className='py-4 px-2'>
                <h4 className='content-subtitle-acc mb-2'>{tooltip.title}</h4>
                <p className='content-body text-sm md:text-base mb-2'>{tooltip.desc}</p>
                { tooltip.strength && <p className='content-body text-base'><Link href="/privacy" className='underline underline-offset-2'>Protection:</Link> {tooltip.strength}</p> }
                {
                    windowWidth >= 768 && <>
                        <div className='my-4 separator opacity-30' />
                        <p className='content-body text-sm'>{tooltip.ex}</p>
                    </>
                }
            </div>
        }
            arrow
            placement={windowWidth >= 768 ? 'right': 'top'}
            
        >
            <InfoOutline sx={{ fontSize: `${size}px` }} className='text-neutral-500 hover:text-neutral-400 transition-colors duration-200' />
        </CustomTooltip>
    )
}
