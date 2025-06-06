import React from 'react';
interface RadioOption {
    label: string;
    value: string;
    description?: string;
}
interface RadioProps {
    options: RadioOption[];
    value: string;
    onChange: (value: string) => void;
    name: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'dark' | 'light';
    error?: string;
}
declare const Radio: React.FC<RadioProps>;
export default Radio;
