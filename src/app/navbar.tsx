'use client';

import React from 'react';
import MobileNavbar from './_components/navbar/mobileNavbar';
import Link from 'next/link';

const Navbar = () => {
    return (
        <>
            <div className="hidden lg:flex absolute w-full h-14 flex-row justify-center z-100">
                <div className="flex flex-row px-36 mt-12 justify-between 2xl:gap-38 gap-10 h-full w-full items-center">
                    <img src="/lr-logo.svg" alt="logo" className="h-4/5" />
                    <div className="flex flex-row gap-6 px-16 w-full bg-[#FFFFFF4D] h-4/5 rounded-full justify-around items-center">
                        <Link
                            href="#why-local-reach"
                            scroll={false}
                            onClick={() => {
                                document
                                    .getElementById('why-local-reach')
                                    ?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            <p className="2xl:text-md text-sm hover:cursor-pointer text-black hover:font-bold">
                                Why Local Reach?
                            </p>
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
                            <p className="2xl:text-md text-sm hover:cursor-pointer hover:font-bold">
                                How it Works
                            </p>
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
                            <p className="2xl:text-md text-sm hover:cursor-pointer hover:font-bold">
                                Learn More
                            </p>
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
                            <p className="2xl:text-md text-sm hover:cursor-pointer hover:font-bold">
                                Blog
                            </p>
                        </Link>
                    </div>
                    <button
                        className="bg-[var(--button-blue)] w-96 h-9/10 text-[var(--background)]"
                        onClick={() => {
                            document
                                .getElementById('learn-more')
                                ?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Contact Us
                    </button>
                </div>
            </div>
            <MobileNavbar />
        </>
    );
};

export default Navbar;
