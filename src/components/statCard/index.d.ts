import React, { FC } from 'react';
interface StatCardProps {
    value: string | number;
    label: string;
    description?: string;
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'dark' | 'light' | 'white';
    icon?: React.ReactNode;
    trend?: {
        value: number;
        label: string;
        isPositive?: boolean;
    };
}
declare const StatCard: FC<StatCardProps>;
export default StatCard;
