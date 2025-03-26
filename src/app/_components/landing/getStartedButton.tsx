'use client';

import Link from 'next/link';
import React from 'react';

const GetStartedButton = () => {
    return (
        <Link
            href="#learn-more"
            scroll={false}
            onClick={() => {
                document
                    .getElementById('learn-more')
                    ?.scrollIntoView({ behavior: 'smooth' });
            }}
        >
            <p
                className="bg-[#95D0FD] text-[#080808] group-hover:text-[#FFFFFF] px-6 sm:px-8 md:px-12 py-2.5 sm:py-3 md:py-4 group-hover:bg-[#69a2cd] 
                    cursor-pointer transition-all duration-300 ease-in-out text-center text-sm sm:text-base"
            >
                Get Started
            </p>
        </Link>
    );
};

export default GetStartedButton;
