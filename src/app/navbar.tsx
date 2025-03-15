import React from 'react';
import MobileNavbar from './_components/navbar/mobileNavbar';
const Navbar = () => {
    return (
        <>
            <div className="hidden lg:flex absolute w-full h-14 flex-row justify-center">
                <div className="flex flex-row px-36 mt-12 justify-between 2xl:gap-38 gap-24 h-full w-full items-center">
                    <img src="/lr-logo.svg" alt="logo" className="h-4/5" />
                    <div className="flex flex-row bg-[#FFFFFF4D] gap-6 px-16 w-full h-full rounded-full justify-around items-center">
                        <p className="2xl:text-lg text-md">Why Local Reach?</p>
                        <p className="2xl:text-lg text-md">How it Works</p>
                        <p className="2xl:text-lg text-md">Learn More</p>
                        <p className="2xl:text-lg text-md">Blog</p>
                    </div>
                    <button className="bg-[var(--button-blue)] px-12 py-4 whitespace-nowrap text-[var(--background)]">
                        Contact Us
                    </button>
                </div>
            </div>
            <MobileNavbar />
        </>
    );
};

export default Navbar;
