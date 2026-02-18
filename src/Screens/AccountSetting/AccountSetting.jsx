import React from 'react'
import DashboardNav from '../../Components/Navbar/DashboardNav'
import AccountSettingTabs from '../../Components/AccountSettingTabs/AccountSettingTabs'
import { SquarePen } from 'lucide-react';
import SimpleToggle from "../../Components/ToggleSimple/SimpleToggle"
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
  <div className="px-8 py-8 border border-[#e4e4e4] rounded-[12px] bg-white">
    {/* Title */}
    <h2 className="font-Inter text-[22px] 2xl:text-[26px] font-semibold mb-6">
      Login
    </h2>

    {/* Password section */}
    <div className="mb-8">
      <h3 className="font-Inter text-[14px] 2xl:text-[15px] font-semibold mb-1">
        Password
      </h3>
      <p className="font-Inter text-[12px] 2xl:text-[13px] text-[#555]">
        You’ve set a secure password.{" "}
        <button
          type="button"
          className="text-[#FF5E7A] font-medium underline underline-offset-2"
        >
          Change password
        </button>
      </p>
    </div>

    {/* Linked login providers */}
    <div className="space-y-4">

      {/* Google */}
      <div className="flex items-center justify-between py-3 border-t border-[#F1F1F1] first:border-t-0">
        <div>
          <h4 className="font-Inter text-[14px] 2xl:text-[15px] font-semibold">
            Log in with Google
          </h4>
          <p className="font-Inter text-[12px] 2xl:text-[13px] text-[#777]">
            Not connected. You can choose to login with Google.
          </p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-[90px] h-9 2xl:w-[100px] 2xl:h-10
                     rounded-full border border-[#D8D8D8] bg-white shadow-sm"
        >
          <img
            src="/Images/events/Google.png"
            alt="Google"
            className="h-4 w-4"
          />
        </button>
      </div>

      {/* Apple */}
      <div className="flex items-center justify-between py-3 border-t border-[#F1F1F1]">
        <div>
          <h4 className="font-Inter text-[14px] 2xl:text-[15px] font-semibold">
            Log in with Apple
          </h4>
          <p className="font-Inter text-[12px] 2xl:text-[13px] text-[#777]">
            Not connected. You can choose to login with Apple.
          </p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-[90px] h-9 2xl:w-[100px] 2xl:h-10
                     rounded-full border border-[#D8D8D8] bg-white shadow-sm"
        >
          <img
            src="/Images/events/Apple.png"
            alt="Apple"
            className="h-4 w-4"
          />
        </button>
      </div>

      {/* X / Twitter */}
      <div className="flex items-center justify-between py-3 border-t border-[#F1F1F1]">
        <div>
          <h4 className="font-Inter text-[14px] 2xl:text-[15px] font-semibold">
            Log in with X
          </h4>
          <p className="font-Inter text-[12px] 2xl:text-[13px] text-[#777]">
            Not connected. You can choose to login with X.
          </p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-[90px] h-9 2xl:w-[100px] 2xl:h-10
                     rounded-full border border-[#D8D8D8] bg-white shadow-sm"
        >
          <img
            src="/Images/events/X.png"
            alt="X"
            className="h-4 w-4"
          />
        </button>
      </div>

      {/* Facebook */}
      <div className="flex items-center justify-between py-3 border-t border-[#F1F1F1]">
        <div>
          <h4 className="font-Inter text-[14px] 2xl:text-[15px] font-semibold">
            Log in with Facebook
          </h4>
          <p className="font-Inter text-[12px] 2xl:text-[13px] text-[#777]">
            Not connected. You can choose to login with Facebook.
          </p>
        </div>
        <button
          type="button"
          className="flex items-center justify-center w-[90px] h-9 2xl:w-[100px] 2xl:h-10
                     rounded-full border border-[#D8D8D8] bg-white shadow-sm"
        >
          <img
            src="/Images/events/Facebook.png"
            alt="Facebook"
            className="h-4 w-4"
          />
        </button>
      </div>
    </div>
  </div>
)
        },
{
  id: "verification",
  label: "Two-step verification",
  content: (
    <div className="px-8 py-8 border border-[#e4e4e4] rounded-[12px] bg-white">
      <h2 className="font-Inter text-[22px] 2xl:text-[26px] font-semibold mb-6">
        Two-step verification
      </h2>

      <div className="space-y-4">
        {/* Email notification */}
        <div className="flex items-center justify-between py-3 border-t border-[#F1F1F1] first:border-t-0">
          <div>
            <h3 className="font-Inter text-[14px] 2xl:text-[15px] font-semibold">
              Email notification
            </h3>
            <p className="font-Inter text-[12px] 2xl:text-[13px] text-[#777]">
              Verify one time codes sent to you email.
            </p>
          </div>
          <SimpleToggle defaultOn />
        </div>

        {/* SMS text messages */}
        <div className="flex items-center justify-between py-3 border-t border-[#F1F1F1]">
          <div>
            <h3 className="font-Inter text-[14px] 2xl:text-[15px] font-semibold">
              SMS text messages
            </h3>
            <p className="font-Inter text-[12px] 2xl:text-[13px] text-[#777]">
              Verify one time codes sent to you mobile number.
            </p>
          </div>
          <SimpleToggle />
        </div>

        {/* Authenticator app codes */}
        <div className="flex items-center justify-between py-3 border-t border-[#F1F1F1]">
          <div>
            <h3 className="font-Inter text-[14px] 2xl:text-[15px] font-semibold">
              Authenticator app codes
            </h3>
            <p className="font-Inter text-[12px] 2xl:text-[13px] text-[#777]">
              Verify one time codes generated in your preferred third party
              authenticator app.
            </p>
          </div>
          <SimpleToggle />
        </div>
      </div>
    </div>
  ),
}
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