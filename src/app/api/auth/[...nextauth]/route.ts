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

                // Your actual login logic here - check against database
                // This is just an example:
                if (credentials.email === "test@example.com" && credentials.password === "password") {
                    return {
                        id: "1",
                        email: credentials.email,
                        name: "Test User"
                    }
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
        }
    }
})

export { handler as GET, handler as POST }