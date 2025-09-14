import { Container, Html, Text } from '@react-email/components'
import React from 'react'

export const ContactConfirmation: React.FC = () => {
    return (
        <Html>
            <Container style={{ padding: '20px', fontFamily: "Arial" }}>
                <Text>Hi,</Text>
                <Text>Thanks for reaching out! We've received your message and will get back to you soon.</Text>
                <Text>
                    Best regards,
                    <br />
                    The Heimdall QC Team
                </Text>
            </Container>
        </Html>
    )
}
