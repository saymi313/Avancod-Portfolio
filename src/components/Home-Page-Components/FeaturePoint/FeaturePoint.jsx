import img from "../../../assets/Programmer.png";
import Customize from "../../../assets/Customize.png";
import Threat from "../../../assets/Threat.png";
import Service from "../../../assets/Service.png";
import Security from "../../../assets/Security.png";

const FeaturePoint = () => {
  const features = [
    { img: Customize, title: "Customized Security Solutions", text: "Tailored protection for your unique need." },
    { img: Threat, title: "Vulnerability Assessment", text: "Identifying risks before they become threats." },
    { img: Service, title: "24/7 Incident Response", text: "Rapid action to keep you secure." },
    { img: Security, title: "Appnox-Certified Security", text: "Proven security, rigorously verified." },
  ];

  return (
    <div className="bg-[#D3EAFF] py-12 px-6 md:px-16 lg:px-20">
      {/* Main Grid Container */}
      <div className="grid grid-cols-1 md:grid-cols-[45%_55%] gap-8 items-center">
        
        {/* Left Side - Image */}
        <div className="w-full flex justify-center">
          <img src={img} alt="Security Expert" className="rounded-lg shadow-lg h-screen w-full max-w-[450px] md:max-w-[550px]" />
        </div>

        {/* Right Side - Content */}
        <div className="w-full">
          <h5 className="text-blue-500 uppercase font-semibold text-sm tracking-wider">Feature Point</h5>
          <h2 className="text-3xl md:text-6xl font-bold text-[#00386C] mt-3 leading-tight">
            Key Service Features <br /> Protecting You
          </h2>
          <p className="text-gray-700 mt-3 text-sm md:text-base leading-relaxed">
            Robust, secure, and future-ready solutions designed to safeguard your business and data.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-4 bg-gradient-to-br from-blue-100 to-blue-300 rounded-xl shadow-lg flex flex-col  border border-blue-300 w-full min-h-[120px] md:min-h-[140px] lg:min-h-[160px]"
              >
                <img src={feature.img} alt={feature.title} className="w-12 h-12 mb-2" />
                <h4 className="text-base md:text-lg font-semibold text-[#00386C]">{feature.title}</h4>
                <p className="text-gray-700 text-xs md:text-sm">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>  
    </div>
  );
};

export default FeaturePoint;
