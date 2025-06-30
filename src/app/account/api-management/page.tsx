"use client"

import React from "react"

export default function ApiManagement(){

    return (
        <>
            <section id="settings" className="min-h-screen pt-[100px] flex flex-col px-16">
                <h3 className="content-miniheading text-[16px]">ACCOUNT</h3>
                <h2 className="content-title text-5xl">API Management</h2>
                <div className="grid grid-cols-5 gap-6 my-8">
                    <div className="bento-card col-span-2">
                        <h2 className="content-subtitle text-2xl mb-4">Profile</h2>
                        <div className="border-2 border-neutral-800 rounded-md h-[200px]">

                        </div>
                    </div>
                    <div className="bento-card col-span-3">
                        <h2 className="content-subtitle text-2xl mb-4">Team Members</h2>
                        <div className="border-2 border-neutral-800 rounded-md h-[200px] flex justify-center items-center">
                            <span className="content-body">Coming soon</span>
                        </div>
                    </div>
                    <div className="bento-card col-span-5">
                        <h2 className="content-subtitle text-2xl mb-4">Current Plan</h2>
                        <div className="border-2 border-neutral-800 rounded-md h-[200px]">

                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}