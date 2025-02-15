import logo from '../../assets/Logo.png'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-[#D3EAFF]">
            <div className="mx-auto w-full max-w-screen-xl px-6 py-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 text-black">
                    
                    {/* Company Info */}
                    <div>
                        <div><img src={logo} className="h-10" alt="Company Logo" /></div>
                        <p className="mt-3 text-sm">Empowering businesses with innovative, scalable, and intelligent digital solutions for a smarter tomorrow.</p>
                        <div className="flex gap-3 mt-5">
                            {[
                                { icon: <FaFacebookF />, link: "https://facebook.com" },
                                { icon: <FaTwitter />, link: "https://twitter.com" },
                                { icon: <FaLinkedinIn />, link: "https://linkedin.com" },
                                { icon: <FaInstagram />, link: "https://instagram.com" }
                            ].map((item, index) => (
                                <a
                                    key={index}
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 flex items-center justify-center bg-[#42A4FF] text-white rounded-full text-lg hover:opacity-80 transition"
                                >
                                    {item.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h2 className="mb-4 text-sm font-bold uppercase">Quick Links</h2>
                        <ul className="text-sm space-y-2">
                            <li><a href="#" className="hover:underline">Portfolio</a></li>
                            <li><a href="#" className="hover:underline">About us</a></li>
                            <li><a href="#" className="hover:underline">Contact us</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h2 className="mb-4 text-sm font-bold uppercase">Services</h2>
                        <ul className="text-sm space-y-2">
                            <li><a href="#" className="hover:underline">Web Development</a></li>
                            <li><a href="#" className="hover:underline">App Development</a></li>
                            <li><a href="#" className="hover:underline">UI/UX</a></li>
                            <li><a href="#" className="hover:underline">Blockchain & NFT</a></li>
                            <li><a href="#" className="hover:underline">Chartered Accountancy</a></li>
                        </ul>
                    </div>

                    {/* Address */}
                    <div>
                        <h2 className="mb-4 text-sm font-bold uppercase">Address</h2>
                        <p className="text-sm">Sector F11, Islamabad Capital Territory, Pakistan</p>
                    </div>

                </div>
            </div>
        </footer>
    )
}

export default Footer;
