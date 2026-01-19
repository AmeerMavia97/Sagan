import React from 'react'
import DashboardNav from '../../Components/Navbar/DashboardNav'
import AccountSettingTabs from '../../Components/AccountSettingTabs/AccountSettingTabs'
import { SquarePen } from 'lucide-react';

const AccountSetting = () => {

    const tabData = [
        {
            id: "Contact",
            label: "Contact info",
            content: (
                <div className='flex flex-col gap-8'>
                    <div className='px-8 py-8 border-[#cfcfcf] border-[2px]  rounded-[10px]'>
                        <div className='flex justify-between items-center'>
                            <h2 className="font-Inter text-[22px] 2xl:text-[30px] font-bold mb-2">Linked Account</h2>
                            <p><SquarePen className='size-6 2xl:size-8' /></p>
                        </div>
                        <div className='flex flex-col gap-6 2xl:gap-9 my-5 2xl:my-9'>
                            <h1 className='font-Inter font-[600] text-[15px] 2xl:text-[20px]'>Username</h1>
                            <h1 className='font-Inter font-[600] text-[15px] 2xl:text-[20px]'>Name</h1>
                            <h1 className='font-Inter font-[600] text-[15px] 2xl:text-[20px]'>Email</h1>
                            <h1 className='font-Inter font-[600] text-[15px] 2xl:text-[20px]'>Phone Number</h1>
                        </div>
                    </div>
                    <div className='px-8 py-6 border-[#cfcfcf] border-[2px]  rounded-[10px]'>
                        <div className='flex justify-between items-center'>
                            <h2 className="font-Inter text-[22px] 2xl:text-[30px] font-bold mb-2">Linked Account</h2>
                        </div>
                        <div className='grid grid-cols-4 mt-2 2xl:mt-3 gap-8 2xl:gap-10'>
                            <div className='border-[1.5px] flex justify-center border-[#979797] rounded-full py-2 2xl:py-3'>
                                <img className='w-4' src="/Images/events/Google.png" alt="" />
                            </div>
                            <div className='border-[1.5px] flex justify-center border-[#979797] rounded-full py-2 2xl:py-3'>
                                <img className='w-4' src="/Images/events/Google.png" alt="" />
                            </div>
                            <div className='border-[1.5px] flex justify-center border-[#979797] rounded-full py-2 2xl:py-3'>
                                <img className='w-4' src="/Images/events/Google.png" alt="" />
                            </div>
                            <div className='border-[1.5px] flex justify-center border-[#979797] rounded-full py-2 2xl:py-3'>
                                <img className='w-4' src="/Images/events/Google.png" alt="" />
                            </div>
                        </div>
                    </div>
                </div>

            ),
        },
        {
            id: "security",
            label: "Password and security",
            content: (
                <div className='px-8 py-8 border-[#cfcfcf] border-[2px]  rounded-[10px]'>
                    <div>
                        <div className='flex justify-between items-center'>
                            <h2 className="font-Inter text-[22px] 2xl:text-[30px] font-bold mb-2">Linked Account</h2>
                        </div>
                    </div>
                </div>
            )
        },
        {
            id: "verification",
            label: "Two-step verification",
        },
    ];


    return (
        <>
            <DashboardNav></DashboardNav>

            <section className='flex justify-center items-center border-t-[1px] border-[#24242492] pt-16'>
                <div className='bg-[#FFE2E2] w-[82%] py-14 2xl:py-20 rounded-[10px] text-center'>
                    <h1 className='font-right-grotesk text-[32px] 2xl:text-[50px] uppercase'>Account SettingS</h1>
                </div>
            </section>

            <section className='flex justify-center py-10'>
                <div className="w-[82%]">
                    <AccountSettingTabs tabs={tabData} />
                </div>
            </section>
        </>
    )
}

export default AccountSetting