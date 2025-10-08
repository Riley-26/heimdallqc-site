import { apiService } from '@/services/apiService';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    const cookieStore = cookies()
    const token = (await cookieStore).get(`${process.env.AUTH_TOKEN}`)

    try {
        const webhooks = await apiService.fetchWebhooks(token!.value);
    
        return NextResponse.json({
            message: 'Webhooks fetched successfully',
            webhooks,
        }, { status: 200 });

    } catch (err) {
        let errMessage = ""
        if (err instanceof Error) {
            errMessage = err.message
        }
        return NextResponse.json({
            message: errMessage ? `Failed to fetch webhooks: ${errMessage}` : "Failed to fetch webhooks"
        }, { status: 500 })
    }
}