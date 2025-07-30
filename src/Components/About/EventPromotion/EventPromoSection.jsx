import React, { useEffect, useRef, useState } from "react";

const EventPromoSection = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);

  const videoSrc = "Images/videos/event-promo.mp4";
  const videoPoster = "Images/home/event-promotion.png";

  const videoRef = useRef(null);
  const mobileVideoRef = useRef(null);
  const mobileContainerRef = useRef(null);
  const mobileFrameRef = useRef(null);

  // const [mobileVideoStyle, setMobileVideoStyle] = useState({
  //   top: "28px",
  //   left: "-10px",
  //   width: "auto",
  //   height: "100vh",
  // });

  const togglePlay = () => {
    const video = isMobile ? mobileVideoRef.current : videoRef.current;
    if (!video) return;

    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const updateProgress = () => {
    const video = isMobile ? mobileVideoRef.current : videoRef.current;
    if (!video) return;
    setCurrentTime(video.currentTime);
    setProgress((video.currentTime / video.duration) * 100);
  };

  const handleProgressClick = (event) => {
    const video = isMobile ? mobileVideoRef.current : videoRef.current;
    const progressBar = event.currentTarget;
    const rect = progressBar.getBoundingClientRect();
    const clickX = event.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    video.currentTime = newTime;
  };

  const calculateMobileVideoArea = () => {
    if (!mobileContainerRef.current || !mobileFrameRef.current) return;

    const containerRect = mobileContainerRef.current.getBoundingClientRect();
    const scaleX = containerRect.width / 280;
    const scaleY = containerRect.height / 180;

    const baseVideoConfig = {
      top: 28,
      left: -10,
      width: 295,
      height: 125,
    };

    setMobileVideoStyle({
      top: `${baseVideoConfig.top * scaleY}px`,
      left: `${baseVideoConfig.left * scaleX}px`,
      width: `${baseVideoConfig.width * scaleX}px`,
      height: `${baseVideoConfig.height * scaleY}px`,
    });
  };

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile) {
        calculateMobileVideoArea();
      }
    };

    window.addEventListener("resize", handleResize);

    const video = isMobile ? mobileVideoRef.current : videoRef.current;
    if (video) {
      video.addEventListener("timeupdate", updateProgress);
      video.addEventListener("loadedmetadata", () =>
        setDuration(video.duration)
      );
      video.addEventListener("ended", () => {
        setIsPlaying(false);
        setProgress(0);
        setCurrentTime(0);
      });
      video.addEventListener("play", () => setIsPlaying(true));
      video.addEventListener("pause", () => setIsPlaying(false));
    }

    return () => {
      window.removeEventListener("resize", handleResize);
      if (video) {
        video.removeEventListener("timeupdate", updateProgress);
      }
    };
  }, [isMobile]);

  const mobileFrameImage = "/Images/home/mobile-frame.png";
  return (
    <div>
      {/* Section 1 */}
      <section className=" pt-10 sm:pt-16 min-[1666px]:!pt-20 pb-64 min-[1666px]:pb-88 bg-pink-50 sm:px-16 lg:px-14 xl:px-14 2xl:pl-30 flex flex-col items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 place-items-center gap-8 md:flex-row lg:justify-between w-full  min-[1666px]:max-w-[85%] min-[1780px]:!w-[70%] ">
          <div className="w-full px-14 sm:px-0 text-center  lg:text-left">
            <h2 className="mb-4 text-[37px] font-extrabold font-right-grotesk leading-tight text-[#272727] md:text-[40px] lg:text-4xl min-[1666px]:!text-[50px]">
              REDEFINING GIFTING: <br className="hidden sm:block" />
              EFFORTLESS, MEANINGFUL,
              <br className="hidden sm:block" /> AND SEAMLESS
            </h2>
          </div>
          <div className="w-full text-[16px] font-semibold  leading-relaxed text-gray-800  sm:text-base md:text-[14.5px] lg:text-[15px] font-Inter xl:pl-20 min-[1666px]:!pl-36 min-[1666px]:!text-[17px] md:max-w-[80%] lg:max-w-[100%] text-center lg:text-start">
            <p className="mb-4 px-8 sm:px-0">
              We created SAGANonline to make it easier, safer, and more
              meaningful to send and receive cash gifts—without the hassle of
              handling physical cash or coordinating group collections.
            </p>
            <p className="px-7 sm:px-0">
              Whether it's a family gifting tradition, a workplace collection,
              or a cultural celebration like Eidiya, Hongbao, or Salami, we
              empower hosts to personalize their experience while ensuring a
              seamless and intuitive giving process.
            </p>
          </div>
        </div>
      </section>

      {/* Section 2 (Desktop Only) */}
      {!isMobile && (
        <section className="px-4 pb-16 bg-white">
          <div className="flex flex-col-reverse items-center gap-12 mx-auto max-w-7xl lg:flex-row lg:gap-16">
            <div className="flex justify-center w-full">
              <div className="relative w-[650px] h-[450px] xl: min-[1666px]:w-[1000px] min-[1666px]:h-[600px] m-auto -mt-44 min-[1666px]:-mt-60 mb-6">
                <img
                  src="Images/home/event-laptop.png"
                  alt="Laptop Frame"
                  className="absolute inset-0 z-10 object-contain w-full h-full pointer-events-none"
                />
                <div className="absolute top-[24px] left-[95px] w-[500px] h-[315px] lg:top-[60px] lg:w-[480px] lg:left-[88px] xl:left-[85px] xl:top-[50px] xl:w-[480px]  min-[1666px]:!w-[740px] min-[1666px]:!h-[500px] min-[1666px]:!left-[125px] overflow-hidden rounded mx-auto">
                  <video
                    ref={videoRef}
                    className="object-cover w-full h-full"
                    poster={videoPoster}
                    preload="metadata"
                  >
                    <source src={videoSrc} type="video/mp4" />
                  </video>
                  {!isPlaying && (
                    <div
                      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 cursor-pointer"
                      onClick={togglePlay}
                    >
                      <button className="p-4 min-[1666px]:p-6 bg-white rounded-full shadow-2xl hover:scale-110 hover:shadow-3xl transition-all duration-300">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-8 h-8 lg:ml-0 min-[1666px]:!w-10 min-[1666px]:!h-10 ml-1 text-primary"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </button>
                    </div>
                  )}
                  {isPlaying && (
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                      <div className="flex items-center gap-4">
                        <button
                          onClick={togglePlay}
                          className="text-white hover:text-primary transition-colors"
                        >
                          <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                          </svg>
                        </button>
                        <div
                          className="flex-1 h-2 bg-gray-600 rounded-full cursor-pointer"
                          onClick={handleProgressClick}
                        >
                          <div
                            className="h-2 bg-primary rounded-full transition-all duration-300"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                        <span className="text-sm text-white">
                          {formatTime(currentTime)} / {formatTime(duration)}
                        </span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      

      {/* Section 3 (Mobile Only) */}
      {isMobile && (
        <div className={`flex items-center justify-center py-5 `}>
          <div className="relative -mt-[250px]">
            {/* Mobile Frame Image */}
            <img
              src={mobileFrameImage}
              alt="Mobile Frame"
              className="w-full h-auto max-w-xs mx-auto relative z-50"
            />

            <div
              className="absolute overflow-hidden bg-white rounded-3xl "
              style={{
                top: "5%",
                left: "8.5%",
                width: "80%",
                height: "90%",
              }}
            >
              <div className="h-full px-4 py-6 overflow-y-auto">
                <video
                  ref={mobileVideoRef}
                  className="object-cover relative  !aspect-video  h-[68.5vh] !w-[31.5vh] "
                  poster={videoPoster}
                  preload="metadata"
                    muted  // ✅ Add this
  playsInline // ✅ Required for iOS and Android
                >
                  <source src={videoSrc} type="video/mp4" />
                </video>
                {!isPlaying && (
                  <div
                    className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 cursor-pointer"
                    onClick={togglePlay}
                  >
                    <button className="p-3 bg-white rounded-full shadow-2xl hover:scale-110 hover:shadow-3xl transition-all duration-300">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6 ml-0.5 text-primary"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </button>
                  </div>
                )}
                {isPlaying && (
                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={togglePlay}
                        className="text-white hover:text-primary transition-colors"
                      >
                        <svg
                          className="w-5 h-5"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
                        </svg>
                      </button>
                      <div
                        className="flex-1 h-1.5 bg-gray-600 rounded-full cursor-pointer"
                        onClick={handleProgressClick}
                      >
                        <div
                          className="h-1.5 bg-primary rounded-full transition-all duration-300"
                          style={{ width: `${progress}%` }}
                        />
                      </div>
                      <span className="text-xs text-white">
                        {formatTime(currentTime)} / {formatTime(duration)}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventPromoSection;
