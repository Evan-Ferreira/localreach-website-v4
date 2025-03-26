'use client';
import React, { useState } from 'react';
import AdvertiserTab from '../_components/tabs/AdvertiserTab';
import RestaurantTab from '../_components/tabs/RestaurantTab';

const Tabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState<number>(0);
    const tabs = [
        {
            label: "For Advertisers",
            content: <AdvertiserTab />
        },
        {
            label: "For Restaurants",
            content: <RestaurantTab />
        },
    ];

    return (
        <div
            id="why-local-reach"
            className="mx-auto mb-16 min-[1400px]:mb-0 w-full md:min-h-screen px-4 md:px-36 relative z-100 "
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
            <div className="my-[5%] p-0 relative md:overflow-hidden">
                <div className=" min-h-[600px] md:min-h-[600px] md:h-[60vh]">
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

            <div className="mx-0 h-[3px] w-full bg-[var(--text-highlight)]"></div>
        </div>
    );
};

export default Tabs;
