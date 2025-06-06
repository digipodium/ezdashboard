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
  textcolor?:'light'|'dark'; 
  textsize?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'; 
}

const sizeMap: Record<string, string> = {
  xs: 'px-2 py-1 text-xs',
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-2.5 text-lg',
  xl: 'px-6 py-3 text-xl',
};
const radiusMap: Record<string, string> = {
  none: 'rounded-none',
  xs: 'rounded',
  sm: 'rounded-md',
  md: 'rounded-lg',
  lg: 'rounded-xl',
  xl: 'rounded-2xl',
};
const textColorMap: Record<string, string> = {
  light: 'text-gray-100',
  dark: 'text-gray-900',
};
const textSizeMap: Record<string, string> = {
  xs: 'text-xs',
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
  xl: 'text-xl',
};

const TextInput: React.FC<TextInputProps> = ({
  label,
  description,
  error,
  errorColor = 'text-red-500',
  size = 'md',
  color = 'primary',
  placeholder = 'This is placeholder',
  disabled = false,
  radius = 'none',
  textcolor = 'dark',
  textsize = 'md',
}) => {
  return (
    <div className="flex flex-col items-start w-full">
      {label && <label className="text-gray-700 font-medium mb-1">{label}</label>}
      {description && <span className="text-gray-500 text-sm mb-1">{description}</span>}
      <input
        type="text"
        className={`border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50 ${sizeMap[size]} ${radiusMap[radius]} ${textColorMap[textcolor]} ${textSizeMap[textsize]} bg-white dark:bg-slate-900 dark:border-gray-700 dark:text-gray-100 ${disabled ? 'opacity-50 pointer-events-none' : ''}`}
        placeholder={placeholder}
        disabled={disabled}
      />
      {error && <span className={`${errorColor} text-sm mt-1`}>{error}</span>}
    </div>
  );
};

export default TextInput; 