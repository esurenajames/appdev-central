'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button, Avatar, Dropdown } from 'antd';
import type { MenuProps } from 'antd';
import { ChevronDown, Users, LogIn, Menu, X, LogOut, User as UserIcon, LayoutDashboard, Settings } from 'lucide-react';
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

    const isActive = (path: string) => pathname === path ? "text-primary font-bold" : "text-text-info hover:text-primary transition-colors";

    return (
        <>
            <nav
                className={cn(
                    "fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b",
                    isScrolled
                        ? "bg-background/90 backdrop-blur-md border-border py-2 shadow-sm"
                        : "bg-background border-transparent py-4"
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
                                "flex items-center gap-1.5 px-3 py-2 text-sm font-medium transition-all rounded-lg hover:bg-neutral",
                                isModulesOpen ? "text-primary bg-neutral" : "text-text-info"
                            )}>
                                Modules
                                <ChevronDown className={cn(
                                    "w-4 h-4 transition-transform duration-200",
                                    isModulesOpen && "rotate-180"
                                )} />
                            </button>

                            {isModulesOpen && (
                                <div className="absolute left-0 mt-1 w-[300px] bg-background rounded-2xl shadow-2xl border border-border overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-200">
                                    <div className="p-2 bg-neutral/50 border-b border-border px-4 py-2">
                                        <span className="text-[10px] uppercase font-bold text-text-info tracking-wider">Available Modules</span>
                                    </div>
                                    <div className="p-2">
                                        {modules.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                className="flex items-start gap-3 p-3 rounded-xl hover:bg-neutral transition-all group"
                                            >
                                                <div className="mt-1 p-2 bg-background rounded-lg border border-border shadow-sm group-hover:border-accent-2 group-hover:shadow-md transition-all">
                                                    {item.icon}
                                                </div>
                                                <div>
                                                    <div className="text-sm font-semibold text-foreground group-hover:text-accent-2 transition-colors">
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
                                <div className="w-10 h-10 rounded-full bg-neutral flex items-center justify-center animate-pulse" />
                            ) : user ? (
                                <Dropdown menu={{ items: userMenuItems }} placement="bottomRight" trigger={['click']}>
                                    <button className="flex items-center gap-2.5 p-1 pr-3 rounded-full hover:bg-neutral transition-all border border-transparent hover:border-border">
                                        <UserAvatar
                                            src={user.GAvatar}
                                            name={user.AccountName}
                                            domainAccount={user.DomainAccount}
                                            size={36}
                                            className="shadow-sm"
                                        />
                                        <div className="flex flex-col text-left">
                                            <span className="text-sm font-bold text-foreground leading-none mb-0.5">
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
                                <Link href="/login">
                                    <Button
                                        className="border-border text-text-info hover:text-primary hover:border-primary font-bold px-6 h-10 rounded-xl flex items-center gap-2 shadow-sm whitespace-nowrap"
                                    >
                                        <LogIn className="w-4 h-4" />
                                        Login
                                    </Button>
                                </Link>
                            )}
                        </div>
                        <button
                            onClick={() => setIsMenuOpen(true)}
                            className="md:hidden p-2 text-text-info hover:bg-neutral rounded-lg transition-colors"
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
                <div className="absolute left-0 top-0 h-full w-4/5 max-w-sm bg-background shadow-2xl p-6 flex flex-col">
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
                                className="flex items-center gap-3 p-2 bg-neutral rounded-xl hover:bg-neutral/80 transition-colors"
                            >
                                <span className="font-semibold text-foreground">{item.title}</span>
                            </Link>
                        ))}
                    </div>

                    <div className="mt-auto pt-6 border-t border-border">
                        {isLoading ? (
                            <div className="w-full h-12 bg-neutral rounded-xl animate-pulse" />
                        ) : user ? (
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-3 p-3 bg-neutral rounded-2xl">
                                    <UserAvatar
                                        src={user.GAvatar}
                                        name={user.AccountName}
                                        domainAccount={user.DomainAccount}
                                        size={48}
                                    />
                                    <div className="flex flex-col text-left overflow-hidden">
                                        <span className="text-base font-bold text-foreground leading-none mb-1 truncate">
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
                                <Button
                                    className="w-full border-border text-text-info font-bold h-12 rounded-xl flex items-center justify-center gap-2 shadow-sm"
                                >
                                    <LogIn className="w-5 h-5" />
                                    Login
                                </Button>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
