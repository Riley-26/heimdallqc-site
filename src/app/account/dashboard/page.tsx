"use client"

import React from "react"

export default function Dashboard(){

    return (
        <>
            <section id="settings" className="min-h-screen pt-[100px] flex flex-col px-16">
                <h3 className="content-miniheading text-[16px]">ACCOUNT</h3>
                <h2 className="content-title text-5xl">Dashboard</h2>
                <div className="grid grid-cols-5 gap-6 my-8">
                    <div className="bento-card col-span-3">
                        <h2 className="content-subtitle text-2xl mb-4">Entries</h2>
                        <div className="border-2 border-neutral-800 rounded-md h-[500px]">

                        </div>
                    </div>
                    <div className="bento-card col-span-2">
                        <h2 className="content-subtitle text-2xl mb-4">Action Required</h2>
                        <div className="border-2 border-neutral-800 rounded-md h-[500px]">
                            
                        </div>
                    </div>
                    <div className="bento-card col-span-5">
                        <h2 className="content-subtitle text-2xl mb-4">Manual Upload</h2>
                        <div className="border-2 border-neutral-800 rounded-md h-[400px]">

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}