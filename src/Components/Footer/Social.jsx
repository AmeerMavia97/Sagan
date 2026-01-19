import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const socialLinks = [
  { name: "Facebook", icon: faFacebookF, url: "#" },
  // { name: "LinkedIn", icon: faLinkedinIn, url: "#" },
  { name: "Instagram", icon: faInstagram, url: "#" },
  // { name: "Telegram", icon: faTelegram, url: "#" },
  // { name: "WhatsApp", icon: faWhatsapp, url: "#" },
];

const Social = () => {
  return (
    <>
      <main className="px-4 pt-8 mx-auto max-w-7xl sm:px-6 lg:px-8 bg-[#ffe2e2]">
        <div className="mb-5 text-center">
          <h1 className="px-4 mb-8 text-[30px] leading-[37px] sm:text-[48px] !font-[300] sm:leading-[60px] text-[#272727] font-cormorant-upright min-[1666px]:font-[52px]">
            Join us in modernizing cash gift-giving—one
            <br className="hidden sm:block" />
            celebration at a time.
          </h1>
          <div className="flex justify-center mb-6 space-x-2">
            {socialLinks.map((social) => (
              <div
                key={social.name}
                href={social.url}
                aria-label={social.name}
                className="flex items-center justify-center w-8 h-8 sm:w-10 sm:h-10 min-[1666px]:w-12 min-[1666px]:h-12 text-white transition duration-200 transform bg-black rounded-full hover:bg-gray-700 hover:scale-110"
              >
                 <FontAwesomeIcon icon={social.icon} className="size-[24px] min-[1666px]:!size-[25px]" />
              </div>
            ))}
          </div>
          <div className="mb-6 text-[14px] font-semibold text-[#272727] font-Inter min-[1666px]:text-[18px]">
            <span className="mr-4">@Saganonline</span>
            <span>#Saganonline</span>
          </div>
        </div>
      </main>
    </>
  );
};

export default Social;
