import React from 'react';
import { Tag } from 'antd';

interface StatusChipProps {
    status: string;
}

export default function StatusChip({ status }: StatusChipProps) {
    return (
        <Tag color={status === 'Active' ? 'green' : 'volcano'} className="rounded-md px-2 border-none font-semibold">
            {status}
        </Tag>
    );
}
