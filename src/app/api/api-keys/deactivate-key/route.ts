import { apiService } from '@/services/apiService';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(request: Request) {
    const body = await request.json();

    const cookieStore = cookies()
    const token = (await cookieStore).get("next-auth.session-token")

    try {
        await apiService.deleteKey(token!.value, body.keyId);
    
        return NextResponse.json({
            message: 'Key deleted successfully'
        }, { status: 200 });
        
    } catch (err) {
        let errMessage = ""
        if (err instanceof Error) {
            errMessage = err.message
        }
        return NextResponse.json({
            message: errMessage ? `Failed to deactivate key: ${errMessage}` : "Failed to deactivate key"
        }, { status: 500 })
    }
}