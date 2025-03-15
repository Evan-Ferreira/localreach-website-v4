'use client';

import Link from 'next/link';
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
                    <Link
                        href="#why-local-reach"
                        scroll={false}
                        onClick={() => {
                            document
                                .getElementById('why-local-reach')
                                ?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        <p>Why Local Reach?</p>
                    </Link>
                    <Link
                        href="#how-it-works"
                        scroll={false}
                        onClick={() => {
                            document
                                .getElementById('how-it-works')
                                ?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        <p>How it Works</p>
                    </Link>
                    <Link
                        href="#learn-more"
                        scroll={false}
                        onClick={() => {
                            document
                                .getElementById('learn-more')
                                ?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        <p>Learn More</p>
                    </Link>
                    <Link
                        href="#blog"
                        scroll={false}
                        onClick={() => {
                            document
                                .getElementById('blog')
                                ?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        <p>Blog</p>
                    </Link>
                </div>
            </div>
        </>
    );
};

export default MobileNavbar;
