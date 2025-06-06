import React from 'react';
interface ButtonProps {
    onClick?: () => void;
    color?: 'primary' | 'success' | 'warning' | 'danger' | 'info' | 'dark' | 'light';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    variant?: 'default' | 'filled' | 'light' | 'outline' | 'subtle' | 'transparent' | 'white';
    disabled?: boolean;
    children?: React.ReactNode;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
