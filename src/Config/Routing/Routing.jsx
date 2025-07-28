import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../../Screens/Home/Home'
import About from '../../Screens/About/About'
import Faq from '../../Screens/Faq/Faq'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import ComingSoon from '../../Screens/ComingSoon/ComingSoon'

const Routing = () => {
  return (
    <BrowserRouter>
    <Navbar></Navbar>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/coming-soon" element={<ComingSoon />} />
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
  )
}

export default Routing