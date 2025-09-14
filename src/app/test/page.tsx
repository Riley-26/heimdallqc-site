import { WelcomeEmail } from "@/components/emailTemplates/WelcomeEmail";

export default function Test() {

    return (
        <div className="min-h-screen">
            <div style={{ padding: '20px', backgroundColor: "#222", fontFamily: "Arial" }}>
                <h1 style={{ color: "#fff", fontSize: "28px", marginBottom: "16px" }}>Welcome to Heimdall!</h1>
                <p style={{ color: "#ccc", fontSize: "16px", marginBottom: "24px" }}>
                    Thank you for signing up. We're excited to have you join our community!
                </p>
                <p style={{ color: "#ccc", fontSize: "16px", marginBottom: "24px" }}>
                    Get started by exploring your dashboard and customizing your experience.
                </p>
                <p style={{ color: "#888", fontSize: "14px" }}>
                    If you have any questions, feel free to reply to this email.
                </p>
            </div>
        </div>
    )
}