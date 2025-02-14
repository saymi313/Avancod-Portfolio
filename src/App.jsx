import './App.css'
import Home from './Pages/Home/Home'
import Footer from './components/Footer/Footer'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>

      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

<Footer/>
    </>
  )
}

export default App
