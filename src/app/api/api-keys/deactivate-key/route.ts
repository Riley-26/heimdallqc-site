import { apiService } from '@/services/apiService';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(request: Request) {
    const body = await request.json();

    const cookieStore = cookies()
    const token = (await cookieStore).get("next-auth.session-token")

    try {
        await apiService.deleteKey(token!.value, body.keyId);
    } catch (err) {
        return NextResponse.json({
            message: "Failed to delete key"
        }, { status: 500 })
    }

    return NextResponse.json({
        message: 'Key deleted successfully'
    }, { status: 200 });
}