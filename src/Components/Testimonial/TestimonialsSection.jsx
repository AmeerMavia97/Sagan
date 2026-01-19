import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css/pagination";

const testimonialsData = [
  {
    id: 1,
    name: "Maseeha Hadid",
    company: "Google",
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: 2,
    name: "Ennie Laren",
    company: "Google",
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: 3,
    name: "Karen",
    company: "Google",
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: 4,
    name: "John Smith",
    company: "Microsoft",
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
  {
    id: 5,
    name: "Sarah Wilson",
    company: "Apple",
    avatar:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400&h=400&fit=crop&crop=face",
    rating: 5,
    text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
  },
];

function TestimonialsSection() {
  const breakpoints = {
    0: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    640: {
      slidesPerView: 1,
      spaceBetween: 16,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 16,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 24,
    },
    1280: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
    1666: {
      slidesPerView: 4,
      spaceBetween: 24,
    },
  };

  return (
    <section className="px-8 py-28 sm:px-12 lg:px-16">
      <div className="mx-auto max-w-7xl min-[1666px]:max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-wide text-gray-900 font-right-grotesk min-[1666px]:text-5xl">
            THEY TRUSTED US
          </h2>
        </div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={24}
          slidesPerView={3}
          loop={true}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={breakpoints} 
        >
          {testimonialsData.map((testimonial) => (
            <SwiperSlide key={testimonial.id}>
              <div className="p-6 bg-white border rounded-lg shadow-sm border-primary sm:shadow-xl lg:w-62 h-74">
                <div className="flex items-center mb-4">
                  {testimonial.avatar ? (
                    <div className="w-16 h-16 overflow-hidden rounded-full">
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center !w-20 !h-20 text-sm font-medium text-gray-400 bg-gray-200 rounded-full ">
                      {testimonial.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div className="ml-3">
                    <h3 className="font-medium text-gray-900 font-Inter">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-gray-500 font-Inter">
                      {testimonial.company}
                    </p>
                  <span className="text-lg text-yellow-400">★★★★★</span>
                  </div>
                </div>
                <p className="text-sm leading-relaxed min-[1666px]:!text-[16px] min-[1666px]:!leading-[20px] text-black min-[1666px]:!mt-20 lg:!mt-10 font-Inter ">
                  "{testimonial.text}"
                </p>
              </div>
            </SwiperSlide>
          ))}

          <>
            <div className="absolute inset-y-0 left-0 z-10 w-32 pointer-events-none bg-gradient-to-r from-white to-transparent min-[1666px]:!w-20" />

            <div className="absolute inset-y-0 right-0 z-10 w-32 pointer-events-none bg-gradient-to-l sm:from-white sm:via-white to-transparent min-[1666px]:!w-20" />
          </>
        </Swiper>
      </div>
      {/* Place pagination outside Swiper */}
      <div className="custom-pagination mt-4 absolute"></div>
    </section>
  );
}

export default TestimonialsSection;
