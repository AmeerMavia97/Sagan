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
      { label: 'Our Story', href: '#' },
      { label: 'Blogs', href: '#' }
    ]
  },
  {
    title: 'Help',
    links: [
      { label: 'FAQs', href: '#' }
    ]
  }
];

const Footer = () => {
  return (
    <div className="min-h-screen bg-[#FFE2E2] bg-gradient-to-br">
    
     <Social></Social>

     <ImageSlider></ImageSlider>

      {/* Footer */}
      <footer className="py-12 px-6 md:px-28 border-t border-[#FFE2E2] backdrop-blur-sm bg-[#ffb5c0]">
        <div className="px-0 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
            <div className="flex flex-col items-start">
              <img src="Images/logo.png" alt="Sagan Logo" className="w-55" />
            </div>
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-3 md:col-span-3">
              {footerLinks.map((section, index) => (
                <div key={index}>
                  <h3 className="mb-4 text-lg font-semibold text-[#272727] font-space-grotesk">
                    {section.title}
                  </h3>
                  <ul className="space-y-3 text-sm">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}>
                        <NavLink
                          href={link.href}
                          className="text-[#272727] font-space-grotesk transition-colors duration-200 hover:text-primary font-medium"
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
          <div className="pt-2 mt-8 text-center">
            <p className="text-sm text-[#272727] font-medium font-Grotesk">
              © 2025 - SAGANonline | All Rights Reserved | Designed By Name
            </p>
          </div>
        </div>
      </footer>

      
    </div>
  );
};

export default Footer;
