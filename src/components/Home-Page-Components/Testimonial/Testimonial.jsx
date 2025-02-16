import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import testimonials from "../../../data/testimonial.json"; // Import JSON data

const Testimonial = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Track active slide

  return (
    <div className="w-full h-auto  flex flex-col items-center relative">
                <h1 className="text-3xl text-[#00386C] font-bold">See what our customer say about us</h1>
                <p className="text-[#737373] text-center max-w-3xl mt-2">Innovative, secure, and scalable—exactly what we needed! Their blockchain expertise brought transparency to our financial records. Full-stack development was spot-on, ensuring a smooth user experience. Would definitely collaborate again!</p>

      {/* Swiper Carousel */}
      <Swiper
        slidesPerView={3} // Show only 3 images at a time
        spaceBetween={-70} // Reduced space between images
        navigation={true} // Enable Prev/Next buttons
        modules={[Navigation]}
        centeredSlides={true} // Keeps active slide in center
        loop={true} // Infinite loop
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        breakpoints={{
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 3 },
        }}
        className="w-full max-w-lg"
      >
        {testimonials.map((person, index) => (
          <SwiperSlide key={person.id} className="flex justify-center p-3">
            <div
              className={`relative flex flex-col items-center transition-all duration-300 ${
                index === activeIndex ? "scale-110 opacity-100" : "opacity-80 blur-[1px]"
              }`}
            >
              <img
                src={person.img}
                alt={person.name}
                className={`w-20 h-20 rounded-full border-4 transition-all ${
                  index === activeIndex ? "border-blue-500 p-1" : "border-gray-300"
                }`}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Active Profile Name */}
      <h2 className="text-lg font-bold text-center mt-4">
        {testimonials[activeIndex].name} - <span className="text-gray-600">{testimonials[activeIndex].role}</span>
      </h2>

      {/* Custom Styles for Swiper Navigation Buttons */}
      <style>
        {`
          .swiper-button-prev::after, .swiper-button-next::after {
            color: black;
            font-size: 20px;
            font-weight: bold;
          }

          .swiper-button-prev:hover::after, .swiper-button-next:hover::after {
            color: #1e40af;
          }
        `}
      </style>
    </div>
  );
};

export default Testimonial;
