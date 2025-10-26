import { ChevronDown } from "lucide-react"
import { NavLink } from "react-router-dom"

export const Navbar = () => {
    return (
        <div className="flex justify-center text-center bg-[#cbb9a4]">
            <nav className="flex space-x-8 py-4 text-md font-medium w-full max-w-7xl justify-center text-white">
                <NavLink to='/' className="hover:text-[#A48D78] transition-colors">TRANG CHỦ</NavLink>
                {/* <NavLink to='/services' className="flex items-center gap-1 text-amber-200">DỊCH VỤ<ChevronDown className="ml-1" size={18} /></NavLink> */}
                {/* Dropdown DỊCH VỤ */}
                <div className="relative group before:content-[''] before:absolute before:top-full before:left-0 before:w-full before:h-4 before:bg-transparent">
                    <button className="flex items-center gap-1 hover:text-[#A48D78] transition-colors after:content-[''] after:absolute after:left-0 after:top-full after:w-full after:h-2 after:bg-transparent">
                        DỊCH VỤ
                        <ChevronDown size={16} />
                    </button>

                    {/* Menu con (card-style dropdown) */}
                    <ul className="absolute left-0 top-10 mt-0 min-w-[220px] rounded-md bg-white/70 backdrop-blur-sm shadow-md py-2 opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto transition-all duration-150 z-50">
                        <li className="flex text-start">
                            <NavLink
                                to="/services/destination"
                                className="block w-full px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-white/20"
                            >
                                Trang trí tiệc cưới ngoài trời
                            </NavLink>
                        </li>
                        <li className="flex text-start">
                            <NavLink
                                to="/services/ancestor"
                                className="block w-full px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-white/20"
                            >
                                Trang trí lễ gia tiên
                            </NavLink>
                        </li>
                        <li className="flex text-start">
                            <NavLink
                                to="/services/restaurant-wedding"
                                className="block w-full px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-white/20"
                            >
                                Trang trí sảnh nhà hàng
                            </NavLink>
                        </li>
                        <li className="flex text-start">
                            <NavLink
                                to="/services/event"
                                className="block w-full px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-white/20"
                            >
                                Trang trí sự kiện
                            </NavLink>
                        </li>
                    </ul>
                </div>

                <NavLink to='/work' className="hover:text-[#A48D78] transition-colors">ANTWORK</NavLink>
                <NavLink to='/about' className="hover:text-[#A48D78] transition-colors">GIỚI THIỆU</NavLink>
                <NavLink to='/contact' className="hover:text-[#A48D78] transition-colors">LIÊN HỆ</NavLink>
            </nav>
        </div>
    )
}