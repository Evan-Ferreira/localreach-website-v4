import React from 'react';
import Background from '../_components/landing/background';
import Image from 'next/image';
import VenueScrollBar from '../_components/landing/venueScrollBar';
import GetStartedButton from '../_components/landing/getStartedButton';

const Landing = () => {
    return (
        <div className="h-screen w-screen flex flex-row z-100">
            <Background />
            <div className="flex justify-end flex-col">
                <div className="max-h-3/4 w-full pl-12 max-md:pr-12 md:pl-36 flex flex-col gap-4 pb-24">
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
                    <div className="flex flex-col md:flex-row md:gap-12">
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
            </div>
            
            <div className="hidden md:flex w-1/2 pr-36 pb-24 pt-24 lg:pb-0 justify-end items-center scale-80 2xl:scale-110">
                <VenueScrollBar />
            </div>
          
        </div>
    );
};

export default Landing;
