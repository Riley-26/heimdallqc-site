import { Container, Html, Text, Img } from '@react-email/components'
import React from 'react'

export const ContactConfirmation: React.FC = () => {
    return (
        <Html>
            <Container style={{ padding: '20px', fontFamily: "Arial" }}>
                <Container style={{ width: "100%", backgroundColor: "#111", height: "120px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Img src="https://heimdallqc.com/images/SVG/logo-colour.svg" alt="Heimdall QC Logo" style={{ width: "80px" }} />
                </Container>
                <Text>Hi,</Text>
                <Text>Thanks for reaching out! We&apos;ve received your message and will get back to you soon.</Text>
                <Text>
                    Best regards,
                    <br />
                    The Heimdall QC Team
                </Text>
            </Container>
        </Html>
    )
}
