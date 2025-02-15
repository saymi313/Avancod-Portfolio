import image from "../../../assets/Section-Image.png";

const HeroSection = () => {
  return (
    <section className="w-full bg-[#E1F0FF] min-h-screen flex items-center">
      <div className="container mx-auto px-5 md:px-20 py-10">
        <div className="grid gap-10 grid-cols-1 md:grid-cols-2 items-center">
          
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6 text-center md:text-left">
            <h1 className="text-3xl font-bold text-[#00386C] tracking-tighter sm:text-5xl xl:text-6xl">
              Building the Digital <br className="hidden md:block" /> Future
            </h1>
            <p className="max-w-[480px] mx-auto md:mx-0 font-sans font-semibold text-xl sm:text-2xl">
              We develop intelligent, seamless, and secure software to accelerate your growth.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="px-6 py-3 bg-[#42A4FF] text-white text-lg sm:text-xl rounded-lg sm:rounded-2xl transition hover:bg-[#3390DD]">
                Get Started
              </button>
            </div>
          </div>

          {/* Right Image */}
          <div className="flex justify-center">
            <img src={image} className="max-w-[90%] md:max-w-full" alt="Hero Image" />
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
