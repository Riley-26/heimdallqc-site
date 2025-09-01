import { apiService } from '@/services/apiService';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    const cookieStore = cookies()
    const token = (await cookieStore).get("next-auth.session-token")

    const keys = await apiService.fetchKeys(token!.value);

    return NextResponse.json({
        message: 'Keys fetched successfully',
        keys,
    }, { status: 200 });
}