import { useState } from "react"
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Layout = () => {


  return (
    <div className="w-screen h-screen relative">

      {/* <Navbar isOpen={isOpen}/> */}

      <Sidebar/>

      <div
      className="pr-[20px] pt-[10px] w-full h-full overflow-y-auto transition-all duration-300
      pl-[90px]"
      >
        <Outlet/>
      </div>

    </div>
  )
}

export default Layout