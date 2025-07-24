
const socialLinks = [
  { name: 'Facebook', icon: 'fab fa-facebook-f', url: '#' },
  { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: '#' },
  { name: 'Instagram', icon: 'fab fa-instagram', url: '#' },
  { name: 'Telegram', icon: 'fab fa-telegram-plane', url: '#' },
  { name: 'WhatsApp', icon: 'fab fa-whatsapp', url: '#' }
];


const Social = () => {
  return (
    <>
      <main className="px-4 pt-8 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="mb-5 text-center">
          <h1 className="px-4 mb-8 text-[48px] !font-[300] leading-[60px] text-[#272727] font-cormorant-upright">
            Join us in modernizing cash gift-giving—one
            <br className="hidden sm:block" />
            celebration at a time.
          </h1>
          <div className="flex justify-center mb-6 space-x-2">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                aria-label={social.name}
                className="flex items-center justify-center w-10 h-10 text-white transition duration-200 transform bg-black rounded-full hover:bg-gray-700 hover:scale-110"
              >
                <i className={`${social.icon} text-lg`}></i>
              </a>
            ))}
          </div>
          <div className="mb-6 text-sm font-medium text-[#272727] font-space-grotesk">
            <span className="mr-4">@Saganonline</span>
            <span>#Saganonline</span>
          </div>
        </div>
      </main>
    </>
  );
};

export default Social;
