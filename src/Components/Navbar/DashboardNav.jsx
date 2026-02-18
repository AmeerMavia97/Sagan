import React, { useState, useRef, useEffect } from 'react';
import { SquarePlus, User, Settings, HelpCircle, ArrowRight } from 'lucide-react';
// at the top of DashboardNav.jsx
import { useNavigate } from "react-router-dom";

// inside your component

const DashboardNav = () => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef(null);
const navigate = useNavigate();
  // Close on click outside
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <>
      <section className="flex justify-between items-center py-6 px-20">
        {/* Logo */}
        <div>
          <img className="w-[12%] 2xl:w-[15%]" src="/Images/logo.png" alt="Logo" />
        </div>

        {/* User avatar + dropdown */}
        <div ref={menuRef} className="relative">
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="w-max p-1 2xl:p-2 rounded-full border border-[#c5c5c5] bg-white"
          >
            <img
              className="w-10 2xl:w-14 bg-[#FFB5C0] p-2 2xl:p-3 rounded-full"
              src="/Images/DashBoard/UserIcon.png"
              alt="User"
            />
          </button>

          {open && (
            <div
              className="absolute right-0 mt-3 w-72 2xl:w-80 bg-white rounded-[24px]
                         shadow-[0_15px_40px_rgba(0,0,0,0.15)] border border-[#E3E3E3]
                         overflow-hidden z-50"
            >
              {/* Header */}
              <div className="flex items-center justify-between px-5 py-4 border-b border-[#EAEAEA]">
                <p className="font-Inter font-semibold text-[14px] 2xl:text-[16px] text-[#222]">
                  This is a Demo Account
                </p>
                <div className="w-10 h-10 2xl:w-12 2xl:h-12 rounded-full bg-[#FFB5C0] flex items-center justify-center">
                  <User className="text-white size-5 2xl:size-6" />
                </div>
              </div>

              {/* Menu items */}
              <div className="py-3">
                <button
                  type="button"
                  className="w-full flex items-center gap-3 px-5 py-2.5 hover:bg-[#FFF3F5]
                             font-Inter text-[14px] 2xl:text-[15px] text-[#222] text-left"
                >
                  <SquarePlus className="size-5" />
                  <span>My Collection / Cards</span>
                </button>

                <button
  type="button"
  onClick={() => navigate("/account-setting")}
  className="w-full flex items-center gap-3 px-5 py-2.5 hover:bg-[#FFF3F5]
             font-Inter text-[14px] 2xl:text-[15px] text-[#222] text-left"
>
  <User className="size-5" />
  <span>My Account</span>
</button>

                <button
                  type="button"
                  className="w-full flex items-center gap-3 px-5 py-2.5 hover:bg-[#FFF3F5]
                             font-Inter text-[14px] 2xl:text-[15px] text-[#222] text-left"
                >
                  <Settings className="size-5" />
                  <span>Account Settings</span>
                </button>

                <button
                  type="button"
                  className="w-full flex items-center gap-3 px-5 py-2.5 hover:bg-[#FFF3F5]
                             font-Inter text-[14px] 2xl:text-[15px] text-[#222] text-left"
                >
                  <HelpCircle className="size-5" />
                  <span>FAQ</span>
                </button>
              </div>

              {/* Logout button */}
              <div className="px-4 pb-4 pt-1">
                <button
                  type="button"
                  className="w-full bg-[#FFB5C0] rounded-[24px] px-5 py-3
                             flex items-center justify-between
                             font-Inter font-semibold text-[14px] 2xl:text-[15px] text-[#111]"
                >
                  <span>Log Out</span>
                  <ArrowRight className="size-4" strokeWidth={2.5} />
                </button>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default DashboardNav;
