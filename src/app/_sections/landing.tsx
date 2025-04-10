import React from 'react';
import Background from '../_components/landing/background';
import Image from 'next/image';
import VenueScrollBar from '../_components/landing/venueScrollBar';
import GetStartedButton from '../_components/landing/getStartedButton';
import AnimationLoader from '../_components/landing/animationloader';

const Landing = () => {
    return (
        <div className="h-screen w-screen flex flex-row z-100">
            <Background />
            <div className="flex justify-end flex-col">
                <div className="max-h-3/4 w-full pl-12 max-md:pr-12 md:pl-36 flex flex-col gap-4 pb-24">
                    <div className="relative w-full mb-7">
                        <AnimationLoader
                        direction="right"
                        duration={0.5}
                        type="tween">
                        <div
                            className="bg-[#FD6F2F] lg:w-63 lg:h-32 h-18 w-37 absolute lg:-top-15 -top-4 
                        -z-10 text-7xl font-weight-700 max-lg:-ml-1"
                        ></div>

                        <h1 className="leading-none lg:text-[4.6rem] text-[42px] font-semibold max-md:text-left">
                            Unlock your <br></br>
                            TV Advertising
                        </h1>
                        </AnimationLoader>
                        <AnimationLoader
                        direction="up"
                        delay={0.1}
                        duration={0.5}
                        type="tween">
                        <div className="flex flex-row gap-2 items-center mt-1">
                            <div className="text-md text-white opacity-50 uppercase tracking-widest font-semibold">
                                Newly Aquired by:
                            </div>
                            <Image className="w-23 h-10" src="/TAIV_logo.svg" alt="LocalReach Logo" width={100} height={100} />
                        </div>  
                        </AnimationLoader>
                    </div>
                    <AnimationLoader
                        direction="up"
                        delay={0.2}
                        duration={0.5}
                        type="tween">
                    <div className="flex mb-3 flex-col text-sm  md:flex-row md:gap-2">
                        <p className="w-full md:w-[30%] opacity-70 max-md:text-center">
                            <span className="opacity-70">Engage your audience with content they care about.</span>
                            <a href="#blog" className="inline-block text-white opacity-100 hover:opacity-80 transition-colors">Learn more
                            </a>
                        </p>
                        <p className="w-full md:w-[30%] opacity-70 max-md:text-center">
                            <span className="opacity-70">Connect with restaurants for innovative advertising
                            solutions.</span>
                            <a href="#blog" className="inline-block text-white opacity-100 hover:opacity-80 transition-colors">
                                Explore our services
                            </a>
                        </p>
                    </div>
                    </AnimationLoader>
                    <div className="flex flex-row gap-4 group max-md:justify-center">
                        <AnimationLoader
                        direction="right"
                        delay={0.4}
                        duration={0.5}
                        type="tween">
                        <GetStartedButton />
                        </AnimationLoader>
                        <AnimationLoader
                        direction="right"
                        delay={0.4}
                        duration={0.5}
                        type="tween">
                        <Image
                            src="/right-arrow.svg"
                            alt="tv"
                            width={50}
                            height={50}
                            className="cursor-pointer group-hover:translate-x-3 transition-all duration-300 ease-in-out max-md:hidden"
                            />
                        </AnimationLoader>
                    </div>
                </div>
            </div>
            
            <div className="hidden md:flex w-1/2 pr-36 pb-24 pt-24 lg:pb-0 justify-end items-center scale-80 2xl:scale-110">
                <VenueScrollBar />
            </div>
            <div className="absolute bottom-0 left-0 w-full mb-10 text-white py-3 text-center opacity-30">
                            <p className="text-xs">
                                As of 11th April 2025, LocalReach is now part of TAIV. For inquiries, please contact{' '}
                                <a 
                                    href="mailto:info@taiv.tv" 
                                    className="underline text-[#FD6F2F] hover:opacity-100 transition-colors"
                                >
                                    info@taiv.tv
                                </a>
                            </p>
                        </div>
          
        </div>
    );
};

export default Landing;
