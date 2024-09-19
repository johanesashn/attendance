"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

const Modal = ({ heading, description, method }) => {
  const [user, setUser] = useState({})
  const router = useRouter()

  useEffect(() => {
    if (!sessionStorage?.user){
        return router.push('/')
    }
    setUser(JSON.parse(sessionStorage?.user).data)
  }, [])

  return (
    <details>
        <summary>Menu</summary>
        <ul className="bg-slate-100 rounded-t-none p-2 w-44">
        <li><Link href="/schedule">Schedule</Link></li>
        <li><Link href="/setting">Setting</Link></li>
        {user.role == "admin" && <li><Link href="/users">User</Link></li>}
        <li className="mt-2">
            <button className="btn btn-error text-white" onClick={()=>document.getElementById('my_modal_4').showModal()}>Logout</button>
            <dialog id="my_modal_4" className="modal">
            <div className="fixed modal-box w-1/3 max-w-5xl bg-slate-100">
                <h3 className="font-bold text-lg text-slate-700">{heading}</h3>
                <p className="pt-2 text-slate-500">{description}</p>
                <div className="modal-action">
                <form method="dialog">
                    <button className="btn btn-error text-white w-20 mr-2">Close</button>
                    <button className="btn btn-success text-white w-20" onClick={method}>Yes</button>
                </form>
                </div>
            </div>
            </dialog>
        </li>
        </ul>
    </details>
  )
}

export default Modal
