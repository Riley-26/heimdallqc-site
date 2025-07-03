import { withAuth } from 'next-auth/middleware'

export default withAuth(
    function middleware(req) {
        // If the user is not authorized, redirect to /signin
        if (!req.nextauth.token){
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
    matcher: [
        '/account/:path*'
    ]
}