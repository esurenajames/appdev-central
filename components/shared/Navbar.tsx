'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from 'antd';
import { ChevronDown, Users, LogIn, Menu, X } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const Navbar: React.FC = () => {
    const pathname = usePathname();
    const [isModulesOpen, setIsModulesOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    if (pathname !== '/' && pathname !== '/landing') {
        return null;
    }

    const modules = [
        {
            title: 'User Management',
            description: 'Manage users, roles and permissions',
            href: '/modules/users',
            icon: <Users className="w-5 h-5 text-accent-2" />
        },
    ];

    return (
        <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-200">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">

                    <div className="flex items-center gap-8">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform">
                                <span className="text-white font-bold text-xs">AC</span>
                            </div>
                            <span className="text-xl font-bold text-primary tracking-tight">
                                appdev central
                            </span>
                        </Link>

                        {/* Desktop Links */}
                        <div
                            className="relative hidden md:block"
                            onMouseEnter={() => setIsModulesOpen(true)}
                            onMouseLeave={() => setIsModulesOpen(false)}
                        >
                            <button className={cn(
                                "flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-gray-100",
                                isModulesOpen ? "text-primary bg-gray-100" : "text-gray-600"
                            )}>
                                Modules
                                <ChevronDown className={cn(
                                    "w-4 h-4 transition-transform duration-200",
                                    isModulesOpen && "rotate-180"
                                )} />
                            </button>

                            {isModulesOpen && (
                                <div className="absolute left-0 mt-1 w-[300px] bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-50">
                                    <div className="p-2 bg-gray-50/50 border-b border-gray-100 px-4 py-2">
                                        <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider">Available Modules</span>
                                    </div>
                                    <div className="p-2">
                                        {modules.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
                                            >
                                                <div className="mt-1 p-2 bg-white rounded-md border border-gray-100 shadow-sm group-hover:border-accent-2 transition-colors">
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <div className="text-sm font-semibold text-gray-900 group-hover:text-accent-2 transition-colors">
                                                        {item.title}
                                                    </div>
                                                    <div className="text-xs text-gray-500 line-clamp-1">
                                                        {item.description}
                                                    </div>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:block">
                            <Link href="/login">
                                <Button
                                    className="border-gray-200 text-gray-600 hover:text-primary hover:border-primary font-medium px-5 h-9 rounded-lg flex items-center gap-2"
                                >
                                    <LogIn className="w-4 h-4" />
                                    Login
                                </Button>
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            className="p-2 md:hidden text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>

                </div>
            </div>

            {isMenuOpen && (
                <div className="md:hidden bg-white border-b border-gray-200 py-4 px-4 absolute top-16 left-0 right-0 flex flex-col gap-4 animate-in slide-in-from-top duration-200">
                    <div className="flex flex-col gap-2">
                        <span className="text-[10px] uppercase font-bold text-gray-400 tracking-wider px-2">Modules</span>
                        {modules.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center gap-3 p-3"
                            >
                                <span className="text-sm text-gray-900">{item.title}</span>
                            </Link>
                        ))}
                    </div>
                    <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                        <Button
                            className="w-full border-gray-200 text-gray-600 font-medium h-12 rounded-xl flex items-center justify-center gap-2"
                        >
                            <LogIn className="w-5 h-5" />
                            Login
                        </Button>
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
