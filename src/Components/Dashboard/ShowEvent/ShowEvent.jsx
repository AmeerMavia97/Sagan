import { Copy, Settings } from 'lucide-react'
import React, { useState } from 'react'
import SettingModal from '../SettingModal/SettingModal';
import EditDateModal from '../EditDateModal/EditDateModal';
import AddEmailModal from '../AddEmailModal/AddEmailModal';
import InviteListModal from '../InviteListModal/InviteListModal';
<<<<<<< HEAD
import MessageGuestModal from '../MessageGuestModal/MessageGuestModal';
=======
>>>>>>> 97d14d5707f0a9f4c975a9fbe32d4fcb75e56d9b
import { Link } from 'react-router-dom';

const ShowEvent = () => {

<<<<<<< HEAD
    const [showMessageModal,setshowMessageModal]= useState(false)
=======
>>>>>>> 97d14d5707f0a9f4c975a9fbe32d4fcb75e56d9b
    const [showSettingsModal, setShowSettingsModal] = useState(false);
    const [ShowEditDateModal, setShowEditDateModal] = useState(false);
    const [ShowAddEmail, setShowAddEmail] = useState(false);
    const [ShowInviteModal, setShowInviteModal] = useState(false);
<<<<<<< HEAD
    
    const toggleMessageModal =()=>{
        setshowMessageModal(!showMessageModal);
    }
=======

>>>>>>> 97d14d5707f0a9f4c975a9fbe32d4fcb75e56d9b
    const toggleSettingsModal = () => {
        setShowSettingsModal(!showSettingsModal);
    };

    const toggleDateModal = () => {
        setShowEditDateModal(!ShowEditDateModal);
    };

    const toggleAddEmail = () => {
        setShowAddEmail(!ShowAddEmail);
    };
    const toggleYourGroup = () => {
        setShowInviteModal(!ShowInviteModal);
    };


    return (
        <>
            <div className='w-[82%] border-b-[3px] pb-20 border-b-[#ffc6c6] relative'>
                <div onClick={toggleSettingsModal} className='bg-[#FFB5C0] absolute -right-28 2xl:-right-44 top-0 w-max py-3.5 px-4 2xl:px-6 2xl:py-4.5 rounded-l-[13px] '>
                    <Settings className='size-7 2xl:size-10' />
                </div>
                <div className='flex justify-center items-center pb-20'>
                    <h1 className='font-Inter text-[#272727] pr-12 text-[17px] 2xl:text-[22px] font-[700] border-r-[1px]'>Card</h1>
<<<<<<< HEAD
                    <h1 onClick={toggleMessageModal} className='font-Inter text-[#272727] pl-12  text-[17px] 2xl:text-[22px] font-[700]'>Message to guests</h1>
=======
                    <h1 className='font-Inter text-[#272727] pl-12  text-[17px] 2xl:text-[22px] font-[700]'>Message to guests</h1>
>>>>>>> 97d14d5707f0a9f4c975a9fbe32d4fcb75e56d9b
                </div>
                <div className='flex grid-cols-2'>
                    <div className='w-[40%] 2xl:w-[45%]'>
                        <img className='w-[92%] 2xl:w-[90%] h-full object-cover' src="/Images/events/Card8.png" alt="" />
                    </div>
                    <div className='w-[60%] 2xl:w-[55%] flex flex-col justify-center gap-12'>
                        <div className='flex gap-7 2xl:gap-10'>
                            <div className='flex flex-col gap-9 2xl:gap-12 w-[60%] 2xl:w-[58%]'>
                                <h1 className='font-cormorant-upright text-[#272727] text-[45px] 2xl:text-[68px] leading-[70px]'>John’s  7th Birthday</h1>
                                <div className='relative'>
                                    <input type="text" placeholder='Invite link' className='text-[#848484] placeholder:text-[#848484] border-[2px] px-4 rounded-[8px] py-3.5 2xl:py-4.5 w-full border-[#848484] text-[15px] 2xl:text-[22px] font-Inter font-[500]' />
                                    <Copy className='text-[#848484] size-4.5 2xl:size-7 top-5 2xl:top-6 right-5 absolute ' />
                                </div>
                                <div className='flex gap-6'>
                                    <button onClick={toggleAddEmail} className='font-Inter w-max font-semibold bg-[#FFB5C0] text-[#272727]  px-12 2xl:px-16 py-3 2xl:py-5 rounded-full text-[13px] 2xl:text-[20px]'>
                                        Invite Group
                                    </button>
                                    <button className='font-Inter  w-max font-semibold text-[#272727] border-[2px]  border-[#FFB5C0] px-9 2xl:px-12 py-2 2xl:py-5 rounded-full text-[13px] 2xl:text-[20px]'>
                                        Sign & Chip In
                                    </button>
                                </div>
                            </div>
                            <div className='bg-[#FFB5C0] w-[40%]  2xl:w-[42%] rounded-[10px] py-5 2xl:py-6 flex flex-col justify-center items-center gap-2 2xl:gap-3'>
                                <img className='w-[25%]' src="/Images/DashBoard/PaymentIcon.png" alt="" />
                                <div className='flex flex-col gap-3 justify-center items-center'>
                                    <h4 className='font-Inter text-[16px] 2xl:text-[20px] leading-[20px] font-[600]'>Collected</h4>
                                    <h1 className='font-Bebas text-[45px] leading-[45px] 2xl:text-[65px] 2xl:leading-[60px] font-[550]'>$12.59</h1>
                                    <Link to={"/withdraw"}>
                                        <button className='bg-[#000000] rounded-full text-white px-5.5 2xl:px-8.5 py-2.5 2xl:py-3.5 text-[13px] 2xl:text-[15px] font-Inter'>Withdraw Money</button>
                                    </Link>
                                    <button className='bg-[#fff] rounded-full text-[#000000] font-semibold 2xl:px-8.5 py-2 px-2 2xl:py-3 text-[10px] 2xl:text-[11.5px] font-Inter'> <span>!</span> Identity verification is required at $1000</button>
                                </div>
                            </div>
                        </div>
                        <div className='grid grid-cols-2 gap-10'>
                            <div className='border-[#878787] border-[1.5px] py-6 2xl:py-8 rounded-[10px] flex flex-col gap-5 items-center px-10'>
                                <h1 className='text-[23px] 2xl:text-[32px] text-[#000000] font-Inter font-semibold'>Your Group</h1>
                                <div className='text-center w-full'>
                                    <h1 className='font-Inter text-[#8E8E8E] text-[15px] 2xl:text-[20px] font-semibold'><span className='text-[#272727]'>1</span> Invited</h1>
                                    <h1 className='font-Inter text-[#8E8E8E] text-[15px] 2xl:text-[20px] font-semibold border-[#FFB5C0] border-b-[3px] pb-5 2xl:pb-8'><span className='text-[#272727]'>2</span>  Paid & signed</h1>
                                </div>
                                <button onClick={toggleYourGroup} className='font-Inter w-max font-semibold bg-[#FFB5C0] text-[#272727]  px-12 2xl:px-16 py-2.5 2xl:py-4 rounded-full text-[13px] 2xl:text-[23px]'>
                                    View Group
                                </button>
                            </div>
                            <div className='border-[#878787] border-[1.5px] py-6 2xl:py-8 rounded-[10px] flex flex-col gap-5 items-center px-10'>
                                <h1 className='text-[23px] 2xl:text-[32px] text-[#000000] font-Inter font-semibold'>3 Days Left</h1>
                                <div className='text-center w-full'>
                                    <h1 className='font-Inter text-[#8E8E8E] text-[15px] 2xl:text-[20px] font-semibold'>Group Closing:</h1>
                                    <h1 className='font-Inter text-[#8E8E8E] text-[15px] 2xl:text-[20px] font-semibold border-[#FFB5C0] border-b-[3px]  pb-5 2xl:pb-8'>20th April 2025</h1>
                                </div>
                                <button onClick={toggleDateModal} className='font-Inter w-max font-semibold bg-[#FFB5C0] text-[#272727]  px-12 2xl:px-16 py-2.5 2xl:py-4 rounded-full text-[13px] 2xl:text-[23px]'>
                                    Edit/Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

<<<<<<< HEAD
{showMessageModal &&(
    <MessageGuestModal
    onClick={toggleMessageModal}/>
)}
=======

>>>>>>> 97d14d5707f0a9f4c975a9fbe32d4fcb75e56d9b
            {ShowEditDateModal && (
                <EditDateModal
                    onClick={toggleDateModal}
                />
            )}
            {showSettingsModal && (
                <SettingModal
                    onClick={toggleSettingsModal}
                />
            )}
            {ShowAddEmail && (
                <AddEmailModal
                    onClick={toggleAddEmail}
                />
            )}
            {ShowInviteModal && (
                <InviteListModal
                    onClick={toggleYourGroup}
                />
            )}
        </>
    )
}

export default ShowEvent