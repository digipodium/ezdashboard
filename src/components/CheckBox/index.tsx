import React from 'react';
import { cssColors,tailwindThemeClasses } from '../../themes/themes';
import clsx from 'clsx';

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
  let colorClass = cssColors.colors[color];
  let sizeClass = tailwindThemeClasses.sizes[size];
  let radiusClass = tailwindThemeClasses.radius[radius];

  return (
    <div className={`w-max ${labelPosition === 'right' ? 'flex flex-col' : 'flex-col-reverse'}`}>
      {options.map((option, index) => (
        <label key={index} className={`block text-gray-700 my-1 flex items-center ${tailwindThemeClasses.textsize[size]}`}>
          <input
            type="checkbox"
            name="Checkbox-example"  
            style={{
              marginRight: '0.5rem',
              borderColor: option.checked ? colorClass : 'gray',
              outline: 'none',
              borderRadius: radiusClass,
              cursor: 'pointer',
              boxShadow: option.checked ? `0 0 0 2px ${colorClass}` : 'none',
            }}
            className={clsx(tailwindThemeClasses.sizes[size], tailwindThemeClasses.accentcolor[color])}
            value={option.value}
            checked={option.checked}
            onChange={() => onChange(option.value)}
          />
          {option.label} {/* Display label for the option */}
          {option.description && <span>{option.description}</span>} {/* Display description if available */}
        </label>
      ))}
      {error && <span className={errorColor}>{error}</span>} {/* Display error message if available */}
    </div>
  );
};

export default Checkbox;