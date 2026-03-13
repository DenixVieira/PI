import { useState } from "react"
import { Outlet } from 'react-router'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'

const Layout = () => {

  const [isOpen, setIsOpen] = useState(true)

  return (
    <div className="w-screen h-screen relative">

      <Navbar isOpen={isOpen}/>

      <Sidebar isOpen={isOpen} setIsOpen={setIsOpen}/>

      <div
      className={`pr-[20px] pt-[70px] w-full h-full overflow-y-auto transition-all duration-300
      ${isOpen ? "pl-[230px]" : "pl-[60px]"}`}
      >
        <Outlet/>
      </div>

    </div>
  )
}

export default Layout