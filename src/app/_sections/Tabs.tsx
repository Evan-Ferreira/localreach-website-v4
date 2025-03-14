'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Button from '../_components/Button';

const Tabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState<number>(0);

    const tabs = [
        {
            label: 'For Advertisers',
            content: (
                <div className=" text-[var(--text-base)] h-full">
                    <div className="flex flex-col md:flex-row">
                        <div className="p-4 md:pr-24 md:p-2">
                            <h3 className="pb-2"> Advertisers </h3>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4 uppercase">
                                Transform Your Venue
                            </h2>
                            <p className="mb-8">
                                Democratizing TV Advertising. Challenging
                                Corporate Dominance. Empower your reach. Lorem
                                ipsum dolor sit amet, consectetur adipiscing
                                elit. Nullam facilisis felis non libero
                                ultricies, eget tristique libero volutpat.
                            </p>
                            <Button
                                onClick={() =>
                                    (window.location.href =
                                        'https://example.com')
                                }
                            >
                                Explore Services
                            </Button>
                        </div>
                        <div className="w-full h-[300px] md:h-full flex items-center justify-center">
                            <Image
                                src="/Kingston_Ontario_Canada_-_Laslovarga_(28).jfif"
                                alt="Restaurant digital display showcase"
                                width={400}
                                height={400}
                                className="w-full h-full rounded-lg shadow-lg object-cover mt-4 md:mt-0"
                                priority
                            />
                        </div>
                    </div>
                </div>
            ),
        },
        {
            label: 'For Restaurants',
            content: (
                <div className="text-[var(--text-base)] h-full">
                    <div className="flex flex-col h-full md:flex-row ">
                        <div className="p-4 md:pr-24 md:p-2">
                            <h3 className="pb-2"> Restaurants </h3>
                            <h2 className="text-2xl md:text-3xl font-bold mb-4">
                                Enhance Your Dining Experience
                            </h2>
                            <p className="mb-8">
                                Elevate your restaurant&apos;s ambiance with
                                cutting-edge technology. Engage your customers
                                with interactive displays and personalized
                                content. Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit.
                            </p>
                            <Button
                                onClick={() =>
                                    (window.location.href =
                                        'https://example.com')
                                }
                            >
                                {' '}
                                Discover More{' '}
                            </Button>
                        </div>
                        <div className="w-full h-[300px] md:h-full flex items-center justify-center">
                            <Image
                                src="/resturant.jfif"
                                alt="Restaurant digital display showcase"
                                width={400} 
                                height={400}
                                className="w-full h-full rounded-lg shadow-lg object-cover mt-4 md:mt-0"
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
