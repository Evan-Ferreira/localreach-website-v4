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
        <div className='w-full'>
            <div ref={scrollRef} className="relative h-128 flex flex-row gap-8">
                <div
                        className="absolute inset-0 z-1000 h-full w-full overflow-y-auto no-scrollbar"
                        onScroll={handleScroll}
                    >
                        <div className="h-[200vh] "></div>
                </div>
                <div className=" min-w-[550px] w-1/2 flex flex-col justify-center items-left relative">
                    <ImageVideoLoader
                        src={images[activeImage].src}
                        alt={images[activeImage].alt}
                        width={1000}
                        height={1000}
                        className={`transition-all w-full h-full max-[1400px]:max-h-96 duration-300 rounded-md object-cover my-auto ${imageOpacity}`}
                    />
                
                </div>
                <div className="ml-10 w-1/2 flex flex-col justify-center relative">
                    <div className="flex flex-col h-full justify-evenly">
                        {components.map((component, index) => (
                            <div
                                key={index}
                                className={`w-full text-left ${opacityClasses[index]}`}
                            >
                                {component}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
interface StepProps {
    number: string;
    title: string;
    bulletPoints: string[];
}

const Step: React.FC<StepProps> = ({ number, title, bulletPoints }) => (
    <div className="p-4 mb-2">
        <div className="flex items-center mb-2">
            <span className="text-orange-500 text-lg min-[1400px]:text-4xl font-bold mr-3">{number}</span>
            <h3 className="text-base min-[1400px]:text-3xl font-bold">{title}</h3>
        </div>
        <div className="ml-6 text-white space-y-2">
            {bulletPoints.map((point, index) => (
                <div key={index} className="flex items-start">
                    <span className="text-orange-500 mr-2 text-xs min-[1400px]:text-xl">•</span>
                    <p className="text-xs min-[1400px]:text-lg">{point}</p>
                </div>
            ))}
        </div>
    </div>
);

const DemocratizingTV = () => (
    <Step
        number="01"
        title="Sign Up & Install"
        bulletPoints={[
            "Register with Local Reach",
            "Receive our plug-and-play device",
            "No technical expertise required"
        ]}
    />
);

const InnovativeSolutions = () => (
    <Step
        number="02"
        title="Smart Ad Technology"
        bulletPoints={[
            "Detects commercials in real time",
            "Replaces with your chosen content",
            "You maintain full control"
        ]}
    />
);

const ReachAudience = () => (
    <Step
        number="03"
        title="Earn Revenue"
        bulletPoints={[
            "Convert TVs into revenue sources",
            "Earn passive income with each ad"
        ]}
    />
);
export default ListSection;
