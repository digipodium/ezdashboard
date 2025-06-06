import React from 'react';
interface CheckboxProps {
    options: {
        label: string;
        value: string;
        checked?: boolean;
        description?: string;
    }[];
    onChange: (value: string) => void;
    labelPosition?: 'left' | 'right';
    description?: string;
    error?: string;
    errorColor?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'dark' | 'light';
    variant?: 'filled' | 'outline';
    radius?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}
declare const Checkbox: React.FC<CheckboxProps>;
export default Checkbox;
