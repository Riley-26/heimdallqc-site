import { apiService } from "@/services/apiService";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
    const body = await request.json()

    try {
        const login = await apiService.createOwner(body.email, body.name, body.company, body.domain, body.password)

        return NextResponse.json({
            message: "User created successfully",
            login
        }, { status: 200 })

    } catch (err) {
        let errMessage = ""
        if (err instanceof Error) {
            errMessage = err.message
        }
        return NextResponse.json({
            message: errMessage ? `Failed to create user: ${errMessage}` : "Failed to create user"
        }, { status: 500 })
    }
}