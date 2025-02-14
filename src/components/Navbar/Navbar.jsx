import logo from "../../assets/Logo.png"


const Navbar = () => {
    return (
        <div>

            <nav className=" border-gray-200 bg-[#E1F0FF]">
                <div className="px-5 md:px-30 flex flex-wrap items-center justify-between mx-auto p-4">
                    <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
                        <img src={logo} className="h-[45px]" alt="Flowbite Logo" />
                       
                    </a>
                    <button data-collapse-toggle="navbar-multi-level" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-multi-level" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-multi-level">
                        <ul className="flex flex-col font-medium text-[20px] p-4 md:p-0 mt-4  md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0  ">
                          
                            <li>
                                <button id="dropdownNavbarLink" data-dropdown-toggle="dropdownNavbar" className="flex items-center justify-between w-full py-2 px-3 text-black  md:border-0 md:p-0 md:w-auto dark:text-black dark:focus:text-black">Services <svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                    <path stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                </svg></button>
                                {/* <!-- Dropdown menu --> */}
                                <div id="dropdownNavbar" className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700 dark:divide-gray-600">
                                    <ul className="py-2 text-sm text-black dark:text-black" aria-labelledby="dropdownLargeButton">
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-black">Dashboard</a>
                                        </li>
                                        <li aria-labelledby="dropdownNavbarLink">
                                            <button id="doubleDropdownButton" data-dropdown-toggle="doubleDropdown" data-dropdown-placement="right-start" type="button" className="flex items-center justify-between w-full px-4 py-2 text-black hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-black">Dropdown<svg className="w-2.5 h-2.5 ms-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                                                <path stroke="black" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                                            </svg></button>
                                            <div id="doubleDropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow-sm w-44 dark:bg-gray-700">
                                                <ul className="py-2 text-sm text-black dark:text-black" aria-labelledby="doubleDropdownButton">
                                                    <li>
                                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-black dark:hover:text-black">Overview</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-black dark:hover:text-black">My downloads</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-black dark:hover:text-black">Billing</a>
                                                    </li>
                                                    <li>
                                                        <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-black dark:hover:text-black">Rewards</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li>
                                            <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-black">Earnings</a>
                                        </li>
                                    </ul>
                                    <div className="py-1">
                                        <a href="#" className="block px-4 py-2 text-sm text-black hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-black dark:hover:text-black">Sign out</a>
                                    </div>
                                </div>
                            </li>
                            <li>
                                <a href="#" className="block py-2 px-3 text-black rounded-sm md:p-0 " aria-current="page">About us</a>
                            </li>  <li>
                                <a href="#" className="block py-2 px-3 text-black  rounded-sm  md:p-0 " aria-current="page">Contact us</a>
                            </li>  <li>
                                <a href="#" className="block py-2 px-3 text-black rounded-sm md:p-0 " aria-current="page">Testimonial</a>
                            </li> 
                             <li>
                             <button className=" border-2 rounded-lg px-5 border-blue-400 text-black bg-transparent hover:bg-blue-100">
    Hire us
</button>

                            </li>

                           
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar