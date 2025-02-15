import CustomerReviews from "../../components/Home-Page-Components/CustomerReviews/CustomerReviews"
import HeroSection from "../../components/Home-Page-Components/HeroSection/HeroSection"
import ImageGallery from "../../components/Home-Page-Components/ImageGallery/ImageGallery"
// ٖimport Projects from "../../components/Home-Page-Components/Projects/Projects"
import Services from "../../components/Services/Services"

const Home = () => {
  return (
    <div className="bg-[#E1F0FF]">
      <HeroSection />
      <ImageGallery />
      <div className="mt-10">
        <Services />
      </div>
      <div>
        <CustomerReviews />
      </div>
      {/* <Projects /> */}
    </div>
  )
}

export default Home