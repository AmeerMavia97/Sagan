import { ArrowLeft, ArrowRight } from 'lucide-react'
import React, { useState } from 'react'
import AddImageModal from '../../../Components/GuestUser/AddImageModal/AddImageModal';

const GuestStep1 = ({ onNext, defaultValues }) => {

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImageUrl, setSelectedImageUrl] = useState('');

    const handleImageSelect = (url) => {
        setSelectedImageUrl(url);
        setIsModalOpen(false); 
        console.log('Selected image URL:', url);
    };
const handleContinue = () => {
    // If you want to store data across steps, pass it here
    onNext({
      imageUrl: selectedImageUrl,
      // message,
      // from,
    });
  };

    return (
        <>
            <section className='bg-[#FFF5F7] rounded-2xl grid grid-cols-2 px-20 mb-12 2xl:my-0 py-10 '>
                <div className='flex justify-center flex-col items-center gap-4  py-20'>
                    <img className='w-[80%] 2xl:w-[70%]' src="/Images/events/Card8.png" alt="" />
                    <div className='flex items-center gap-6'>
                        <button
                            type='button'
                        >
                            <ArrowLeft className='text-[#FFB5C0] size-4.5 2xl:size-7 cursor-pointer' strokeWidth={3} />
                        </button>
                        <div>
                            <h1 className='font-Inter font-[600] text-[25px] 2xl:text-[35px]'>1</h1>
                        </div>
                        <button
                            type='button'
                        >
                            <ArrowRight className='text-[#FFB5C0] size-4.5 2xl:size-7 cursor-pointer' strokeWidth={3} />
                        </button>
                    </div>
                </div>
                <div className='flex flex-col justify-center items-center text-center gap-6 px-20'>
                    <h1 className='font-Inter text-[19px] 2xl:text-[25px] font-semibold'>Add an image or GIF</h1>
                    <div className=''>
                        <button onClick={() => setIsModalOpen(true)} className='font-Inter  w-max font-semibold text-[#272727] border-[2px]  border-[#272727] px-12 py-2 2xl:py-3 rounded-full text-[14px] 2xl:text-[25px]'>
                            Browse our Library
                        </button>
                        <div className='flex justify-center items-center gap-4 py-3 2xl:py-5'>
                            <hr className='bg-[#56565669] text-[#56565669] w-full' />
                            <h1 className='font-Inter text-[#383838] text-[15px] 2xl:text-[18px] flex items-center justify-center'>or</h1>
                            <hr className='bg-[#56565669] text-[#56565669] w-full' />
                        </div>

                        <button className='font-Inter w-max font-semibold bg-[#FFB5C0] text-[#272727]  px-12 py-3 2xl:py-3.5 rounded-full text-[13px] 2xl:text-[25px]'>
                            Upload Your own
                        </button>
                    </div>

                    <div>
                        <label className='block mb-2 font-[600] text-center font-Inter text-[15.5px] 2xl:text-[25px] '>Your message</label>
                        <textarea
                            rows={7}
                            placeholder='Tell the group what you’re planning and what you want them to do'
                            className={`bg-white text-[#A0A0A0] font-Inter text-[14px] 2xl:text-[16px] border rounded-[15px] px-5 py-3 2xl:py-4.5 w-[350px] 2xl:w-[420px] cursor-pointer `}
                        />
                    </div>
                    <div>
                        <label className='block mb-2 text-center font-Inter text-[15.5px] 2xl:text-[25px] font-[600]'>From</label>
                        <input
                            type="text"
                            placeholder='Eg. Nic’s Farewell'
                            className={`bg-white text-[#A0A0A0] font-Inter text-[14px] 2xl:text-[16px] border rounded-[15px] px-5 py-3 2xl:py-4.5 w-[350px] 2xl:w-[420px] cursor-pointer `}
                        />
                    </div>
                    <div>
                        <button  onClick={handleContinue} className='font-Inter w-max font-semibold bg-[#FFB5C0] text-[#272727]  px-9.5 py-3 2xl:py-3 rounded-full text-[13px] 2xl:text-[25px]'>
                            Continue
                        </button>
                    </div>
                </div>

                {isModalOpen && (
                    <AddImageModal
                        onClose={() => setIsModalOpen(false)}
                        onSelectImage={handleImageSelect}
                    />
                )}
            </section>
        </>
    )
}

export default GuestStep1