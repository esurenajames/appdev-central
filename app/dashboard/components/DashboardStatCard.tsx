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
    onClick?: () => void;
}

export default function DashboardStatCard({
    title,
    value,
    icon,
    iconWrapperClassName,
    subtitle,
    onClick,
}: StatCardProps) {
    return (
        <div
            className={cn(
                "bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col justify-between min-h-[140px] transition-all duration-200",
                onClick ? "cursor-pointer hover:shadow-md hover:border-blue-100 active:scale-[0.98]" : ""
            )}
            onClick={onClick}
        >
            <div className="flex items-start justify-between">
                <div className="text-gray-500 font-semibold text-sm tracking-wide uppercase">{title}</div>
                <div className={cn("w-10 h-10 rounded-full flex items-center justify-center", iconWrapperClassName)}>
                    {icon}
                </div>
            </div>
            <div>
                <div className="text-[32px] font-bold text-gray-900 leading-tight mb-1">{value}</div>

                {subtitle && (
                    <div className="text-sm text-gray-500 font-medium flex items-center">
                        {subtitle}
                    </div>
                )}
            </div>
        </div>
    );
}
