export const metadata = {
    title: 'API Docs'
}

export default function Layout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main>
            {children}
        </main>
    )
}
