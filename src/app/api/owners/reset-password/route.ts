import { apiService } from '@/services/apiService';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(request: NextRequest) {
    const body = await request.json()

    try {
        await apiService.resetPassword(body.email, body.token, body.password);
    
        return NextResponse.json({
            message: 'Password reset successfully'
        }, { status: 200 });
        
    } catch (err) {
        let errMessage = ""
        if (err instanceof Error) {
            errMessage = err.message
        }
        return NextResponse.json({
            message: errMessage ? `Failed to reset password: ${errMessage} `: "Failed to reset password"
        }, { status: 500 })
    }
}