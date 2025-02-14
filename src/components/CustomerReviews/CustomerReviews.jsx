import Projects from '../../assets/project-plan.png'
import Customer from '../../assets/Customer-Satisfaction.png'
import Raise from '../../assets/raise.png'
import Business from '../../assets/timeline.png'


const CustomerReviews = () => {
  return (
    <div className="grid md:grid-cols-4 grid-cols-1 py-30 gap-5 px-20 md:px-[300px]">
      <div className="border-r border-gray-300 px-9 py-14">
        <div className='flex justify-center'>
          <img src={Projects}  alt="" />
        </div>
        <p className="font-bold text-center mt-3 text-[18px]">Completed Projects</p>
        <h1 className="text-5xl font-bold text-center text-[#42A4FF] mt-3">500+</h1>
      </div>
      <div className="border-r border-gray-300 px-9 py-14">
        <div className='flex justify-center'>
          <img src={Customer}  alt="" />
        </div>
        <p className="font-bold text-center mt-3 text-[18px]">Customer Satisfaction</p>
        <h1 className="text-5xl font-bold text-center text-[#42A4FF] mt-3">100%</h1>
      </div>
      <div className="border-r border-gray-300 px-9 py-14">
        <div className='flex justify-center'>
          <img src={Raise}  alt="" />
        </div>
        <p className="font-bold text-center mt-3 text-[18px]">Raised by Clients</p>
        <h1 className="text-5xl font-bold text-center text-[#42A4FF] mt-3">$50 M</h1>
      </div>
      <div className=" px-9 py-14">
        <div className='flex justify-center'>
          <img src={Business}  alt="" />
        </div>
        <p className="font-bold text-center mt-3 text-[18px]">Years in Business</p>
        <h1 className="text-5xl font-bold text-center text-[#42A4FF] mt-3">05 yrs</h1>
      </div>
     
    </div>
  )
}

export default CustomerReviews