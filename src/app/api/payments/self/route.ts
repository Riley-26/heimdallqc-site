import { apiService } from '@/services/apiService';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    const cookieStore = cookies()
    const token = (await cookieStore).get(`${process.env.AUTH_TOKEN}`)

    try {
        const payments = await apiService.fetchPayments(token!.value);
    
        return NextResponse.json({
            message: 'Payments fetched successfully',
            payments,
        }, { status: 200 });
        
    } catch (err) {
        let errMessage = ""
        if (err instanceof Error) {
            errMessage = err.message
        }
        return NextResponse.json({
            message: errMessage ? `Failed to fetch payments: ${errMessage}` : "Failed to fetch payments"
        }, { status: 500 })
    }
}