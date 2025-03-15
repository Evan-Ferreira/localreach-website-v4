import React from 'react';
import ListSection from '../_components/howitworks/listSection';

const HowItWorks: React.FC = () => {
    return (
        <div className="h-screen w-full bg-[var(--background)] py-[5%] px-36">
            <div className="text-center pb-8">
                <h2 className="text-4xl font-bold text-white mb-4">
                    How It Works
                </h2>
                <h4 className="text-md text-gray-500 mb-8">
                    No new work. We&apos;ll get you live within 30 days. Easy
                    installation 100% hassle free.
                </h4>
                <div className="bg-[#212121] h-fit bg-opacity-100 p-8 rounded">
                    <ListSection></ListSection>
                </div>
            </div>
        </div>
    );
};

export default HowItWorks;
