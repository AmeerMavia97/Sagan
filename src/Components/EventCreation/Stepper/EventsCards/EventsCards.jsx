import { ArrowLeft, ArrowRight, CircleArrowLeft, CircleArrowRight } from 'lucide-react';
import React, { useRef } from 'react';

const imageData = {
    All: [
        { id: 1, category: "Farwell", url: "Images/events/Farewell/Card1.png" },
        { id: 2, category: "Farwell", url: "Images/events/Farewell/Card2.png" },
        { id: 3, category: "Farwell", url: "Images/events/Farewell/Card3.png" },
        { id: 4, category: "Farwell", url: "Images/events/Farewell/Card4.png" },
        { id: 5, category: "Farwell", url: "Images/events/Farewell/Card5.png" },
        { id: 6, category: "Farwell", url: "Images/events/Farewell/Card6.jpg" },
        { id: 7, category: "Birthday", url: "Images/events/Birthday/Card1.png" },
        { id: 8, category: "Birthday", url: "Images/events/Birthday/Card2.jpg" },
        { id: 9, category: "Birthday", url: "Images/events/Birthday/Card3.png" },
        { id: 10, category: "Birthday", url: "Images/events/Birthday/Card4.png" },
        { id: 11, category: "Birthday", url: "Images/events/Birthday/Card5.png" },
        { id: 12, category: "Birthday", url: "Images/events/Birthday/Card6.jpg" },
        { id: 13, category: "Wedding", url: "Images/events/wedding fund/Card1.jpg" },
        { id: 14, category: "Wedding", url: "Images/events/wedding fund/Card2.jpg" },
        { id: 15, category: "Wedding", url: "Images/events/wedding fund/Card3.jpg" },
        { id: 16, category: "Wedding", url: "Images/events/wedding fund/Card4.png" },
        { id: 17, category: "Wedding", url: "Images/events/wedding fund/Card5.jpg" },
        { id: 18, category: "Wedding", url: "Images/events/wedding fund/Card6.png" },
    ],
    Farwell: [],
    Birthday: [],
    Wedding: [],
};

// Ensure consistency
imageData.Farwell = imageData.All.filter(img => img.category === "Farwell");
imageData.Birthday = imageData.All.filter(img => img.category === "Birthday");
imageData.Wedding = imageData.All.filter(img => img.category === "Wedding");

const EventsCards = ({ activeTab, setSelectedImage }) => {
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 300; 
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth',
            });
        }
    };

    const handleImageClick = (img) => setSelectedImage(img);

    return (
        <div className="flex items-center gap-3 justify-center w-full">
            {/* Left Arrow */}
            <button type="button" onClick={() => scroll('left')}>
                <CircleArrowLeft className="size-5.5 2xl:size-7 text-[#FFB5C0] cursor-pointer"  />
            </button>

            {/* Horizontal Scrollable Container */}
            <div
                ref={scrollRef}
                className="flex overflow-x-auto no-scrollbar gap-4 px-4 py-2 scroll-smooth max-w-[75%] 2xl:max-w-[65%]"
                style={{ scrollBehavior: 'smooth' }}
            >
                {imageData[activeTab]?.map((img) => (
                    <div
                        key={img.id}
                        className=" cursor-pointer flex-shrink-0"
                        onClick={() => handleImageClick(img)}
                    >
                        <img
                            src={img.url}
                            alt={img.url}
                            className="rounded w-full max-w-[110px] 2xl:max-w-[127px] h-auto object-cover"
                        />
                    </div>
                ))}
            </div>

            {/* Right Arrow */}
            <button type="button" onClick={() => scroll('right')}>
                <CircleArrowRight className="size-5.5 2xl:size-7 text-[#FFB5C0] cursor-pointer"  />
            </button>
        </div>
    );
};

export default EventsCards;
