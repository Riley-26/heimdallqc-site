import { apiService } from "@/services/apiService";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json()

    const cookieStore = cookies()
    const token = (await cookieStore).get(`${process.env.AUTH_TOKEN}`)

    try {
        const session = await apiService.createPaymentSession(token!.value, body.priceId, body.successUrl, body.purchaseType, body.name)

        return NextResponse.json({
            message: "Session created successfully",
            session
        }, { status: 200 })
    } catch (err) {
        let errMessage = ""
        if (err instanceof Error) {
            errMessage = err.message
        }
        return NextResponse.json({
            message: errMessage ? `Failed to create session: ${errMessage}` : "Failed to create session"
        }, { status: 500 })
    }

}