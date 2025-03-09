import React from 'react';
import Background from '../_components/landing/background';
import Image from 'next/image';
import VenueScrollBar from '../_components/venueScrollBar';

const Landing = () => {
    return (
        <div className="h-screen w-screen flex flex-row">
            <Background />
            <div className="w-1/2 pl-36 flex flex-col justify-center gap-12">
                <div className="relative">
                    <div className="bg-[#FD6F2F] w-56 h-30 absolute -top-12 -z-10"></div>

                    <h1 className="text-7xl font-weight-700">Unlock your</h1>
                    <h1 className="text-7xl font-weight-700">TV Advertising</h1>
                </div>
                <div className="flex flex-row">
                    <p className="w-1/3">
                        Connect with local businesses through innovative
                        advertising solutions
                    </p>
                    <p className="w-1/3">
                        Connect with local businesses through innovative
                        advertising solutions
                    </p>
                </div>
                <div className="flex flex-row gap-4">
                    <button className="bg-[#95D0FD] text-black px-10 py-2">
                        Get Started
                    </button>
                    <Image
                        src="/right-arrow.svg"
                        alt="tv"
                        width={50}
                        height={50}
                        className="cursor-pointer hover:translate-x-3 transition-all duration-300 ease-in-out"
                    />
                </div>
            </div>
            <div className="w-1/2 h-full pr-36 flex flex-row justify-end items-center">
                <VenueScrollBar />
            </div>
        </div>
    );
};

export default Landing;
