import React from 'react';
import TabContent, { TabContentProps } from './TabContent';

const advertiserContent: TabContentProps = {
    title: "Transform Your Venue",
    subtitle: "For Advertisers",
    description: "Democratizing TV advertising. Challenging corporate dominance. Empower your reach by displaying your ads in high-traffic venues.",
    imageSrc: "/Kingston_Ontario_Canada_-_Laslovarga_(28).jpg",
    imageAlt: "Restaurant digital display showcase",
    buttonText: "Explore Services",
    buttonLink: "https://example.com",
    features: [
        "Targeted local ad placements for maximum impact",
        "AI-driven ad scheduling to optimize visibility",
        "Cost-effective solutions for small and large businesses"
    ]
};

const AdvertiserTab: React.FC = () => {
    return <TabContent {...advertiserContent} />;
};

export default AdvertiserTab; 