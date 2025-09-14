import { apiService } from '@/services/apiService';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function PATCH(request: NextRequest) {
    const body = await request.json()

    const cookieStore = cookies()
    const token = (await cookieStore).get(`${process.env.AUTH_TOKEN}`)

    try {
        await apiService.saveEmailPrefs(token!.value, body.lowTokens, body.tokensThreshold);
    
        return NextResponse.json({
            message: 'Email preferences saved successfully'
        }, { status: 200 });
        
    } catch (err) {
        let errMessage = ""
        if (err instanceof Error) {
            errMessage = err.message
        }
        return NextResponse.json({
            message: errMessage ? `Failed to save email preferences: ${errMessage} `: "Failed to save email preferences"
        }, { status: 500 })
    }
}