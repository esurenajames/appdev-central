'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { ChevronDown, ChevronRight, Users, LogIn, Menu, X, LogOut, LayoutDashboard, Settings } from 'lucide-react';
import { useAuth, useLogout } from '@/hooks/login/useAuth';
import UserAvatar from './Avatar/UserAvatar';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

const Navbar: React.FC = () => {
    const pathname = usePathname();
    const { user, isLoading } = useAuth();
    const { mutate: logout } = useLogout();
    const [isModulesOpen, setIsModulesOpen] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    if (pathname !== '/' && pathname !== '/landing') {
        return null;
    }

    const modules = [
        {
            title: 'User Management',
            description: 'Manage users, roles and permissions',
            href: '/users',
            icon: <Users className="w-5 h-5 text-accent-2" />
        },
    ];

    const userMenuItems: MenuProps['items'] = [
        {
            key: 'dashboard',
            label: (
                <Link href="/dashboard" className="flex items-center gap-2 py-1">
                    <LayoutDashboard size={16} />
                    <span>Dashboard</span>
                </Link>
            ),
        },
        {
            key: 'settings',
            label: (
                <Link href="/settings" className="flex items-center gap-2 py-1">
                    <Settings size={16} />
                    <span>Settings</span>
                </Link>
            ),
        },
        {
            type: 'divider',
        },
        {
            key: 'logout',
            label: (
                <div className="flex items-center gap-2 py-1 text-red-500">
                    <LogOut size={16} />
                    <span>Logout</span>
                </div>
            ),
            onClick: () => logout(),
        },
    ];

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b",
                    isScrolled
                        ? "bg-white/90 backdrop-blur-md border-gray-100 py-2 shadow-sm"
                        : "bg-white border-transparent py-4"
                )}
            >
                <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                    <div className="flex items-center gap-8">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform shadow-lg shadow-primary/20">
                                <span className="text-white font-bold text-xs">AC</span>
                            </div>
                            <span className="text-xl font-bold text-primary tracking-tight">
                                appdev central
                            </span>
                        </Link>
                        <div
                            className="relative hidden md:block"
                            onMouseEnter={() => setIsModulesOpen(true)}
                            onMouseLeave={() => setIsModulesOpen(false)}
                        >
                            <button className={cn(
                                "flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-all rounded-lg hover:bg-gray-50",
                                isModulesOpen ? "text-primary bg-gray-50" : "text-text-info"
                            )}>
                                Modules
                                <ChevronDown className={cn(
                                    "w-4 h-4 transition-transform duration-200",
                                    isModulesOpen && "rotate-180"
                                )} />
                            </button>

                            {isModulesOpen && (
                                <div className="absolute left-0 mt-1 w-[300px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                    <div className="p-2 bg-gray-50 border-b border-gray-100 px-4 py-2">
                                        <span className="text-[10px] uppercase font-bold text-text-info tracking-wider">Available Modules</span>
                                    </div>
                                    <div className="p-2">
                                        {modules.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-gray-50 transition-all group"
                                            >
                                                <div className="mt-1 p-2 bg-white rounded-lg border border-gray-100 shadow-sm group-hover:border-accent-2 group-hover:shadow-md transition-all">
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <div className="text-sm font-semibold text-gray-700 group-hover:text-accent-2 transition-colors">
                                                        {item.title}
                                                    </div>
                                                    <div className="text-xs text-text-info line-clamp-1">
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
                            {isLoading ? (
                                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center animate-pulse" />
                            ) : user ? (
                                <Dropdown menu={{ items: userMenuItems }} placement="bottomRight" trigger={['click']}>
                                    <button className="flex items-center gap-2.5 p-1 pr-3 rounded-full hover:bg-gray-50 transition-all border border-transparent hover:border-gray-100">
                                        <UserAvatar
                                            src={user.GAvatar}
                                            name={user.AccountName}
                                            domainAccount={user.DomainAccount}
                                            size={36}
                                            className="shadow-sm"
                                        />
                                        <div className="flex flex-col text-left">
                                            <span className="text-sm font-bold text-text leading-none mb-0.5">
                                                {user.Nickname || user.AccountName}
                                            </span>
                                            <span className="text-[10px] text-text-info font-medium tracking-tight">
                                                {user.AccountGroup} • {user.AccountType}
                                            </span>
                                        </div>
                                        <ChevronDown size={14} className="text-text-info ml-1" />
                                    </button>
                                </Dropdown>
                            ) : (
                                <Link href="/login" className="block">
                                    <button className="bg-[#1d1d1f] text-white p-1.5 pr-2 rounded-full flex items-center gap-3 transition-transform hover:scale-[1.02] hover:shadow-lg group shadow-sm">
                                        <span className="font-semibold text-[13px] pl-4">Sign in</span>
                                        <div className="bg-white text-black w-7 h-7 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-0.5">
                                            <ChevronRight strokeWidth={3} size={14} />
                                        </div>
                                    </button>
                                </Link>
                            )}
                        </div>
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="md:hidden p-2 text-text-info hover:bg-gray-100 rounded-lg transition-colors"
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                </div>
            </nav>

            {/* Mobile Menu Sidebar */}
            <div
                className={cn(
                    "fixed inset-0 z-[60] transform transition-transform duration-300 ease-in-out md:hidden",
                    isMenuOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div
                    className="absolute inset-0 bg-black/20 backdrop-blur-sm"
                    onClick={() => setIsMenuOpen(false)}
                ></div>
                <div className="absolute left-0 top-0 h-full w-4/5 max-w-sm bg-white shadow-2xl p-6 flex flex-col">
                    <div className="flex items-center justify-between mb-8">
                        <Link href="/" onClick={() => setIsMenuOpen(false)} className="flex items-center gap-2">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                <span className="text-white font-bold text-xs">AC</span>
                            </div>
                            <span className="text-lg font-bold text-primary tracking-tight">appdev central</span>
                        </Link>
                        <button onClick={() => setIsMenuOpen(false)} className="text-text-info hover:text-primary transition-colors">
                            <X size={24} />
                        </button>
                    </div>

                    <div className="flex flex-col gap-4">
                        <span className="text-[10px] uppercase font-bold text-text-info tracking-wider">Modules</span>
                        {modules.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setIsMenuOpen(false)}
                                className="flex items-center gap-3 p-2 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                            >
                                <span className="text-sm font-semibold text-gray-800">{item.title}</span>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-auto pt-6 border-t border-gray-100">
                        {isLoading ? (
                            <div className="w-full h-12 bg-gray-100 rounded-xl animate-pulse" />
                        ) : user ? (
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-2xl">
                                    <UserAvatar
                                        src={user.GAvatar}
                                        name={user.AccountName}
                                        domainAccount={user.DomainAccount}
                                        size={48}
                                    />
                                    <div className="flex flex-col text-left overflow-hidden">
                                        <span className="text-base font-bold text-text leading-none mb-1 truncate">
                                            {user.AccountName}
                                        </span>
                                        <span className="text-xs text-text-info truncate">
                                            {user.Email}
                                        </span>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    <Link href="/dashboard" onClick={() => setIsMenuOpen(false)} className="w-full">
                                        <Button className="w-full flex items-center justify-center gap-2 h-11 rounded-xl">
                                            <LayoutDashboard size={16} />
                                            Dashboard
                                        </Button>
                                    </Link>
                                    <Button
                                        danger
                                        className="w-full flex items-center justify-center gap-2 h-11 rounded-xl"
                                        onClick={() => {
                                            logout();
                                            setIsMenuOpen(false);
                                        }}
                                    >
                                        <LogOut size={16} />
                                        Logout
                                    </Button>
                                </div>
                            </div>
                        ) : (
                            <Link href="/login" onClick={() => setIsMenuOpen(false)}>
                                <button className="w-full bg-[#1d1d1f] text-white py-2 pl-6 pr-2 rounded-full flex items-center justify-between transition-transform hover:scale-[1.02] shadow-sm">
                                    <span className="font-semibold text-sm">Get Started Now</span>
                                    <div className="bg-white text-black w-10 h-10 rounded-full flex items-center justify-center">
                                        <ChevronRight strokeWidth={3} size={20} />
                                    </div>
                                </button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
