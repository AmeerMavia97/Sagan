import { CircleArrowLeft } from 'lucide-react'
import React from 'react'
import GuestLayout from '../../../Components/GuestUser/GuestLayout/GuestLayout'
import { Link } from 'react-router-dom'

const GuestStep2 = ({ onNext, defaultValues }) => {

    const handleContinue = () => {
    // If you want to store data across steps, pass it here
    onNext({
      
      // message,
      // from,
    });
  };
    return (
        <>
            <div className='flex justify-center '>
                <GuestLayout CurrentStep={1}>
                    <h1 className='font-Inter font-semibold text-[24px] 2xl:text-[30px] '>Your details</h1>
                    <h1 className='font-Inter font-semibold text-[#7E7E7E] text-[14.5px] 2xl:text-[22px] '>We'll send you a copy of the card in case you need to edit your message or image.</h1>
                    <form action="" className='flex flex-col gap-4'>
                        <div className='grid grid-cols-2 gap-5 2xl:gap-10 mt-4 2xl:mt-8'>
                            <input type="text" placeholder='First Name' className='text-[#454545] placeholder:text-[#AFAFAF] px-4 font-semibold py-3 2xl:py-4.5 border-[#4f4f4f] border-[1.5px] rounded-[10px] text-[15px] 2xl:text-[22px] bg-white' />
                            <input type="text" placeholder='Last Name' className='text-[#454545] placeholder:text-[#AFAFAF] px-4 font-semibold py-3 2xl:py-4.5 border-[#393939] border-[1.5px] rounded-[10px] text-[15px] 2xl:text-[22px] bg-white' />
                        </div>
                        <div className='w-full'>
                            <input type="email" placeholder='Email Address' className='text-[#454545] placeholder:text-[#AFAFAF] px-4 font-semibold py-3 2xl:py-4.5 border-[#4f4f4f] border-[1.5px] rounded-[10px] text-[15px] 2xl:text-[22px] bg-white w-full' />
                        </div>
                        <div className='flex items-center mt-2'>
                            <input type="checkbox" className='w-6 h-4 2xl:w-10 2xl:h-6' />
                            <label htmlFor="" className='font-semibold font-Inter text-[14.5px] ml-2 2xl:ml-0 2xl:text-[22px] text-[#A6A6A6]'>I agree to Saganonline’s <Link className={"text-[#FFB5C0]"}>Terms</Link>.</label>
                        </div>
                        <div className='mt-10'>
                            <button onClick={handleContinue}  className='font-Inter text-[#272727] text-[16px] 2xl:text-[22px] px-14 2xl:px-16 py-3.5 2xl:py-5 rounded-full bg-[#FFB5C0] font-semibold'>Continue</button>
                        </div>
                    </form>
                </GuestLayout>
            </div>
        </>
    )
}

export default GuestStep2