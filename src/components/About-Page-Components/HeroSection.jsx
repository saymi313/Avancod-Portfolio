
const HeroSection = () => {
    const items = [
        {
          title: "Our Mission",
          text: "Avancod bridges technology and finance, delivering smart software solutions and expert chartered accountancy services to help businesses grow with confidence.",
        },
        {
          title: "Our Vision",
          text: "To revolutionize the future of business by integrating innovative technology with financial expertise, ensuring seamless growth and efficiency for our clients.",
        },
        {
          title: "Our Mission",
          text: "Backed by expert software engineers and certified chartered accountants, we deliver precised solutions that empower businesses with innovation, financial excellence, and proven success.",
        },
      ];
    
      return (
        <div className="w-full bg-gray-100 py-16 px-6 md:px-20 lg:px-32">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-[#00386C]">About us</h2>
            <p className="text-gray-600 mt-2 text-base md:text-lg">
              Avancod here Innovation Meets Precision – Powering Businesses with Tech & Finance.
            </p>
          </div>
    
          <div className="space-y-6">
            {items.map((item, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center md:items-stretch w-full bg-white shadow-md rounded-lg overflow-hidden">
                <div className="bg-blue-100 px-6 py-13 md:w-1/4 flex items-center justify-center">
                  <h3 className="text-lg md:text-3xl font-bold text-blue-900">{item.title}</h3>
                </div>
                <div className="px-6 py-5 md:w-3/4 text-gray-700 text-sm flex items-center md:text-[20px]">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    };
    
export default HeroSection



// const HeroSection = () => {
//     return (
//         <div className="bg-[#E1F0FF] flex justify-center py-30">

//             <div className="max-w-3xl text-center px-10 sm:px-0">
//                 <h2 className="text-5xl text-[#00386C] font-bold">Who We Are, What We Build?</h2>
//                 <p className="text-[19px] font-semibold mt-2">We are a team of innovators, engineers, and visionaries dedicated to crafting cutting-edge digital solutions that transform businesses.</p>
//             </div>
//         </div>
//     )
// }

// export default HeroSection