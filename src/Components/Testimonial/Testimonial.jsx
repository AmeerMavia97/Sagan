// TestimonialsSection.jsx
import React, { useEffect, useRef, useState } from 'react';

const testimonialsData = [
    {
        id: 1,
        name: 'Jennifer',
        company: 'Google',
        avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400&h=400&fit=crop&crop=face',
        rating: 5,
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
        id: 2,
        name: 'Maseeha Hadid',
        company: 'Google',
        avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
        rating: 5,
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
        id: 3,
        name: 'Ennie Laren',
        company: 'Google',
        avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
        rating: 5,
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
        id: 4,
        name: 'Karen',
        company: 'Google',
        avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
        rating: 5,
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
        id: 5,
        name: 'John Smith',
        company: 'Microsoft',
        avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face',
        rating: 5,
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
        id: 6,
        name: 'Sarah Wilson',
        company: 'Apple',
        avatar: 'https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?w=400&h=400&fit=crop&crop=face',
        rating: 5,
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
        id: 7,
        name: 'Mike Johnson',
        company: 'Facebook',
        avatar: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&h=400&fit=crop&crop=face',
        rating: 5,
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
    {
        id: 8,
        name: 'Emily Davis',
        company: 'Netflix',
        avatar: 'https://images.unsplash.com/photo-1567532900872-f4e906cbf06a?w=400&h=400&fit=crop&crop=face',
        rating: 5,
        text: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.',
    },
];

const getInitials = (name) => name.charAt(0).toUpperCase();

export default function TestimonialsSection() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [cardWidth, setCardWidth] = useState(300);
    const [visibleCards, setVisibleCards] = useState(4);
    const autoSlideRef = useRef(null);

    useEffect(() => {
        const calculateDimensions = () => {
            const width = window.innerWidth;
            if (width >= 1666) {
                setVisibleCards(4);
                setCardWidth(310);
            }else if (width >= 1280) {
               setVisibleCards(4);
                setCardWidth(300);
            } else if (width >= 1024) {
                setVisibleCards(3);
                setCardWidth(320);
            } else if (width >= 640) {
                setVisibleCards(2);
                setCardWidth(300);
            }else if (width >= 400) {
                setVisibleCards(2);
                setCardWidth(300);
            }else if (width >= 380) {
                setVisibleCards(2);
                setCardWidth(width - 100);
            } else {
                setVisibleCards(1);
                setCardWidth(width - 70);
            }
        };

        calculateDimensions();
        window.addEventListener('resize', calculateDimensions);

        startAutoSlide();
        return () => {
            stopAutoSlide();
            window.removeEventListener('resize', calculateDimensions);
        };
    }, []);

    const totalDots = Math.max(1, testimonialsData.length - visibleCards + 1);
    const currentDotIndex = Math.min(currentSlide, totalDots - 1);

    const translateX = -currentSlide * cardWidth;

    const goToSlide = (index) => {
        const clamped = Math.min(index, testimonialsData.length - visibleCards);
        setCurrentSlide(clamped);
        restartAutoSlide();
    };

    const nextSlide = () => {
        const maxSlide = testimonialsData.length - visibleCards;
        setCurrentSlide((prev) => (prev >= maxSlide ? 0 : prev + 1));
    };

    const startAutoSlide = () => {
        autoSlideRef.current = setInterval(() => {
            nextSlide();
        }, 3000);
    };

    const stopAutoSlide = () => {
        if (autoSlideRef.current) {
            clearInterval(autoSlideRef.current);
        }
    };

    const restartAutoSlide = () => {
        stopAutoSlide();
        startAutoSlide();
    };

    const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;

    return (
        <section className="py-10 sm:px-7 md:px-12 lg:px-16 min-[1666px]:!pt-20 min-[1666px]:!pb-24">
            <div className="mx-auto max-w-7xl min-[1666px]:!max-w-[65%]">
                <div className="mb-12 text-center">
                    <h2 className="text-[32px] lg:text-[38px] 2xl:text-[50px] font-bold tracking-wide text-gray-900 font-right-grotesk">THEY TRUSTED US</h2>
                </div>

                <div className="relative pl-[10%] sm:pl-0">
                    <div className="overflow-hidden">
                        <div
                            className="flex transition-transform duration-700 ease-in-out"
                            style={{ transform: `translateX(${translateX}px)` }}
                        >
                            {testimonialsData.map((testimonial) => (
                                <div
                                    key={testimonial.id}
                                    className="flex-shrink-0  px-4 "
                                    style={{ width: `${cardWidth}px` }}
                                >
                                    <div className="p-6 bg-white border-[2px] rounded-2xl shadow-sm border-[#FFB5C0] sm:shadow-xl h-80">
                                        <div className="flex items-center mb-4">
                                            {testimonial.avatar ? (
                                                <div className="w-16 h-16 sm:w-12 sm:h-12 lg:w-16 lg:h-16 overflow-hidden rounded-full">
                                                    <img
                                                        src={testimonial.avatar}
                                                        alt={testimonial.name}
                                                        className="object-cover w-full h-full"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="flex items-center justify-center w-12 h-12 text-sm font-medium text-gray-400 bg-gray-200 rounded-full">
                                                    {getInitials(testimonial.name)}
                                                </div>
                                            )}
                                            <div className="ml-3 flex flex-col">
                                                <h3 className=" text-gray-900 font-Inter text-[14px] font-[600]">{testimonial.name}</h3>
                                                <p className="text-[11px] font-Inter mt-1 lg:mt-0 text-gray-500">{testimonial.company}</p>
                                                <span className="text-lg text-yellow-400">★★★★★</span>
                                            </div>
                                        </div>
                                        <div className="flex mb-2 min-[380px]:mb-10">
                                        </div>
                                        <p className="text-[15px] px-1 font-[600] font-Inter leading-relaxed text-gray-600">
                                            "{testimonial.text}"
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {!isMobile && (
                        <>
                            <div className="absolute inset-y-0 left-0 z-10 w-28 pointer-events-none bg-gradient-to-r from-white via-gray-50/80 to-transparent"></div>
                            <div className="absolute inset-y-0 right-0 z-10 w-20 pointer-events-none bg-gradient-to-l from-white via-gray-50/80 to-transparent"></div>
                        </>
                    )}
                </div>

                <div className="flex justify-center mt-8 space-x-2">
                    {Array.from({ length: totalDots }).map((_, index) => (
                        <div
                            key={index}
                            className={`w-2 h-2 rounded-full cursor-pointer transition-colors duration-200 ${index === currentDotIndex ? 'bg-gray-400' : 'bg-gray-300'
                                }`}
                            onClick={() => goToSlide(index)}
                        ></div>
                    ))}
                </div>
            </div>
        </section>
    );
}
