import { useState } from 'react'
import { ChevronDown, Menu, X } from "lucide-react"
import { NavLink } from "react-router-dom"
import { useTranslation } from 'react-i18next'

export const Navbar = () => {
    const { t } = useTranslation();
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [servicesOpen, setServicesOpen] = useState(false);
    
    return (
        <div className="bg-[#cbb9a4] sticky top-0 z-50 shadow-md">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Desktop Navigation */}
                <nav className="hidden md:flex space-x-8 py-4 text-md font-black justify-center text-white">
                    <NavLink to='/' className="hover:text-[#A48D78] transition-colors">{t('home')}</NavLink>
                    
                    {/* Dropdown DỊCH VỤ */}
                    <div className="relative group before:content-[''] before:absolute before:top-full before:left-0 before:w-full before:h-4 before:bg-transparent">
                        <NavLink 
                            to="/services"
                            className="flex items-center gap-1 hover:text-[#A48D78] transition-colors after:content-[''] after:absolute after:left-0 after:top-full after:w-full after:h-2 after:bg-transparent"
                        >
                            {t('services')}
                            <ChevronDown size={16} />
                        </NavLink>

                        {/* Menu con (card-style dropdown) */}
                        <ul className="absolute left-0 top-10 mt-0 min-w-[260px] rounded-md bg-white/70 backdrop-blur-sm shadow-md py-2 opacity-0 invisible pointer-events-none group-hover:opacity-100 group-hover:visible group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:visible group-focus-within:pointer-events-auto transition-all duration-150 z-50">
                            <li className="flex text-start">
                                <NavLink
                                    to="/services/destination"
                                    className="block w-full px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-white/20"
                                >
                                    {t('destinationWedding')}
                                </NavLink>
                            </li>
                            <li className="flex text-start">
                                <NavLink
                                    to="/services/restaurant-wedding"
                                    className="block w-full px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-white/20"
                                >
                                    {t('restaurantWedding')}
                                </NavLink>
                            </li>
                            <li className="flex text-start">
                                <NavLink
                                    to="/services/ancestor"
                                    className="block w-full px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-white/20"
                                >
                                    {t('ancestorCeremony')}
                                </NavLink>
                            </li>
                            <li className="flex text-start">
                                <NavLink
                                    to="/services/event"
                                    className="block w-full px-4 py-2 text-sm text-gray-600 hover:text-gray-800 hover:bg-white/20"
                                >
                                    {t('eventDecor')}
                                </NavLink>
                            </li>
                        </ul>
                    </div>

                    <NavLink to='/portfolio' className="hover:text-[#A48D78] transition-colors">{t('work')}</NavLink>
                    <NavLink to='/about' className="hover:text-[#A48D78] transition-colors">{t('about')}</NavLink>
                    <NavLink to='/contact' className="hover:text-[#A48D78] transition-colors">{t('contact')}</NavLink>
                </nav>

                {/* Mobile Navigation */}
                <div className="md:hidden flex items-center justify-between py-4">
                    <NavLink to='/' className="text-white font-bold text-lg">
                        ANT WEDDING
                    </NavLink>
                    <button
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="text-white p-2"
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                {mobileMenuOpen && (
                    <div className="md:hidden pb-4">
                        <div className="flex flex-col space-y-2">
                            <NavLink 
                                to='/' 
                                className="text-white hover:text-[#A48D78] transition-colors py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {t('home')}
                            </NavLink>
                            
                            {/* Services Dropdown for Mobile */}
                            <div>
                                <button
                                    onClick={() => setServicesOpen(!servicesOpen)}
                                    className="flex items-center justify-between w-full text-white hover:text-[#A48D78] transition-colors py-2"
                                >
                                    {t('services')}
                                    <ChevronDown size={16} className={`transform transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                                </button>
                                {servicesOpen && (
                                    <div className="pl-4 flex flex-col space-y-2 mt-2">
                                        <NavLink
                                            to="/services/destination"
                                            className="text-white/90 hover:text-white text-sm py-1"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {t('destinationWedding')}
                                        </NavLink>
                                        <NavLink
                                            to="/services/restaurant-wedding"
                                            className="text-white/90 hover:text-white text-sm py-1"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {t('restaurantWedding')}
                                        </NavLink>
                                        <NavLink
                                            to="/services/ancestor"
                                            className="text-white/90 hover:text-white text-sm py-1"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {t('ancestorCeremony')}
                                        </NavLink>
                                        <NavLink
                                            to="/services/event"
                                            className="text-white/90 hover:text-white text-sm py-1"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {t('eventDecor')}
                                        </NavLink>
                                    </div>
                                )}
                            </div>

                            <NavLink 
                                to='/portfolio' 
                                className="text-white hover:text-[#A48D78] transition-colors py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {t('work')}
                            </NavLink>
                            <NavLink 
                                to='/about' 
                                className="text-white hover:text-[#A48D78] transition-colors py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {t('about')}
                            </NavLink>
                            <NavLink 
                                to='/contact' 
                                className="text-white hover:text-[#A48D78] transition-colors py-2"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {t('contact')}
                            </NavLink>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}