"use client"

import React, { useState, useEffect } from 'react'

export const Section: React.FC<any> = ({ children, ...props }) => {

    return (
        <section id={props.id} className={props.className + " py-24"}>
            {children}
        </section>
    )
}
