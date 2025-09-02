import { apiService } from '@/services/apiService';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET({ params }: { params: { id: string } }) {
    const cookieStore = cookies()
    const token = (await cookieStore).get("next-auth.session-token")

    try {
        const entry = await apiService.fetchEntryDetails(token!.value, params.id);
    
        return NextResponse.json({
            message: 'Entry fetched successfully',
            entry,
        }, { status: 200 });

    } catch (err) {
        return NextResponse.json({
            message: 'Failed to fetch entry'
        }, { status: 500 });
    }
}