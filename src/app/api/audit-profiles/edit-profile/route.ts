import { apiService } from '@/services/apiService';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(request: Request) {
    const body = await request.json();

    const cookieStore = cookies()
    const token = (await cookieStore).get(`${process.env.AUTH_TOKEN}`)

    try {
        const profile = await apiService.editAuditProfile(token!.value, body.name, body.schedule, body.pages);
    
        return NextResponse.json({
            message: 'Audit profile edited successfully',
            profile
        }, { status: 200 });
        
    } catch (err) {
        let errMessage = ""
        if (err instanceof Error) {
            errMessage = err.message
        }
        return NextResponse.json({
            message: errMessage ? `Failed to edit audit profile: ${errMessage}` : "Failed to edit audit profile"
        }, { status: 500 })
    }
}