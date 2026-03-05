'use client';

import React from 'react';
import { Modal, Descriptions, Tag } from 'antd';
import StatusChip from '@/components/Table/StatusChip';
import UserAvatar from '@/components/Avatar/UserAvatar';

import { Users } from '@/interface/user';

interface ViewUserDialogProps {
    visible: boolean;
    onClose: () => void;
    user: Users | null;
}

export default function ViewUserDialog({ visible, onClose, user }: ViewUserDialogProps) {
    if (!user) return null;

    return (
        <Modal
            title="User Details"
            open={visible}
            onCancel={onClose}
            footer={null}
            centered
            width={{
                xs: '80%',
                sm: '70%',
                md: '60%',
                lg: '50%',
                xl: '40%',
                xxl: '30%',
            }}
            styles={{ body: { paddingTop: '20px' } }}
        >
            <div className="flex flex-col items-center mb-8">
                <UserAvatar
                    src={user.GAvatar}
                    domainAccount={user.DomainAccount}
                    name={user.AccountName}
                    size={84}
                    className="shadow-sm border-2 border-white"
                />
                <h2 className="text-xl mt-2 font-bold text-gray-900">{user.AccountName}</h2>
                <div className="flex items-center gap-2 text-gray-500">
                    <span>{user.Email}</span>
                    {user.DomainAccount && (
                        <>
                            <span className="w-1 h-1 bg-gray-300 rounded-full"></span>
                            <span className="font-medium">{user.DomainAccount}</span>
                        </>
                    )}
                </div>
            </div>

            <Descriptions column={1} bordered size="small">
                <Descriptions.Item label="Account ID">
                    <span className="font-medium text-gray-700">{user.AccountID}</span>
                </Descriptions.Item>
                <Descriptions.Item label="Nickname">
                    <span className="font-medium text-gray-700">{user.Nickname || 'N/A'}</span>
                </Descriptions.Item>
                <Descriptions.Item label="Account Group">
                    <span className="font-medium text-gray-700">{user.AccountGroup}</span>
                </Descriptions.Item>
                <Descriptions.Item label="Account Type">
                    <Tag color="blue" className="rounded-full px-3">{user.AccountType}</Tag>
                </Descriptions.Item>
                <Descriptions.Item label="Valid To">
                    <span className="font-medium text-gray-700">
                        {user.ValidTo ? new Date(user.ValidTo).toLocaleDateString() : 'N/A'}
                    </span>
                </Descriptions.Item>
                <Descriptions.Item label="Status">
                    <StatusChip status={user.isActive} />
                </Descriptions.Item>
            </Descriptions>
        </Modal>
    );
}
