import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import EmailProvider from 'next-auth/providers/email'

const handler = NextAuth({
    providers: [
        CredentialsProvider({
            name: 'credentials',
            credentials: {
                email: { label: 'Email', type: 'email' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials) {
                if (!credentials?.email || !credentials?.password) {
                    return null
                }

                const credentialsFetched = await fetch(
                    "http://127.0.0.1:8000/api/auth/login",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({
                            email: credentials.email,
                            password: credentials.password
                        })
                    }
                )

                const credentialsResponse = await credentialsFetched.json()

                if (credentialsFetched.status === 200) {
                    return credentialsResponse
                }

                // Return null if login fails
                return null
            }
        })
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
                name: token.name
            }
            return session
        },
        async signIn({ user }) {
            return true
        }
    }
})

export { handler as GET, handler as POST }