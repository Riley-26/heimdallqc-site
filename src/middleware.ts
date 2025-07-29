import { withAuth } from 'next-auth/middleware'
import { NextResponse } from 'next/server'

export default withAuth(
    function middleware(req) {
        // If the user is not authorized, redirect to /signin

        if (process.env.NODE_ENV === "production") {
            return new NextResponse("", {
                status: 401
            })
        }

        if (!req.nextauth.token) {
            return Response.redirect(new URL('/signin', req.url))
        }
    },
    {
        callbacks: {
            authorized: () => true,
        },
    }
)

export const config = {
    //matcher: ['/account/:path*'],
    matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)'
}
