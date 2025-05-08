'use client';
import React, { useState } from 'react';
import ImageVideoLoader from '../howitworks/imageVideoLoader';

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    imageUrl: string;
    url: string;
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: 'The Future of TV Advertising',
        excerpt:
            'Discover how digital transformation is reshaping the television advertising landscape...',
        date: 'March 15, 2024',
        imageUrl: '/KRP.png',
        url: 'https://www.queensu.ca/gazette/stories/pitch-competition-celebrates-innovation-and-entrepreneurship-0',
    },
    {
        id: 2,
        title: 'Maximizing Local Business Reach',
        excerpt:
            'Learn effective strategies for connecting with your community through targeted advertising...',
        date: 'March 10, 2024',
        imageUrl: '/TAIV.png',
        url: 'https://betakit.com/taiv-acquihires-fellow-canadian-adtech-startup-local-reach-to-aid-expansion-plans/',
    },
    {
        id: 3,
        title: 'Digital Marketing Trends 2024',
        excerpt:
            'Stay ahead of the curve with the latest developments in digital marketing and advertising...',
        date: 'March 5, 2024',
        imageUrl: '/FORGE.png',
        url: 'https://theforge.mcmaster.ca/pitchcompetition/',
    },
];

const MobileBlog = () => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [imageOpacity, setImageOpacity] = useState('opacity-100');

    const handleStepChange = (index: number) => {
        setImageOpacity(
            'opacity-0 transition-opacity duration-300 ease-in-out'
        );
        setTimeout(() => {
            setActiveIndex(index);
            setImageOpacity(
                'opacity-100 transition-opacity duration-300 ease-in-out'
            );
        }, 300);
    };

    return (
        <div className="w-full px-4 py-8">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-2">Latest Updates</h2>
                <h4 className="text-sm text-gray-500">
                    Stay informed with our latest news and insights
                </h4>
            </div>

            <div className="flex flex-col items-center w-full">
                {/* Blog post card */}
                <div className="w-full bg-[#2121218f] h-112 rounded-lg mb-6 cursor-pointer transition-all duration-300 transform hover:scale-[1.02] hover:shadow-lg">
                    <div
                        className="relative w-full h-50"
                        onClick={() =>
                            (window.location.href = blogPosts[activeIndex].url)
                        }
                    >
                        <ImageVideoLoader
                            src={blogPosts[activeIndex].imageUrl}
                            alt={blogPosts[activeIndex].title}
                            width={400}
                            height={800}
                            className={`object-cover h-60 ${imageOpacity} transition-transform duration-300 hover:scale-105`}
                        />
                    </div>
                    <div className="p-4">
                        <h4 className="text-gray-500 text-sm mb-2">
                            {blogPosts[activeIndex].date}
                        </h4>
                        <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--text-highlight)] transition-colors duration-300">
                            {blogPosts[activeIndex].title}
                        </h3>
                        <p className="text-gray-400 text-sm mb-4">
                            {blogPosts[activeIndex].excerpt}{' '}
                            <a
                                href={'/blog/' + blogPosts[activeIndex].id}
                                className="pl-2 text-[var(--text-highlight)] hover:text-[var(--text-highlight-hover)] transition-all duration-300 text-xs hover:translate-x-1"
                                onClick={(e) => e.stopPropagation()}
                            >
                                Read More →
                            </a>
                        </p>
                    </div>
                    <div className="flex justify-center items-center gap-2 w-full mb-6">
                        {blogPosts.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => handleStepChange(index)}
                                className={`h-2 rounded-full transition-all duration-300 ease-in-out ${
                                    activeIndex === index
                                        ? 'w-12 bg-[var(--text-highlight)]'
                                        : 'w-2 bg-gray-400 hover:bg-gray-300'
                                }`}
                                aria-label={`Blog post ${index + 1}`}
                            />
                        ))}
                    </div>

                    {/* Navigation buttons */}
                    <div className="flex justify-between w-full">
                        <button
                            onClick={() =>
                                handleStepChange(Math.max(0, activeIndex - 1))
                            }
                            disabled={activeIndex === 0}
                            className={`px-4 py-2 text-sm rounded-md ${
                                activeIndex === 0
                                    ? 'text-gray-300'
                                    : 'text-[var(--text-highlight)]'
                            }`}
                        >
                            Previous
                        </button>
                        <button
                            onClick={() =>
                                handleStepChange(
                                    Math.min(
                                        blogPosts.length - 1,
                                        activeIndex + 1
                                    )
                                )
                            }
                            disabled={activeIndex === blogPosts.length - 1}
                            className={`px-4 py-2 text-sm rounded-md ${
                                activeIndex === blogPosts.length - 1
                                    ? 'text-gray-300'
                                    : 'text-[var(--text-highlight)]'
                            }`}
                        >
                            Next
                        </button>
                    </div>
                </div>

                {/* Step indicators */}
            </div>
        </div>
    );
};

export default MobileBlog;
