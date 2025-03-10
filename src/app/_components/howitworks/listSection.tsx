'use client'
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

const ListSection = () => {
    return (
        <div className="list-section">
            <ImageScrollBar />
        </div>
    );
};

const ImageScrollBar = () => {
    const [activeImage, setActiveImage] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [opacityClasses, setOpacityClasses] = useState<string[]>(["opacity-100", "opacity-50", "opacity-50"]);
    const [imageOpacity, setImageOpacity] = useState('opacity-100');

    const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
        const element = e.currentTarget;
        const currentScrollTop = element.scrollTop;
        const maxScroll = element.scrollHeight - element.clientHeight;
        const scrollPercentage = (currentScrollTop / maxScroll) * 100;

        let newIndex = 0;
        if (scrollPercentage < 33) newIndex = 0;
        else if (scrollPercentage < 66) newIndex = 1;
        else newIndex = 2;

        setActiveImage(newIndex);
    };

    useEffect(() => {
        // Fade out all sentences
        setOpacityClasses(["opacity-50", "opacity-50", "opacity-50"]);

        // Wait before setting active sentence to fade in
        const timeout = setTimeout(() => {
            setOpacityClasses(prev =>
                prev.map((_, index) => (index === activeImage ? "opacity-100 transition-opacity duration-500 ease-in-out" : "opacity-50"))
            );
        }, 50); // Small delay for a smooth effect

        return () => clearTimeout(timeout);
    }, [activeImage]);

    useEffect(() => {
        // Fade out the image


        // Wait before fading in the new image
        const timeout = setTimeout(() => {
            setImageOpacity('opacity-100 transition-opacity duration-500 ease-in-out');
        }, 500); // Match the duration of the fade out

        return () => clearTimeout(timeout);
    }, [activeImage]);

    const images = [
        { src: '/tv1.jfif', alt: 'image1' },
        { src: '/tv2.jfif', alt: 'image2' },
        { src: '/tv3.jfif', alt: 'image3' },
    ];

    const components = [
        <DemocratizingTV key="0" />,
        <InnovativeSolutions key="1" />,
        <ReachAudience key="2" />
    ];

    return (
        <div className=' w-full'>
            <div ref={scrollRef} className="relative max-h-[400px] flex flex-row gap-8">
                <div
                        className="absolute inset-0 z-1000 h-full w-full overflow-y-auto no-scrollbar"
                        onScroll={handleScroll}
                    >
                        <div className="h-[200vh] "></div>
                </div>
                <div className="min-h-full min-w-1/2 flex flex-col justify-center items-left relative">
                    <Image
                        src={images[activeImage].src}
                        alt={images[activeImage].alt}
                        width={250}
                        height={250}
                        className={`transition-all w-full min-h-full duration-300 rounded-md object-cover my-auto ${imageOpacity}`}
                    />
                
                </div>
                <div className="h-[400px] ml-10 w-full flex flex-col justify-center relative">
                    {components.map((component, index) => (
                        <div
                            key={index}
                            className={`w-full absolute text-left ${opacityClasses[index]} 
                                ${index === 0 ? 'top-[16.67%]' : index === 1 ? 'top-[50%]' : 'top-[83.33%]'} 
                                -translate-y-1/2`}
                        >
                            {component}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

const DemocratizingTV = () => (
    <div className=" items-center space-x-4">
        <span className="text-[var(--text-highlight)]  text-[0.7rem]">01</span>
        <h3 className='text-lg font-Bold'>Submit Your Project</h3>
        <p className='text-sm'>Fill out our simple form with your project details and requirements. We&apos;ll get back to you within 24 hours.</p>
    </div>
);

const InnovativeSolutions = () => (
    <div className=" items-center space-x-4">
        <span className="text-[var(--text-highlight)]  text-[0.7rem] ">02</span>
        <h3 className='text-lg font-Bold'>We Review</h3>
        <p className='text-sm'>Our team carefully analyzes your project and creates a customized plan. We&apos;ll schedule a call to discuss our approach.</p>
    </div>
);

const ReachAudience = () => (
    <div className=" items-center space-x-4">
        <span className="text-[var(--text-highlight)] text-[0.7rem]">03</span>
        <h3 className='text-lg font-Bold'>Get Started</h3>
        <p className='text-sm'>Once approved, we begin implementation immediately. Your project will be live within 30 days.</p>
    </div>
);

export default ListSection;
