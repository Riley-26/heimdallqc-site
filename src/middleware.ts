import { getToken } from 'next-auth/jwt'
import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
    async function middleware(request) {
        const token = await getToken({
            req: request,
            secret: process.env.NEXTAUTH_SECRET
        })

        const { pathname, hostname } = request.nextUrl

        if (process.env.NODE_ENV === "development" && hostname === "www.heimdallqc.com") {
            return new NextResponse("", {
                status: 401
            })
        }

        const privateRoute = '/account'

        if (!pathname.startsWith(privateRoute)) {
            return NextResponse.next()
        }

        if (!token) {
            return NextResponse.redirect(new URL('/signin', request.url))
        }

        return NextResponse.next()
    },
    {
        callbacks: {
            authorized: () => true,
        },
    }
)

export const config = {
    matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)'
}
