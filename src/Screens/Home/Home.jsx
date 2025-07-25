import React from 'react'
import FaqSection from '../../Components/FAQ/FaqSection'
import TestimonialsSection from '../../Components/Testimonial/TestimonialsSection'
import MobileMockup from '../../Components/Home/MobileMockup/MobileMockup'
import LaptopMockup from '../../Components/Home/LaptopMockup/LaptopMockup'
import Payment from '../../Components/Home/Payment/Payment'
import HomeTradition from '../../Components/Home/HomeTradition/HomeTradition'
import EventPromotion from '../../Components/Home/EventPromotion/EventPromotion'
import HowItWorksSection from '../../Components/Home/HowItWork/HowItWorksSection'

const Home = () => {
  return (
    <div className='min-h-screen'>
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