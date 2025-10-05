'use client'

import { MobileInfo, Sidebar } from '@/components/layout/index'
import { QueryClient, QueryClientProvider  } from '@tanstack/react-query'
import { useState } from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
    const [queryClient] = useState(() => new QueryClient({
        defaultOptions: {
            queries: {
                staleTime: 5 * 60 * 1000,
                gcTime: 10 * 60 * 1000,
                refetchOnWindowFocus: false,
            },
        },
    }))

    return (
        <QueryClientProvider client={queryClient}>
            <Sidebar />
            <main className="relative ml-[80px] xl:ml-[300px]">
                {children}
                <MobileInfo />
            </main>
        </QueryClientProvider>
    )
}
