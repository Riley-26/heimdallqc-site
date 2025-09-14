import { Button, Container, Html } from '@react-email/components'
import React from 'react'

interface EmailProps {
    name: string
}

export const WelcomeEmail: React.FC<EmailProps> = ({ name }) => {
    return (
        <Html>
            <Container style={{ padding: '20px', backgroundColor: "#222", fontFamily: "Arial" }}>
                <h1 style={{ color: "#fff", fontSize: "28px", marginBottom: "16px" }}>Welcome to Heimdall{name && ` ${name}`}!</h1>
                <p style={{ color: "#ccc", fontSize: "16px", marginBottom: "24px" }}>
                    Thank you for signing up. We&apos;re excited to have you join our community!
                </p>
                <p style={{ color: "#ccc", fontSize: "16px", marginBottom: "24px" }}>
                    Get started by exploring your dashboard and customizing your experience.
                </p>
                <p style={{ color: "#888", fontSize: "14px" }}>
                    If you have any questions, feel free to reply to this email.
                </p>
            </Container>
        </Html>
    )
}
