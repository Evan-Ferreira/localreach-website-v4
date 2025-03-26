import React from 'react';
import TabContent, { TabContentProps } from './TabContent';

const restaurantContent: TabContentProps = {
    title: "Enhance Your Dining Experience",
    subtitle: "For Restaurants",
    description: "Elevate your restaurant's ambiance with cutting-edge technology. Engage your customers with dynamic and interactive digital displays.",
    imageSrc: "/resturant.jpg",
    imageAlt: "Restaurant digital display showcase",
    buttonText: "Discover More",
    buttonLink: "https://example.com",
    features: [
        "Replace existing commercials with in-house promotions",
        "AI-powered system ensures seamless ad transitions",
        "Generate passive income through ad partnerships"
    ]
};

const RestaurantTab: React.FC = () => {
    return <TabContent {...restaurantContent} />;
};

export default RestaurantTab; 