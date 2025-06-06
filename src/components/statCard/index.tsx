// src/components/StatCard/index.tsx
import React, { FC } from 'react'; // Ensure React and FC are imported

// Define the props interface for StatCard
interface StatCardProps {
  value: string | number; // Ensure value has a type
  label: string;
  description?: string; // Optional description
  // Explicitly define the possible color types for better type safety
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'dark' | 'light' | 'white';
  icon?: React.ReactNode;
  trend?: {
    value: number;
    label: string;
    isPositive?: boolean;
  };
}

// Map your color names to actual Tailwind CSS background classes
// This is the correct way to handle dynamic background colors with Tailwind
const colorClassMap: Record<NonNullable<StatCardProps['color']>, string> = {
  primary: 'bg-blue-500',
  secondary: 'bg-gray-500',
  success: 'bg-green-500',
  warning: 'bg-yellow-500',
  danger: 'bg-red-500',
  info: 'bg-sky-500', // Example: using sky-500 for info
  dark: 'bg-gray-800',
  light: 'bg-gray-200',
  white: 'bg-white',
};

// You can define a separate map for text colors if needed,
// or decide on a default text color based on the background.
// For simplicity, we'll assume text is always white for dark backgrounds and dark for light backgrounds.
const textColorMap: Record<NonNullable<StatCardProps['color']>, string> = {
  primary: 'text-white',
  secondary: 'text-white',
  success: 'text-white',
  warning: 'text-white', // You might want text-gray-800 or text-black for warning/light backgrounds
  danger: 'text-white',
  info: 'text-white',
  dark: 'text-white',
  light: 'text-gray-800', // Text color for light backgrounds
  white: 'text-gray-800', // Text color for white background
};

const colorStyles = {
  primary: {
    container: 'bg-blue-50 dark:bg-blue-900/50',
    value: 'text-blue-600 dark:text-blue-400',
    label: 'text-blue-800 dark:text-blue-200',
    description: 'text-blue-700 dark:text-blue-300'
  },
  secondary: {
    container: 'bg-gray-50 dark:bg-gray-900/50',
    value: 'text-gray-600 dark:text-gray-400',
    label: 'text-gray-800 dark:text-gray-200',
    description: 'text-gray-700 dark:text-gray-300'
  },
  success: {
    container: 'bg-green-50 dark:bg-green-900/50',
    value: 'text-green-600 dark:text-green-400',
    label: 'text-green-800 dark:text-green-200',
    description: 'text-green-700 dark:text-green-300'
  },
  warning: {
    container: 'bg-yellow-50 dark:bg-yellow-900/50',
    value: 'text-yellow-600 dark:text-yellow-400',
    label: 'text-yellow-800 dark:text-yellow-200',
    description: 'text-yellow-700 dark:text-yellow-300'
  },
  danger: {
    container: 'bg-red-50 dark:bg-red-900/50',
    value: 'text-red-600 dark:text-red-400',
    label: 'text-red-800 dark:text-red-200',
    description: 'text-red-700 dark:text-red-300'
  },
  info: {
    container: 'bg-sky-50 dark:bg-sky-900/50',
    value: 'text-sky-600 dark:text-sky-400',
    label: 'text-sky-800 dark:text-sky-200',
    description: 'text-sky-700 dark:text-sky-300'
  },
  dark: {
    container: 'bg-gray-800 dark:bg-gray-900',
    value: 'text-white dark:text-gray-100',
    label: 'text-gray-200 dark:text-gray-300',
    description: 'text-gray-300 dark:text-gray-400'
  },
  light: {
    container: 'bg-gray-100 dark:bg-gray-800',
    value: 'text-gray-800 dark:text-gray-200',
    label: 'text-gray-600 dark:text-gray-400',
    description: 'text-gray-500 dark:text-gray-500'
  },
  white: {
    container: 'bg-white dark:bg-gray-800',
    value: 'text-gray-900 dark:text-white',
    label: 'text-gray-600 dark:text-gray-300',
    description: 'text-gray-500 dark:text-gray-400'
  }
};

// Fix: Use React.FC or FC for functional components
const StatCard: FC<StatCardProps> = ({
  value,
  label,
  description,
  color = 'primary',
  icon,
  trend
}) => {
  const styles = colorStyles[color];

  return (
    <div className={`rounded-xl p-6 shadow-sm transition-all duration-200 ${styles.container}`}>
      <div className="flex items-center justify-between">
        <div>
          <p className={`text-sm font-medium ${styles.label}`}>{label}</p>
          <h3 className={`mt-2 text-3xl font-bold ${styles.value}`}>{value}</h3>
          {description && (
            <p className={`mt-1 text-sm ${styles.description}`}>{description}</p>
          )}
        </div>
        {icon && (
          <div className={`rounded-full p-3 ${styles.container}`}>
            {icon}
          </div>
        )}
      </div>
      {trend && (
        <div className="mt-4 flex items-center gap-2">
          <span className={`text-sm font-medium ${trend.isPositive ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}`}>
            {trend.isPositive ? '↑' : '↓'} {trend.value}%
          </span>
          <span className={`text-sm ${styles.description}`}>{trend.label}</span>
        </div>
      )}
    </div>
  );
};

export default StatCard;