import React, { Suspense } from 'react';
import UserProfileClient from './components/UserProfileClient';
import { Skeleton } from 'antd';

export const metadata = {
    title: 'User Profile - AppDev Central',
};

export default function UserProfilePage() {
    return (
        <Suspense fallback={
            <div className="p-8 max-w-7xl mx-auto w-full space-y-8 animate-pulse">
                <div className="h-8 w-32 bg-gray-200 rounded"></div>
                <div className="h-48 w-full bg-gray-200 rounded-xl"></div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="h-64 bg-gray-200 rounded-xl"></div>
                    <div className="h-64 bg-gray-200 rounded-xl"></div>
                    <div className="h-64 bg-gray-200 rounded-xl"></div>
                </div>
            </div>
        }>
            <UserProfileClient />
        </Suspense>
    );
}
