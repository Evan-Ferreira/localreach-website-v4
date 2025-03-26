import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className="w-full bg-[var(--text-highlight)] text-white py-8">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-3">
                            <Image src="/lr-logo.svg" alt="LocalReach Logo" width={100} height={100} />
                            
                        </div>
                        <p className="text-orange-100 text-sm">Connecting businesses with their local audience through innovative TV advertising solutions.</p>
                    </div>
                    <div>
                        <h4 className="text-base font-semibold mb-3">Quick Links</h4>
                        <ul className="space-y-1.5">
                            <li><Link href="/about" className="text-orange-100 hover:text-white transition-colors text-sm">About Us</Link></li>
                            <li><Link href="/services" className="text-orange-100 hover:text-white transition-colors text-sm">Services</Link></li>
                            <li><Link href="/contact" className="text-orange-100 hover:text-white transition-colors text-sm">Contact</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-base font-semibold mb-3">Resources</h4>
                        <ul className="space-y-1.5">
                            <li><Link href="/blog" className="text-orange-100 hover:text-white transition-colors text-sm">Blog</Link></li>
                            <li><Link href="/case-studies" className="text-orange-100 hover:text-white transition-colors text-sm">Case Studies</Link></li>
                            <li><Link href="/faq" className="text-orange-100 hover:text-white transition-colors text-sm">FAQ</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-base font-semibold mb-3">Contact</h4>
                        <ul className="space-y-1.5 text-orange-100 text-sm">
                            <li>123 Business Street</li>
                            <li>City, State 12345</li>
                            <li>contact@localreach.com</li>
                        </ul>
                    </div>
                </div>
                <div className="border-t border-orange-400 mt-8 pt-8 text-center text-orange-100">
                    <p>&copy; {new Date().getFullYear()} LocalReach. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 