"use client"

// username = siahaan
// password = password

import { useRouter } from "next/navigation"
import axios from "axios";
import { useState, useRef, useEffect } from "react"
import bcrypt from "bcryptjs/dist/bcrypt";

const Login = () => {
  const router = useRouter()
  const [username, setUsername] = useState()
  const password = useRef("")
  const [unmatch, setUnmatch] = useState(false)

  const submit = async (e) => {
    e.preventDefault()
    let user = {}
    let checked = false
    
    try {
      const response = await axios.get(`http://localhost:3000/api/account/${username}`)
      user = response.data[0]
      checked = await bcrypt.compare(password.current.value, user.password)
    } catch (error) {
      console.log(error)
    }

    if (checked) {
      router.push("/dashboard")
      const expirationTime = new Date().getTime() + 3000;
      sessionStorage.setItem('user', JSON.stringify({ data: user, expiresAt: expirationTime }));
    } else {
      setUnmatch(true)
    }
  };

  return (
    <div className="flex justify-center items-center drop-shadow-xl">
      <div className="card bg-white w-96">
        <div className="card-body">
          <h2 className="text-3xl text-green-600 text-center w-full font-semibold">ATTEND NOW</h2>
          <form onSubmit={submit} className="mt-4">
            <input
              type="text"
              value={username}
              onChange={e => setUsername(e.target.value)}
              placeholder="Username"
              className="text-sm input input-bordered w-full bg-white max-w-xs focus:outline-none"
            />
            <input
              type="password"
              ref={password}
              placeholder="Password"
              className="text-sm input input-bordered w-full bg-white mt-2 max-w-xs focus:outline-none"
            />
            <button
              type="submit"
              className="btn btn-success mt-6 w-full text-white"
            >
              Login
            </button>
          </form>
          {unmatch && <p className="mt-2 text-xs text-error font-medium">username or password doesn't match</p>}
        </div>
      </div>
    </div>
  );
};

export default Login;
