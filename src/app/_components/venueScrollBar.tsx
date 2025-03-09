'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const VenueScrollBar = () => {
    const [activeVenue, setActiveVenue] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);
    const lastScrollTop = useRef(0);
    const scrollThreshold = 100;
    const isScrolling = useRef(false);

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const currentScrollTop = e.currentTarget.scrollTop;
        const scrollDiff = currentScrollTop - lastScrollTop.current;
        console.log('Current scroll:', currentScrollTop, 'Diff:', scrollDiff);

        if (!isScrolling.current && Math.abs(scrollDiff) > scrollThreshold) {
            isScrolling.current = true;
            if (scrollDiff > 0) {
                setActiveVenue((prev) => Math.min(prev + 1, 4));
            } else {
                setActiveVenue((prev) => Math.max(prev - 1, 0));
            }
            setTimeout(() => {
                isScrolling.current = false;
                lastScrollTop.current = currentScrollTop;
            }, 200);
        }
    };

    useEffect(() => {
        console.log(activeVenue);
    }, [activeVenue]);

    const getImageSize = (index: number) => {
        const diff = Math.abs(activeVenue - index);
        if (diff === 0) return 250; // Active image
        if (diff === 1) return 150; // Adjacent images
        return 100; //`Other images
    };

    return (
        <div ref={scrollRef} className="h-screen flex flex-row gap-8 px-4">
            <div className="h-full flex flex-col justify-center items-center relative">
                <div className="flex flex-col ">
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
                            className="transition-all duration-300"
                        />
                    ))}
                </div>
                <div
                    className="absolute inset-0 h-full overflow-y-auto no-scrollbar"
                    onScroll={handleScroll}
                >
                    <div className="h-[1000vh]"></div>
                </div>
            </div>
            <div className="h-full flex flex-col justify-center gap-8 items-center">
                {[0, 1, 2, 3, 4].map((index) => (
                    <div
                        key={index}
                        className={`rounded-full w-5 h-5 ${
                            activeVenue === index
                                ? 'bg-blue-500'
                                : 'bg-[#D9D9D9]'
                        }`}
                    ></div>
                ))}
            </div>
        </div>
    );
};

export default VenueScrollBar;
