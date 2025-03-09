import React from 'react';

const Navbar = () => {
    return (
        <div className="absolute w-full h-14 flex flex-row justify-center">
            <div className="flex flex-row px-36 mt-12 justify-between gap-38 h-full w-full items-center">
                <img src="/lr-logo.svg" alt="logo" className="h-4/5" />
                <div className="flex flex-row bg-[#FFFFFF4D] gap-6 px-16 w-full h-full rounded-full justify-around items-center">
                    <p className=" text-lg">Why Local Reach?</p>
                    <p className=" text-lg">How it Works</p>
                    <p className=" text-lg">Learn More</p>
                    <p className=" text-lg">Blog</p>
                </div>
                <button className="bg-[var(--button-blue)] w-96 h-9/10 text-[var(--background)]">
                    Contact Us
                </button>
            </div>
        </div>
    );
};

export default Navbar;
