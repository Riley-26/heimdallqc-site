import { apiService } from '@/services/apiService';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    const cookieStore = cookies()
    const token = (await cookieStore).get("next-auth.session-token")

    try {
        const methods = await apiService.fetchPaymentMethods(token!.value);
    
        return NextResponse.json({
            message: 'Keys fetched successfully',
            methods,
        }, { status: 200 });

    } catch (err) {
        return NextResponse.json({
            message: 'Failed to fetch Payment Methods'
        }, { status: 200 });
    }
}