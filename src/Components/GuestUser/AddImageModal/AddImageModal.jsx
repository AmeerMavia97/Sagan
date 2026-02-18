import { X } from 'lucide-react';
import React from 'react';

const AddImageModal = ({ onClose, onSelectImage }) => {
    // Example images - you can replace with dynamic data
    const images = [
        'Images/GuestUserImage/Card1.png',
        'Images/GuestUserImage/Card2.png',
        'Images/GuestUserImage/Card3.png',
        'Images/GuestUserImage/Card4.png',
        'Images/GuestUserImage/Card5.png',
        'Images/GuestUserImage/Card6.png',
        'Images/GuestUserImage/Card7.png',
        'Images/GuestUserImage/Card8.png',
        'Images/GuestUserImage/Card9.png',
        'Images/GuestUserImage/Card10.png',
        'Images/GuestUserImage/Card11.png',
        'Images/GuestUserImage/Card12.png',
    ];

    const handleImageClick = (url) => {
        onSelectImage(url);
    };

    return (
        <div className="fixed inset-0 z-50 bg-[#79797946] flex items-center justify-center ">
            <div className="bg-[#ffecec] relative w-[80%] 2xl:w-[65%] rounded-[15px]">

                <div className='bg-[#FFB5C0] py-3 2xl:py-3.5 px-3 text-center  rounded-t-[15px]'>

                    <h1 className='font-Inter font-[700] text-[18px] 2xl:text-[33px]'>Add an image or GIF</h1>

                </div>
                {/* Close Button */}
                <button
                    className="absolute top-4 cursor-pointer 2xl:top-6 right-5 text-5xl font-bold"
                    onClick={onClose}
                >
                 <X className='size-5 2xl:size-8'/>
                </button>

                <div className='flex flex-col justify-center items-center gap-7 2xl:gap-10 py-10'>
                    <div className='flex justify-center items-center'>
                        <h1 className='font-Inter text-[#272727] pr-10 text-[20px] 2xl:text-[28px] font-[600] border-r-[1px]'>Giphy</h1>
                        <h1 className='font-Inter text-[#5a5a5a] pl-10  text-[20px] 2xl:text-[28px] font-[600]'>Unsplash</h1>
                    </div>
                    <div className='flex flex-col justify-center w-[90%]'>
                        <input type="text" className='bg-white text-[14px] 2xl:text-[20px] rounded-[9px] font-Inter font-[500] px-5 2xl:px-8 py-3 2xl:py-4.5 border-[1px] border-[#797878] w-full' placeholder='Search Library....' />
                    </div>
                    <div className="w-[90%]  grid grid-cols-6">
                        {images.map((url, idx) => (
                            <img
                                key={idx}
                                src={url}
                                alt={`Option ${idx + 1}`}
                                onClick={() => handleImageClick(url)}
                                className="h-32 2xl:h-48 w-full cursor-pointer object-cover hover:opacity-70 transition"
                            />
                        ))}
                    </div>
                </div>


            </div>
        </div>
    );
};

export default AddImageModal;
