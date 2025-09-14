import { apiService } from '@/services/apiService';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(request: NextRequest) {
    const body = await request.json()

    try {
        const email = await apiService.sendResetEmail(body.email);

        if (email.token) {
            await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/email/send-email/password-reset`, {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({
                    token: email.token,
                    to: email.email
                })
            })
        }
    
        return NextResponse.json({
            message: 'Email sent successfully'
        }, { status: 200 });
        
    } catch (err) {
        let errMessage = ""
        if (err instanceof Error) {
            errMessage = err.message
        }
        return NextResponse.json({
            message: errMessage ? `Failed to send email: ${errMessage}` : "Failed to send email"
        }, { status: 500 })
    }
}