import { apiService } from '@/services/apiService';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(request: NextRequest, { params }: { params: Promise<{ id: string }> }) {
    const cookieStore = await cookies()
    const token = cookieStore.get(`${process.env.AUTH_TOKEN}`)

    const { id } = await params

    try {
        console.log(id)
        const entry = await apiService.fetchEntryByWorkId(token!.value, id);
    
        return NextResponse.json({
            message: 'Entry fetched successfully',
            entry,
        }, { status: 200 });

    } catch (err) {
        let errMessage = ""
        if (err instanceof Error) {
            errMessage = err.message
        }
        return NextResponse.json({
            message: errMessage ? `Failed to fetch entry: ${errMessage}` : "Failed to fetch entry"
        }, { status: 500 })
    }
}