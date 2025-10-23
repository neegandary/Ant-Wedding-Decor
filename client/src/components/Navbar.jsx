import { ChevronDown } from "lucide-react"
import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <div className="flex justify-center text-center bg-[#68866c]">
            <nav className="flex space-x-8 py-4 text-md font-medium w-full max-w-7xl justify-center text-white">
                <NavLink to='/' >HOME</NavLink>
                {/* <NavLink to='/services' className="flex items-center gap-1 text-amber-200">DỊCH VỤ<ChevronDown className="ml-1" size={18} /></NavLink> */}
                {/* Dropdown DỊCH VỤ */}
                <div className="relative group">
                    <button className="flex items-center gap-1 text-yellow-300">
                        DỊCH VỤ
                        <ChevronDown size={16} />
                    </button>

                    {/* Menu con (card-style dropdown) */}
                    <ul className="absolute left-0 top-full mt-0 min-w-[220px] rounded-md bg-white/70 backdrop-blur-sm shadow-md py-2 opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto transition-all duration-150 z-50">
                        <li className="flex text-start">
                            <NavLink
                                to="/services/gia-tien"
                                className="block w-full px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-white/20"
                            >
                                Trang trí lễ gia tiên
                            </NavLink>
                        </li>
                        <li className="flex text-start">
                            <NavLink
                                to="/services/tiec-cuoi-nha-hang"
                                className="block w-full px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-white/20"
                            >
                                Trang trí tiệc cưới nhà hàng
                            </NavLink>
                        </li>
                        <li className="flex text-start">
                            <NavLink
                                to="/services/mam-cuoi"
                                className="block w-full px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-white/20"
                            >
                                Mâm quả lễ ăn hỏi
                            </NavLink>
                        </li>
                        <li className="flex text-start">
                            <NavLink
                                to="/services/rap-ban-ghe"
                                className="block w-full px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-white/20"
                            >
                                Rạp – Bàn ghế tiệc cao cấp
                            </NavLink>
                        </li>
                        <li className="flex text-start">
                            <NavLink
                                to="/services/wedding-planner"
                                className="block w-full px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-white/20"
                            >
                                Wedding Planner
                            </NavLink>
                        </li>
                        <li className="flex text-start">
                            <NavLink
                                to="/services/xe-hoa"
                                className="block w-full px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-white/20"
                            >
                                Xe Hoa & Trang Trí Xe
                            </NavLink>
                        </li>
                    </ul>
                </div>
                {/* Dropdown DECOR PORTFOLIO */}
                <div className="relative group">
                    <button className="flex items-center gap-1">
                        DECOR PORTFOLIO
                        <ChevronDown className="ml-1" size={18} />
                    </button>

                    <ul className="absolute left-0 top-full mt-0 min-w-[220px] rounded-md bg-white/70 backdrop-blur-sm shadow-md py-2 opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto transition-all duration-150 z-50">
                        <li className="flex text-start">
                            <NavLink
                                to="/services/gia-tien"
                                className="block w-full px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-white/20"
                            >
                                Lễ gia tiên
                            </NavLink>
                        </li>
                        <li className="flex text-start">
                            <NavLink
                                to="/services/tiec-cuoi-nha-hang"
                                className="block w-full px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-white/20"
                            >
                                Tiệc cưới nhà hàng
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <NavLink to='/about'>GIỚI THIỆU</NavLink>
                <NavLink to='/contact'>LIÊN HỆ</NavLink>
            </nav>
        </div>
    )
}