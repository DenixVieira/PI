import { useState, useRef, useEffect } from "react";
import { FaUser, FaChevronDown, FaSearch } from "react-icons/fa";

const Navbar = ({ isOpen }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  // fechar ao clicar fora
  useEffect(() => {
    const handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div
      className={`fixed flex items-center justify-between pl-2 pr-6 h-[70px] top-0 
      border-b border-slate-300 bg-white transition-all duration-300
      ${isOpen ? "left-[230px] w-[calc(100%-230px)]" : "left-[60px] w-[calc(100%-60px)]"}`}
    >
      
      {/* USER AREA */}
      <div ref={menuRef} className="relative">
        <div
          onClick={() => setMenuOpen(!menuOpen)}
          className="flex items-center gap-3 cursor-pointer px-2 py-1 rounded-lg hover:bg-gray-100 transition"
        >
          {/* Avatar */}
          <div className="w-9 h-9 rounded-full bg-sky-900 flex items-center justify-center text-white">
            <FaUser size={14} />
          </div>

          <div className="flex flex-col leading-tight">
            <span className="text-sky-950 font-semibold text-sm">
              Nome do usuário
            </span>
            <span className="text-xs text-gray-500">
              usuario@email.com
            </span>
          </div>

          <FaChevronDown
            size={14}
            className={`text-sky-950 transition-transform ${
              menuOpen ? "rotate-180" : ""
            }`}
          />
        </div>

        {/* DROPDOWN */}
        {menuOpen && (
          <div className="absolute left-0 mt-3 w-52 bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden">
            
            <div className="px-4 py-3 border-b">
              <p className="text-sm font-semibold text-gray-800">
                Nome do usuário
              </p>
              <p className="text-xs text-gray-500">
                usuario@email.com
              </p>
            </div>

            <ul className="text-sm text-gray-700">
              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Perfil
              </li>

              <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                Mudar Fundo
              </li>

              <div className="border-t"></div>

              <li className="px-4 py-2 hover:bg-red-50 text-red-500 cursor-pointer">
                Sair
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* SEARCH */}
      <div className="flex items-center gap-2 md:w-[400px] w-[140px] bg-gray-100 rounded-lg px-3 py-[10px]">
        <input
          type="text"
          placeholder="Pesquisar"
          className="w-full bg-gray-100 outline-none text-[15px]"
        />

        <FaSearch className="cursor-pointer text-gray-400" />
      </div>

    </div>
  );
};

export default Navbar;