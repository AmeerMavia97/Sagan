import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Home from "../../Screens/Home/Home";
import About from "../../Screens/About/About";
import Faq from "../../Screens/Faq/Faq";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import ComingSoon from "../../Screens/ComingSoon/ComingSoon";
import Payment from "../../Screens/Payment/Payment";
import Social from "../../Components/Footer/Social";
import ImageSlider from "../../Components/Footer/ImageSlider";

const Layout = ({ children }) => {
  const location = useLocation();

  const showNavbar = ["/", "/about", "/faq"].includes(location.pathname);
  const showFooter = ["/", "/about", "/faq", "/payment"].includes(
    location.pathname
  );

  return (
    <>
      {showNavbar && <Navbar />}
      {children}
      {showNavbar && (
        <div className="bg-[#FFE2E2]">
          <Social />
          <ImageSlider />
        </div>
      )}
      {showFooter && <Footer />}
    </>
  );
};

const Routing = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/payment" element={<Payment />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Routing;
