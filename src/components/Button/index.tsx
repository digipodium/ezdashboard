import React from 'react';
import clsx from 'clsx';

interface ButtonProps {
  onClick?: () => void;
  color?: 'primary'|'success'|'warning'|'danger'|'info'|'dark'|'light';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'default' | 'filled' | 'light' | 'outline' | 'subtle' | 'transparent' | 'white';
  disabled?: boolean;
  children?: React.ReactNode;
}

const colorMap: Record<string, string> = {
  primary: 'bg-blue-600 hover:bg-blue-700 text-white border-blue-600',
  success: 'bg-green-600 hover:bg-green-700 text-white border-green-600',
  warning: 'bg-yellow-400 hover:bg-yellow-500 text-gray-900 border-yellow-400',
  danger: 'bg-red-600 hover:bg-red-700 text-white border-red-600',
  info: 'bg-sky-500 hover:bg-sky-600 text-white border-sky-500',
  dark: 'bg-gray-800 hover:bg-gray-900 text-white border-gray-800',
  light: 'bg-gray-100 hover:bg-gray-200 text-gray-900 border-gray-100',
};
const sizeMap: Record<string, string> = {
  xs: 'px-2 py-1 text-xs',
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-4 py-2 text-base',
  lg: 'px-5 py-2.5 text-lg',
  xl: 'px-6 py-3 text-xl',
};
const radiusMap: Record<string, string> = {
  xs: 'rounded',
  sm: 'rounded-md',
  md: 'rounded-lg',
  lg: 'rounded-xl',
  xl: 'rounded-2xl',
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  color = 'primary',
  size = 'md',
  radius = 'md',  
  variant = 'default',
  disabled = false,
  children = 'Button',
}) => { 
  let base = 'inline-flex items-center justify-center font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2';
  let colorClass = colorMap[color] || colorMap.primary;
  let sizeClass = sizeMap[size] || sizeMap.md;
  let radiusClass = radiusMap[radius] || radiusMap.md;
  let variantClass = '';

  switch(variant) {
    case 'outline':
      variantClass = `bg-transparent border-2 ${colorClass.replace(/bg-[^ ]+ /, '')}`;
      break;
    case 'light':
      variantClass = `bg-white text-${color}-600 border border-${color}-200 hover:bg-${color}-50`;
      break;
    case 'subtle':
      variantClass = `bg-${color}-50 text-${color}-700 border border-transparent hover:bg-${color}-100`;
      break;
    case 'transparent':
      variantClass = 'bg-transparent border-none shadow-none';
      break;
    case 'white':
      variantClass = 'bg-white text-gray-900 border border-gray-200 hover:bg-gray-100';
      break;
    default:
      variantClass = colorClass + ' border';
  }

  return (
    <button
      type="button"
      className={clsx(base, sizeClass, radiusClass, variantClass, disabled && 'opacity-50 pointer-events-none')}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;