import { apiService } from "@/services/apiService";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json()

    const cookieStore = cookies()
    const token = (await cookieStore).get(`${process.env.AUTH_TOKEN}`)

    try {
        await apiService.createEntry(token!.value, body.text, body.keyId)

        return NextResponse.json({
            message: "Created entry successfully"
        }, { status: 200 })
    } catch (err) {
        let errMessage = ""
        if (err instanceof Error) {
            errMessage = err.message
        }
        return NextResponse.json({
            message: errMessage ? `Failed to create entry: ${errMessage}` : "Failed to create entry"
        }, { status: 500 })
    }

}