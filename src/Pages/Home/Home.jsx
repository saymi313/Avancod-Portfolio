import CustomerReviews from "../../components/CustomerReviews/CustomerReviews"
import HeroSection from "../../components/HeroSection/HeroSection"
import ImageGallery from "../../components/ImageGallery/ImageGallery"
import Navbar from "../../components/Navbar/Navbar"
import Services from "../../components/Services/Services"

const Home = () => {
  return (
    <div className="bg-[#E1F0FF]">
        <Navbar/>
        <HeroSection/>
        <ImageGallery/>
        <div className="mt-10">
        <Services/>
        </div>
        <div>
        <CustomerReviews/>
        </div>
    </div>
  )
}

export default Home