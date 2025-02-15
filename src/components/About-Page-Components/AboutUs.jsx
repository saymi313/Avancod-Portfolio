import Mission from '../../assets/mission.png'
import Vision from '../../assets/goal.png'
import Commitment from '../../assets/commitment.png'



const AboutUs = () => {
    return (
        <section className="w-full max-w-6xl mx-auto px-5 py-10">
             <div className="text-center mb-6 px-4">
                <h1 className="text-[#00386C] text-4xl font-extrabold">About us</h1>
                <p className="text-[#4A4A4A] text-lg md:text-xl">
                Avancod here Innovation Meets Precision – Powering Businesses with Tech & Finance.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">

            
                <div className=" border-3 px-10 text-lg py-14 border-[#42A4FF] rounded-tl-2xl shadow-md ">
                    <div className="mx-auto border-2 border-[#42A4FF] rounded-full w-40 h-40 flex items-center justify-center bg-white">
                        <img src={Mission} className="w-20 h-20 object-contain" alt="Vision" />
                    </div>
                    <h2 className=" font-bold text-[#00386C] text-3xl mt-4">Our Mission</h2>
                    <p className=" mt-2 text-[#7F7F7F]">Avancod bridges technology and finance, delivering smart software solutions and expert chartered accountancy services to help businesses grow with confidence.</p>
                </div>

                <div className=" border-3 px-10 text-lg py-14 border-[#42A4FF] rounded-tr-2xl  shadow-md">
                    <div className="mx-auto border-2 border-[#42A4FF] rounded-full w-40 h-40 flex items-center justify-center bg-white">
                        <img src={Vision} className="w-25 h-25 object-contain  ms-3 mb-3" alt="Vision" />
                    </div>
                    <h2 className=" font-bold text-[#00386C] text-3xl mt-4">Our Vision</h2>
                    <p className=" mt-2 text-[#7F7F7F]">To revolutionize the future of business by integrating innovative technology with financial expertise, ensuring seamless growth and efficiency for our clients</p>
                </div>


                <div className="flex flex-col md:flex-row gap-7 items-center text-lg shadow-md md:col-span-2 border-3 border-[#42A4FF] p-6 rounded-bl-2xl bg-white">
  <div className="border-2 border-[#42A4FF] rounded-full w-32 h-32 flex items-center justify-center bg-white">
    <img src={Commitment} className="w-24 h-24 object-contain" alt="Commitment" />
  </div>

  <div className="text-center md:text-start md:ml-6 flex-1">
    <h2 className="font-bold text-[#00386C] text-3xl">Our Commitment</h2>
    <p className="mt-2 text-[#7F7F7F]">
      Backed by expert software engineers and certified chartered accountants, we deliver precision-driven solutions 
      that empower businesses with innovation, financial excellence, and proven success.
    </p>
  </div>
</div>



            </div>
        </section>
    );
};

export default AboutUs;
