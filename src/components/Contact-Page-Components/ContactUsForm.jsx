import logo from '../../assets/Logo-2.png'
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import './style.css'


const ContactUsForm = () => {
    return (
        <div className="min-h-screen py-10 flex flex-col items-center justify-center">
            {/* Heading Section */}
            <div className="text-center mb-6 px-4">
                <h1 className="text-[#00386C] text-4xl font-extrabold">Contact us</h1>
                <p className="text-[#4A4A4A] text-lg md:text-xl">
                    Any questions or remarks? Just write us a message!
                </p>
            </div>

            {/* Contact Form Section */}
            <div className="container max-w-full md:max-w-[100%] lg:max-w-[90%] mx-auto px-4 md:px-0">
                <div className="grid min-h-[80vh] grid-cols-1 md:grid-cols-[30%_70%] shadow-lg rounded-lg p-2 overflow-hidden">

                    {/* Left Section */}
                    <div className="relative bg-[#0A396D] text-white p-8 flex flex-col justify-between overflow-hidden rounded-lg">
                        <div>
                            <img src={logo} className="h-15 mx-auto" alt="Company Logo" />
                            <h2 className="text-2xl font-bold mt-6">Contact Information</h2>
                            <p className="mt-2">Say something to start a live chat!</p>
                            <div className="mt-8 space-y-4 max-w-[250px]">
                                <p className="flex items-center gap-4">
                                    <FaPhoneAlt className="text-[#42A4FF]" />
                                    +92301865385
                                </p>
                                <p className="flex items-center gap-4">
                                    <FaEnvelope className="text-[#42A4FF]" />
                                    info@avancod.com
                                </p>
                                <p className="flex items-start gap-4">
                                    <FaMapMarkerAlt className="text-[#42A4FF] mt-1" />
                                    Sector F11, Capital Territory, Islamabad, Pakistan
                                </p>
                            </div>
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-3 mt-6">
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

                    {/* Right Section */}
                    <div className="bg-white p-6 md:p-8 flex flex-col justify-center">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">






                            <div className="form__group field w-full">
                                <input type="text" className="form__field w-full" placeholder="Name" required />
                                <label htmlFor="name" className="form__label">Name</label>
                            </div>

                            <div className="form__group field w-full">
                                <input type="text" className="form__field w-full" placeholder="Last Name" required />
                                <label htmlFor="name" className="form__label">Last Name</label>
                            </div>

                            <div className="form__group field w-full">
                                <input type="email" className="form__field w-full" placeholder="Email" required />
                                <label htmlFor="email" className="form__label">Email</label>
                            </div>
                            <div className="form__group field w-full">
                                <input type="Number" className="form__field w-full" placeholder="Phone Number" required />
                                <label htmlFor="number" className="form__label">Phone No</label>
                            </div>
                        </div>

                        {/* Select Subject */}
                        <div className="mt-4">
                            <label className="font-semibold">Select Subject:</label>
                            <div className="flex flex-wrap gap-3 mt-2">
                                {['Web Dev', 'App Dev', 'Blockchain', 'Accounting', 'Other'].map(subject => (
                                    <label key={subject} className="flex items-center gap-2 cursor-pointer">
                                        <input type="radio" name="subject" className="accent-blue-500" />
                                        {subject}
                                    </label>
                                ))}
                            </div>
                        </div>

                        {/* Message Input */}
                        <textarea placeholder="Write your message..." className="border p-3 rounded-md w-full mt-4 h-24"></textarea>

                        {/* Send Button */}
                        <div className="flex justify-end">
                            <button className="bg-[#42A4FF] w-[100%] md:w-[20%]  text-white font-semibold px-6 py-3 rounded-3xl mt-7 ">Send Message</button>

                        </div>

                    </div>
                </div>
            </div>
        </div>


    )
}

export default ContactUsForm