
'use client'
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const MobileListSection = () => {
  return (
    <div className="mobile-list-section w-full px-4">
      <MobileImageScrollView />
    </div>
  );
};

const MobileImageScrollView = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageOpacity, setImageOpacity] = useState('opacity-100');

  const handleStepChange = (index: number) => {
    // Fade out current image
    setImageOpacity('opacity-0 transition-opacity duration-300 ease-in-out');
    
    // Wait before changing image and fading back in
    setTimeout(() => {
      setActiveIndex(index);
      setImageOpacity('opacity-100 transition-opacity duration-300 ease-in-out');
    }, 300);
  };

  const images = [
    { src: '/tv1.jfif', alt: 'image1' },
    { src: '/tv2.jfif', alt: 'image2' },
    { src: '/tv3.jfif', alt: 'image3' },
  ];

  const steps = [
    {
      number: "01",
      title: "Submit Your Project",
      description: "Fill out our simple form with your project details and requirements. We'll get back to you within 24 hours."
    },
    {
      number: "02",
      title: "We Review",
      description: "Our team carefully analyzes your project and creates a customized plan. We'll schedule a call to discuss our approach."
    },
    {
      number: "03",
      title: "Get Started",
      description: "Once approved, we begin implementation immediately. Your project will be live within 30 days."
    }
  ];

  return (
    <div className="flex flex-col items-center w-full h-128">
      {/* Image container with fixed height */}
      <div className="relative w-full h-64 mb-6">
        <Image
          src={images[activeIndex].src}
          alt={images[activeIndex].alt}
          fill
          className={`rounded-md object-cover ${imageOpacity}`}
        />
      </div>
      
     
      {/* Step indicators */}
      <div className="flex justify-center items-center gap-2 w-full mb-8">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => handleStepChange(index)}
            className={`h-2 rounded-full transition-all duration-300 ease-in-out ${
              activeIndex === index 
                ? 'w-12 bg-[var(--text-highlight)]' 
                : 'w-2 bg-gray-400 hover:bg-gray-300'
            }`}
            aria-label={`Step ${index + 1}`}
          />
        ))}
      </div>
      
      {/* Step content */}
      <div className="w-full bg-[#2121218f] rounded-lg">
        <div className="items-center gap-3 mb-4">
          <span className="text-[var(--text-highlight)] text-sm font-semibold">
            {steps[activeIndex].number}
          </span>
          <h3 className="text-xl font-bold tracking-wide">
            {steps[activeIndex].title}
          </h3>
        </div>
        <p className="text-base text-gray-300 leading-relaxed">
          {steps[activeIndex].description}
        </p>
      </div>
      
      {/* Touch swipe controls */}
      <div className="flex justify-between w-full mt-6">
        <button
          onClick={() => handleStepChange(Math.max(0, activeIndex - 1))}
          disabled={activeIndex === 0}
          className={`px-4 py-2 text-sm rounded-md ${
            activeIndex === 0 ? 'text-gray-300' : 'text-[var(--text-highlight)]'
          }`}
        >
          Previous
        </button>
        <button
          onClick={() => handleStepChange(Math.min(2, activeIndex + 1))}
          disabled={activeIndex === 2}
          className={`px-4 py-2 text-sm rounded-md ${
            activeIndex === 2 ? 'text-gray-300' : 'text-[var(--text-highlight)]'
          }`}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MobileListSection;