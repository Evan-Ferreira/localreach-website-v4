import React from 'react';

const Landing = () => {
    return (
        <div className="h-screen w-screen flex flex-row">
            <video
                src={'landing-background.mp4'}
                autoPlay
                muted
                loop
                className="w-full absolute h-full object-cover"
            />
            <div className="w-full h-full absolute bg-[#080808] opacity-30"></div>
            <div
                className="absolute inset-0 bg-gradient-to-b from-transparent 
                via-[#080808]/10 via-20%
                via-[#080808]/25 via-35%
                via-[#080808]/45 via-50%
                via-[#080808]/65 via-65%
                via-[#080808]/85 via-80%
                to-[#080808]"
            ></div>
            <div className="w-1/2 h-full "></div>
            <div></div>
        </div>
    );
};

export default Landing;
