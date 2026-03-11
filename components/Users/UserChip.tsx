'use client';

import React from 'react';
import UserAvatar from '@/components/Avatar/UserAvatar';
import { X } from 'lucide-react';
import { Users } from '@/interface/user';
import { Manager } from '@/hooks/user-assignments/useUserAssignments';

interface UserChipProps {
    user: Users | Manager;
    onRemove?: (userId: number) => void;
    className?: string;
    isRemovable?: boolean;
}

export default function UserChip({ user, onRemove, className = '', isRemovable = false }: UserChipProps) {
    const userId = 'AccountID' in user ? user.AccountID : 0;
    const name = 'AccountName' in user ? user.AccountName : '';
    const avatar = 'GAvatar' in user ? user.GAvatar : null;

    return (
        <div className={`inline-flex items-center gap-2 px-1 py-1 pr-3 bg-background rounded-full border border-border hover:bg-background transition-all group max-w-full ${className}`}>
            <UserAvatar
                size={28}
                src={avatar}
                name={name}
                className="shadow-sm border border-white"
            />
            <span className="text-xs font-bold text-text-info truncate select-none">
                {name}
            </span>

            {isRemovable && onRemove && (
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onRemove(userId);
                    }}
                    className="flex items-center justify-center w-5 h-5 rounded-full bg-background text-text-info hover:bg-red-500 hover:text-white transition-all ml-1"
                    aria-label="Remove"
                >
                    <X size={12} strokeWidth={3} />
                </button>
            )}
        </div>
    );
}
