"use client"

import { usePathname, useRouter } from 'next/navigation';
import Modal from './Modal';

function ResponsiveAppBar() {
  const path = usePathname();
  const router = useRouter()

  const logout = () => {
    router.push("/")
  }
  
  return (
    <div className={`top-0 fixed bg-slate-100 navbar ${path === '/' && 'hidden'}`}>
      <div className="flex-1">
        <a className="btn btn-ghost text-xl">Attendance</a>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">
          <li className='w-44'>
            <Modal 
              method={logout}
              heading={"Confirmation"}
              description={"Are you sure want to logout?"}
            />
          </li>
        </ul>
      </div>
  </div>
  );
}
export default ResponsiveAppBar;