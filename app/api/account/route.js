import connectToDB from "@/libs/database"
import Account from "@/models/account"
import { NextResponse } from "next/server"

export const POST = async (request) => {
    try {
        const {name, password, id, gpa, cohort, kom, gender, subjects, role } = await request.json()
        
        await connectToDB()
        await Account.create({
            name, 
            password, 
            id, 
            gpa, 
            cohort, 
            kom, 
            gender, 
            subjects, 
            role
        })

        return new NextResponse(JSON.stringify({ message: "Account was created" }), { status: 201 });
    } catch (error) {
        console.error("Error creating account:", error)
        return new NextResponse(JSON.stringify({ error: "Failed to create account", details: error.message }), { status: 500 })
    }
} 

export const GET = async () => {
    try {
        await connectToDB()
        const accounts = await Account.find({})

        return new NextResponse(JSON.stringify(accounts), { status: 200 })
    } catch (error) {
        console.error("Error fetching accounts:", error)
        return new NextResponse(JSON.stringify({ error: "Failed to fetch all accounts", details: error.message }), { status: 500 })
    }
} 
