import { apiService } from "@/services/apiService";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json()

    const cookieStore = cookies()
    const token = (await cookieStore).get("next-auth.session-token")

    try {
        await apiService.uploadEntry(token!.value, body.text, body.keyId)

        return NextResponse.json({
            message: "Uploaded entry successfully"
        }, { status: 200 })
    } catch (err) {
        return NextResponse.json({
            message: "Failed to upload entry"
        }, { status: 500 })
    }

}