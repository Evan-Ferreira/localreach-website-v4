import React from 'react';
import ListSection from '../_components/howitworks/listSection';
import MobileListSection from '../_components/howitworks/mobileListsection';
const HowItWorks: React.FC = () => {
    return (
        <div
            id="how-it-works"
            className="h-full w-full bg-[var(--background)] py-12 px-8 md:px-36"
        >
            <div className="text-center pb-8   relative z-100">
                <div className="px-12">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        How It Works
                    </h2>
                    <h4 className="text-md text-gray-500 mb-8">
                        Monetize your TV content with ease. Easy installation,
                        100% hassle free.
                    </h4>
                </div>
                <div className="bg-[#2121218f] h-fit bg-opacity-100 py-8 md:p-8 pt-4 rounded relative z-100">
                    <div className="md:hidden">
                        <MobileListSection />
                    </div>
                    <div className="hidden md:block">
                        <ListSection />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
