import React from 'react';
import { NavLink } from 'react-router-dom';
import ImageSlider from './ImageSlider';
import Social from './Social';

const socialLinks = [
  { name: 'Facebook', icon: 'fab fa-facebook-f', url: '#' },
  { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: '#' },
  { name: 'Instagram', icon: 'fab fa-instagram', url: '#' },
  { name: 'Telegram', icon: 'fab fa-telegram-plane', url: '#' },
  { name: 'WhatsApp', icon: 'fab fa-whatsapp', url: '#' }
];



const footerLinks = [
  {
    title: 'Home',
    links: [
      { label: 'How it works', href: '#' },
      { label: 'Secure Payments', href: '#' },
      { label: 'Testimonial', href: '#' }
    ]
  },
  {
    title: 'Company',
    links: [
      { label: 'About Us', href: '/about-us' },
    ]
  },
  {
    title: 'Help',
    links: [
      { label: 'FAQs', href: '/faq' }
    ]
  }
];

const Footer = () => {
  return (
    <div className=" bg-[#ffb5c0]  bg-gradient-to-br">
        
      {/* Footer */}
      <footer className="pt-12 pb-5 sm:py-12 px-6 md:px-28 border-t border-[#ffb5c0] backdrop-blur-sm bg-[#ffb5c0]">
        <div className="px-0 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-4 max-[1080px]:place-items-center  min-[1666px]:flex" >
            <div className="flex flex-col items-center mr-5 sm:mr-0 sm:items-start">
              <img src="Images/logo.png" alt="Sagan Logo" className="w-55  min-[1666px]:w-90" />
            </div>
            <div className="grid grid-cols-2 gap-16 sm:grid-cols-3 md:col-span-3  min-[1666px]:gap-20  min-[1666px]:pl-20">
              {footerLinks.map((section, index) => (
                <div key={index}>
                  <h3 className="mb-4 text-lg font-semibold text-[#272727] font-Inter  min-[1666px]:text-[20px]">
                    {section.title}
                  </h3>
                  <ul className="space-y-3 text-sm  min-[1666px]:text-[18px]">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <NavLink
                          to={link.href}
                          className="text-[#272727] font-Inter min-[1666px]:!text-[19px] transition-colors duration-200 hover:text-primary font-medium"
                        >
                          {link.label}
                        </NavLink>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
          <div className="pt-6 px-5 sm:px-0 sm:pt-2 mt-8 text-center  min-[1666px]:mt-14">
            <p className="text-[12px] text-[#272727] font-semibold font-Inter min-[1666px]:!font-[600]  min-[1666px]:text-[18px] ">
             © 2025 - SAGANonline | All Rights Reserved | Developed by DevanceSoft
            </p>
          </div>
        </div>
      </footer>

      
    </div>
  );
};

export default Footer;
