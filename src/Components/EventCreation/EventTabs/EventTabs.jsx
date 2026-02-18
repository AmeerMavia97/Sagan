import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'; // or use any icon set

const categories = [ "All", "Farwell",  "Birthday" ,"Wedding",];

const EventTabs = ({ setActiveTab, activeTab }) => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 150; 
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="flex items-center gap-1 2xl:gap-5 justify-center w-full">
            {/* Left Arrow */}
            <button
            type='button'
                onClick={() => scroll('left')}
            >
                <ArrowLeft className='text-[#FFB5C0] size-4.5 2xl:size-5.5 cursor-pointer' strokeWidth={3} />
            </button>

            {/* Tabs Scroll Container */}
            <div
                ref={scrollRef}
                className="flex overflow-x-auto no-scrollbar gap-6 2xl:gap-10 px-4 scroll-smooth max-w-[60%] 2xl:max-w-[57%]"
                style={{ scrollBehavior: 'smooth'}}
            >
                {categories.map((cat) => (
                    <button
                        key={cat}
                        type="button"
                        onClick={() => setActiveTab(cat)}
                        className={`font-Inter font-[600] text-[15px] cursor-pointer 2xl:text-[22px] whitespace-nowrap rounded-full transition-all duration-200
                            ${activeTab === cat ? ' text-[#434343]' : 'text-[#878787a6]'}`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Right Arrow */}
            <button
            type='button'
                onClick={() => scroll('right')}
            >
                <ArrowRight className='text-[#FFB5C0] size-4.5 2xl:size-5.5 cursor-pointer' strokeWidth={3} />
            </button>
        </div>
    );
};

export default EventTabs;
