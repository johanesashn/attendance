"use client"

import { useRouter } from "next/navigation"
import { useEffect } from "react"

const page = () => {
    const router = useRouter()

    useEffect(() => {
        if (!sessionStorage?.user){
            return router.push('/')
        }
    }, [])
    
    return (
        <div>
        
        </div>
    )
}

export default page
