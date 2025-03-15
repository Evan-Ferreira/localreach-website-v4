import React from 'react';
import Background from '../_components/landing/background';
import Image from 'next/image';
import VenueScrollBar from '../_components/landing/venueScrollBar';
import GetStartedButton from '../_components/landing/getStartedButton';

const Landing = () => {
    return (
        <div className="h-screen w-screen flex flex-row z-100">
            <Background />
            <div className="md:w-2/3 w-full pl-12 max-md:pr-12 md:pl-36 flex flex-col justify-center md:justify-end md:gap-8 gap-24 pb-12">
                <div className="relative w-full">
                    <div
                        className="bg-[#FD6F2F] lg:w-63 lg:h-32 h-18 w-37 absolute lg:-top-8 -top-4 
                    -z-10 text-7xl font-weight-700 max-lg:-ml-1"
                    ></div>

                    <h1 className="lg:text-[4.6rem] text-[42px] font-semibold max-md:text-left">
                        Unlock your
                    </h1>
                    <h1 className="lg:text-[4.6rem] text-[42px] font-semibold max-md:text-left">
                        TV Advertising
                    </h1>
                </div>
                <div className="flex flex-col md:flex-row max-md:gap-12">
                    <p className="w-full md:w-1/3 max-md:text-center">
                        Engage your audience with content they care about.
                    </p>
                    <p className="w-full md:w-1/3 max-md:text-center">
                        Connect with restaurants for innovative advertising
                        solutions.
                    </p>
                </div>
                <div className="flex flex-row gap-4 group max-md:justify-center">
                    <GetStartedButton />
                    <Image
                        src="/right-arrow.svg"
                        alt="tv"
                        width={50}
                        height={50}
                        className="cursor-pointer group-hover:translate-x-3 transition-all duration-300 ease-in-out max-md:hidden"
                    />
                </div>
            </div>
            <div className="hidden lg:flex lg:w-1/2 h-full md:pr-36 pr-12 pb-12 flex-row justify-end items-end">
                <VenueScrollBar />
            </div>
        </div>
    );
};

export default Landing;
