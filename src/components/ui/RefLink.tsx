import React from "react";
import { ArrowOutward } from "@mui/icons-material";

type RefProps = {
    data: {
        id: number,
        title: string;
        link: string;
    }
}

export const RefLink: React.FC<RefProps> = ({ data }) => {
    return (
        <sup>
            <a href={data.link} target="_blank">
                <ArrowOutward style={{ fontSize: "12px" }}/>
            </a>
        </sup>
    )
}