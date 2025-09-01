import { apiService } from '@/services/apiService';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    const cookieStore = cookies()
    const token = (await cookieStore).get("next-auth.session-token")

    const owner = await apiService.fetchOwner(token!.value);

    return NextResponse.json({
        message: 'Owner data fetched successfully',
        owner,
    }, { status: 200 });
}