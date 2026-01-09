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
import Deposit from "../../Screens/Payment/ShowDeposits";
import ScrollToTop from "../../Components/ScrollToTop/ScrollToTop";
import EventCreation from "../../Screens/EventCreation/EventCreation";
import GuestUser from "../../Screens/GuestUser/GuestUser";
import UserDashboard from "../../Screens/UserDashboard/UserDashboard";
import WithdrawFunds from "../../Screens/WithdrawFunds/WithdrawFunds";
import AccountSetting from "../../Screens/AccountSetting/AccountSetting";
import ComingSoon2 from "../../Screens/ComingSoon/ComingSoon2";

const Layout = ({ children }) => {
  const location = useLocation();

  const showNavbar = ["/", "/about", "/faq"].includes(location.pathname);
  const showFooter = ["/", "/about", "/faq", "/payment" , "/guest" , "/dashboard" , "/withdraw" , "/account-setting"].includes(
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
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/coming-soon" element={<ComingSoon />} />
          <Route path="/coming-soon2" element={<ComingSoon2 />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/user-dashboard" element={<Deposit />} />
          <Route path="/event" element={<EventCreation />} />
          <Route path="/guest" element={<GuestUser />} />
          <Route path="/dashboard" element={<UserDashboard />} />
          <Route path="/withdraw" element={<WithdrawFunds />} />
          <Route path="/account-setting" element={<AccountSetting />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Routing;
