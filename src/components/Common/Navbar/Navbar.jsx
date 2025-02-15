import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../../../assets/Logo.png";

const Navbar = () => {
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false); // ✅ Add state for menu toggle

    return (
        <div>
            <nav className="border-gray-200 bg-[#E1F0FF]">
                <div className="px-5 md:px-30 flex flex-wrap items-center justify-between mx-auto p-4">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-[45px]" alt="Logo" />
                    </Link>

                    {/* Hamburger Menu */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)} // ✅ Toggle menu on click
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>

                    {/* Navigation Links */}
                    <div className={`w-full md:block md:w-auto ${menuOpen ? "block" : "hidden"}`}>
                        <ul className="flex flex-col font-medium text-[20px] p-4 md:p-0 mt-4 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0">

                            <li>
                                <Link to="/" className={`block py-2 px-3 rounded-sm md:p-0 ${location.pathname === "/" ? "text-[#42A4FF] font-bold" : "text-black"}`}>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className={`block py-2 px-3 rounded-sm md:p-0 ${location.pathname === "/about" ? "text-[#42A4FF] font-bold" : "text-black"}`}>
                                    About us
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className={`block py-2 px-3 rounded-sm md:p-0 ${location.pathname === "/contact" ? "text-[#42A4FF] font-bold" : "text-black"}`}>
                                    Contact us
                                </Link>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-black rounded-sm md:p-0">
                                    Testimonial
                                </a>
                            </li>
                            <li>
                                <button className="border-2 rounded-lg px-5 border-blue-400 text-black bg-transparent hover:bg-blue-100">
                                    Hire us
                                </button>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
