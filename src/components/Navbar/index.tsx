import { FaUser, FaChevronDown, FaSearch } from "react-icons/fa";

const Navbar = () => {
    return (
        <div className="md:w-[calc(100%-230px)] w-[calc(100%-60px)] fixed flex items-center justify-between pl-2 pr-6 h-[70px] top-0 md:left-[230px] left-[60px] border-b border-slate-300 bg-[#fff]">
            <div className="flex items-center gap-3 cursor-pointer bg">
                <FaUser
                    color="#082f49"
                    width={"28px"}
                    height={"28px"}
                />
                <div className="text-sky-950 font-semibold md:text-lg text-sm">teste do teste</div>
                <FaChevronDown 
                    color="#082f49"
                    width={"28px"}
                    height={"28px"}
                />
            </div>
            <div
                className="flex items-center gap-2 md:w-[800px] w-[130px] bg-gray-100 rounded-lg px-3 py-[10px]"
            >
                <input type="text" placeholder="Pesquisar" className="w-full bg-gray-100 outline-none text-[15px]"/>   
                <FaSearch 
                    cursor={"Pointer"}
                    
                    color="#999"
                />
            </div>
        </div>
    )
}

export default Navbar