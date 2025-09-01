import { apiService } from '@/services/apiService';
import { cookies } from 'next/headers';
import { NextRequest, NextResponse } from 'next/server';

export async function GET() {
    const cookieStore = cookies()
    const token = (await cookieStore).get("next-auth.session-token")

    try {
        const invoices = await apiService.fetchInvoices(token!.value);
    
        return NextResponse.json({
            message: 'Invoices fetched successfully',
            invoices,
        }, { status: 200 });
        
    } catch (err) {
        return NextResponse.json({
            message: 'Failed to fetch invoices'
        }, { status: 500 });
    }
}