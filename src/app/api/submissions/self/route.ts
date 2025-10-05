import { apiService } from '@/services/apiService';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest) {
    const cookieStore = cookies()
    const token = (await cookieStore).get(`${process.env.AUTH_TOKEN}`)
    const { searchParams } = new URL(request.url) 

    try {
        const entries = await apiService.fetchEntries(token!.value, searchParams);
        const entryCount = await apiService.fetchEntryCount(token!.value, searchParams)
    
        return NextResponse.json({
            message: 'Entries fetched successfully',
            entries,
            entryCount
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