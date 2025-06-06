import React from 'react';

interface CheckboxProps {
  options: { label: string; value: string; checked?: boolean; description?: string }[];
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

const sizeMap: Record<string, string> = {
  xs: 'h-3 w-3',
  sm: 'h-4 w-4',
  md: 'h-5 w-5',
  lg: 'h-6 w-6',
  xl: 'h-7 w-7',
};
const radiusMap: Record<string, string> = {
  none: 'rounded-none',
  xs: 'rounded',
  sm: 'rounded-md',
  md: 'rounded-lg',
  lg: 'rounded-xl',
  xl: 'rounded-2xl',
};
const colorMap: Record<string, string> = {
  primary: 'text-blue-600 focus:ring-blue-500',
  secondary: 'text-gray-600 focus:ring-gray-500',
  success: 'text-green-600 focus:ring-green-500',
  warning: 'text-yellow-500 focus:ring-yellow-400',
  danger: 'text-red-600 focus:ring-red-500',
  info: 'text-sky-500 focus:ring-sky-400',
  dark: 'text-gray-800 focus:ring-gray-800',
  light: 'text-gray-200 focus:ring-gray-200',
};

const Checkbox: React.FC<CheckboxProps> = ({
  options,
  onChange,
  labelPosition = 'right',
  description,
  error,
  errorColor = 'text-red-500',
  size = 'md',
  color = 'primary',
  radius = 'md',
}) => {
  return (
    <div className={`w-max ${labelPosition === 'right' ? 'flex flex-col' : 'flex-col-reverse'}`}>
      {options.map((option, index) => (
        <label key={index} className={`block text-gray-700 my-1 flex items-center gap-2`}>
          <input
            type="checkbox"
            name="Checkbox-example"
            className={`form-checkbox ${sizeMap[size]} ${radiusMap[radius]} ${colorMap[color]} border-gray-300 focus:ring-2`}
            value={option.value}
            checked={option.checked}
            onChange={() => onChange(option.value)}
          />
          {option.label}
          {option.description && <span className="ml-2 text-gray-500 text-xs">{option.description}</span>}
        </label>
      ))}
      {error && <span className={errorColor}>{error}</span>}
    </div>
  );
};

export default Checkbox;