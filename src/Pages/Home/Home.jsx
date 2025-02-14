import CustomerReviews from "../../components/CustomerReviews/CustomerReviews"
import HeroSection from "../../components/HeroSection/HeroSection"
import ImageGallery from "../../components/ImageGallery/ImageGallery"
import Navbar from "../../components/Navbar/Navbar"
import Services from "../../components/Services/Services"
import Projects from "../../components/Projects/Projects"

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
        <Projects/>
    </div>
  )
}

export default Home