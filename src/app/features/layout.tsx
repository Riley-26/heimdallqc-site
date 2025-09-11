export const metadata = {
    title: 'Features'
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
