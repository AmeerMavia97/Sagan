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
    ? { top: "27px", left: "-12px", width: "295px", height: "125px" }
    : { top: "50px", left: "44px", width: "310px", height: "190px" };

  const VideoPlayer = () => (
    <div className="relative w-[280px] h-[180px] lg:w-[400px] lg:h-[300px] m-auto">
      {/* Frame image */}
      <img
        src={`Images/home/event-${isMobile ? "mobile" : "laptop"}.png`}
        alt="Frame"
        className="absolute inset-0 z-10 object-contain w-full  h-full pointer-events-none"
      />

      {/* Video container */}
      <div
        className="absolute overflow-hidden rounded-md z-0 w-full flex justify-center"
        style={containerStyle}
      >
        <video
          controls
          ref={videoRef}
          className="object-cover w-[90%] rounded-2xl sm:rounded-none sm:w-full h-full"
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
              className="absolute inset-0 w-full rounded-[40px] sm:rounded-none  sm:bg-[#f1f1f1] h-full object-cover z-30"
              src={videoPoster}
              alt="Video poster"
            />
            <div
              onClick={togglePlay}
              className="absolute inset-0  flex items-center justify-center  bg-opacity-20 cursor-pointer z-30"
            >
              <button className="p-4 bg-white rounded-full shadow-lg hover:scale-110 transition">
                <svg
                  className="w-8 h-8 text-pink-500"
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
    <section className="px-4 py-16 bg-white">
      <div className="flex flex-col-reverse items-center gap-5 sm:gap-12 mx-auto max-w-7xl lg:flex-row lg:gap-16">
        {/* Desktop Video */}
        {!isMobile && (
          <div className="flex justify-center w-full lg:w-1/2">
            <div className="p-10 shadow-lg bg-[#ffb5c0] rounded-3xl">
              <VideoPlayer />
            </div>
          </div>
        )}

        {/* Text Content */}
        <div className="w-full sm:text-center px-3 sm:px-0 lg:w-1/2 lg:text-left">
          <ul className="mb-8 space-y-4">
            {features.map((feature, index) => (
              <li
                key={index}
                className="flex text-start items-start gap-3 sm:justify-center lg:justify-start"
              >
                <div className="w-6 h-6 flex sm:items-center sm:justify-center rounded-full mt-0.5 flex-shrink-0">
                  <CircleCheckBig className="w-4 h-4 text-pink-400" />
                </div>
                <span className="font-space-grotesk text-base md:text-lg font-medium text-gray-900">
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          <h3 className="mb-8 text-2xl font-right-grotesk md:text-4xl font-bold text-[#ff848b]">
            START YOUR  
            <br />
              EVENT TODAY!
          </h3>

          <div className="flex sm:justify-center lg:justify-start font-space-grotesk">
            <button
              onClick={() => console.log("Share button clicked")}
              className="inline-flex items-center gap-1.5 px-6 py-2.5 text-sm rounded-full font-medium bg-black text-white hover:bg-[#1f1f1f]"
            >
              <span>Share</span>
              <ArrowUpRight className="w-4 h-4 text-white" />
            </button>
          </div>
        </div>

        {/* Mobile Video */}
        {isMobile && (
          <div className="flex justify-center w-full mb-8">
            <div className="max-w-sm p-6 shadow-lg bg-pink-400 rounded-3xl">
              <VideoPlayer />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default EventPromoSection;
