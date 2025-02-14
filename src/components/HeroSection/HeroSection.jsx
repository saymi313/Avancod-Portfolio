import image from '../../assets/Section-Image.png'

const HeroSection = () => {
  return (
    <section className="w-full bg-[#E1F0FF] h-screen   ">
      <div className="px-[10px] md:px-[80px] py-15 mx-auto ">
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
          <div className="flex flex-col justify-center space-y-4 ps-10 md:ms-0">
            <div className="space-y-2">
              <h1 className="text-3xl font-bold text-[#00386C] tracking-tighter sm:text-5xl xl:text-6xl/none">
                Building the Digital <br />Future
              </h1>
              <p className="max-w-[480px] font-sans font-semibold text-2xl  ">
                We develop intelligent, seamless, and secure software to accelerate your growth.
              </p>
            </div>
            <div className="flex gap-2">
              <button className="inline-flex px-3 py-7 h-10 items-center justify-center bg-[#42A4FF] sm:px-8 sm:py-8 text-xl  md:mt-6 rounded-[20px] sm:font-medium text-gray-50">
                Get Started
              </button>
            </div>
          </div>
          <div className="">
            <img src={image} className='mb-9' alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection