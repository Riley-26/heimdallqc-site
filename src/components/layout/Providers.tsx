'use client'
import { SessionProvider } from 'next-auth/react'

type ProvidersProps = {
    children: React.ReactNode
    session?: any
}

export const Providers: React.FC<ProvidersProps> = ({ children, session }) => {
    return <SessionProvider session={session}>{children}</SessionProvider>
}
