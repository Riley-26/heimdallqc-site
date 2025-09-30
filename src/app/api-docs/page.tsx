'use client'

import { Footer, Header, Section } from '@/components/layout/index'
import Feedback from '@/components/ui/Feedback'
import SVGPulseGlow from '@/components/ui/ImgPulse'
import { IconContainer, ScrollWidget } from '@/components/ui/index'
import { ArrowForwardIos, Email } from '@mui/icons-material'
import Image from 'next/image'
import SyntaxHighlighter from "react-syntax-highlighter"
import { monokaiSublime } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const sections = [
    { id: 'start', name: 'Getting Started' },
    { id: 'services', name: 'Core Services' },
    { id: 'support', name: 'Support' },
]

export default function ApiDocs() {
    return (
        <>
            <Header />
            <Feedback />
            <ScrollWidget sections={sections} />
            <Section id="api" className="section-start-area">
                <div className="foreground-z absolute top-[45%] right-[50%] translate-x-[50%] translate-y-[-50%] p-2">
                    <SVGPulseGlow className={"back-z opacity-30"} />
                </div>
                <div className="section-container-sm front-z text-center">
                    <h3 className="content-miniheading">API</h3>
                    <h1 className="content-title mb-4">Comprehensive guide</h1>
                    <h2 className="content-subtitle">Our integration tutorial and suggestions for best practices</h2>
                </div>
                <ArrowForwardIos className="absolute bottom-12" sx={{ fontSize: '32px', transform: 'rotate(90deg)' }} />
            </Section>
            {/* GETTING STARTED */}
            <Section id="start" className="section-container-sm flex min-h-screen flex-col justify-center gap-8 mt-16">
                <div>
                    <h3 className="content-miniheading">
                        <span className="text-[16px]">API</span> — GETTING STARTED
                    </h3>
                    <h2 className="content-title py-2 text-6xl">Getting started</h2>
                    <div className='mt-16 flex flex-col gap-16'>
                        {/* AUTHENTICATION */}
                        <div className="flex flex-col gap-4">
                            <h3 className='content-subtitle text-3xl mb-2'>Authentication</h3>
                            <ul className='content-body ml-12 flex flex-col gap-4'>
                                <li className="list-disc">
                                    Account
                                </li>
                                <li className="list-disc">
                                    API key management
                                </li>
                            </ul>
                        </div>
                        {/* BASE URL */}
                        <div className="flex flex-col gap-4">
                            <h3 className='content-subtitle text-3xl mb-2'>Installation</h3>
                            <p className='content-body'>Simply install the SDK for your language</p>
                            <div className='bento-card flex flex-col'>
                                <span className='content-body text-base text-neutral-400'>NODE</span>
                                <pre className='text-lg my-4'>
                                    <code>npm install hmdl</code>
                                </pre>
                            </div>
                        </div>
                        {/* QUICK START GUIDE */}
                        <div className="flex flex-col gap-4">
                            <h3 className='content-subtitle text-3xl mb-2'>To Get Started</h3>
                            <p className='content-body'>Import the SDK, initialise the Heimdall Client and set the API key to a key you have created in your account.</p>
                            <div className='bento-card flex flex-col'>
                                <span className='content-body text-base text-neutral-400 mb-4'>JAVASCRIPT</span>
                                <SyntaxHighlighter
                                    language='javascript'
                                    style={monokaiSublime}
                                    customStyle={{ background: 'none' }}
                                >
{`import { HmdlClient, HmdlWidget } from 'hmdl'

const hmdl = new HmdlClient({
    apiKey: 'abc123-def456...'
}`}
                                </SyntaxHighlighter>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            {/* CORE SERVICES */}
            <Section id="services" className="section-container-sm flex min-h-screen flex-col justify-center gap-8">
                <div>
                    <h3 className="content-miniheading">
                        <span className="text-[16px]">API</span> — CORE SERVICES
                    </h3>
                    <h2 className="content-title py-2 text-6xl">Core services</h2>
                    <div className='mt-16 flex flex-col gap-22'>
                        <div className="flex flex-col gap-8">
                            <h3 className='content-subtitle text-3xl mb-2'>1. Analysis Service (Required)</h3>
                            <div className='flex flex-col gap-4'>
                                <h4 className='content-subtitle text-2xl'>Overview</h4>
                                <div className='flex flex-col'>
                                    <p className='content-body'>
                                        To run an analysis on submitted text, you must call the &apos;hmdl.analyse&apos; function with the required parameters. You only need to include 
                                        the text at the simplest level. The function does not need to be awaited, and the submission will appear in your account dashboard if the results meet requirements. 
                                        A &apos;workId&apos; will be returned in the response, allowing you to debug errors and store results manually.
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h4 className='content-subtitle text-2xl'>Function</h4>
                                <div className='bento-card flex flex-col'>
                                    <span className='content-body text-base text-neutral-400 mb-4'>JAVASCRIPT</span>
                                    <SyntaxHighlighter
                                        language='javascript'
                                        style={monokaiSublime}
                                        customStyle={{ background: 'none' }}
                                    >
{`hmdl.analyse({ })`}
                                    </SyntaxHighlighter>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h4 className='content-subtitle text-2xl'>Request</h4>
                                <div className='bento-card flex flex-col'>
                                    <span className='content-body text-base text-neutral-400 mb-4'>JSON</span>
                                    <SyntaxHighlighter
                                        language='javascript'
                                        style={monokaiSublime}
                                        customStyle={{ background: 'none' }}
                                    >
{`{
    text: 'This is a submitted text to be analysed.'
}`}
                                    </SyntaxHighlighter>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h4 className='content-subtitle text-2xl'>Response</h4>
                                <div className='bento-card flex flex-col'>
                                    <span className='content-body text-base text-neutral-400 mb-4'>JSON</span>
                                    <SyntaxHighlighter
                                        language='javascript'
                                        style={monokaiSublime}
                                        customStyle={{ background: 'none' }}
                                    >
{`{
    status: 200,
    message: 'Analysis started',
    workId: 'hmdl-wk-12345...',
    text: 'This is a text to be analysed...'
}

{
    status: 500,
    message: 'Analysis failed to start',
    workId: 'hmdl-wk-12345...',
    text: 'This is a text to be analysed...'
}`}
                                    </SyntaxHighlighter>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-8">
                            <h3 className='content-subtitle text-3xl mb-2'>2. Webhook Service (Optional)</h3>
                            <div className='flex flex-col gap-4'>
                                <h4 className='content-subtitle text-2xl'>Overview</h4>
                                <div className='flex flex-col'>
                                    <p className='content-body'>
                                        Create a webhook listener endpoint within your application, and add the endpoint link to the request. The &apos;hmdl.analyse&apos; function will return a response to acknowledge 
                                        that we received the request, then your application&apos;s endpoint will be called once the analysis is complete.
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h4 className='content-subtitle text-2xl'>Function</h4>
                                <div className='bento-card flex flex-col'>
                                    <span className='content-body text-base text-neutral-400 mb-4'>JAVASCRIPT</span>
                                    <SyntaxHighlighter
                                        language='javascript'
                                        style={monokaiSublime}
                                        customStyle={{ background: 'none' }}
                                    >
{`hmdl.analyse({ })`}
                                    </SyntaxHighlighter>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h4 className='content-subtitle text-2xl'>Request</h4>
                                <div className='bento-card flex flex-col'>
                                    <span className='content-body text-base text-neutral-400 mb-4'>JSON</span>
                                    <SyntaxHighlighter
                                        language='javascript'
                                        style={monokaiSublime}
                                        customStyle={{ background: 'none' }}
                                    >
{`{
    text: 'This is a submitted text to be analysed.',
    webhookUrl: 'https://your-backend.com/api/webhook'
}`}
                                    </SyntaxHighlighter>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h4 className='content-subtitle text-2xl'>Response</h4>
                                <div className='bento-card flex flex-col'>
                                    <span className='content-body text-base text-neutral-400 mb-4'>JSON</span>
                                    <SyntaxHighlighter
                                        language='javascript'
                                        style={monokaiSublime}
                                        customStyle={{ background: 'none' }}
                                    >
{`{
    status: 200,
    message: 'Successfully sent webhook',
    workId: 'hmdl-wk-12345...',
    text: 'This is a text to be analysed...'
}

{
    status: 500,
    message: 'Failed to send webhook',
    workId: 'hmdl-wk-12345...',
    text: 'This is a text to be analysed...'
}`}
                                    </SyntaxHighlighter>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h4 className='content-subtitle text-2xl'>Webhook Response</h4>
                                <div className='bento-card flex flex-col'>
                                    <span className='content-body text-base text-neutral-400 mb-4'>JSON</span>
                                    <SyntaxHighlighter
                                        language='javascript'
                                        style={monokaiSublime}
                                        customStyle={{ background: 'none' }}
                                    >
{`{
    status: 200,
    message: 'Results successfully received',
    workId: 'hmdl-wk-12345...',
    text: 'This is a text to be analysed...',
    modifiedText: 'This is the modified version of the submitted text'
}

{
    status: 200,
    message: 'No results received',
    workId: 'hmdl-wk-12345...',
    text: 'This is a text to be analysed...',
    modifiedText: null
}

{
    status: 500,
    message: 'Failed to process text',
    workId: 'hmdl-wk-12345...',
    text: 'This is a text to be analysed...',
    modifiedText: null
}`}
                                    </SyntaxHighlighter>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-8">
                            <h3 className='content-subtitle text-3xl mb-2'>3. Widget Service (Optional)</h3>
                            <div className='flex flex-col gap-4'>
                                <h4 className='content-subtitle text-2xl'>Overview</h4>
                                <div className='flex flex-col'>
                                    <p className='content-body'>
                                        An optional React component
                                    </p>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h4 className='content-subtitle text-2xl'>Component</h4>
                                <div className='bento-card flex flex-col'>
                                    <span className='content-body text-base text-neutral-400 mb-4'>REACT</span>
                                    <SyntaxHighlighter
                                        language='javascript'
                                        style={monokaiSublime}
                                        customStyle={{ background: 'none' }}
                                    >
                                        {`<HmdlWidget />`}
                                    </SyntaxHighlighter>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h4 className='content-subtitle text-2xl'>Props</h4>
                                <p className='content-body'>
                                    The props &apos;defaultExpanded&apos; and &apos;theme&apos; are optional, defaulting to the first value below. Provide the &apos;key&apos; prop with &apos;hmdl.key&apos; (automatically made) 
                                    and the &apos;client&apos; prop with the name of your initialised client.
                                </p>
                                <div className='bento-card flex flex-col'>
                                    <span className='content-body text-base text-neutral-400 mb-4'>REACT</span>
                                    <SyntaxHighlighter
                                        language='javascript'
                                        style={monokaiSublime}
                                        customStyle={{ background: 'none' }}
                                    >
{`{
    key: hmdl.key,
    client: hmdl,
    defaultExpanded: true || false,
    theme: 'dark' || 'light'
}`}
                                    </SyntaxHighlighter>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h4 className='content-subtitle text-2xl'>Error UI</h4>
                                <p className='content-body'>
                                    Within your &apos;submit&apos; event handler, you should enable the Widget to show the error popup if the user has not &apos;confirmed&apos;. While not necessarily 
                                    required, it will provide more accurate results as the user has confirmed that they have acknowledged the Widget and read the question.
                                </p>
                                <div className='bento-card flex flex-col'>
                                    <span className='content-body text-base text-neutral-400'>JAVASCRIPT</span>
                                    <SyntaxHighlighter
                                        language='javascript'
                                        style={monokaiSublime}
                                        customStyle={{ background: 'none' }}
                                    >
{`
if (!hmdl.hasConfirmed()) {
    hmdl.setErrorPopup(true)
    return
} else {
    const analysis = hmdl.analyse(textarea.value)
}
`}
                                    </SyntaxHighlighter>
                                </div>
                                <p className='content-body'>
                                    Use the &apos;hasConfirmed&apos; method of the client along with &apos;setErrorPopup&apos; for full Widget functionality.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>
            {/* SUPPORT */}
            <Section id="support" className="section-container flex min-h-screen flex-col justify-center gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading">
                        <span className="text-[16px]">API</span> — SUPPORT
                    </h3>
                    <h2 className="content-title py-2 text-6xl mb-12">Running into issues?</h2>
                    <div className="flex flex-col items-center justify-center">
                        <IconContainer className="mb-4 p-4 sm:p-6" href="/help#contact">
                            <Email className="scale-80 sm:scale-100" sx={{ fontSize: '48px' }} />
                        </IconContainer>
                        <span className="content-body">CONTACT</span>
                    </div>
                </div>
            </Section>
            <Footer />
        </>
    )
}
