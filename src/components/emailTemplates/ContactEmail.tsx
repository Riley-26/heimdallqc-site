import { Button, Container, Html, Heading, Text } from '@react-email/components'
import React from 'react'

interface EmailProps {
    email: string
    message: string
}

export const ContactEmail: React.FC<EmailProps> = ({ email, message }) => {
    return (
        <Html>
            <Container style={{ padding: '20px', fontFamily: "Arial" }}>
                <Heading style={{ color: '#374151' }}>New message</Heading>
                <Text>
                    <strong>From:</strong> {email}
                </Text>
                <Text>
                    <strong>Message:</strong>
                </Text>
                <div
                    style={{
                        background: '#f3f4f6',
                        padding: '15px',
                        borderRadius: '5px',
                        whiteSpace: 'pre-wrap',
                    }}
                >
                    {message}
                </div>
                <Text style={{ fontSize: '12px', color: '#6b7280' }}>Reply directly to this email to respond to {email}</Text>
            </Container>
        </Html>
    )
}
