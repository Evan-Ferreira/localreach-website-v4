import type { Metadata } from 'next';
import { Geist, Geist_Mono, Raleway } from 'next/font/google';
import './globals.css';
import Navbar from './navbar';
import { Analytics } from '@vercel/analytics/react';

const geistSans = Geist({
    variable: '--font-geist-sans',
    subsets: ['latin'],
});

const raleway = Raleway({
    variable: '--font-raleway',
    subsets: ['latin'],
});

const geistMono = Geist_Mono({
    variable: '--font-geist-mono',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Local Reach',
    description:
        'AI-powered device for optimzing TV content in restaurants and bars.Acquired by Taiv (YC W20).',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <head></head>
            <body
                className={`${geistSans.variable} ${geistMono.variable} ${raleway.variable} antialiased`}
            >
                <Navbar />
                {children}
                <Analytics />
            </body>
        </html>
    );
}
