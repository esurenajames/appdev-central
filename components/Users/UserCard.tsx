'use client';

import React from 'react';
import UserAvatar from '@/components/Avatar/UserAvatar';
import { X } from 'lucide-react';
import { Users } from '@/interface/user';
import { Manager } from '@/hooks/user-assignments/useUserAssignments';

interface UserCardProps {
    user: Users | Manager;
    onRemove?: (userId: number) => void;
    className?: string;
    isRemovable?: boolean;
}

export default function UserCard({ user, onRemove, className = '', isRemovable = false }: UserCardProps) {
    const userId = 'AccountID' in user ? user.AccountID : 0;
    const name = 'AccountName' in user ? user.AccountName : '';
    const email = 'Email' in user ? user.Email : '';
    const avatar = 'GAvatar' in user ? user.GAvatar : null;

    return (
        <div className={`flex items-center justify-between p-3 bg-white border border-gray-100 rounded-xl shadow-sm transition-all hover:border-primary/20 hover:shadow-md ${className}`}>
            <div className="flex items-center gap-3">
                <UserAvatar
                    size={40}
                    src={avatar}
                    name={name}
                />
                <div className="flex flex-col">
                    <span className="text-sm font-bold text-gray-900 leading-tight">{name}</span>
                    <span className="text-[11px] text-gray-400 font-medium leading-tight mt-0.5">{email}</span>
                </div>
            </div>

            {isRemovable && onRemove && (
                <button
                    onClick={() => onRemove(userId)}
                    className="p-1.5 rounded-full hover:bg-red-50 text-gray-300 hover:text-red-500 transition-colors"
                    aria-label="Remove user"
                >
                    <X size={16} />
                </button>
            )}
        </div>
    );
}
