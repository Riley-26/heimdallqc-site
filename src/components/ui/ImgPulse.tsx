const SVGPulseGlow = ({ className }: { className: string }) => {
    // Replace this with your SVG content - just paste your SVG paths here

    return (
        <div className={`flex min-h-screen items-center justify-center m-4 ${className}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="-10 -10 320 320" strokeWidth={0.5} stroke="currentColor" className="h-[550px] w-[550px]">
                <defs>
                    <radialGradient id="gradient" gradientUnits="userSpaceOnUse" r="45%" cx="0" cy="0">
                        <stop stopColor="#ecd9a8" />
                        <stop offset={1} stopColor="#ecd9a822" />
                        <animateTransform
                            attributeName="gradientTransform"
                            type="translate"
                            values="0 0; 320 320; 0 320; 0 0;"
                            dur="10s"
                            repeatCount="indefinite"
                        />
                    </radialGradient>
                </defs>
                <g id="Layer_1-2" data-name="Layer 1" stroke="url(#gradient)" strokeLinecap="round" strokeLinejoin="round">
                    <g>
                        <path className="cls-5" d="m237.77,151.96c-1.54,46.78-39.17,84.4-85.95,85.95l-51.83,51.83c15.35,5.35,31.84,8.27,49.01,8.27.51,0,1.02-.01,1.53-.02l147.45-147.45c0-.51.02-1.02.02-1.53,0-17.17-2.92-33.66-8.27-49.02l-51.97,51.97Z"/>
                        <path className="cls-3" d="m237.85,148.98c0,.5-.01,1-.02,1.51l51.55-51.55c-4.98-13.97-12-26.98-20.68-38.68l-43.3,43.3c7.91,13.3,12.46,28.82,12.46,45.42Z"/>
                        <path className="cls-3" d="m148.84,237.99c-16.59,0-32.12-4.55-45.42-12.46l-43.16,43.16c11.69,8.69,24.7,15.7,38.68,20.68l51.4-51.4c-.5,0-1,.02-1.51.02Z"/>
                        <path className="cls-4" d="m224.86,102.68l43.23-43.23c-8.29-11.01-18.08-20.83-29.06-29.17l-43.14,43.14c11.79,7.36,21.73,17.39,28.97,29.26Z"/>
                        <path className="cls-4" d="m73.28,196.04l-43,43c8.34,10.98,18.15,20.77,29.17,29.06l43.09-43.09c-11.87-7.24-21.9-17.18-29.26-28.97Z"/>
                        <path className="cls-1" d="m148.84,59.97c16.91,0,32.72,4.72,46.19,12.91l43.21-43.21c-11.66-8.73-24.66-15.78-38.61-20.82l-51.14,51.14c.12,0,.23,0,.35,0Z"/>
                        <path className="cls-1" d="m59.83,148.98c0-.12,0-.23,0-.35l-50.99,50.99c5.04,13.95,12.09,26.95,20.82,38.61l43.07-43.07c-8.19-13.46-12.91-29.27-12.91-46.19Z"/>
                        <path className="cls-6" d="m147.04,60.01l51.55-51.55C183.07,2.99,166.39,0,149,0c-.23,0-.47,0-.7,0L0,148.3c0,.23,0,.47,0,.7,0,17.39,2.99,34.07,8.46,49.58l51.4-51.4c.95-47.73,39.45-86.23,87.17-87.17Z"/>
                        <path className="cls-2" d="m.03,146.87L146.87.03C66.27,1.17,1.17,66.27.03,146.87Z"/>
                    </g>
                </g>
            </svg>
        </div>
    )
}

export default SVGPulseGlow
