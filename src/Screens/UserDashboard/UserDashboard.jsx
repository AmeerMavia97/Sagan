import React from 'react'
import DashboardNav from '../../Components/Navbar/DashboardNav'
import ShowEvent from '../../Components/Dashboard/ShowEvent/ShowEvent'

const UserDashboard = () => {
    return (
        <>
            <DashboardNav></DashboardNav>

            <section className='flex flex-col justify-center items-center py-8 2xl:py-12' >
                <div className='bg-[#FFE2E2] px-14 rounded-[10px] w-[82%] py-10 '>
                    <h2 className='font-Inter font-bold mt-3 text-[22px] 2xl:text-[37px]'>Welcome To Sagan Online</h2>
                    <h1 className='font-Inter font-[300] text-[50px] 2xl:text-[75px]'>March 13th, 2025</h1>
                </div>
            </section>

            <section className='flex flex-col justify-center items-center py-12 gap-24 overflow-hidden'>
                    <ShowEvent></ShowEvent>
                    <ShowEvent></ShowEvent>
            </section>

        </>
    )
}

export default UserDashboard