"use client"

import Link from 'next/link'
import React, { useEffect, useState } from "react";

type FooterProps = {
    loggedState: boolean;
}

export const Footer: React.FC<FooterProps> = ({ loggedState }) => {
    return (
        <footer className="bg-white border-t border-gray-200 h-20" aria-labelledby="footer-heading">
            
        </footer>
    )
}