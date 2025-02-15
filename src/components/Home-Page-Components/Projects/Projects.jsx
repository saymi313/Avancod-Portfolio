import ProjectImage from "../../../assets/Section-Image.png"; 

const Project = () => {
  return (
    <section className="w-full flex justify-center items-center py-10 px-5 md:px-10 lg:px-20 bg-amber-500">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center relative">
        
        {/* Left Content */}
        <div className="relative bg-gradient-to-r from-white via-[#E1F0FF] to-[#C9E1FF] p-6 md:p-10 rounded-2xl shadow-lg">
          <h3 className="text-[#3ba0ff] font-semibold text-lg md:text-xl">
            Featured Project
          </h3>
          <h2 className="text-[#0074CC] text-2xl md:text-3xl font-bold mt-1">
            Women Empowerment Website
          </h2>
          <p className="text-gray-700 mt-4 text-sm md:text-base leading-relaxed">
            At Avancod, we created Echoes Of Empowerment, a platform dedicated to championing womens journeys. Our mission is to provide a lifeline of support, resources, and opportunities that empower women to overcome challenges and reach their highest potential. Built with innovation and purpose, this website reflects our commitment to social impact through technology.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-6">
            <button className="px-5 py-2 bg-white border border-[#42A4FF] text-[#0074CC] rounded-lg shadow-sm text-sm md:text-base hover:bg-[#E1F0FF] transition">
              Demo
            </button>
            <button className="px-5 py-2 bg-[#0074CC] text-white rounded-lg shadow-sm text-sm md:text-base hover:bg-[#005ba1] transition">
              Github
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="relative flex justify-end">
          <div className="w-full max-w-lg">
            <img
              src={ProjectImage}
              alt="Project Preview"
              className="w-full rounded-xl shadow-2xl border border-gray-300"
            />
          </div>
          {/* Decorative background box */}
          <div className="absolute -z-10 w-[90%] h-[90%] bg-[#00386C] rounded-xl right-4 top-4"></div>
        </div>
        
      </div>
    </section>
  );
};

export default Project;
