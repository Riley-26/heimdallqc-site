import { apiService } from '@/services/apiService';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: Request) {
    const body = await request.json();

    const cookieStore = cookies()
    const token = (await cookieStore).get(`${process.env.AUTH_TOKEN}`)

    try {
        const webhook = await apiService.createWebhook(token!.value, body.webhookName, body.endpoint);
    
        return NextResponse.json({
            message: 'Webhook created successfully',
            webhook
        }, { status: 200 });
        
    } catch (err) {
        let errMessage = ""
        if (err instanceof Error) {
            errMessage = err.message
        }
        return NextResponse.json({
            message: errMessage ? `Failed to create webhook: ${errMessage}` : "Failed to create webhook"
        }, { status: 500 })
    }
}