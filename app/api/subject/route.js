import connectToDB from "@/libs/database"
import Subject from "@/models/subject"
import { NextResponse } from "next/server"

export const POST = async (request) => {
    try {
        const {name, room, time, lecturer} = await request.json()
        
        await connectToDB()
        await Subject.create({name, room, time, lecturer})

        return new NextResponse(JSON.stringify({ message: "subject was created" }), { status: 201 });
    } catch (error) {
        console.log(error)
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 

export const GET = async () => {
    try {
        await connectToDB()
        const subjects = await Subject.find({})

        return new Response(JSON.stringify(subjects), { status: 200 })
    } catch (error) {
        console.log(error)
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 