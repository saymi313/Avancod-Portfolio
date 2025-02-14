import logo from '../../assets/Logo.png'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";


const Footer = () => {
    return (
        <div>


            <footer className="bg-[#D3EAFF]">
                <div className="mx-auto w-full max-w-screen-xl">
                    <div className="grid grid-cols-2 gap-8 px-4 py-6 lg:py-8 md:grid-cols-4 text-black">
                        <div>
                            <div><img src={logo} className="h-10" alt="" /></div>
                            <ul className=" font-medium">
                                <li className="mt-3">
                                    <p>Empowering businesses with innovative, scalable, and intelligent digital solutions for a smarter tomorrow.</p>
                                </li>

                                <div className="flex gap-3 py-5">
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
                                            className="w-10 h-10 flex items-center justify-center bg-[#42A4FF] text-white rounded-full text-2xl hover:opacity-80 transition"
                                        >
                                            {item.icon}
                                        </a>
                                    ))}
                                </div>
                            </ul>
                        </div>
                        <div className=' ms-1 md:ms-12'>
                            <h2 className="mb-6 text-sm font-bold uppercase">Quick Links</h2>
                            <ul className=" font-medium">
                                <li className="mb-4">
                                    <a href="#" className=" hover:underline">Portfolio</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Abotu us</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Conatct us</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-bold uppercase">Services</h2>
                            <ul className=" font-medium">
                                <li className="mb-4">
                                    <a href="#" className=" hover:underline">Web Development</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">App Development</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">UI/UX</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Blockchain & NFT</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#" className="hover:underline">Charted Accountancy</a>
                                </li>
                            </ul>
                        </div>
                        <div>
                            <h2 className="mb-6 text-sm font-bold uppercase">Address</h2>
                            <ul className=" font-medium">
                                <li className="mb-4">
                                <p>Sector F11, Islamabad Capital Territory, Pakistan 
                                </p>
                                </li>
                               
                            </ul>
                        </div>

                    </div>

                </div>
            </footer>

        </div>
    )
}

export default Footer