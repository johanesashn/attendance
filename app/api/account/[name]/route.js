import connectToDB from "@/libs/database"
import Account from "@/models/account"
import { NextResponse } from "next/server"

export const GET = async (request, { params }) => {
    const { name } = params
    console.log(name)

    try {
        await connectToDB()
        const accounts = await Account.find({name})

        return new NextResponse(JSON.stringify(accounts), { status: 200 })
    } catch (error) {
        console.log(error)
        return new NextResponse("Failed to fetch all prompts", { status: 500 })
    }
} 