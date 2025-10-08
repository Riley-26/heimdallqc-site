import { apiService } from '@/services/apiService';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(request: Request) {
    const body = await request.json();

    const cookieStore = cookies()
    const token = (await cookieStore).get(`${process.env.AUTH_TOKEN}`)

    try {
        await apiService.deleteWebhook(token!.value, body.webhookId);
    
        return NextResponse.json({
            message: 'Webhook deleted successfully'
        }, { status: 200 });
        
    } catch (err) {
        let errMessage = ""
        if (err instanceof Error) {
            errMessage = err.message
        }
        return NextResponse.json({
            message: errMessage ? `Failed to deactivate webhook: ${errMessage}` : "Failed to deactivate webhook"
        }, { status: 500 })
    }
}