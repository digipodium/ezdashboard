import React, { FC } from 'react';
import clsx from 'clsx';

interface LinksProps {
  href: string;
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
  size?: 'sm' | 'md' | 'lg';
  underline?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  className?: string;
  disabled?: boolean;
  target?: '_blank' | '_self' | '_parent' | '_top';
  rel?: string;
}

const variantStyles = {
  primary: 'text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300',
  secondary: 'text-gray-600 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300',
  success: 'text-green-600 hover:text-green-700 dark:text-green-400 dark:hover:text-green-300',
  warning: 'text-yellow-600 hover:text-yellow-700 dark:text-yellow-400 dark:hover:text-yellow-300',
  danger: 'text-red-600 hover:text-red-700 dark:text-red-400 dark:hover:text-red-300',
  info: 'text-sky-600 hover:text-sky-700 dark:text-sky-400 dark:hover:text-sky-300',
};

const sizeStyles = {
  sm: 'text-sm',
  md: 'text-base',
  lg: 'text-lg',
};

const underlineStyles = {
  none: 'no-underline',
  hover: 'hover:underline',
  always: 'underline',
};

const Links: FC<LinksProps> = ({
  href,
  children,
  variant = 'primary',
  size = 'md',
  underline = true,
  icon,
  iconPosition = 'left',
  className,
  disabled = false,
  target = '_self',
  rel,
}) => {
  const baseStyles = 'inline-flex items-center font-medium transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:focus:ring-offset-gray-900';
  const disabledStyles = 'opacity-50 cursor-not-allowed pointer-events-none';
  const iconSpacing = icon ? (iconPosition === 'left' ? 'ml-1.5' : 'mr-1.5') : '';

  return (
    <a
      href={href}
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        underline ? underlineStyles.hover : underlineStyles.none,
        disabled && disabledStyles,
        className
      )}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : rel}
      aria-disabled={disabled}
    >
      {icon && iconPosition === 'left' && (
        <span className={clsx('inline-flex items-center', iconSpacing)}>
          {icon}
        </span>
      )}
      {children}
      {icon && iconPosition === 'right' && (
        <span className={clsx('inline-flex items-center', iconSpacing)}>
          {icon}
        </span>
      )}
    </a>
  );
};

export default Links;
