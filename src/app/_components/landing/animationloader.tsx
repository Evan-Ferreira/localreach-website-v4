'use client';

import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';

/**
 * AnimationLoader Component
 *
 * A wrapper component that adds entrance animations and effects to its children.
 * Only animates on non-mobile devices.
 *
 * @example
 * // Basic usage - animates upward
 * <AnimationLoader>
 *   <div>Content slides up</div>
 * </AnimationLoader>
 *
 * @example
 * // Custom animation from the right with delay
 * <AnimationLoader
 *   direction="right"
 *   delay={0.3}
 *   duration={0.8}
 *   type="spring"
 * >
 *   <div>Content slides from right</div>
 * </AnimationLoader>
 *
 * @example
 * // Infinite pulse animation
 * <AnimationLoader
 *   effect="pulse"
 *   infinite
 * >
 *   <div>Pulsing content</div>
 * </AnimationLoader>
 *
 * @example
 * // Fade in with bounce
 * <AnimationLoader
 *   effect="fadeIn"
 *   type="spring"
 *   bounce={1.2}
 * >
 *   <div>Bouncy fade in</div>
 * </AnimationLoader>
 */
interface AnimationLoaderProps {
    children: ReactNode;
    direction?: 'up' | 'down' | 'left' | 'right';
    effect?: 'none' | 'fadeIn' | 'pulse' | 'bounce' | 'shake';
    duration?: number;
    delay?: number;
    type?: 'spring' | 'tween';
    className?: string;
    infinite?: boolean;
    bounce?: number;
}

const AnimationLoader = ({
    children,
    direction = 'up',
    effect = 'none',
    duration = 0.5,
    delay = 0,
    type = 'spring',
    className = '',
    infinite = false,
    bounce = 1,
}: AnimationLoaderProps) => {
    const [isMobile, setIsMobile] = useState(false);
    const [hasCheckedMobile, setHasCheckedMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
            setHasCheckedMobile(true);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Don't render anything until we've checked if we're on mobile
    if (!hasCheckedMobile) {
        return null;
    }

    const getInitialPosition = () => {
        if (isMobile) return {};
        if (effect === 'fadeIn') return { opacity: 0 };

        switch (direction) {
            case 'up':
                return { y: 50, opacity: 0 };
            case 'down':
                return { y: -50, opacity: 0 };
            case 'left':
                return { x: 50, opacity: 0 };
            case 'right':
                return { x: -50, opacity: 0 };
            default:
                return { y: 50, opacity: 0 };
        }
    };

    const getFinalPosition = () => {
        if (isMobile) return {};
        if (effect === 'fadeIn') return { opacity: 1 };

        switch (direction) {
            case 'up':
            case 'down':
                return { y: 0, opacity: 1 };
            case 'left':
            case 'right':
                return { x: 0, opacity: 1 };
            default:
                return { y: 0, opacity: 1 };
        }
    };

    const getEffectAnimation = () => {
        if (isMobile) return {};

        switch (effect) {
            case 'pulse':
                return {
                    scale: [1, 1.05, 1],
                    transition: {
                        repeat: infinite ? Infinity : 0,
                        duration: duration,
                    },
                };
            case 'bounce':
                return {
                    y: [0, -10, 0],
                    transition: {
                        repeat: infinite ? Infinity : 0,
                        duration: duration,
                    },
                };
            case 'shake':
                return {
                    x: [-5, 5, -5, 5, 0],
                    transition: {
                        repeat: infinite ? Infinity : 0,
                        duration: duration,
                    },
                };
            default:
                return {};
        }
    };

    const getTransition = () => ({
        type: type,
        duration: duration,
        delay: delay,
        ease: 'easeOut',
        bounce: bounce,
    });

    return (
        <motion.div
            initial={getInitialPosition()}
            animate={{
                ...getFinalPosition(),
                ...getEffectAnimation(),
            }}
            transition={getTransition()}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export default AnimationLoader;
