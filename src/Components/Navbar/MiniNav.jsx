import React, { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "FAQ", path: "/faq" },
];

const MiniNav = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 shadow-sm backdrop-blur-sm bg-white/80  py-2 ">
      <div className="md:px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 px-6">
          {/* Logo */}
          <div className="flex items-center">
            <Link className="flex items-center space-x-2" to="/">
              <img src="/Images/logo.png" alt="Sagan Logo" className="w-40" />
            </Link>
          </div>

          {/* Desktop Nav */}
          <nav className="items-center hidden space-x-8 md:flex">
            {navLinks.map((link) => {
              const isActive = currentPath === link.path;
              return (
                <NavLink
                  key={link.path}
                  className={`font-medium transition ${
                    isActive
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
              className="inline-flex items-center gap-1.5 px-8 py-2.5 text-sm rounded-full border font-medium text-[#272727] border-[#272727] transition-colors hover:bg-[#272727] hover:text-white box-border"
            >
              Login
            </Link>
            <Link
              className=" inline-flex items-center gap-1.5 px-8 py-2.5 text-sm rounded-full font-medium bg-[#000000] text-white transition-colors hover:bg-[#1f1f1f]"
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
              className="p-2 rounded-md text-black hover:bg-gray-100 focus:outline-none"
            >
              {menuOpen ? (
                <svg
                  className="w-6 h-6"
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
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            className={`md:hidden absolute w-full transition-all duration-800 ease-in-out transform origin-top ${
              menuOpen
                ? "scale-y-100 opacity-100 pointer-events-auto"
                : "scale-y-0 opacity-0 pointer-events-none"
            } mt-2 bg-white border-t border-gray-200 shadow-lg rounded-b-md overflow-hidden`}
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  className={({ isActive }) =>
                    `block px-3 py-2 text-base font-medium rounded-md  transition-colors duration-200 ${
                      isActive
                        ? "text-primary bg-pink-50"
                        : "text-gray-700 hover:text-primary hover:bg-pink-50"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}

              <div className="pt-4 pb-3 border-t border-gray-200">
                <div className="flex space-x-2">
                  <NavLink
                    to="/login"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-6 py-2.5 text-sm rounded-full border font-medium text-[#272727] border-[#272727] transition-colors hover:bg-[#272727] hover:text-white box-border"
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to="/register"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 px-6 py-2.5 text-sm rounded-full font-medium bg-[#000000] text-white transition-colors hover:bg-[#1f1f1f]"
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
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default MiniNav;
