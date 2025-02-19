// import CustomerReviews from "../../components/Home-Page-Components/CustomerReviews/CustomerReviews"
import FeaturePoint from "../../components/Home-Page-Components/FeaturePoint/FeaturePoint"
import HeroSection from "../../components/Home-Page-Components/HeroSection/Heroection"
// import ImageGallery from "../../components/Home-Page-Components/ImageGallery/ImageGallery"
import Projects from "../../components/Home-Page-Components/Projects/Projects"
// import Testimonial from "../../components/Home-Page-Components/Testimonial/Testimonial"
import Services from "../../components/Services/Services"



const Home = () => {
  return (
    <div className="bg-[#E1F0FF]">
      
        <HeroSection/>
        {/* <ImageGallery/> */}
        <div className="mt-10">
        <Services/>
        </div>
        <div>
        {/* <CustomerReviews/> */}
        </div>
        <Projects/>
        <FeaturePoint/>
        {/* <Testimonial/> */}
    </div>
  )
}

export default Home