import WebDevelopment from '../../assets/Web-Development.png';
import BlockChain from '../../assets/Blockchain.png';
import Accounting from '../../assets/Accounting.png';
import { FaArrowRight } from "react-icons/fa6";

const Services = () => {
  return (
    <div className="bg-white px-6 md:px-12 py-16">
      {/* Section Heading */}
      <h2 className="text-[#3ba0ff] text-lg md:text-xl text-center">WHAT WE DO</h2>
      <p className="text-2xl md:text-4xl font-bold max-w-[550px] text-center mx-auto">
        We provide the Perfect Solution to your business growth
      </p>

      {/* Cards Container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-12 px-4">
        {[
          { img: WebDevelopment, title: "Full Stack Development" },
          { img: BlockChain, title: "Blockchain Development" },
          { img: Accounting, title: "Accounting Solutions" }
        ].map((item, index) => (
          <div
            key={index}
            className="hover:shadow-2xl shadow-md duration-300 w-full max-w-[400px] mx-auto h-auto py-3  md:py-10 px-0 md:px-8 rounded-2xl group bg-white border border-gray-200"
          >
            {/* Icon */}
            <div className="flex justify-center">
              <img src={item.img} className="h-20 w-20 bg-[#E1F0FF] p-6 rounded-2xl" alt="" />
            </div>
            
            {/* Title */}
            <h2 className="text-xl md:text-2xl font-bold mt-5 text-center">{item.title}</h2>
            
            {/* Description */}
            <p className="text-base md:text-lg mt-3 text-center text-gray-600">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aut animi itaque quod officiis aperiam ut molestias ducimus commodi repudiandae.
            </p>

            {/* Button */}
            <div className="flex justify-center mt-6">
              <button className="flex items-center px-3 py-1 md:px-5 md:py-3 rounded-lg bg-transparent border border-[#42A4FF] text-[#42A4FF] group-hover:bg-[#42A4FF] group-hover:text-white transition duration-300 text-lg">
                Read More <FaArrowRight className="ml-2" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
