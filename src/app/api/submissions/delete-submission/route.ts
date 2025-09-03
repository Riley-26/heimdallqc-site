import { apiService } from "@/services/apiService";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
    const body = await request.json()

    const cookieStore = cookies()
    const token = (await cookieStore).get("next-auth.session-token")

    try {
        await apiService.deleteEntry(token!.value, body.entryId)

        return NextResponse.json({
            message: "Deleted entry successfully"
        }, { status: 200 })
    } catch (err) {
        let errMessage = ""
        if (err instanceof Error) {
            errMessage = err.message
        }
        return NextResponse.json({
            message: errMessage ? `Failed to delete entry: ${errMessage}` : "Failed to delete entry"
        }, { status: 500 })
    }

}