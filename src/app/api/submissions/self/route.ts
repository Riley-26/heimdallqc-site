import { apiService } from '@/services/apiService';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    const cookieStore = cookies()
    const token = (await cookieStore).get("next-auth.session-token")

    try {
        const entries = await apiService.fetchEntries(token!.value);
    
        return NextResponse.json({
            message: 'Entries fetched successfully',
            entries,
        }, { status: 200 });

    } catch (err) {
        return NextResponse.json({
            message: 'Failed to fetch entries'
        }, { status: 500 });
    }
}