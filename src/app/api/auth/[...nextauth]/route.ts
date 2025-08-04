import { apiService } from '@/services/apiService'
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' },
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null
                }
                try {
                    const loginResponse = await apiService.loginOwner(credentials)

                    return loginResponse
                } catch {
                    return null
                }
            },
        }),
    ],
    pages: {
        signIn: '/signin',
        verifyRequest: '/auth/verify-request',
    },
    callbacks: {
        async jwt({ token, user }) {
            if (user) {
                token.email = user.email
                token.name = user.name
                token.id = user.id
            }
            return token
        },
        async session({ session, token }) {
            session.user = {
                id: token.id,
                email: token.email,
                name: token.name,
            }
            return session
        },
        async signIn() {
            return true
        },
    },
})

export { handler as GET, handler as POST }
