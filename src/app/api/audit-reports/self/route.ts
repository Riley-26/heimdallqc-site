import { apiService } from '@/services/apiService';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    const cookieStore = cookies()
    const token = (await cookieStore).get(`${process.env.AUTH_TOKEN}`)

    try {
        const reports = await apiService.fetchAuditReports(token!.value);
    
        return NextResponse.json({
            message: 'Reports fetched successfully',
            reports,
        }, { status: 200 });

    } catch (err) {
        let errMessage = ""
        if (err instanceof Error) {
            errMessage = err.message
        }
        return NextResponse.json({
            message: errMessage ? `Failed to fetch reports: ${errMessage}` : "Failed to fetch reports"
        }, { status: 500 })
    }
}