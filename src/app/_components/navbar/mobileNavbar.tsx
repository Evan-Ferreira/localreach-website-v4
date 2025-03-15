'use client';

import React, { useState } from 'react';

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            <div className="max-lg:flex hidden absolute flex-row justify-end items-center w-full h-14 z-100">
                <img
                    src="/navbar-btn.svg"
                    alt="navbar-btn"
                    className="h-5/10 mt-12 px-12"
                    onClick={() => setIsOpen(!isOpen)}
                />
            </div>
            <div
                className={`absolute flex flex-col w-full z-100 transition-all duration-300 ease-in-out ${
                    isOpen
                        ? 'opacity-100 translate-y-0 h-screen bg-[#131313e5] p-12 gap-12'
                        : 'opacity-0 -translate-y-full h-0 overflow-hidden'
                }`}
            >
                <div className="flex flex-row justify-end items-center h-[30px]">
                    <img
                        src="/close-btn.svg"
                        alt="close-btn"
                        className="h-full"
                        onClick={() => setIsOpen(!isOpen)}
                    />
                </div>
                <div className="flex flex-col gap-12 mt-12 items-center">
                    <p>Why Local Reach?</p>
                    <p>How it Works</p>
                    <p>Learn More</p>
                    <p>Blog</p>
                </div>
            </div>
        </>
    );
};

export default MobileNavbar;
