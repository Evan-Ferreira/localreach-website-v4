import React from 'react';
import Background from '../_components/landing/background';
import Image from 'next/image';

const Landing = () => {
    return (
        <div className="h-screen w-screen flex flex-row">
            <Background />
            <div className="w-1/2 pl-36 flex flex-col justify-center gap-12 relative">
                <div className="bg-[#FD6F2F] w-56 h-30 absolute top-34 -z-10"></div>
                <h1 className="text-7xl font-weight-700">Unlock your</h1>
                <h1 className="text-7xl font-weight-700 -mt-9">
                    TV Advertising
                </h1>
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
                    />
                </div>
            </div>
            <div className="w-1/2 h-full"></div>
        </div>
    );
};

export default Landing;
