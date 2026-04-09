import { FaHouseChimneyUser, FaList } from "react-icons/fa6";
import { LuGrid2X2Check } from "react-icons/lu";
import { VscGraph } from "react-icons/vsc";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const navLinks = [
    { title: "Home", icon: <FaHouseChimneyUser />, to: "/home" },
    { title: "Chamados", icon: <FaList />, to: "/chamados" },
    { title: "Resolvidos", icon: <LuGrid2X2Check />, to: "/resolvidos" },
    { title: "Desempenho", icon: <VscGraph />, to: "/desempenho" },
  ];

  return (
    <div className="fixed left-0 top-0 w-[90px] h-full flex flex-col bg-white border-r border-slate-300">
      
      {/* Logo */}
      <div className="h-[70px] flex items-center justify-center border-b">
        <span className="text-sm font-semibold">Logo</span>
      </div>

      {/* Menu */}
      <div className="flex flex-col items-center gap-4 py-5">
        {navLinks.map((link) => (
          <Link to={link.to} key={link.title} className="w-full flex justify-center">
            
            <div className="flex flex-col items-center justify-center gap-1 w-full py-3 hover:bg-blue-100 cursor-pointer transition-all duration-200">
              
              <span className="text-xl">
                {link.icon}
              </span>

              <span className="text-[11px] font-medium text-center leading-tight">
                {link.title}
              </span>

            </div>

          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;