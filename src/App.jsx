import './App.css'
import Home from './Pages/Home/Home'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>

      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>

    </>
  )
}

export default App
