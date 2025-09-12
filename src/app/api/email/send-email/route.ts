import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    const body = await request.json()

    try {
        await resend.emails.send({
            from: 'support@heimdallqc.com',
            to: [body.to],
            subject: body.subject,
            html: body.html,
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