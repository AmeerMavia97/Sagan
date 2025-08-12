import React from 'react'

const DashboardNav = () => {
  return (
    <>
    <section className='flex justify-between items-center py-6 px-20'>

        <div>
            <img className='w-[60%] 2xl:w-[75%]' src="/Images/logo.png" alt="" />
        </div>
        <div>
            <div className=' w-max p-1 2xl:p-2 rounded-full border border-[#c5c5c5]'>
                <img className='w-10 2xl:w-14 bg-[#FFB5C0] p-2 2xl:p-3 rounded-full' src="/Images/DashBoard/UserIcon.png" alt="" />
            </div>
        </div>

    </section>
    </>
  )
}

export default DashboardNav