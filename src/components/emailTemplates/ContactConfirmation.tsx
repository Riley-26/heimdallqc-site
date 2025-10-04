import { Container, Html, Text, Img } from '@react-email/components'
import React from 'react'

export const ContactConfirmation: React.FC = () => {
    return (
        <Html>
            <Container style={{ padding: '20px', fontFamily: "Arial" }}>
                <Container style={{ width: "100%", height: "120px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Img src="https://heimdallqc.com/images/SVG/logo-main.png" alt="Heimdall QC Logo" style={{ height: "75px" }} />
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
