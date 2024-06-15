import React from 'react';
import { tailwindThemeClasses, cssColors } from '../../themes/themes';
import clsx from 'clsx';

interface ButtonProps {
  onClick?: () => void;
  color?: 'primary'|'success'|'warning'|'danger'|'info'|'dark'|'light'|undefined;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'|undefined;
  radius?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'|undefined;
  variant?: 'default' | 'filled' | 'light' | 'outline' | 'subtle' | 'transparent' | 'white'|undefined;
}

const Button: React.FC<ButtonProps> = ({
  onClick,
  color = 'primary',
  size = 'md',
  radius = 'md',  
  variant = 'default',
}) => { 
  let colorClass = cssColors.colors[color];
  let paddingClass = tailwindThemeClasses.padding[size];
  let radiusClass = tailwindThemeClasses.radius[radius];
  let variantClass = {};

  switch(variant) {
    case 'default':
      variantClass = `${cssColors.colors[color]} text-white`;
      break;
    case 'filled':
      // variantClass = `background-color: ${cssColors.colors[color]}; color: white;`;
      break;
    case 'light':
    case 'outline':
      variantClass = `border-color: ${cssColors.colors[color]};`;
      break;
    case 'subtle':
    case 'transparent':
      variantClass = `hover:background-color: ${cssColors.colors[color]};`;
      break;
    default:
      variantClass = 'background-color: white; color: gray; border-color: gray; hover:background-color: gray;';
  }

  return (
    <button
      type="button"
      style={{ 
        // padding: sizeClass, 
        // borderRadius: radiusClass, 
        border: `${variant === 'outline' ? `1px solid ${cssColors.colors[color]}` : '' }`,
        color: `${variant === 'filled' ? 'white' : cssColors.colors[color] }`,
        backgroundColor: `${variant === 'filled' ? cssColors.colors[color] : '' }`
      }}
      className={clsx(variantClass, paddingClass, radiusClass )}
      onClick={onClick}
    >
      Button
    </button>
  );
};

export default Button;