import { WelcomeEmail } from '@/components/emailTemplates/WelcomeEmail';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { render } from '@react-email/render';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    const body = await request.json()

    const emailHTML = await render(await WelcomeEmail({name: body.name}));

    try {
        await resend.emails.send({
            from: 'support@heimdallqc.com',
            to: [body.to],
            subject: "Thank you for signing up to Heimdall QC!",
            html: emailHTML,
        });

        return NextResponse.json({
            message: 'Email sent successfully'
        }, { status: 200 });
    } catch (err) {
        let errMessage = ""
        if (err instanceof Error) {
            errMessage = err.message
        }
        return NextResponse.json({
            message: errMessage ? `Failed to fetch invoices: ${errMessage}` : "Failed to fetch invoices"
        }, { status: 500 })
    }
}