import shadeOne from '../../assets/ShadeOne.png';
import shadeTwo from '../../assets/ShadeTwo.png';
import shadeThree from '../../assets/ShadeThree.jpg';
import { BsPatchCheckFill } from "react-icons/bs";
import { SlArrowRight } from "react-icons/sl";

const AboutUs = () => {
    return (
        <div className="w-full bg-[#E8F3FF] py-16 px-6 md:px-20 lg:px-32">
            <div className="grid grid-cols-1 md:grid-cols-[50%_50%] gap-10 items-center">
                
                {/* Left Side - Overlapping Images with Shades */}
                <div className="relative w-full flex justify-center">
                    {/* First (Farthest) Shade */}
                    <img 
                        src={shadeOne} 
                        alt="Background Shade 1" 
                        className="absolute top-0 left-10 w-[95%] max-w-[550px] shadow-2xl rounded-2xl opacity-20"
                    />
                    {/* Second (Middle) Shade */}
                    <img 
                        src={shadeTwo} 
                        alt="Background Shade 2" 
                        className="absolute top-5  w-[97%] max-w-[550px] rounded-2xl shadow-2xl opacity-30"
                    />
                    {/* Main Image */}
                    <img 
                        src={shadeThree} 
                        alt="Recognized Team" 
                        className="relative top-10 left-7 w-full max-w-[550px] rounded-2xl shadow-2xl"
                    />
                </div>

                {/* Right Side - Text Content */}
                <div className="w-full">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#00386C] leading-tight">
                        Recognized by Authorities
                    </h2>
                    <p className="text-gray-700 mt-4 text-base md:text-lg leading-relaxed">
                        Our compliance and recognition guarantee secure, cutting-edge, and globally competitive digital solutions—empowering businesses to stay ahead in the digital era.
                    </p>

                    <div className="mt-6 space-y-4">
                        <div className="flex items-start gap-3">
                            <span className="text-blue-600 text-xl mt-1"><BsPatchCheckFill /></span>
                            <div>
                                <h4 className="text-lg font-semibold text-[#00386C]">Pakistan Software Export Board (PSEB)</h4>
                                <p className="text-gray-600 text-sm">Reg. No: Z-25-9556/23</p>
                            </div>
                        </div>

                        <div className="flex items-start gap-3">
                            <span className="text-blue-600 text-xl mt-1"><BsPatchCheckFill /></span>
                            <div>
                                <h4 className="text-lg font-semibold text-[#00386C]">Securities and Exchange Commission of Pakistan (SECP)</h4>
                                <p className="text-gray-600 text-sm">Reg. No: 0204841</p>
                            </div>
                        </div>
                    </div>

                    {/* CTA Button */}
                    <div className="mt-6">
                        <button className="flex items-center gap-2 bg-blue-600 text-white py-3 px-5 rounded-lg shadow-lg hover:bg-blue-700 transition">
                            <span className='bg-white text-blue-600 p-1 rounded-2xl'><SlArrowRight/></span> Book your slots
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default AboutUs;
