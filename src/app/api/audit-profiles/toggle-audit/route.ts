import { apiService } from '@/services/apiService';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(request: NextRequest) {
    const cookieStore = cookies()
    const token = (await cookieStore).get(`${process.env.AUTH_TOKEN}`)

    const body = await request.json();

    try {
        const toggle = await apiService.toggleAudit(token!.value, body.profileId, body.toggleSetting);
    
        return NextResponse.json({
            message: 'Audit toggled successfully',
            toggle,
        }, { status: 200 });

    } catch (err) {
        let errMessage = ""
        if (err instanceof Error) {
            errMessage = err.message
        }
        return NextResponse.json({
            message: errMessage ? `Failed to toggle audit: ${errMessage}` : "Failed to toggle audit"
        }, { status: 500 })
    }
}