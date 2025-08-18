import { MobileInfo, Sidebar } from '@/components/layout/index'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Sidebar />
            <main className="ml-[80px] xl:ml-[300px] relative">
                {children}
                <MobileInfo />
            </main>
        </>
    )
}
