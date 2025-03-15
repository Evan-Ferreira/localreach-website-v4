'use client';

import React, { useState, useEffect } from 'react';

const Blob = ({
    color = 'linear-gradient(135deg, #FF6F00, #FFB74D)',
    size = '1000px',
}) => {
    const [position, setPosition] = useState({ x: 150, y: 150 });
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show blob after scrolling 100 pixels
            const isPassedThreshold = window.scrollY > 400;
            setIsVisible(isPassedThreshold);
        };

        const handleMouseMove = (event: MouseEvent) => {
            requestAnimationFrame(() => {
                setPosition({
                    x: event.clientX - parseInt(size) / 2,
                    y: event.clientY - parseInt(size),
                });
            });
        };

        // Call handleScroll immediately to check initial position
        handleScroll();

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('scroll', handleScroll);
        };
    }, [size]);

    if (!isVisible) return null;

    return (
        <div
            className="Animate"
            style={{
                position: 'fixed',
                transform: `translate(${position.x}px, ${position.y}px)`,
                willChange: 'transform',
                borderRadius: '50%',
                height: size,
                width: size,
                filter: 'blur(160px)',
                opacity: '20%',
                background: color,
                pointerEvents: 'none',
                zIndex: 50,
            }}
        />
    );
};

export default Blob;
