import { apiService } from "@/services/apiService";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
    const body = await request.json()

    const cookieStore = cookies()
    const token = (await cookieStore).get(`${process.env.AUTH_TOKEN}`)

    try {
        await apiService.editEntry(token!.value, body.text, body.entryUniqueId)

        return NextResponse.json({
            message: "Edited entry successfully"
        }, { status: 200 })
    } catch (err) {
        let errMessage = ""
        if (err instanceof Error) {
            errMessage = err.message
        }
        return NextResponse.json({
            message: errMessage ? `Failed to edit entry: ${errMessage}` : "Failed to edit entry"
        }, { status: 500 })
    }

}