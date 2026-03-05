'use client';

import { Users, UserPlus, UsersRound } from 'lucide-react';
import DashboardStatCard from '@/app/dashboard/components/DashboardStatCard';
import DashboardUsersTable from '@/app/dashboard/components/DashboardUsersTable';
import DashboardBanner from '@/app/dashboard/components/DashboardBanner';
import { useUserCount, useAccountGroupStats, useAccountTypeStats } from '@/hooks/useDashboardData';

export default function DashboardPage() {
    const { data: userCount = 0 } = useUserCount();
    const { data: totalGroups = 0 } = useAccountGroupStats();
    const { data: totalTypes = 0 } = useAccountTypeStats();


    return (
        <div className="p-8 max-w-7xl mx-auto w-full">
            <DashboardBanner />

            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900 tracking-tight">Dashboard Overview</h2>
            </div>

            <div className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <DashboardStatCard
                        title="Total Active Users"
                        value={(userCount || 0).toLocaleString()}
                        icon={<Users size={20} />}
                        iconWrapperClassName="bg-blue-50 text-accent-1"
                        subtitle="Active users"
                    />

                    <DashboardStatCard
                        title="Total Account Group"
                        value={(totalGroups || 0).toLocaleString()}
                        icon={<UsersRound size={20} />}
                        iconWrapperClassName="bg-purple-50 text-purple-600"
                        subtitle="Active account groups"
                    />

                    <DashboardStatCard
                        title="Total Account Type"
                        value={(totalTypes || 0).toLocaleString()}
                        icon={<UsersRound size={20} />}
                        iconWrapperClassName="bg-green-50 text-purple-600"
                        subtitle="Active account types"
                    />
                </div>

                <DashboardUsersTable />
            </div>
        </div>
    );
}
