import { FaUser, FaChevronDown, FaSearch } from "react-icons/fa";

const Navbar = ({ isOpen }) => {
  return (
    <div
      className={`fixed flex items-center justify-between pl-2 pr-6 h-[70px] top-0 
      border-b border-slate-300 bg-white transition-all duration-300
      ${isOpen ? "left-[230px] w-[calc(100%-230px)]" : "left-[60px] w-[calc(100%-60px)]"}`}
    >
      
      <div className="flex items-center gap-3 cursor-pointer">
        <FaUser size={22} color="#082f49" />

        <div className="text-sky-950 font-semibold md:text-lg text-sm">
          Nome do usuário
        </div>

        <FaChevronDown size={16} color="#082f49" />
      </div>

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