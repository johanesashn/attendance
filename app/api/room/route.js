import connectToDB from "@/libs/database"
import Room from "@/models/room"
import { NextResponse } from "next/server"

export const POST = async (request) => {
    try {
        const {name, location} = await request.json()
        
        await connectToDB()
        await Room.create({name, location})

        return new NextResponse(JSON.stringify({ message: "room was created" }), { status: 201 });
    } catch (error) {
        console.log(error)
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 

export const GET = async () => {
    try {
        await connectToDB()
        const rooms = await Room.find({})

        return new Response(JSON.stringify(rooms), { status: 200 })
    } catch (error) {
        console.log(error)
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 