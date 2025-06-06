// src/components/ProgressBar/index.tsx
import React, { FC } from 'react';

interface ProgressBarProps {
  label?: string;
  value: number;
  radius?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'dark' | 'light';
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  showValue?: boolean;
  animated?: boolean;
}

const sizeMap = {
  xs: 'h-1',
  sm: 'h-1.5',
  md: 'h-2',
  lg: 'h-3',
  xl: 'h-4',
};

const radiusMap = {
  none: 'rounded-none',
  xs: 'rounded',
  sm: 'rounded-md',
  md: 'rounded-lg',
  lg: 'rounded-xl',
  xl: 'rounded-2xl',
};

const colorMap = {
  primary: {
    bg: 'bg-blue-600',
    text: 'text-blue-600',
    label: 'text-blue-700',
    track: 'bg-blue-100 dark:bg-blue-900/30',
  },
  secondary: {
    bg: 'bg-gray-600',
    text: 'text-gray-600',
    label: 'text-gray-700',
    track: 'bg-gray-100 dark:bg-gray-900/30',
  },
  success: {
    bg: 'bg-green-600',
    text: 'text-green-600',
    label: 'text-green-700',
    track: 'bg-green-100 dark:bg-green-900/30',
  },
  warning: {
    bg: 'bg-yellow-500',
    text: 'text-yellow-500',
    label: 'text-yellow-600',
    track: 'bg-yellow-100 dark:bg-yellow-900/30',
  },
  danger: {
    bg: 'bg-red-600',
    text: 'text-red-600',
    label: 'text-red-700',
    track: 'bg-red-100 dark:bg-red-900/30',
  },
  info: {
    bg: 'bg-sky-500',
    text: 'text-sky-500',
    label: 'text-sky-600',
    track: 'bg-sky-100 dark:bg-sky-900/30',
  },
  dark: {
    bg: 'bg-gray-800',
    text: 'text-gray-800',
    label: 'text-gray-900',
    track: 'bg-gray-200 dark:bg-gray-800/30',
  },
  light: {
    bg: 'bg-gray-200',
    text: 'text-gray-600',
    label: 'text-gray-700',
    track: 'bg-gray-100 dark:bg-gray-900/30',
  },
};

const ProgressBar: FC<ProgressBarProps> = ({
  label = "Progress",
  value = 0,
  radius = 'md',
  color = 'primary',
  size = 'md',
  showValue = true,
  animated = true,
}) => {
  const progressValue = Math.min(Math.max(value, 0), 100);
  const styles = colorMap[color];

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-2">
        <span className={`text-sm font-medium ${styles.label} dark:text-gray-200`}>
          {label}
        </span>
        {showValue && (
          <span className={`text-sm font-medium ${styles.text} dark:text-gray-200`}>
            {progressValue}%
          </span>
        )}
      </div>
      <div className={`relative w-full ${sizeMap[size]} ${radiusMap[radius]} ${styles.track} overflow-hidden`}>
        <div
          className={`absolute top-0 left-0 h-full ${styles.bg} ${radiusMap[radius]} ${
            animated ? 'transition-all duration-500 ease-out' : ''
          }`}
          style={{ width: `${progressValue}%` }}
        />
      </div>
    </div>
  );
};

export default ProgressBar;