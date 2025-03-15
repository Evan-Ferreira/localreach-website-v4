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
                className="bg-[#95D0FD] text-[#080808] group-hover:text-[#FFFFFF] px-12 py-3 max-md:py-4 group-hover:bg-[#69a2cd] 
                    cursor-pointer transition-all duration-300 ease-in-out max-md:w-4/5"
            >
                Get Started
            </p>
        </Link>
    );
};

export default GetStartedButton;
