import { apiService } from '@/services/apiService';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function DELETE(request: NextRequest) {
    const body = await request.json();

    const cookieStore = cookies()
    const token = (await cookieStore).get("next-auth.session-token")

    try {
        await apiService.deletePaymentMethod(token!.value, body.pmid);

        return NextResponse.json({
            message: 'Payment Method deleted successfully'
        }, { status: 200 });
        
    } catch (err) {
        return NextResponse.json({
            message: 'Failed to delete Payment Method'
        }, { status: 500 });
    }

}