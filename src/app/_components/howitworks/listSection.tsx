'use client'
import React, { useState, useRef, useEffect } from 'react';
import ImageVideoLoader from './imageVideoLoader';

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
        { src: '/HIW1.png', alt: 'image1' },
        { src: '/HIW2.mp4', alt: 'image2' },
        { src: '/HIW3.jpg', alt: 'image3' },
    ];

    const components = [
        <DemocratizingTV key="0" />,
        <InnovativeSolutions key="1" />,
        <ReachAudience key="2" />
    ];

    return (
        <div className=' w-full'>
            <div ref={scrollRef} className="relative max-h-[500px] flex flex-row gap-8">
                <div
                        className="absolute inset-0 z-1000 h-full w-full overflow-y-auto no-scrollbar"
                        onScroll={handleScroll}
                    >
                        <div className="h-[200vh] "></div>
                </div>
                <div className="min-h-full min-w-1/2 w-1/2 flex flex-col justify-center items-left relative">
                    <ImageVideoLoader
                        src={images[activeImage].src}
                        alt={images[activeImage].alt}
                        width={1000}
                        height={1000}
                        className={`transition-all w-full min-h-full duration-300 rounded-md object-cover my-auto ${imageOpacity}`}
                    />
                
                </div>
                <div className="h-[500px] ml-10 w-full flex flex-col justify-center relative">
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
    <div className="p-5 mb-4">
        <div className="flex items-center mb-3">
            <span className="text-orange-500 text-2xl font-bold mr-3">01</span>
            <h3 className="text-xl font-bold">Sign Up & Install</h3>
        </div>
        <div className="ml-8 text-white space-y-2">
            <div className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <p>Register with Local Reach</p>
            </div>
            <div className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <p>Receive our plug-and-play device</p>
            </div>
            <div className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <p>No technical expertise required</p>
            </div>
        </div>
    </div>
);

const InnovativeSolutions = () => (
    <div className="p-5 mb-4">
        <div className="flex items-center mb-3">
            <span className="text-orange-500 text-2xl font-bold mr-3">02</span>
            <h3 className="text-xl font-bold">Smart Ad Technology</h3>
        </div>
        <div className="ml-8 text-white space-y-2">
          
        <div className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <p>Detects commercials in real time</p>
            </div>
            <div className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <p>Replaces with your chosen content</p>
            </div>
            <div className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <p>You maintain full control</p>
            </div>
        </div>
    </div>
);

const ReachAudience = () => (
    <div className="p-5 mb-4">
        <div className="flex items-center mb-3">
            <span className="text-orange-500 text-2xl font-bold mr-3">03</span>
            <h3 className="text-xl font-bold">Earn Revenue</h3>
        </div>
        <div className="ml-8 text-white space-y-2">
           
            <div className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <p>Convert TVs into revenue sources</p>
            </div>
            <div className="flex items-start">
                <span className="text-orange-500 mr-2">•</span>
                <p>Earn passive income with each ad</p>
            </div>
            
        </div>
    </div>
);
export default ListSection;
