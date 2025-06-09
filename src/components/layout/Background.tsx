"use client";

import React, { useEffect, useState, useRef } from "react";

const LinesBackground:any = () => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const vignetteRef = useRef<HTMLDivElement | null>(null);

    return (
        <div className="">
            <canvas
                ref={canvasRef}
                className="fixed top-0 left-0 w-full h-full -z-50"
                style={{
                    backgroundImage: "url('/images/background.svg')",
                    backgroundRepeat: "repeat",
                    backgroundSize: "cover",
                }}
            />
            <div
                ref={vignetteRef}
                className="fixed top-0 left-0 w-full h-full pointer-events-none -z-9"
                style={{
                    background: `radial-gradient(
                        circle at center,
                        transparent 0%,
                        transparent 40%,
                        rgba(0, 0, 0, 0.4) 60%,
                        rgba(0, 0, 0, 1) 100%
                    )`,
                }}
            />
        </div>
    );
}

export default LinesBackground;