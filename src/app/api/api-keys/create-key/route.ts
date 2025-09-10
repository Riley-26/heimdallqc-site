import { apiService } from '@/services/apiService';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: Request) {
    const body = await request.json();

    const cookieStore = cookies()
    const token = (await cookieStore).get(`${process.env.AUTH_TOKEN}`)

    try {
        const key = await apiService.createKey(token!.value, body.keyName);
    
        return NextResponse.json({
            message: 'Key created successfully',
            key
        }, { status: 200 });
        
    } catch (err) {
        let errMessage = ""
        if (err instanceof Error) {
            errMessage = err.message
        }
        return NextResponse.json({
            message: errMessage ? `Failed to create key: ${errMessage}` : "Failed to create key"
        }, { status: 500 })
    }
}