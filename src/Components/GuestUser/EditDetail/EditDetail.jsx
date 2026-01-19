import { X } from 'lucide-react';
import React, { useState } from 'react'
import AddImageModal from '../AddImageModal/AddImageModal';

const EditDetail = ({ onClose, onSelectImage }) => {

    const handleImageClick = (url) => {
        onSelectImage(url);
    };

    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedImageUrl, setSelectedImageUrl] = useState('');

    const handleImageSelect = (url) => {
        setSelectedImageUrl(url);
        setIsModalOpen(false);
        console.log('Selected image URL:', url);
    };

    return (
        <>
            <div className="fixed inset-0 z-50 bg-[#79797946] flex items-center justify-center ">
                <div className="bg-[#ffecec] relative w-[75%] 2xl:w-[65%] rounded-[15px]">

                    <div className='bg-[#FFB5C0] py-3 2xl:py-3.5 px-3 text-center  rounded-t-[15px]'>

                        <h1 className='font-Inter font-[700] text-[18px] 2xl:text-[33px]'>Edit Message</h1>

                    </div>
                    {/* Close Button */}
                    <button
                        className="absolute top-4 2xl:top-6 right-5 text-5xl font-bold"
                        onClick={onClose}
                    >
                        <X className='size-5 2xl:size-8' />
                    </button>

                    <div className='grid grid-cols-2 py-8 2xl:py-20 px-10 gap-10 2xl:gap-0 2xl:px-14'>
                        <div className='flex flex-col justify-center gap-4 2xl:gap-10'>
                            <h1 className=' font-[600] text-center font-Inter text-[15.5px] 2xl:text-[25px] '>Add an image or GIF</h1>
                            <div className='bg-white flex justify-center py-10 rounded-[8px]'>
                                <img className='h-48 2xl:h-60' src="/Images/GuestUserImage/Card2.png" alt="" />
                            </div>
                            <div className='flex gap-4 mt-4 2xl:mt-0'>
                                <button  onClick={() => setIsModalOpen(true)} className='font-Inter  w-max font-semibold text-[#272727] border-[2px]  border-[#272727] px-10 2xl:px-12 py-2 2xl:py-3 rounded-full text-[12.5px] 2xl:text-[21px]'>
                                    Browse our Library
                                </button>

                                <button className='font-Inter w-max font-semibold bg-[#FFB5C0] text-[#272727]  px-10 2xl:px-12 py-3 2xl:py-3.5 rounded-full text-[12.5px] 2xl:text-[21px]'>
                                    Upload Your own
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-col justify-center items-center gap-7'>
                            <div>
                                <label className='block mb-3 font-[600] text-center font-Inter text-[15.5px] 2xl:text-[25px] '>Your message</label>
                                <textarea
                                    rows={7}
                                    placeholder='Tell the group what you’re planning and what you want them to do'
                                    className={`bg-white text-[#A0A0A0] font-Inter text-[14px] 2xl:text-[16px] border rounded-[15px] px-5 py-3 2xl:py-4.5 w-[350px] 2xl:w-[420px] cursor-pointer `}
                                />
                            </div>
                            <div>
                                <label className='block mb-3 text-center font-Inter text-[15.5px] 2xl:text-[25px] font-[600]'>From</label>
                                <input
                                    type="text"
                                    placeholder='Eg. Nic’s Farewell'
                                    className={`bg-white text-[#A0A0A0] font-Inter text-[14px] 2xl:text-[16px] border rounded-[15px] px-5 py-3 2xl:py-4.5 w-[350px] 2xl:w-[420px] cursor-pointer `}
                                />
                            </div>
                            <div>
                                <button className='font-Inter w-max font-semibold bg-[#FFB5C0] text-[#272727]  px-14 py-3 2xl:py-3 rounded-full text-[13px] 2xl:text-[22px]'>
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>


                </div>

                {isModalOpen && (
                    <AddImageModal
                        onClose={() => setIsModalOpen(false)}
                        onSelectImage={handleImageSelect}
                    />
                )}
            </div>
        </>
    )
}

export default EditDetail