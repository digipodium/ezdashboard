import React from 'react';
import clsx from 'clsx';
import { tailwindThemeClasses } from '../../themes/themes';
// import './statcard.css';

interface StatCardProps {
    value: number;
    label?: string;
    description?: string;
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'dark' | 'light' | undefined;
}

const StatCard: React.FC<StatCardProps> = ({ value, label, description, color = 'primary' }) => {
    return (
        <div className={clsx('p-8 rounded-xl', color === 'light' ? 'text-black border' : 'text-white' , tailwindThemeClasses.colors[color])}>
            <h1 className='text-5xl font-bold mb-3'>{value}</h1>
            <p className='text-md uppercase font-bold mb-1'>{label}</p>
            <p className='text-sm'>{description}</p>
        </div>
    )
}

export default StatCard;