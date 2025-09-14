import { Button, Container, Html } from '@react-email/components'
import React from 'react'

interface ResetProps {
    token: string
}

export const PasswordResetEmail: React.FC<ResetProps> = ({ token }) => {
    return (
        <Html>
            <Container style={{ padding: '20px', backgroundColor: "#222", fontFamily: "Arial" }}>
                <h1 style={{ color: "#fff", fontSize: "28px", marginBottom: "16px" }}>Your password reset link</h1>
                <Button
                    href={`${process.env.NEXT_PUBLIC_BASE_URL}/signin/reset-password?token=${token}`}
                    style={{
                        backgroundColor: "#222",
                        color: "#fff",
                        fontSize: "16px",
                        padding: "12px 24px",
                        borderRadius: "6px",
                        textDecoration: "none",
                        marginBottom: "24px",
                        border: "none",
                        display: "inline-block"
                    }}
                >
                    Reset your password
                </Button>
            </Container>
        </Html>
    )
}
