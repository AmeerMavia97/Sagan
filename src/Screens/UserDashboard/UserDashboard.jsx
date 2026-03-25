import React from 'react'
import DashboardNav from '../../Components/Navbar/DashboardNav'
import ShowEvent from '../../Components/Dashboard/ShowEvent/ShowEvent'
import { ArrowDown } from 'lucide-react'

const UserDashboard = () => {
    return (
        <>
            <DashboardNav></DashboardNav>

            <section className='flex flex-col justify-center items-center py-8 2xl:py-12' >
                <div className='bg-[#FFE2E2] px-14 rounded-[10px] w-[82%] py-10 '>
                    <h2 className='font-Inter font-bold mt-3 text-[22px] 2xl:text-[37px]'>Welcome To Sagan Online</h2>
                    <h1 className='font-Inter font-[300] text-[50px] 2xl:text-[75px]'>March 13th, 2025</h1>
                    <div className='relative w-max'>

                        <select
                            className={`appearance-none font-Inter text-[14px] 2xl:text-[16px] border rounded-[15px] focus:outline-none mt-3 px-5 py-3 2xl:py-4 w-[350px] 2xl:w-[420px] text-black border-[#000] cursor-pointer
                                  `}
                        >
                            {["Please Select", 'Event 01', "Event 02"].map((opt, index) => (
                                <option className='text-[15px] ' key={index} value={opt}>
                                    {opt}
                                </option>
                            ))}
                        </select>
                        <ArrowDown
                            className={`pointer-events-none absolute top-11 2xl:top-[26px] right-4 size-6 2xl:size-7 text-[#000] `}
                            strokeWidth={2}
                        />
                    </div>
                </div>

            </section>

            <section className='flex flex-col justify-center items-center py-12 gap-24 overflow-hidden'>
                <ShowEvent></ShowEvent>
                {/* <ShowEvent></ShowEvent> */}
            </section>

        </>
    )
}

export default UserDashboard