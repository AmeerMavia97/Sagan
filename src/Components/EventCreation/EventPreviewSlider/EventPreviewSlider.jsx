import { ArrowLeft, ArrowRight } from 'lucide-react';
import React, { useRef, useState, useEffect } from 'react';

const EventPreviewSlider = ({ children }) => {
    const scrollRef = useRef(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const childrenArray = React.Children.toArray(children);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const width = scrollRef.current.offsetWidth;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -width : width,
                behavior: 'smooth',
            });
        }
    };

    // Update activeIndex on scroll
    const handleScroll = () => {
        if (!scrollRef.current) return;
        const scrollLeft = scrollRef.current.scrollLeft;
        const containerWidth = scrollRef.current.offsetWidth;
        const index = Math.round(scrollLeft / containerWidth);
        setActiveIndex(index);
    };

    // Scroll to a specific slide
    const goToSlide = (index) => {
        if (scrollRef.current) {
            const containerWidth = scrollRef.current.offsetWidth;
            scrollRef.current.scrollTo({
                left: index * containerWidth,
                behavior: 'smooth',
            });
        }
    };

    useEffect(() => {
        const slider = scrollRef.current;
        if (!slider) return;
        slider.addEventListener('scroll', handleScroll, { passive: true });
        return () => slider.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <>
            <div className="flex items-center gap-9 justify-center w-[90%] 2xl:w-[85%] min-[1850px]:!w-[75%]">
                <button onClick={() => scroll('left')} aria-label="Scroll Left">
                    <ArrowLeft strokeWidth={3} className="size-6 2xl:size-8 text-[#FFB5C0] cursor-pointer" />
                </button>

                <div
                    ref={scrollRef}
                    className="flex overflow-x-auto scroll-smooth no-scrollbar snap-x snap-mandatory w-full gap-1 max-w-[90%]"
                >
                    {childrenArray.map((child, index) => (
                        <div key={index} className="flex-shrink-0 w-full snap-start">
                            {child}
                        </div>
                    ))}
                </div>

                <button onClick={() => scroll('right')} aria-label="Scroll Right">
                    <ArrowRight strokeWidth={3} className="size-6 2xl:size-8 text-[#FFB5C0] cursor-pointer" />
                </button>
            </div>

            {/* Dots */}
            <div className="mt-4 flex justify-center items-center gap-2">
                {childrenArray.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => goToSlide(index)}
                        className={`w-2 h-2 2xl:w-3 2xl:h-3 rounded-full transition-all duration-300 ${
                            activeIndex === index ? 'bg-[#FFB5C0] scale-110' : 'bg-gray-300'
                        }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </>
    );
};

export default EventPreviewSlider;
