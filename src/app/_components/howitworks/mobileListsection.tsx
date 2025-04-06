'use client'
import React, { useState } from 'react';
import ImageVideoLoader from './imageVideoLoader';

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
    { src: '/HIW1.jpg', alt: 'image1' },
    { src: '/HIW2.mp4', alt: 'image2' },
    { src: '/HIW3.jpg', alt: 'image3' },
  ];
  const steps = [
    {
      number: "01",
      title: "Sign Up & Install Your Device",
      description: (
        <>
          Register your restaurant with Local Reach and receive our easy-to-install IoT device. 
          <strong> Simply plug it into your existing TV setup, and our system will seamlessly integrate with your screens—no technical expertise required.</strong>
        </>
      )
    },
    {
      number: "02",
      title: "AI-Powered Ad Replacement",
      description: (
        <>
          Our smart AI technology detects commercials in real time and 
          <strong> replaces them with ads of your choice.</strong> 
          Whether promoting your menu, special deals, or partner brands, you stay in full control of what appears on your screens.
        </>
      )
    },
    {
      number: "03",
      title: "Earn Revenue Effortlessly",
      description: (
        <>
          Turn your existing screens into a new revenue stream. 
          <strong> With every ad displayed, your restaurant earns passive income,</strong> 
          while keeping customers engaged with relevant and localized content—all without lifting a finger.
        </>
      )
    }
];


  return (
    <div className="flex flex-col items-center w-full h-full">
      {/* Image container with fixed height */}
      <div className="relative w-full h-64 mb-6">
        <ImageVideoLoader
          src={images[activeIndex].src}
          alt={images[activeIndex].alt}
          width={800}
          height={400}
          className={`rounded-md object-cover h-64 ${imageOpacity}`}
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
      <div className="w-full rounded-lg">
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