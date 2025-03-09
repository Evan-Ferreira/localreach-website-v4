'use client';

import React, { useState, useRef } from 'react';
import Image from 'next/image';

const VenueScrollBar = () => {
    const [activeVenue, setActiveVenue] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);
    const lastScrollTop = useRef(0);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const element = e.currentTarget;
        const currentScrollTop = element.scrollTop;
        const maxScroll = element.scrollHeight - element.clientHeight;
        const scrollPercentage = (currentScrollTop / maxScroll) * 100;

        if (scrollPercentage < 20) {
            setActiveVenue(0);
        } else if (scrollPercentage < 40) {
            setActiveVenue(1);
        } else if (scrollPercentage < 60) {
            setActiveVenue(2);
        } else if (scrollPercentage < 80) {
            setActiveVenue(3);
        } else {
            setActiveVenue(4);
        }

        lastScrollTop.current = currentScrollTop;
    };

    const getImageSize = (index: number) => {
        const diff = Math.abs(activeVenue - index);
        if (diff === 0) return 250;
        if (diff === 1) return 150;
        return 100;
    };

    const getDotSize = (index: number) => {
        const diff = Math.abs(activeVenue - index);
        if (diff === 0) return 'w-7 h-7';
        if (diff === 1) return 'w-5 h-5';
        return 'w-3 h-3';
    };

    const getDotColor = (index: number) => {
        const diff = Math.abs(activeVenue - index);
        if (diff === 0) return 'bg-[#D9D9D9]';
        if (diff === 1) return 'bg-[#D9D9D9] opacity-80';
        return 'bg-[#D9D9D9] opacity-50';
    };

    return (
        <div ref={scrollRef} className="flex flex-row gap-8 px-4 h-full">
            <div className="h-full flex flex-col justify-center items-center relative">
                <div className="flex flex-col items-center justify-end h-full">
                    {[
                        { src: '/fergs.svg', alt: 'fergs' },
                        { src: '/blindpig.svg', alt: 'blindpig' },
                        { src: '/caddys.svg', alt: 'caddys' },
                        { src: '/mititmiti.svg', alt: 'mitimiti' },
                        { src: '/bullshooters.svg', alt: 'bullshooters' },
                    ].map((image, index) => (
                        <Image
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            width={getImageSize(index)}
                            height={getImageSize(index)}
                            className="transition-all duration-300 -mt-12"
                        />
                    ))}
                </div>
                <div
                    className="absolute inset-0 h-full overflow-y-auto no-scrollbar"
                    onScroll={handleScroll}
                >
                    <div className="h-[200vh]"></div>
                </div>
            </div>
            <div className="h-full flex flex-col gap-8 items-center justify-end pb-43">
                {[0, 1, 2, 3, 4].map((index) => (
                    <div
                        key={index}
                        className={`rounded-full transition-all duration-300 ${getDotSize(
                            index
                        )} ${getDotColor(index)}`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default VenueScrollBar;
