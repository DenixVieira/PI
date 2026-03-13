import { TiThMenuOutline } from "react-icons/ti";
import { VscGraph } from "react-icons/vsc";
import { LuGrid2X2Check } from "react-icons/lu";
import { FaHouseChimneyUser,FaList } from "react-icons/fa6";
import { BiLogOut } from "react-icons/bi";

const Sidebar = () => {
  const navLinks = [
    { title: "Home",
      icon: <FaHouseChimneyUser />,
      active: false,
    },
    { title: "Chamados",
      icon: <FaList />,
      active: false,
    },
    { title: "Resolvidos",
      icon: <LuGrid2X2Check />,
      active: false,
    },
    { title: "Desempenho",
      icon: <VscGraph />,
      active: false,
    },
    
  ]

  return (
    <div className="fixed left-0 top-0 md:w-[230px] w-[60px] overflow-hidden h-full flex flex-col">
      <div className="w-full flex items-center md:justify-start justify-center md:pl-5 h-[70px] bg-white">
        <TiThMenuOutline />
      </div>
      <div className="w-full h-[calc(100vh-70px)] border-r flex flex-col md:items-start items-center gap-2 border-slate-300 bg-white py-5 px-3 relative">
        {
          navLinks.map((link) => {
            return (<div key={link.title} className={`flex items-center gap-2 w-full rounded-lg hover:bg-blue-200 px-2 py-3 cursor-ponter ${link.active? "bg-orange-300" :'bg-transparent'}`}>
              {link.icon}
              <span className="font-medium text-[15px] md:block hidden">{link.title}</span>
            </div>)
          })
        }
        <div className="flex absolute bottom-4 items-center md:justify-start justify-center gap-2 md:w-[90%] w-[70%] rounded-lg hover:bg-sky-400 hover:text-white transition-colors duration-200 px-2 py-3 cursor-pointer bg-gray-200 ">
                          <BiLogOut />
                          <span className="font-medium text-[15px] md:block hidden">Sair</span>
        </div>
      </div>
    </div>
  )
}

export default Sidebar