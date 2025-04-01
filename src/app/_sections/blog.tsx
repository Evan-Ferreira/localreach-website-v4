import React from 'react';
import Image from 'next/image';
import MobileBlog from '../_components/blog/mobileBlog';

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    imageUrl: string;
}

const blogPosts: (BlogPost & { link: string })[] = [
    {
        id: 1,
        title: 'Pitch competition celebrates innovation and entrepreneurship',
        excerpt: `Members of Local Reach address the crowd and judges during the 2024 Summer Pitch competition. The team was awarded $10,000. (Queen's University)...`,
        date: 'August 23, 2024',
        imageUrl: '/KRP.png',
        link: 'https://www.queensu.ca/gazette/stories/pitch-competition-celebrates-innovation-and-entrepreneurship-0',
    },
    {
        id: 2,
        title: 'Taiv acquihires fellow Canadian adtech startup Local Reach to aid expansion plans',
        excerpt: `"“It just seemed like we were building two sides of the same coin.” - Noah Palansky...`,
        date: 'March 18, 2025',
        imageUrl: '/TAIV.png',
        link: 'https://betakit.com/taiv-acquihires-fellow-canadian-adtech-startup-local-reach-to-aid-expansion-plans/',
    },
    {
        id: 3,
        title: 'Startup Survivor: The Pitch Competition',
        excerpt:
            'Startup Survivor is a 4-month Accelerator and Pitch Competition awarding $95,000 to McMaster University students and alumni with the best business idea...',
        date: 'November 17, 2024',
        imageUrl: '/FORGE.png',
        link: 'https://theforge.mcmaster.ca/pitchcompetition/',
    },
];

const Blog = () => {
    return (
        <div className="w-full min-h-screen bg-[var(--background)] py-16 px-8 md:px-36 flex items-center">
            {/* Mobile version */}
            <div className="md:hidden w-full">
                <MobileBlog />
            </div>

            {/* Desktop version */}
            <div className="hidden md:block w-full">
                <div className="text-center mb-12 relative z-100" id="blog">
                    <h2 className="text-4xl font-bold mb-4">Latest Updates</h2>
                    <h4 className="text-md text-gray-500 mb-8">
                        Stay informed with our latest news and insights
                    </h4>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-100">
                    {blogPosts.map((post) => (
                        <div
                            key={post.id}
                            className="bg-[#2121218f] relative md:min-h-[550px] rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 flex flex-col"
                        >
                            <a
                                href={post.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex flex-col flex-1"
                            >
                                <Image
                                    src={post.imageUrl}
                                    alt={post.title}
                                    width={500}
                                    height={192}
                                    className="w-full object-cover"
                                />
                                <div className="p-6 mt-auto">
                                    <h4 className="text-gray-500 text-sm mb-2">
                                        {post.date}
                                    </h4>
                                    <h1 className="mb-3 text-2xl font-bold">
                                        {post.title}
                                    </h1>
                                    <h4 className="text-gray-400 mb-4">
                                        {post.excerpt}
                                    </h4>
                                    <span className="text-[var(--text-highlight)] hover:text-[var(--text-highlight-hover)] transition-colors duration-300">
                                        Read More →
                                    </span>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
