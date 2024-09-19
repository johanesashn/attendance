"use client"

import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

const page = () => {
    const router = useRouter()
    const [user, setUser] = useState({})

    useEffect(() => {
        if (!sessionStorage?.user){
            return router.push('/')
        }
        setUser(JSON.parse(sessionStorage?.user).data)
    }, [])

    return (
        <div>
            {console.log(user)}
            <h1>welcome back <span>{user?.name}</span></h1>
        </div>
    )
}

export default page
