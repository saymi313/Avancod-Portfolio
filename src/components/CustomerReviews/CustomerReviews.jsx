import Projects from '../../assets/project-plan.png';
import Customer from '../../assets/Customer-Satisfaction.png';
import Raise from '../../assets/raise.png';
import Business from '../../assets/timeline.png';

const CustomerReviews = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-5 md:px-20 lg:px-[200px] py-14">
      {[
        { img: Projects, title: "Completed Projects", value: "500+" },
        { img: Customer, title: "Customer Satisfaction", value: "100%" },
        { img: Raise, title: "Raised by Clients", value: "$50 M" },
        { img: Business, title: "Years in Business", value: "05 yrs" }
      ].map((item, index) => (
        <div 
          key={index} 
          className={`px-4 py-10 text-center 
          ${index !== 3 ? "border-r border-gray-300" : ""}
          md:border-r-0 md:border-b md:pb-6 lg:border-b-0`}
        >
          <div className="flex justify-center">
            <img src={item.img} alt={item.title} className="h-14 w-14 md:h-16 md:w-16 lg:h-20 lg:w-20" />
          </div>
          <p className="font-bold mt-3 text-base md:text-lg lg:text-[15xpx]">{item.title}</p>
          <h1 className="text-3xl md:text-3xl lg:text-4xl font-bold text-[#42A4FF] mt-3">{item.value}</h1>
        </div>
      ))}
    </div>
  );
};

export default CustomerReviews;
