import { getToken } from 'next-auth/jwt'
import { withAuth } from 'next-auth/middleware'
import { NextRequest, NextResponse } from 'next/server'
import { apiService } from './services/apiService'
import { signOut } from 'next-auth/react'

export type JwtType = {
    name: string
    email: string
    sub?: string
    id: string
    exp: number
    iat?: number
    jti: string
}

export default withAuth(
    async function middleware(request) {
        const token = (await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })) as JwtType | null
        const { pathname } = request.nextUrl
        const privateRoute = '/account'

        // Skip if not accessing "account"
        if (!pathname.startsWith(privateRoute)) {
            return NextResponse.next()
        }

        // Redirect if not signed in or API unavailable
        try {
            const health = await apiService.healthCheck()
            if (!health || !token) {
                throw new Error()
            }
        } catch (err) {
            return NextResponse.redirect(new URL('/signin', request.url))
        }

        return NextResponse.next()
    }
)

export const config = {
    matcher: '/account/:path*',
}
