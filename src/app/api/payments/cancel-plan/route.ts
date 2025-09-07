import { apiService } from "@/services/apiService";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function PATCH(request: NextRequest) {
    const cookieStore = cookies()
    const token = (await cookieStore).get("next-auth.session-token")

    try {
        await apiService.cancelPlan(token!.value)

        return NextResponse.json({
            message: "Plan changed successfully"
        }, { status: 200 })
    } catch (err) {
        let errMessage = ""
        if (err instanceof Error) {
            errMessage = err.message
        }
        return NextResponse.json({
            message: errMessage ? `Failed to change plan: ${errMessage}` : "Failed to change plan"
        }, { status: 500 })
    }

}