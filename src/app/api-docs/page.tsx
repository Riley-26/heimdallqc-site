'use client'

import { Footer, Header, Section } from '@/components/layout/index'
import Feedback from '@/components/ui/Feedback'
import SVGPulseGlow from '@/components/ui/ImgPulse'
import { ScrollWidget } from '@/components/ui/index'
import { ArrowForwardIos } from '@mui/icons-material'
import Image from 'next/image'

const sections = [
    { id: 'start', name: 'Getting Started' },
    { id: 'troubleshooting', name: 'Troubleshooting' },
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
                                <span className='content-body text-xl my-4 tracking-wider'>npm install hmdl</span>
                            </div>
                        </div>
                        {/* QUICK START GUIDE */}
                        <div className="flex flex-col gap-4">
                            <h3 className='content-subtitle text-3xl mb-2'>To Get Started</h3>
                            <p className='content-body'>Import the SDK, initialise the Heimdall Client and set the API key to a key you have created in your account.</p>
                            <div className='bento-card flex flex-col'>
                                <span className='content-body text-base text-neutral-400'>JAVASCRIPT</span>
                                <span className='content-body text-xl my-4 tracking-wider'>
                                    <span>import {'{'} HmdlClient, HmdlWidget {'}'} from &apos;hmdl&apos;</span>
                                    <br/>
                                    <br/>
                                    <span>const hmdl = new HmdlClient({'{' }</span>
                                    <br/>
                                    <span className='ml-8'>apiKey: &apos;abc123...&apos;</span>
                                    <br/>
                                    <span>{'}'})</span>
                                    <br/>
                                </span>
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
                                    <span className='content-body text-base text-neutral-400'>JAVASCRIPT</span>
                                    <span className='content-body text-xl my-4 tracking-wider'>hmdl.analyse({' { } '})</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h4 className='content-subtitle text-2xl'>Request</h4>
                                <div className='bento-card flex flex-col'>
                                    <span className='content-body text-base text-neutral-400'>JSON</span>
                                    <div className='content-body text-xl my-4'>
                                        <span>{'{'}</span>
                                        <br/>
                                        <span className='ml-8'>text: &apos;This is a submitted text to be analysed.&apos;</span>
                                        <br/>
                                        <span>{'}'}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h4 className='content-subtitle text-2xl'>Response</h4>
                                <div className='bento-card flex flex-col'>
                                    <span className='content-body text-base text-neutral-400'>JSON</span>
                                    <div className='content-body text-xl my-4 tracking-wider'>
                                        <span>{'{'}</span>
                                        <br/>
                                        <span className='ml-8'>status: 200,</span>
                                        <br/>
                                        <span className='ml-8'>message: &apos;Analysis started&apos;</span>
                                        <br/>
                                        <span className='ml-8'>workId: &apos;hmdl-wk-12345...&apos;</span>
                                        <br/>
                                        <span className='ml-8'>text: &apos;This is a text to be analysed...&apos;</span>
                                        <br/>
                                        <span>{'}'}</span>
                                    </div>
                                    <div className='content-body text-xl my-4 tracking-wider'>
                                        <span>{'{'}</span>
                                        <br/>
                                        <span className='ml-8'>status: 500,</span>
                                        <br/>
                                        <span className='ml-8'>message: &apos;Analysis failed to start&apos;</span>
                                        <br/>
                                        <span className='ml-8'>workId: &apos;hmdl-wk-12345...&apos;</span>
                                        <br/>
                                        <span className='ml-8'>text: &apos;This is a text to be analysed...&apos;</span>
                                        <br/>
                                        <span>{'}'}</span>
                                    </div>
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
                                    <span className='content-body text-base text-neutral-400'>JAVASCRIPT</span>
                                    <span className='content-body text-xl my-4 tracking-wider'>hmdl.analyse({' { } '})</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h4 className='content-subtitle text-2xl'>Request</h4>
                                <div className='bento-card flex flex-col'>
                                    <span className='content-body text-base text-neutral-400'>JSON</span>
                                    <div className='content-body text-xl my-4 tracking-wider'>
                                        <span>{'{'}</span>
                                        <br/>
                                        <span className='ml-8'>text: &apos;This is a submitted text to be analysed.&apos;,</span>
                                        <br/>
                                        <span className='ml-8'>webhookUrl: &apos;https://your-backend.com/api/webhook&apos;</span>
                                        <br/>
                                        <span>{'}'}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h4 className='content-subtitle text-2xl'>Response</h4>
                                <div className='bento-card flex flex-col'>
                                    <span className='content-body text-base text-neutral-400'>JSON</span>
                                    <div className='content-body text-xl my-4 tracking-wider'>
                                        <span>{'{'}</span>
                                        <br/>
                                        <span className='ml-8'>status: 200,</span>
                                        <br/>
                                        <span className='ml-8'>message: &apos;Successfully sent webhook&apos;,</span>
                                        <br/>
                                        <span className='ml-8'>workId: &apos;hmdl-wk-12345...&apos;,</span>
                                        <br/>
                                        <span className='ml-8'>text: &apos;This is a text to be analysed...&apos;</span>
                                        <br/>
                                        <span>{'}'}</span>
                                    </div>
                                    <div className='content-body text-xl my-4 tracking-wider'>
                                        <span>{'{'}</span>
                                        <br/>
                                        <span className='ml-8'>status: 500,</span>
                                        <br/>
                                        <span className='ml-8'>message: &apos;Failed to send webhook&apos;,</span>
                                        <br/>
                                        <span className='ml-8'>workId: &apos;hmdl-wk-12345...&apos;,</span>
                                        <br/>
                                        <span className='ml-8'>text: &apos;This is a text to be analysed...&apos;</span>
                                        <br/>
                                        <span>{'}'}</span>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h4 className='content-subtitle text-2xl'>Webhook Response</h4>
                                <div className='bento-card flex flex-col'>
                                    <span className='content-body text-base text-neutral-400'>JSON</span>
                                    <div className='content-body text-xl my-4 tracking-wider'>
                                        <span>{'{'}</span>
                                        <br/>
                                        <span className='ml-8'>status: 200,</span>
                                        <br/>
                                        <span className='ml-8'>message: &apos;Results successfully received&apos;,</span>
                                        <br/>
                                        <span className='ml-8'>workId: &apos;hmdl-wk-12345...&apos;,</span>
                                        <br/>
                                        <span className='ml-8'>text: &apos;This is a text to be analysed...&apos;,</span>
                                        <br/>
                                        <span className='ml-8'>modifiedText: &apos;This is the modified version of the submitted text&apos;</span>
                                        <br/>
                                        <span>{'}'}</span>
                                    </div>
                                    <div className='content-body text-xl my-4 tracking-wider'>
                                        <span>{'{'}</span>
                                        <br/>
                                        <span className='ml-8'>status: 200,</span>
                                        <br/>
                                        <span className='ml-8'>message: &apos;No results received&apos;,</span>
                                        <br/>
                                        <span className='ml-8'>workId: &apos;hmdl-wk-12345...&apos;,</span>
                                        <br/>
                                        <span className='ml-8'>text: &apos;This is a text to be analysed...&apos;,</span>
                                        <br/>
                                        <span className='ml-8'>modifiedText: null</span>
                                        <br/>
                                        <span>{'}'}</span>
                                    </div>
                                    <div className='content-body text-xl my-4 tracking-wider'>
                                        <span>{'{'}</span>
                                        <br/>
                                        <span className='ml-8'>status: 500,</span>
                                        <br/>
                                        <span className='ml-8'>message: &apos;Failed to process text&apos;,</span>
                                        <br/>
                                        <span className='ml-8'>workId: &apos;hmdl-wk-12345...&apos;,</span>
                                        <br/>
                                        <span className='ml-8'>text: &apos;This is a text to be analysed...&apos;,</span>
                                        <br/>
                                        <span className='ml-8'>modifiedText: null</span>
                                        <br/>
                                        <span>{'}'}</span>
                                    </div>
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
                                    <span className='content-body text-base text-neutral-400'>REACT</span>
                                    <span className='content-body text-xl my-4 tracking-wider'>{'<HmdlWidget />'}</span>
                                </div>
                            </div>
                            <div className='flex flex-col gap-4'>
                                <h4 className='content-subtitle text-2xl'>Props</h4>
                                <p className='content-body'>
                                    The props &apos;defaultExpanded&apos; and &apos;theme&apos; are optional, defaulting to the first value below. Provide the &apos;key&apos; prop with &apos;hmdl.key&apos; (automatically made) 
                                    and the &apos;client&apos; prop with the name of your initialised client.
                                </p>
                                <div className='bento-card flex flex-col'>
                                    <span className='content-body text-base text-neutral-400'>REACT</span>
                                    <div className='content-body text-xl my-4 tracking-wider'>
                                        <span>{'{'}</span>
                                        <br/>
                                        <span className='ml-8'>key: hmdl.key,</span>
                                        <br/>
                                        <span className='ml-8'>client: hmdl,</span>
                                        <br/>
                                        <span className='ml-8'>defaultExpanded: true || false,</span>
                                        <br/>
                                        <span className='ml-8'>theme: &apos;dark&apos; || &apos;light&apos;</span>
                                        <br/>
                                        <span>{'}'}</span>
                                    </div>
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
                                    <div className='content-body text-xl my-4 tracking-wider'>
                                        <span>if (!hmdl.hasConfirmed()) {'{'}</span>
                                        <br/>
                                        <span className='ml-8'>hmdl.setErrorPopup(true)</span>
                                        <br/>
                                        <span className='ml-8'>return</span>
                                        <br/>
                                        <span>{'}'} else {'{'}</span>
                                        <br/>
                                        <span className='ml-8'>const analysis = hmdl.analyse(textarea.value)</span>
                                        <br/>
                                        <span>{'}'}</span>
                                    </div>
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
            <Section id="troubleshooting" className="section-container flex min-h-screen flex-col justify-center gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading">
                        <span className="text-[16px]">API</span> — SUPPORT
                    </h3>
                    <h2 className="content-title py-2 text-6xl">Running into issues?</h2>
                </div>
            </Section>
            <Footer />
        </>
    )
}
