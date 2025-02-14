import WebDevelopment from '../../assets/Web-Development.png'
import BlockChain from '../../assets/Blockchain.png'
import Accounting from '../../assets/Accounting.png'
import { FaArrowRight } from "react-icons/fa6";


const Services = () => {
    return (
        <div className="bg-white px-6 md:px-30  py-15">
            <h2 className="text-[#3ba0ff] text-2xl">WHAT WE DO</h2>
            <p className="text-4xl font-bold max-w-[550px]">We provide the Perfect Solution to your business growth</p>


            <div className="grid gap-5 grid-cols-1 sm:grid-cols-1 md:grid-cols-3 mt-20">

                <div className='hover:shadow-2xl  md:mt-0 shadow-black duration-100 max-w-[100%] md:max-w-[88%] h-[480px] py-10 px-8 rounded-4xl group'>
                    <div className=' p-auto py-0'>
                        <img src={WebDevelopment} className='h-25 bg-[#E1F0FF] px-7 py-7 rounded-3xl' alt="" />
                    </div>
                    <h2 className="text-2xl font-bold mt-2">Full Stack Development</h2>
                    <p className="text-[22px] mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aut animi itaque quod officiis aperiam ut molestias ducimus commodi repudiandae.</p>
                    <button className='flex px-5 py-3 rounded-[12px] bg-transparent group-hover:bg-[#42A4FF] group-hover:text-white transition duration-300 text-[20px] mb-19 mt-6'>
                        Read More <FaArrowRight className=' ms-2 mt-[6px]' />
                    </button>
                </div>
                <div className='hover:shadow-2xl mt-20 md:mt-0 shadow-black duration-100 max-w-[100%] md:max-w-[88%] h-[480px] py-10 px-8 rounded-4xl group'>
                    <div className=' p-auto py-0'>
                        <img src={BlockChain} className='h-25 bg-[#E1F0FF] px-7 py-7 rounded-3xl' alt="" />
                    </div>
                    <h2 className="text-2xl font-bold mt-2">Full Stack Development</h2>
                    <p className="text-[22px] mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aut animi itaque quod officiis aperiam ut molestias ducimus commodi repudiandae.</p>
                    <button className='flex px-5 py-3 rounded-[12px] bg-transparent group-hover:bg-[#42A4FF] group-hover:text-white transition duration-300 text-[20px] mb-19 mt-6'>
                        Read More <FaArrowRight className=' ms-2 mt-[6px]' />
                    </button>
                </div>
                <div className='hover:shadow-2xl mt-20 md:mt-0 shadow-black duration-100 max-w-[100%] md:max-w-[88%] h-[480px] py-10 px-8 rounded-4xl group'>
                    <div className=' p-auto py-0'>
                        <img src={Accounting} className='h-25 bg-[#E1F0FF] px-7 py-7 rounded-3xl' alt="" />
                    </div>
                    <h2 className="text-2xl font-bold mt-2">Full Stack Development</h2>
                    <p className="text-[22px] mt-3">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam aut animi itaque quod officiis aperiam ut molestias ducimus commodi repudiandae.</p>
                    <button className='flex px-5 py-3 rounded-[12px] bg-transparent group-hover:bg-[#42A4FF] group-hover:text-white transition duration-300 text-[20px] mb-19 mt-6'>
                        Read More <FaArrowRight className=' ms-2 mt-[6px]' />
                    </button>
                </div>



            </div>


        </div>
    )
}

export default Services