'use client'

import { Footer, Header } from '@/components/layout/index'
import Feedback from '@/components/ui/Feedback'
import { IconContainer } from '@/components/ui/index'
import { lib } from '@/services/lib'
import { Cancel, CheckCircle, Search } from '@mui/icons-material'
import { useState } from 'react'

export default function VerifChecker() {
    const [results, setResults] = useState(false)
    const [link, setLink] = useState('')
    const [verified, setVerified] = useState(false)

    const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        // BACKEND SEARCH
        const linkSearch = await fetch(`http://127.0.0.1:8000/api/verif-sites/${link}`)

        if (linkSearch.status === 200) {
            setVerified(true)
        } else {
            setVerified(false)
        }

        setResults(true)
        lib.scrollToSection("#results")
    }

    return (
        <>
            {/* LINK INPUT */}
            <Header />
            <Feedback />
            <section id="link-input" className="section-container flex min-h-screen flex-col justify-center gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading">VERIFICATION CHECKER</h3>
                    <h2 className="content-title mb-6">Check if a website is Verified</h2>
                    <p className="content-subtitle mb-2">If you see a website using Heimdall but are skeptical if it&apos;s legit or not, check here.</p>
                    <p className="content-subtitle mb-16">Websites using &quot;Privacy Mode&quot; will not be shown in search results.</p>
                    <form className="relative mx-auto w-full lg:max-w-[900px]" onSubmit={(e) => handleSearch(e)}>
                        <input
                            className="content-body h-10 w-full rounded-[40px] border border-white px-6 py-4 text-white lg:h-20 lg:p-8"
                            placeholder="Input site's domain, i.e. 'heimdall.com'"
                            value={link}
                            onChange={(e) => setLink(e.target.value)}
                        />
                        <IconContainer
                            className={'absolute right-[50%] mt-4 translate-x-[50%] lg:top-[50%] lg:right-4 lg:mt-0 lg:translate-x-0 lg:translate-y-[-50%]'}
                            role="submit"
                        >
                            <Search style={{ fontSize: '32px' }} />
                        </IconContainer>
                    </form>
                </div>
            </section>
            {/* DETAILS */}
            <section id="results" className="section-container flex min-h-screen flex-col justify-center gap-8">
                <div className="text-center">
                    <h3 className="content-miniheading">RESULTS</h3>
                    {!results ? (
                        <h2 className="content-title">The results will appear here</h2>
                    ) : (
                        <div className="flex w-full flex-col items-center justify-center">
                            <a href="/" target='_blank' className="content-body my-4 underline underline-offset-4">
                                <i>{link}</i>
                            </a>
                            <h2 className="content-title mb-6">This site is...</h2>
                            <div className="bento-card mt-6 flex w-[400px] flex-col items-center justify-center gap-2">
                                {verified ? (
                                    <>
                                        <CheckCircle sx={{ fontSize: '72px', color: 'green' }} />
                                        <span className="content-subtitle">Verified</span>
                                    </>
                                ) : (
                                    <>
                                        <Cancel sx={{ fontSize: '72px', color: 'red' }} />
                                        <span className="content-subtitle">Not Verified</span>
                                    </>
                                )}
                            </div>
                        </div>
                    )}
                </div>
            </section>
            <Footer />
        </>
    )
}
