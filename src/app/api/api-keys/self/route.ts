import { apiService } from '@/services/apiService';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    const cookieStore = cookies()
    const token = (await cookieStore).get("next-auth.session-token")

    try {
        const keys = await apiService.fetchKeys(token!.value);
    
        return NextResponse.json({
            message: 'Keys fetched successfully',
            keys,
        }, { status: 200 });

    } catch (err) {
        let errMessage = ""
        if (err instanceof Error) {
            errMessage = err.message
        }
        return NextResponse.json({
            message: errMessage ? `Failed to fetch keys: ${errMessage}` : "Failed to fetch keys"
        }, { status: 500 })
    }
}