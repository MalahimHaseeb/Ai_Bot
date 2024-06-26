"use client"
import { AppContext } from '@/app/context';
import Link from 'next/link';
import React, { useContext , useState } from 'react';
import toast from 'react-hot-toast';

const NavbarC = () => {
    const { login , logout } = useContext(AppContext);

    const handlelogout = () => {
        logout()
        toast.success('Successfully logout')
    }
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <nav className="bg-gray-800 z-50">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        {/* SVG */}
                        <svg className="h-8 w-8 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm8-6a6 6 0 100 12V4z" clipRule="evenodd" />
                        </svg>
                        {/* Title */}
                        <Link href={'/'}><p className="ml-2 text-lg font-bold text-white">MalahimBot</p></Link>
                    </div>
                    <div className="hidden sm:flex sm:items-center sm:ml-auto">
                        {/* Menu Items */}
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Developer</a>
                            
                            
                                    <Link href="/Components/Bot" className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Bot</Link>
                                
                            
                            
                        </div>
                        {/* Sign Up Button */}
                    
                    </div>

                    <div className="-mr-2 flex items-center sm:hidden">
                        {/* Mobile Menu Button */}
                        <button onClick={toggleMobileMenu} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white" aria-controls="mobile-menu" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                            </svg>
                            <svg className="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            <div className={`${isMobileMenuOpen ? "block" : "hidden"} sm:hidden`} id="mobile-menu">
                <div className="px-2 pt-2 pb-3 space-y-1">
                    {/* Mobile Menu Items */}
                    {/* {menuItems.map((item, index) => ( */}
                    <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Developer</a>
                    <Link href="/Components/Bot" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Bot</Link>
                        
                </div>
            </div>
        </nav>
    );
};

export default NavbarC;
