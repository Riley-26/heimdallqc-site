import { apiService } from "@/services/apiService";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json()

    const cookieStore = cookies()
    const token = (await cookieStore).get("next-auth.session-token")

    try {
        const plan = await apiService.changePlan(token!.value, body.newPlanId)

        return NextResponse.json({
            message: "Plan changed successfully",
            plan
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