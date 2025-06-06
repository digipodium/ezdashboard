import React from 'react';
interface TextInputProps {
    label?: string;
    description?: string;
    error?: string;
    errorColor?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'dark' | 'light';
    placeholder?: string;
    disabled?: boolean;
    radius?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    textcolor?: 'light' | 'dark';
    textsize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}
declare const TextInput: React.FC<TextInputProps>;
export default TextInput;
