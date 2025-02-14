import WebDevelopment from '../../assets/Web-Development.png'
import BlockChain from '../../assets/Blockchain.png'
import Accounting from '../../assets/Accounting.png'
import { FaArrowRight } from "react-icons/fa6";


const Services = () => {
    return (
        <div className="bg-white px-6 md:px-30  py-15">
            <h2 className="text-[#3ba0ff] text-2xl">WHAT WE DO</h2>
            <p className="text-4xl font-bold max-w-[550px]">We provide the Perfect Solution to your business growth</p>

            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-20 px-5 md:px-10">
  {[
    { img: WebDevelopment, title: "Full Stack Development" },
    { img: BlockChain, title: "Blockchain Development" },
    { img: Accounting, title: "Accounting Solutions" }
  ].map((item, index) => (
    <div
      key={index}
      className="hover:shadow-2xl shadow-black duration-300 max-w-full md:max-w-[88%] h-auto py-10 px-8 rounded-3xl group mx-auto"
    >
      <div className="flex justify-center">
        <img src={item.img} className="h-20 w-20 bg-[#E1F0FF] px-6 py-6 rounded-2xl" alt="" />
      </div>
      <h2 className="text-2xl font-bold mt-5 text-center">{item.title}</h2>
      <p className="text-lg mt-3 text-center">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aut animi itaque quod officiis aperiam ut molestias ducimus commodi repudiandae.
      </p>
      <div className="flex justify-center mt-6">
        <button className="flex items-center px-5 py-3 rounded-lg bg-transparent group-hover:bg-[#42A4FF] group-hover:text-white transition duration-300 text-lg">
          Read More <FaArrowRight className="ml-2" />
        </button>
      </div>
    </div>
  ))}
</div>



        </div>
    )
}

export default Services