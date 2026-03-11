'use client';

import React, { useState } from 'react';
import { Users, UsersRound } from 'lucide-react';
import { useRouter } from 'next/navigation';
import DashboardStatCard from '@/app/dashboard/components/DashboardStatCard';
import DashboardUsersTable from '@/app/dashboard/components/DashboardUsersTable';
import DashboardBanner from '@/app/dashboard/components/DashboardBanner';
import DashboardStatsDialog from '@/app/dashboard/components/DashboardStatsDialog';
import { useUserCount, useAccountGroupStats, useAccountTypeStats } from '@/hooks/dashboard/useDashboardData';

export default function DashboardPage() {
    const router = useRouter();
    const { data: userCount = 0 } = useUserCount();
    const { data: totalGroups } = useAccountGroupStats();
    const { data: totalTypes } = useAccountTypeStats();

    // Dialog state
    const [isDialogVisible, setIsDialogVisible] = useState(false);
    const [dialogData, setDialogData] = useState<{ title: string; items: string[]; type: 'group' | 'type' }>({
        title: '',
        items: [],
        type: 'group'
    });

    const handleOpenGroups = () => {
        if (!totalGroups?.groups) return;
        setDialogData({
            title: 'Account Groups',
            items: totalGroups.groups.map(g => g.AccountGroup),
            type: 'group'
        });
        setIsDialogVisible(true);
    };

    const handleOpenTypes = () => {
        if (!totalTypes?.types) return;
        setDialogData({
            title: 'Account Types',
            items: totalTypes.types.map(t => t.AccountType),
            type: 'type'
        });
        setIsDialogVisible(true);
    };

    return (
        <div className="p-8 max-w-7xl mx-auto w-full">
            <DashboardBanner />

            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-foreground tracking-tight">Dashboard Overview</h2>
            </div>

            <div className="flex flex-col gap-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <DashboardStatCard
                        title="Total Active Users"
                        value={(userCount || 0).toLocaleString()}
                        icon={<Users size={20} />}
                        iconWrapperClassName="bg-blue-500/10 text-blue-500"
                        subtitle="Active users"
                        onClick={() => router.push('/users')}
                    />

                    <DashboardStatCard
                        title="Total Account Group"
                        value={(totalGroups?.count || 0).toLocaleString()}
                        icon={<UsersRound size={20} />}
                        iconWrapperClassName="bg-purple-500/10 text-purple-600"
                        subtitle="Unique account groups"
                        onClick={handleOpenGroups}
                    />

                    <DashboardStatCard
                        title="Total Account Type"
                        value={(totalTypes?.count || 0).toLocaleString()}
                        icon={<UsersRound size={20} />}
                        iconWrapperClassName="bg-green-500/10 text-green-600"
                        subtitle="Unique account types"
                        onClick={handleOpenTypes}
                    />
                </div>

                <DashboardUsersTable />
            </div>

            <DashboardStatsDialog
                visible={isDialogVisible}
                onClose={() => setIsDialogVisible(false)}
                title={dialogData.title}
                items={dialogData.items}
                type={dialogData.type}
            />
        </div>
    );
}
