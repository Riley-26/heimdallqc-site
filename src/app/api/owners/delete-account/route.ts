import { apiService } from "@/services/apiService";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
    const body = await request.json()

    const cookieStore = cookies()
    const token = (await cookieStore).get(`${process.env.AUTH_TOKEN}`)

    try {
        const deleted = await apiService.deleteOwner(token!.value, body.password)

        return NextResponse.json({
            message: "User deleted successfully"
        }, { status: 200 })

    } catch (err) {
        let errMessage = ""
        if (err instanceof Error) {
            errMessage = err.message
        }
        return NextResponse.json({
            message: errMessage ? `Failed to delete user: ${errMessage}` : "Failed to delete user"
        }, { status: 500 })
    }
}