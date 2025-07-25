import React from 'react'
import FaqSection from '../../Components/FAQ/FaqSection'
import TestimonialsSection from '../../Components/Testimonial/TestimonialsSection'
import MobileMockup from '../../Components/Home/MobileMockup/MobileMockup'
import LaptopMockup from '../../Components/Home/LaptopMockup/LaptopMockup'

const Home = () => {
  return (
    <div className='min-h-screen'>
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