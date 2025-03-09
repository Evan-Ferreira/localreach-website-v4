'use client';

import React, { useState } from 'react';

const MobileNavbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <>
            {!isOpen && (
                <div className="max-md:flex hidden absolute flex-row justify-end items-center w-full h-14">
                    <img
                        src="/navbar-btn.svg"
                        alt="navbar-btn"
                        className="h-5/10 mt-12 px-12"
                        onClick={() => {
                            setIsOpen(!isOpen);
                        }}
                    />
                </div>
            )}

            {isOpen && (
                <div className="absolute flex flex-col w-full z-10 h-screen bg-[#131313d6] p-12 gap-12">
                    <div className="flex flex-row justify-end items-center h-[30px]">
                        <img
                            src="/close-btn.svg"
                            alt="close-btn"
                            className="h-full"
                            onClick={() => {
                                setIsOpen(!isOpen);
                            }}
                        />
                    </div>
                    <div className="flex flex-col gap-12 mt-12">
                        <p>Why Local Reach?</p>
                        <p>How it Works</p>
                        <p>Learn More</p>
                        <p>Blog</p>
                    </div>
                </div>
            )}
        </>
    );
};

export default MobileNavbar;
