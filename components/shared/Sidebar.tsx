'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Users, Settings, MoreVertical } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export default function Sidebar() {
    const pathname = usePathname();

    const menuGroups = [
        {
            title: 'DASHBOARD',
            items: [
                { name: 'Overview', href: '/dashboard', icon: Home }
            ]
        },
        {
            title: 'QUICK ACCESS',
            items: []
        },
        {
            title: 'MODULES',
            items: [
                { name: 'User Management', href: '/dashboard/users', icon: Users }
            ]
        }
    ];

    return (
        <div className="w-64 flex flex-col h-screen bg-white border-r border-gray-200 sticky top-0">
            {/* Logo */}
            <div className="p-6">
                <Link href="/" className="flex items-center gap-2 group w-max">
                    <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center shadow-sm">
                        <span className="text-white font-bold text-xs">AC</span>
                    </div>
                    <span className="text-[19px] font-bold text-gray-900 tracking-tight">
                        AppDev Central
                    </span>
                </Link>
            </div>

            {/* Menu */}
            <div className="flex-1 overflow-y-auto px-4 py-2 flex flex-col gap-6">
                {menuGroups.map((group, index) => (
                    <div key={index}>
                        <h3 className="text-[11px] font-bold text-gray-500 uppercase tracking-wider mb-2 px-3">
                            {group.title}
                        </h3>
                        {group.items.length > 0 && (
                            <div className="flex flex-col gap-1">
                                {group.items.map((item) => {
                                    const isActive = pathname === item.href;
                                    const Icon = item.icon;
                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={cn(
                                                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-semibold transition-colors",
                                                isActive
                                                    ? "bg-gray-50 text-gray-900"
                                                    : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                                            )}
                                        >
                                            <Icon className={cn("w-[18px] h-[18px]", isActive ? "text-gray-900" : "text-gray-500")} />
                                            {item.name}
                                        </Link>
                                    );
                                })}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Bottom Actions */}
            <div className="p-5 flex flex-col gap-4">
                <Link
                    href="/dashboard/settings"
                    className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-[14px] font-semibold text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-colors"
                >
                    <Settings className="w-[18px] h-[18px] text-gray-500" />
                    Settings
                </Link>

                <div className="flex items-center justify-between mt-2 pt-4 border-t border-gray-100 cursor-pointer group">
                    <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-accent-1 text-white flex items-center justify-center font-bold text-sm shadow-sm group-hover:scale-105 transition-transform">
                            A
                        </div>
                        <div className="flex flex-col">
                            <span className="text-[14px] font-semibold text-gray-900">Admin User</span>
                            <span className="text-[12px] text-gray-500">admin@appdev.com</span>
                        </div>
                    </div>
                    <MoreVertical className="w-5 h-5 text-gray-400 group-hover:text-gray-700 transition-colors" />
                </div>
            </div>
        </div>
    );
}
