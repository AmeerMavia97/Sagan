import React, { useEffect, useRef, useState } from "react";
import { CircleCheckBig, ArrowUpRight } from "lucide-react";

const EventPromoSection = () => {
  const features = [
    "A modern way to celebrate life's milestones",
    "Culturally meaningful and inclusive",
    "Safe, fast, and simple",
  ];

  const videoSrc = "Images/videos/event-promo.mp4";
  const videoPoster = "Images/home/event-promotion.png";

  const [isMobile, setIsMobile] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  console.log(isPlaying);

  const videoRef = useRef(null);

  useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth < 1024);
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const togglePlay = (e) => {
    e.preventDefault();
    console.log("====================================");
    console.log(videoRef);
    console.log("====================================");
    const video = videoRef.current;
    if (!video) return;

    if (video.paused) {
      video
        .play()
        .then(() => setIsPlaying(true))
        .catch((error) => {
          console.error("Video play failed:", error);
        });
    } else {
      video.pause();
      setIsPlaying(false);
    }
  };

  const containerStyle = isMobile
    ? {  }
    : { top: "50px", left: "44px", width: "310px"};

  const VideoPlayer = () => (
    <div className="relative w-[280px] h-[190px] sm:h-[310px] sm:w-[430px] min-[1666px]:!w-[560px] min-[1666px]:!h-[380px] md:w-[470px] md:h-[280px] lg:w-[400px] lg:h-[300px] m-auto">
      {/* Frame image */}
      <img
        src={`Images/home/event-${isMobile ? "mobile" : "laptop"}.png`}
        alt="Frame"
        className="absolute inset-0 z-10 object-contain w-full  h-full pointer-events-none"
      />

      {/* Video container */}
      <div
        className="absolute overflow-hidden rounded-md z-0 flex justify-center top-[36px] sm:top-[63px] md:top-[36px] h-[63%] sm:h-[60%] w-[95%] left-1 sm:left-2 md:left-[9px] lg:left-[44p]  md:h-[75%] lg:h-[200px] min-[1666px]:!left-[12%] min-[1666px]:!w-[420px] min-[1666px]:!h-[260px]"
        style={containerStyle}
      >
        <video
          controls
          ref={videoRef}
          className="object-cover w-full h-auto  sm:rounded-none sm:w-full sm:h-full"
          preload="metadata"
          playsInline
          autoPlay={isPlaying}
          onEnded={() => setIsPlaying(false)}
        >
          <source src={videoSrc} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {!isPlaying && (
          <>
            <img
              className="absolute inset-0 w-[100%]  sm:rounded-none  sm:bg-[#f1f1f1] h-full object-cover z-30"
              src={videoPoster}
              alt="Video poster"
            />
            <div
              onClick={togglePlay}
              className="absolute inset-0  flex items-center justify-center  bg-opacity-20 cursor-pointer z-30"
            >
              <button className=" p-2 lg:p-4 bg-white rounded-full shadow-lg hover:scale-110 transition">
                <svg
                  className=" w-6 h-6 lg:w-8 lg:h-8 text-[#ff848b]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );

  return (
    <section className="px-4 pt-16 lg:py-16 xl:pt-16 xl:pb-0 min-[1666px]:!pt-36 flex min-[1666px]:block bg-white">
      <div className="flex flex-col-reverse items-center gap-0  mx-auto max-w-9xl lg:max-w-7xl lg:flex-row lg:gap-16 min-[1666px]:!gap-10">
        {/* Desktop Video */}
        {!isMobile && (
          <div className="flex justify-center w-full lg:w-1/2 min-[1666px]:!w-[70%]">
            <div className=" lg:p-10 shadow-lg bg-[#ffb5c0] rounded-2xl">
              <VideoPlayer />
            </div>
          </div>
        )}

        {/* Text Content */}
        <div className="w-full sm:text-center px-3 sm:px-0 lg:w-1/2 lg:text-left">
          <ul className="mb-4 sm:mb-8 space-y-1 sm:space-y-4">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex text-start items-start gap-1 sm:gap-3 px-5 sm:px-0 sm:justify-center lg:justify-start"
              >
                <div className="w-6 h-6 flex sm:items-center sm:justify-center rounded-full mt-0.5 flex-shrink-0">
                  <CircleCheckBig className="w-4 h-4 text-[#ff848b]" />
                </div>
                <span className="font-Inter text-[12px]  md:text-lg font-medium text-gray-900 min-[1666px]:!text-[20px]">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <h3 className="mb-8 text-[32px] leading-[30px] lg:leading-[52px] text-center lg:text-start font-right-grotesk md:text-4xl min-[1666px]:!text-[55px] font-bold text-[#ff848b]">
            START YOUR  
            <br />
              EVENT TODAY!
          </h3>

          <div className="flex justify-center lg:justify-start font-space-grotesk">
            <button
              onClick={() => console.log("Share button clicked")}
              className="inline-flex text-[16px] items-center gap-1.5 px-10 py-2.5 sm:px-6 sm:py-2.5  rounded-full font-medium bg-black text-white hover:bg-[#1f1f1f] min-[1666px]:px-8 min-[1666px]:py-4 min-[1666px]:!text-[16px] font-Inter "
            >
              <span>Share</span>
                <ArrowUpRight className="w-4 h-4 text-[#fff]" />
            </button>
          </div>
        </div>

        {/* Mobile Video */}
        {isMobile && (
          <div className="flex justify-center w-full mb-8">
            <div className="max-w-sm sm:max-w-xl md:max-w-lg p-6 shadow-lg bg-[#FFB5C0] rounded-3xl">
              <VideoPlayer />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventPromoSection;
