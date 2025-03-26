import React from 'react';
import Image from 'next/image';
import Button from '../../_components/Button';

export interface TabContentProps {
    title: string;
    subtitle: string;
    description: string;
    imageSrc: string;
    imageAlt: string;
    buttonText: string;
    buttonLink: string;
    features: string[];
}

const TabContent: React.FC<TabContentProps> = ({
    title,
    subtitle,
    description,
    imageSrc,
    imageAlt,
    buttonText,
    buttonLink,
    features
}) => {
    return (
        <div className="text-[var(--text-base)] h-full">
            <div className="flex flex-col md:flex-row gap-12 items-center justify-between max-w-6xl mx-auto">
                <div className="w-full md:w-5/12 space-y-6 p-4 md:p-0">
                    <h3 className="text-lg font-medium text-gray-500">{subtitle}</h3>
                    <h2 className="text-4xl font-bold uppercase">
                        {title}
                    </h2>
                    <p className="text-lg leading-relaxed">
                        {description}
                    </p>

                    <ul className="list-disc text-[var(--text-secondary)] list-inside space-y-3 text-base">
                        {features.map((feature, index) => (
                            <li key={index}>{feature}</li>
                        ))}
                    </ul>
                    
                    <div className="pt-8">
                        <Button
                            onClick={() => (window.location.href = buttonLink)}
                            className="text-lg px-8 py-4"
                        >
                            {buttonText}
                        </Button>
                    </div>
                </div>

                <div className="w-full md:w-6/12">
                    <Image
                        src={imageSrc}
                        alt={imageAlt}
                        width={600}
                        height={600}
                        className="w-full h-[500px] rounded-xl shadow-xl object-cover"
                        priority
                    />
                </div>
            </div>
        </div>
    );
};

export default TabContent; 