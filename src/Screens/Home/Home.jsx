import React from 'react'
import FaqSection from '../../Components/FAQ/FaqSection'
import TestimonialsSection from '../../Components/Testimonial/Testimonial.jsx'
import MobileMockup from '../../Components/Home/MobileMockup/MobileMockup'
import LaptopMockup from '../../Components/Home/LaptopMockup/LaptopMockup'
import Payment from '../../Components/Home/Payment/Payment'
import HomeTradition from '../../Components/Home/HomeTradition/HomeTradition'
import EventPromotion from '../../Components/Home/EventPromotion/EventPromotion'
import HowItWorksSection from '../../Components/Home/HowItWork/HowItWorksSection'
import HeroSection from '../../Components/Home/HeroSection/HeroSection'
import HeroSection1 from '../../Components/Home/HeroSection/HeroSection1.jsx'

const Home = () => {
  return (
    <div className=''>
     <div className='h-[100%]'>
       <HeroSection1></HeroSection1>
     </div>
      <HomeTradition></HomeTradition>
      <HowItWorksSection></HowItWorksSection>
      <EventPromotion></EventPromotion>
      <Payment></Payment>
      <div className='hidden sm:block'>
        <LaptopMockup></LaptopMockup>
      </div>
      <div className='sm:hidden'>
      <MobileMockup></MobileMockup>
      </div>
      <TestimonialsSection></TestimonialsSection>
      <FaqSection></FaqSection>
    </div>
  )
}

export default Home