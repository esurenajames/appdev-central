'use client';

import React from 'react';
import { Button } from 'antd';
import Link from 'next/link';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const Navbar: React.FC = () => {
    return (
        <nav className="sticky top-0 z-50 w-full bg-primary border-b border-white/10 shadow-lg">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">

                    {/* Left Side: Logo/Brand */}
                    <div className="flex items-center">
                        <Link href="/" className="text-xl font-bold text-neutral tracking-tight hover:opacity-90 transition-opacity">
                            App Dev Central
                        </Link>
                    </div>

                    {/* Right Side: Login */}
                    <div className="flex items-center gap-4">
                        <Link href="/login">
                            <Button
                                type="primary"
                                className="bg-accent-2 border-accent-2 hover:bg-opacity-90 font-semibold px-6 h-10 rounded-md"
                            >
                                Login
                            </Button>
                        </Link>
                    </div>

                </div>
            </div>
        </nav>
    );
};

export default Navbar;
