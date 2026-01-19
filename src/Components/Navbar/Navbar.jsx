import { AlignJustify } from "lucide-react";
import React, { Fragment, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Dialog, DialogBackdrop, DialogPanel, DialogTitle, Transition, TransitionChild } from '@headlessui/react'

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "FAQ", path: "/faq" },
];


const ToggleButton = ({ onClick }) => (
  <button
    className="absolute right-[-60px] w-[60px] h-[60px] bg-white bg-[url('https://cdn4.iconfinder.com/data/icons/wirecons-free-vector-icons/32/menu-alt-512.png')] bg-center bg-no-repeat bg-[length:25px_25px]"
    onClick={onClick}
    aria-label="Toggle menu"
  ></button>
);


const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 mt-1 md:mt-0 z-[999999] border-b border-gray-200 shadow-sm backdrop-blur-sm bg-white/80  py-3 ">
      <div className="md:px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-11 md:h-16 px-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link className="flex items-center space-x-2 z-50" to="/">
              <img src="/Images/logo.png" alt="Sagan Logo" className="w-48 min-[1666px]:!w-56 " />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="items-center hidden space-x-8 md:flex">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={`font-medium font-Inter transition min-[1666px]:text-[19px] ${isActive
                    ? "text-primary"
                    : "text-gray-700 hover:text-primary"
                    }`}
                >
                  {link.name}
                </NavLink>
              );
            })}
          </nav>

          {/* Desktop Buttons */}
          <div className="items-center hidden space-x-4 md:flex">
            <Link
              className="inline-flex items-center gap-1.5 px-8 py-2.5 text-sm rounded-full border font-medium text-[#272727] border-[#272727] transition-colors min-[1666px]:text-[17px] hover:bg-[#272727] hover:text-white box-border font-Inter"
              to="/login"
            >
              Login
            </Link>
            <Link
              className=" inline-flex items-center gap-1.5 px-8 py-2.5 text-sm rounded-full font-medium bg-[#000000] text-white transition-colors hover:bg-[#1f1f1f] min-[1666px]:text-[17px] font-Inter "
              to="/event"
            >
              <span>Start</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right w-4 h-4"
              >
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-4 rounded-md text-black hover:bg-gray-100 focus:outline-none z-50"
            >
              {menuOpen ? (
                <svg
                  className="w-7 h-7"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <AlignJustify className="size-8" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`absolute top-0 w-full  overflow-hidden ${menuOpen ? "z-50 h-[100vh]" : "z-0"} `}>
          {/* Main Menu */}
          <div
            className={`absolute top-0 left-0 w-[100%] h-[100vh] bg-[#ffffff96] transform transition-transform duration-500 ${menuOpen ? 'translate-x-[0%]' : '-translate-x-[100%]'
              } `}
          >
            <div className=" relative w-[100%] bg-white h-[100vh] flex flex-col gap-14 px-5 py-5">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Link className="flex items-center space-x-2 z-50" to="/">
                    <img src="/Images/logo.png" alt="Sagan Logo" className="w-44 min-[1666px]:!w-52 " />
                  </Link>
                </div>
                <button className={``} onClick={() => setMenuOpen(!menuOpen)} >
                  <svg
                    className="w-9 h-9"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              <nav className=" flex flex-col gap-5 px-6 ">
                {navLinks.map((link) => {
                  const isActive = currentPath === link.path;
                  return (
                    <NavLink
                      key={link.path}
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className={`font-[700] font-Inter transition text-[25px] ${isActive
                        ? "text-primary"
                        : "text-gray-700 hover:text-primary"
                        }`}
                    >
                      {link.name}
                    </NavLink>
                  );
                })}
                <div className="tems-center flex  gap-3 mt-5 !justify-start">
                  <Link
                    className="inline-flex text-[18px] w-max items-center gap-1.5 px-10 py-2 font-[700] text-sm rounded-full border-[2px] text-[#272727] border-[#272727] transition-colors hover:bg-[#272727] hover:text-white box-border font-Inter"
                    to="/login"
                  >
                    Login
                  </Link>
                  <Link
                    className=" inline-flex items-center gap-1.5 px-10 py-2.5 text-sm rounded-full font-[700] bg-[#000000] text-white transition-colors hover:bg-[#1f1f1f] text-[18px] font-Inter "
                    to="/register"
                  >
                    <span>Start</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-up-right-icon lucide-arrow-up-right w-5.5 h-5.5"
                    >
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </Link>
                </div>

              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
