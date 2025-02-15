import image from '../../assets/Section-Image.png';

const HeroSection = () => {
  return (
    <section className="w-full bg-[#E1F0FF] min-h-screen flex items-center">
      <div className="container mx-auto px-5 md:px-12 lg:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          
          {/* Left Content */}
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-5xl xl:text-6xl font-bold text-[#00386C] tracking-tight leading-tight">
              Building the Digital <br className="hidden sm:block" /> Future
            </h1>
            <p className="max-w-[500px] text-lg sm:text-2xl font-semibold text-gray-700 mt-4 mx-auto md:mx-0">
              We develop intelligent, seamless, and secure software to accelerate your growth.
            </p>
            <div className="flex justify-center md:justify-start mt-6">
              <button className="px-6 py-3 sm:px-8 sm:py-4 text-lg sm:text-xl bg-[#42A4FF] rounded-xl text-white font-medium transition hover:bg-[#0074CC]">
                Get Started
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img 
              src={image} 
              className="w-full max-w-[450px] sm:max-w-[500px] md:max-w-[550px] lg:max-w-[600px] object-cover"
              alt="Hero Image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
