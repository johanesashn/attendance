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

    useEffect(() => {
        if (navigator.geolocation) {
            const watchId = navigator.geolocation.watchPosition(
                (position) => {
                    const { latitude, longitude, altitude } = position.coords;
                    // setLocation({ lat: latitude, lng: longitude });
                    console.log(`Latitude: ${latitude}, Longitude: ${longitude}, altitude: ${altitude}`);
                    console.log(position.coords)
                },
                (err) => {
                    // setError(err.message);
                    console.log(err)
                },
                {
                    enableHighAccuracy: true, // Request high-accuracy location
                    timeout: 15000, // Set a timeout (in milliseconds)
                    maximumAge: 0 // Do not use cached position
                }
            );

            // Cleanup function to clear the watch when the component unmounts
            return () => {
                navigator.geolocation.clearWatch(watchId);
            };
        } else {
            setError('Geolocation is not supported by this browser.');
        }
    }, []);
    
    return (
        <div>
        
        </div>
    )
}

export default page