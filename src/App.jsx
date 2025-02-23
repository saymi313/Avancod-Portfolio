import './App.css'
import About from './Pages/About/About'
import Home from './Pages/Home/Home'
import Footer from './components/Common/Footer/Footer'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Common/Navbar/Navbar'
import Contact from './Pages/Contact/Contact'

function App() {

  return (
    <>
<Navbar/>
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

<Footer/>
    </>
  )
}

export default App
