import { apiService } from '@/services/apiService';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    const cookieStore = cookies()
    const token = (await cookieStore).get(`${process.env.AUTH_TOKEN}`)

    try {
        const profiles = await apiService.fetchAuditProfiles(token!.value);
    
        return NextResponse.json({
            message: 'Profiles fetched successfully',
            profiles,
        }, { status: 200 });

    } catch (err) {
        let errMessage = ""
        if (err instanceof Error) {
            errMessage = err.message
        }
        return NextResponse.json({
            message: errMessage ? `Failed to fetch profiles: ${errMessage}` : "Failed to fetch profiles"
        }, { status: 500 })
    }
}