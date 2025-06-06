import React from 'react';
import clsx from 'clsx';

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

const tailwindThemeClasses = {
  sizes: {
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl'
  },
  accentcolor: {
    primary: 'text-blue-600',
    secondary: 'text-gray-600',
    success: 'text-green-600',
    warning: 'text-yellow-600',
    danger: 'text-red-600',
    info: 'text-blue-400',
    dark: 'text-gray-800',
    light: 'text-gray-400'
  }
} as const;

const Radio: React.FC<RadioProps> = ({
  options,
  value,
  onChange,
  name,
  size = 'md',
  color = 'primary',
  error
}) => {
  const errorColor = 'text-red-500';

  return (
    <div className="flex flex-col gap-2">
      {options.map((option) => (
        <label
          key={option.value}
          className={clsx(
            'flex items-center gap-2 cursor-pointer',
            tailwindThemeClasses.sizes[size],
            tailwindThemeClasses.accentcolor[color]
          )}
        >
          <input
            type="radio"
            name={name}
            value={option.value}
            checked={value === option.value}
            onChange={() => onChange(option.value)}
            className={clsx(
              'form-radio',
              tailwindThemeClasses.accentcolor[color]
            )}
          />
          <span>{option.label}</span>
          {option.description && <span>{option.description}</span>}
        </label>
      ))}
      {error && <span className={errorColor}>{error}</span>}
    </div>
  );
};

export default Radio;