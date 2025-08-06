import { getToken } from 'next-auth/jwt'
import { withAuth } from 'next-auth/middleware'
import { NextRequest, NextResponse } from 'next/server'
import { apiService } from './services/apiService'
import { signOut } from 'next-auth/react'

// Simple interface for our token
export type jwtType = {
    name: string
    email: string
    sub?: string
    id: number
    exp: number
    iat?: number
    jti: string
}

const isTokenValid = async (token: jwtType | null, request: NextRequest) => {
    const sessionChecked = request.cookies.get('session_verified')?.value
    const response = NextResponse.next()

    if (!token) return false
    if (token.exp && Date.now() >= token.exp * 1000) return false
    if (!token.email || !token.name || !token.id) return false
    
    if (!sessionChecked) {
        // First time in this session - check database
        try {
            const userExists = await apiService.isValidJwt(token)
            
            if (!userExists) {
                return false
            }
        } catch (err: unknown) {
            return false
        }
        
        // Mark session as verified
        response.cookies.set('session_verified', 'true', {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'lax',
            maxAge: 30 * 60, // 30 minutes session marker
        })
    } else {
        try {
            await apiService.healthCheck()
        } catch {
            return false
        }
    }

    return response
}

export default withAuth(
    async function middleware(request) {
        const token = (await getToken({ req: request, secret: process.env.NEXTAUTH_SECRET })) as jwtType | null
        const { pathname } = request.nextUrl
        const privateRoute = '/account'

        // Skip if not accessing "account"
        if (!pathname.startsWith(privateRoute)) {
            return NextResponse.next()
        }

        // Redirect if not signed in or API unavailable
        if (!token) {
            return NextResponse.redirect(new URL('/signin', request.url))
        } else {
            const newResponse = await isTokenValid(token, request)
            if (newResponse) {
                return newResponse
            } else {
                const response = NextResponse.redirect(new URL('/signin', request.url))
                response.cookies.delete('session_verified')
                response.cookies.delete('next-auth.session-token')
                return response
            }
        }
    }
)

export const config = {
    matcher: '/account/:path*',
}
