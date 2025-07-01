import { Header, Sidebar } from "@/components/layout/index"

export default function Layout({ children }:{ children: React.ReactNode }){

    return (
        <>
            <Header scrolled={true}/>
            <Sidebar />
            <main className="ml-[80px] xl:ml-[300px]">
                {children}
            </main>
        </>
    )
}