import React from 'react';

export default function DashboardPage() {
    return (
        <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6 tracking-tight">Dashboard Overview</h1>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <p className="text-gray-500">
                    Welcome to your dashboard. This area will contain your overview metrics and charts.
                </p>
            </div>
        </div>
    );
}
