import { apiService } from '@/services/apiService';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    const cookieStore = cookies()
    const token = (await cookieStore).get(`${process.env.AUTH_TOKEN}`)

    try {
        const methods = await apiService.fetchPaymentMethods(token!.value);
    
        return NextResponse.json({
            message: 'Keys fetched successfully',
            methods,
        }, { status: 200 });

    } catch (err) {
        let errMessage = ""
        if (err instanceof Error) {
            errMessage = err.message
        }
        return NextResponse.json({
            message: errMessage ? `Failed to fetch payment methods: ${errMessage}` : "Failed to payment methods"
        }, { status: 500 })
    }
}