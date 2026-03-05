import React, { ReactNode } from 'react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export interface StatCardProps {
    title: string;
    value: string | number;
    icon: ReactNode;
    iconWrapperClassName?: string;
    subtitle?: string;
}

export default function DashboardStatCard({
    title,
    value,
    icon,
    iconWrapperClassName,
    subtitle,
}: StatCardProps) {
    return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between min-h-[140px] transition-shadow">
            <div className="flex items-start justify-between">
                <h3 className="text-gray-500 font-semibold text-sm">{title}</h3>
                <div className={cn("w-10 h-10 rounded-full flex items-center justify-center", iconWrapperClassName)}>
                    {icon}
                </div>
            </div>
            <div>
                <div className="text-[32px] font-bold text-gray-900 leading-tight">{value}</div>

                {subtitle && (
                    <div className="text-sm text-gray-500 font-normal flex items-center mt-1">
                        {subtitle}
                    </div>
                )}
            </div>
        </div>
    );
}
