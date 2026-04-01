import { useEffect } from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { VscGraph } from "react-icons/vsc";
import { LuGrid2X2Check } from "react-icons/lu";
import { FaHouseChimneyUser, FaList } from "react-icons/fa6";
import { BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";

const Sidebar = ({ isOpen, setIsOpen }) => {

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setIsOpen(false);
      } else {
        setIsOpen(true);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [
    { title: "Home", icon: <FaHouseChimneyUser />, active: false, to: "/home" },
    { title: "Chamados", icon: <FaList />, active: false, to: "/chamados" },
    { title: "Resolvidos", icon: <LuGrid2X2Check />, active: false },
    { title: "Desempenho", icon: <VscGraph />, active: false },
  ];

  return (
    <div
      className={`fixed left-0 top-0 ${isOpen ? "w-[230px]" : "w-[60px]"
        } h-full flex flex-col transition-all duration-300`}
    >

      <div className="w-full flex items-center justify-center md:justify-start md:pl-3 h-[70px] bg-white">
        <span>Logo</span>
      </div>
      <div className="w-full flex items-center justify-center pt-5 pb-2 md:justify-start md:pl-5 bg-white h-[20px]">
        <IoIosArrowDroprightCircle
          size="20px"
          color="#222"
          className={`transition-transform ${isOpen ? "rotate-180" : ""} cursor-pointer`}
          onClick={() => setIsOpen(!isOpen)}
        />
        {/* <TiThMenuOutline
          className="cursor-pointer text-xl"
          
        /> */}
      </div>

      <div className="w-full h-[calc(100vh-70px)] border-r flex flex-col gap-2 border-slate-300 bg-white py-5 px-3">

        {navLinks.map((link) => (
          <Link to={link.to} key={link.title}>

            <div
              key={link.title}
              className="flex items-center gap-3 w-full rounded-lg hover:bg-blue-200 px-2 py-3 cursor-pointer whitespace-nowrap"
            >
              <span className="text-lg">{link.icon}</span>

              <span
                className={`font-medium text-[15px] transition-all duration-200
              ${isOpen ? "opacity-100 ml-1" : "opacity-0 w-0 overflow-hidden"}`}
              >
                {link.title}
              </span>
            </div>
          </Link>
        ))}

        {/* <div className="flex items-center gap-3 rounded-lg hover:bg-sky-400 hover:text-white transition-colors duration-200 px-2 py-3 cursor-pointer bg-gray-200 mt-auto whitespace-nowrap">

          <BiLogOut className="text-[20px] flex-shrink-0" />

          <span
            className={`font-semibold text-[15px] transition-all duration-200
            ${isOpen ? "opacity-100 ml-1" : "opacity-0 w-0 overflow-hidden"}`}
          >
            Sair
          </span>

        </div> */}

      </div>
    </div>
  );
};

export default Sidebar;