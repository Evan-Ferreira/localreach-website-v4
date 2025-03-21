'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../_components/Button';

const Tabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState<number>(0);
    const tabs = [
        {
            label: "For Advertisers",
            content: (
                <div className="text-[var(--text-base)] h-full">
                    <div className="flex flex-col md:flex-row gap-y-12 md:gap-x-12 justify-evenly">
                        <div className="min-w-1/3 p-4 md:p-6 lg:p-8 max-w-prose">
                            <h3 className="pb-4 text-lg md:text-xl font-medium text-gray-500">For Advertisers</h3>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 uppercase">
                                Transform Your Venue
                            </h2>
                            <p className="mb-8 text-lg md:text-xl lg:text-2xl leading-relaxed">
                                Democratizing TV advertising. Challenging corporate dominance. 
                                <strong> Empower your reach</strong> by displaying your ads in high-traffic venues.
                            </p>
    
                            {/* Key Benefits */}
                            <ul className="mb-8 list-disc text-[var(--text-secondary)] list-inside space-y-4  md:text-lg">
                                <li>Targeted local ad placements for maximum impact</li>
                                <li>AI-driven ad scheduling to optimize visibility</li>
                                <li>Cost-effective solutions for small and large businesses</li>
                            </ul>
                            <div className='pt-12'>
                            <Button
                                onClick={() => (window.location.href = "https://example.com")}
                                className="text-lg md:text-xl px-6 py-3"
                            >
                                Explore Services
                            </Button>
                            </div>
                        </div>
    
                        {/* Image Section */}
                        <div className="w-full md:w-1/2 flex items-center justify-center">
                            <Image
                                src="/Kingston_Ontario_Canada_-_Laslovarga_(28).jfif"
                                alt="Restaurant digital display showcase"
                                width={500}
                                height={500}
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            label: "For Restaurants",
            content: (
                <div className="text-[var(--text-base)] h-full">
                    <div className="flex flex-col md:flex-row gap-y-12 md:gap-x-12 justify-evenly">
                        <div className="p-4 min-w-1/3 md:p-6 lg:p-8 max-w-prose">
                            <h3 className="pb-4 text-lg md:text-xl font-medium text-gray-500">For Restaurants</h3>
                            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8">
                                Enhance Your Dining Experience
                            </h2>
                            <p className="mb-8 text-lg md:text-xl lg:text-2xl leading-relaxed">
                                Elevate your restaurant’s ambiance with cutting-edge technology. 
                                <strong> Engage your customers</strong> with dynamic and interactive digital displays.
                            </p>
    
                            {/* Key Benefits */}
                            <ul className="mb-8 list-disc list-inside space-y-4 text-[var(--text-secondary)] md:text-lg">
                                <li>Replace existing commercials with in-house promotions</li>
                                <li>AI-powered system ensures seamless ad transitions</li>
                                <li>Generate passive income through ad partnerships</li>
                            </ul>
                            <div className='pt-12'>
                                <Button
                                    onClick={() => (window.location.href = "https://example.com")}
                                    className="text-lg md:text-xl px-6 py-3"
                                >
                                    Discover More
                                </Button>
                            </div>
                        </div>
    
                        {/* Image Section */}
                        <div className="w-full md:w-1/2 flex items-center justify-center">
                            <Image
                                src="/resturant.jfif"
                                alt="Restaurant digital display showcase"
                                width={500}
                                height={500}
                                className="w-full h-auto rounded-lg shadow-lg object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            ),
        },
    ];
    

    

    return (
        <div
            id="why-local-reach"
            className="mx-auto w-full min-h-screen px-4 md:px-36 relative z-100 "
        >
            {/* Tab Headers */}
            <div className="flex relative z-100">
                {tabs.map((tab, index) => (
                    <button
                        key={index}
                        className={`sectiontitle-sm-nc flex-1 py-4 text-center text-sm transition-all duration-300 ease-in-out ${
                            index === activeTab
                                ? 'border-b-2 border-[var(--text-highlight)] text-[var(--text-highlight)] font-bold'
                                : 'border-b-2 border-[#1f1b1b] text-gray-500'
                        }`}
                        onClick={() => setActiveTab(index)}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Tab Content */}
            <div className="my-[5%] p-0 relative overflow-hidden">
                <div className="h-[86vh] md:h-[60vh]">
                    {tabs.map((tab, index) => (
                        <div
                            key={index}
                            className={`transition-all duration-500 ease-in-out absolute w-full h-full 
                ${
                    index === activeTab
                        ? 'translate-x-0 opacity-100'
                        : index < activeTab
                        ? '-translate-x-full opacity-0'
                        : 'translate-x-full opacity-0'
                }`}
                        >
                            {tab.content}
                        </div>
                    ))}
                </div>
            </div>

            <div className="mx-0 h-[3px]  md:mb-0 w-full bg-[var(--text-highlight)]"></div>
        </div>
    );
};

export default Tabs;
