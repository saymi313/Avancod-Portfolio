import Projects from '../../../assets/project-plan.png';
import Customer from '../../../assets/Customer-Satisfaction.png';
import Raise from '../../../assets/raise.png';
import Business from '../../../assets/timeline.png';

const CustomerReviews = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-20 md:px-12 lg:px-28 py-10">
      {[
        { img: Projects, title: "Completed Projects", value: "500+" },
        { img: Customer, title: "Customer Satisfaction", value: "100%" },
        { img: Raise, title: "Raised by Clients", value: "$50 M" },
        { img: Business, title: "Years in Business", value: "05 yrs" }
      ].map((item, index) => (
        <div 
          key={index} 
          className={`px-3 py-8 text-center border-gray-300
          ${index !== 3 ? "lg:border-r" : ""} // Add border-right to all except last div
          md:border-b border-b lg:border-b-0`} // Keep border-bottom on mobile, remove on lg screens
        >
          {/* Image Section */}
          <div className="flex justify-center">
            <img 
              src={item.img} 
              alt={item.title} 
              className="h-12 w-12 md:h-14 md:w-14 lg:h-[65px] lg:w-[65px] xl:h-[70px] xl:w-[70px]" 
            />
          </div>

          {/* Title */}
          <p className="font-semibold mt-3 text-sm md:text-base lg:text-lg xl:text-xl">{item.title}</p>

          {/* Value */}
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#42A4FF] mt-2">{item.value}</h1>
        </div>
      ))}
    </div>
  );
};

export default CustomerReviews;
