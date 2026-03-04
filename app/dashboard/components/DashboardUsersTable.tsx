'use client';

import React from 'react';
import { Table, Avatar } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { UserOutlined } from '@ant-design/icons';
import StatusChip from '@/components/Table/StatusChip';

interface UserData {
    key: string;
    accountId: string;
    name: string;
    email: string;
    accountGroup: string;
    accountType: string;
    status: string;
}

const mockNewUsers: UserData[] = [
    { key: '1', accountId: 'ACC-001', name: 'Eleanor Pena', email: 'eleanor@example.com', accountGroup: 'Management', accountType: 'Admin', status: 'Active' },
    { key: '2', accountId: 'ACC-002', name: 'Albert Flores', email: 'albert@example.com', accountGroup: 'Operations', accountType: 'Standard', status: 'Active' },
    { key: '3', accountId: 'ACC-003', name: 'Wade Warren', email: 'wade@example.com', accountGroup: 'Finance', accountType: 'Editor', status: 'Inactive' },
    { key: '4', accountId: 'ACC-004', name: 'Esther Howard', email: 'esther@example.com', accountGroup: 'Marketing', accountType: 'Standard', status: 'Active' },
    { key: '5', accountId: 'ACC-005', name: 'Cameron Williamson', email: 'cameron@example.com', accountGroup: 'Engineering', accountType: 'Standard', status: 'Active' },
    { key: '6', accountId: 'ACC-006', name: 'Brooklyn Simmons', email: 'brooklyn@example.com', accountGroup: 'IT Support', accountType: 'Admin', status: 'Active' },
    { key: '7', accountId: 'ACC-007', name: 'Leslie Alexander', email: 'leslie@example.com', accountGroup: 'HR', accountType: 'Editor', status: 'Inactive' },
    { key: '8', accountId: 'ACC-008', name: 'Jenny Wilson', email: 'jenny@example.com', accountGroup: 'Engineering', accountType: 'Standard', status: 'Active' },
    { key: '9', accountId: 'ACC-009', name: 'Guy Hawkins', email: 'guy@example.com', accountGroup: 'Marketing', accountType: 'Standard', status: 'Active' },
    { key: '10', accountId: 'ACC-010', name: 'Robert Fox', email: 'robert@example.com', accountGroup: 'Finance', accountType: 'Editor', status: 'Active' },
];

const columns: ColumnsType<UserData> = [
    {
        title: 'Account ID',
        dataIndex: 'accountId',
        key: 'accountId',
        render: (text) => <span className="text-gray-500 font-medium">{text}</span>
    },
    {
        title: 'User',
        dataIndex: 'name',
        key: 'name',
        render: (text, record) => (
            <div className="flex items-center gap-3">
                <Avatar className="bg-primary text-white font-semibold flex-shrink-0">
                    {text.charAt(0)}
                </Avatar>
                <div className="flex flex-col">
                    <span className="font-semibold text-gray-900 whitespace-nowrap">{text}</span>
                    <span className="text-xs text-gray-500">{record.email}</span>
                </div>
            </div>
        )
    },
    {
        title: 'Account Group',
        dataIndex: 'accountGroup',
        key: 'accountGroup',
        render: (text) => <span className="text-gray-600 font-medium">{text}</span>
    },
    {
        title: 'Account Type',
        dataIndex: 'accountType',
        key: 'accountType',
        render: (type) => <span className="text-gray-600 font-medium">{type}</span>
    },
    {
        title: 'Status',
        dataIndex: 'status',
        key: 'status',
        render: (status) => <StatusChip status={status} />
    }
];

export default function NewestUsersTable() {
    return (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="px-6 py-5 border-b border-gray-100">
                <h3 className="text-lg font-bold text-gray-900 tracking-tight">Newest Users</h3>
                <p className="text-sm text-gray-500 mt-1">Overview of the last 10 users joined</p>
            </div>
            <Table
                columns={columns}
                dataSource={mockNewUsers}
                pagination={false}
                className="w-full"
                rowClassName="hover:bg-gray-50 transition-colors"
            />
        </div>
    );
}
