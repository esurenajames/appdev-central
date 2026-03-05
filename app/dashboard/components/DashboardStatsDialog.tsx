import React from 'react';
import { Modal } from 'antd';
import { UsersRound } from 'lucide-react';
import StatusChip from '@/components/Table/StatusChip';

interface DashboardStatsDialogProps {
    visible: boolean;
    onClose: () => void;
    title: string;
    items: string[];
    type: 'group' | 'type';
}

export default function DashboardStatsDialog({ visible, onClose, title, items, type }: DashboardStatsDialogProps) {
    return (
        <Modal
            title={
                <div className="flex items-center gap-3 pr-6">
                    <div className={`p-2 rounded-lg ${type === 'group' ? 'bg-purple-50 text-purple-600' : 'bg-green-50 text-green-600'}`}>
                        <UsersRound size={20} />
                    </div>
                    <span className="text-lg font-bold text-gray-900">{title}</span>
                </div>
            }
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
            className="dashboard-stats-modal"
        >
            <div className="mt-4 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
                {items.length > 0 ? (
                    <div className="flex flex-col">
                        {items.map((item, index) => (
                            <div
                                key={index}
                                className="flex items-center justify-between w-full py-3 px-3 hover:bg-gray-50 rounded-xl transition-colors mb-1 border border-transparent hover:border-gray-100"
                            >
                                <span className="font-semibold text-gray-700 tracking-tight">{item}</span>
                                <StatusChip status={true} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="py-12 flex flex-col items-center justify-center text-gray-400">
                        <UsersRound size={40} className="mb-2 opacity-20" />
                        <p className="font-medium">No records found</p>
                    </div>
                )}
            </div>
        </Modal>
    );
}
