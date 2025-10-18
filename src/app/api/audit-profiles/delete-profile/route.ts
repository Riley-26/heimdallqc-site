import { apiService } from '@/services/apiService';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(request: Request) {
    const body = await request.json();

    const cookieStore = cookies()
    const token = (await cookieStore).get(`${process.env.AUTH_TOKEN}`)

    try {
        await apiService.deleteAuditProfile(token!.value, body.profileId);
    
        return NextResponse.json({
            message: 'Audit profile deleted successfully'
        }, { status: 200 });
        
    } catch (err) {
        let errMessage = ""
        if (err instanceof Error) {
            errMessage = err.message
        }
        return NextResponse.json({
            message: errMessage ? `Failed to deactivate profile: ${errMessage}` : "Failed to deactivate profile"
        }, { status: 500 })
    }
}