import React from 'react';
import Image from 'next/image';

interface BlogPost {
    id: number;
    title: string;
    excerpt: string;
    date: string;
    imageUrl: string;
}

const blogPosts: BlogPost[] = [
    {
        id: 1,
        title: "The Future of TV Advertising",
        excerpt: "Discover how digital transformation is reshaping the television advertising landscape...",
        date: "March 15, 2024",
        imageUrl: "/KRP.png"
    },
    {
        id: 2,
        title: 'Maximizing Local Business Reach',
        excerpt:
            'Learn effective strategies for connecting with your community through targeted advertising...',
        date: 'March 10, 2024',
        imageUrl: '/TAIV.png',
    },
    {
        id: 3,
        title: 'Digital Marketing Trends 2024',
        excerpt:
            'Stay ahead of the curve with the latest developments in digital marketing and advertising...',
        date: 'March 5, 2024',
        imageUrl: '/FORGE.png',
    },
];

const Blog = () => {
    return (
        <div className="w-full min-h-screen bg-[var(--background)] py-16 px-8 md:px-36 flex items-center">
            <div className="w-full">
                <div className="text-center mb-12 relative z-100">
                    <h2 className="text-4xl font-bold mb-4">Latest Updates</h2>
                    <h4 className="text-md text-gray-500 mb-8">Stay informed with our latest news and insights</h4>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-100">
                    {blogPosts.map((post) => (
                        <div 
                            key={post.id} 
                            className="bg-[#2121218f] relative md:min-h-[550px] rounded-lg overflow-hidden hover:transform hover:scale-105 transition-all duration-300 flex flex-col"
                        >
                            <Image 
                                src={post.imageUrl} 
                                alt={post.title}
                                width={500}
                                height={192}
                                className="w-full object-cover"
                            />
                            <div className="p-6 mt-auto">
                                <h4 className="text-gray-500 text-sm mb-2">{post.date}</h4>
                                <h1 className="mb-3 text-2xl font-bold">{post.title}</h1>
                                <h4 className="text-gray-400 mb-4">{post.excerpt}</h4>
                                <button className="text-[var(--text-highlight)] hover:text-[var(--text-highlight-hover)] transition-colors duration-300">
                                    Read More →
                                </button>
                            </div>
                        </div>
                        
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Blog;
