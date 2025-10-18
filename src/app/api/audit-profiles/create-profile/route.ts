import { apiService } from '@/services/apiService';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: Request) {
    const body = await request.json();

    const cookieStore = cookies()
    const token = (await cookieStore).get(`${process.env.AUTH_TOKEN}`)

    try {
        const profile = await apiService.createAuditProfile(token!.value, body.name, body.desc, body.pages, body.schedule);
    
        return NextResponse.json({
            message: 'Audit profile created successfully',
            profile
        }, { status: 200 });
        
    } catch (err) {
        let errMessage = ""
        if (err instanceof Error) {
            errMessage = err.message
        }
        return NextResponse.json({
            message: errMessage ? `Failed to create audit profile: ${errMessage}` : "Failed to create audit profile"
        }, { status: 500 })
    }
}