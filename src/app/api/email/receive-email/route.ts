import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';
import { render } from '@react-email/render';
import { ContactEmail } from '@/components/emailTemplates/ContactEmail';
import { ContactConfirmation } from '@/components/emailTemplates/ContactConfirmation';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    const body = await request.json()

    const emailHTML = await render(await ContactEmail({email: body.email, message: body.message}));
    const replyHTML = await render(await ContactConfirmation({}));

    try {
        await resend.emails.send({
            from: 'support@heimdallqc.com',
            to: ["heimdallqc@gmail.com"],
            replyTo: body.email,
            subject: `New contact from ${ (body.firstName && body.lastName) ? `${body.firstName} ${body.lastName}` : body.email }`,
            html: emailHTML,
        });

        await resend.emails.send({
            from: 'support@heimdallqc.com',
            to: [body.email],
            subject: `Thanks for contacting us${ body.firstName ? " " + body.firstName : "" }!`,
            html: replyHTML
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