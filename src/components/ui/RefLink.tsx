import { ArrowOutward } from '@mui/icons-material'
import React from 'react'

type RefProps = {
    data: {
        id: number
        title: string
        link: string
    }
}

export const RefLink: React.FC<RefProps> = ({ data }) => {
    return (
        <sup>
            <a href={data?.link} target="_blank">
                <ArrowOutward style={{ fontSize: '12px' }} />
            </a>
        </sup>
    )
}
