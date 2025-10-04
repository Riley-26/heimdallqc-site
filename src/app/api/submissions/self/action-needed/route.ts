import { apiService } from '@/services/apiService';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const cookieStore = cookies()
    const token = (await cookieStore).get(`${process.env.AUTH_TOKEN}`)

    try {
        const entries = await apiService.fetchActionEntries(token!.value);
    
        return NextResponse.json({
            message: 'Entries fetched successfully',
            entries
        }, { status: 200 });

    } catch (err) {
        let errMessage = ""
        if (err instanceof Error) {
            errMessage = err.message
        }
        return NextResponse.json({
            message: errMessage ? `Failed to fetch entries: ${errMessage}` : "Failed to fetch entries"
        }, { status: 500 })
    }
}