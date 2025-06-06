// src/components/Stepper/index.tsx
import React, { ReactNode, FC } from 'react';
import clsx from 'clsx';

interface StepData {
  icon?: ReactNode;
  title: string;
  subtitle?: string;
  content: ReactNode;
  status?: 'upcoming' | 'active' | 'completed';
}

interface StepperProps {
  steps: StepData[];
  currentStep?: number;
  orientation?: 'horizontal' | 'vertical';
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
}

const sizeMap = {
  sm: {
    container: 'gap-2',
    icon: 'h-6 w-6 text-xs',
    title: 'text-sm',
    subtitle: 'text-xs',
    line: 'h-0.5',
  },
  md: {
    container: 'gap-4',
    icon: 'h-8 w-8 text-sm',
    title: 'text-base',
    subtitle: 'text-sm',
    line: 'h-0.5',
  },
  lg: {
    container: 'gap-6',
    icon: 'h-10 w-10 text-base',
    title: 'text-lg',
    subtitle: 'text-base',
    line: 'h-1',
  },
};

const colorMap = {
  primary: {
    active: 'bg-blue-600 text-white',
    completed: 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300',
    upcoming: 'bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500',
    line: 'bg-blue-600',
    lineUpcoming: 'bg-gray-200 dark:bg-gray-700',
  },
  secondary: {
    active: 'bg-gray-600 text-white',
    completed: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300',
    upcoming: 'bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500',
    line: 'bg-gray-600',
    lineUpcoming: 'bg-gray-200 dark:bg-gray-700',
  },
  success: {
    active: 'bg-green-600 text-white',
    completed: 'bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-300',
    upcoming: 'bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500',
    line: 'bg-green-600',
    lineUpcoming: 'bg-gray-200 dark:bg-gray-700',
  },
  warning: {
    active: 'bg-yellow-500 text-white',
    completed: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/50 dark:text-yellow-300',
    upcoming: 'bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500',
    line: 'bg-yellow-500',
    lineUpcoming: 'bg-gray-200 dark:bg-gray-700',
  },
  danger: {
    active: 'bg-red-600 text-white',
    completed: 'bg-red-100 text-red-600 dark:bg-red-900/50 dark:text-red-300',
    upcoming: 'bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500',
    line: 'bg-red-600',
    lineUpcoming: 'bg-gray-200 dark:bg-gray-700',
  },
  info: {
    active: 'bg-sky-500 text-white',
    completed: 'bg-sky-100 text-sky-600 dark:bg-sky-900/50 dark:text-sky-300',
    upcoming: 'bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500',
    line: 'bg-sky-500',
    lineUpcoming: 'bg-gray-200 dark:bg-gray-700',
  },
};

const Stepper: FC<StepperProps> = ({
  steps,
  currentStep = 0,
  orientation = 'horizontal',
  size = 'md',
  color = 'primary',
}) => {
  const styles = sizeMap[size];
  const colors = colorMap[color];

  return (
    <div className={clsx(
      'flex',
      orientation === 'horizontal' ? 'flex-row' : 'flex-col',
      styles.container
    )}>
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isCurrent = index === currentStep;
        const status = isCompleted ? 'completed' : isCurrent ? 'active' : 'upcoming';

        return (
          <div
            key={index}
            className={clsx(
              'flex items-center',
              orientation === 'horizontal' ? 'flex-1' : 'w-full'
            )}
          >
            <div className="flex items-center">
              <div
                className={clsx(
                  'flex items-center justify-center rounded-full font-medium transition-colors duration-200',
                  styles.icon,
                  colors[status]
                )}
              >
                {step.icon || index + 1}
              </div>
              <div className="ml-3">
                <h3 className={clsx('font-medium', styles.title, colors[status])}>
                  {step.title}
                </h3>
                {step.subtitle && (
                  <p className={clsx('text-gray-500 dark:text-gray-400', styles.subtitle)}>
                    {step.subtitle}
                  </p>
                )}
              </div>
            </div>
            {index < steps.length - 1 && (
              <div
                className={clsx(
                  'flex-1',
                  orientation === 'horizontal' ? 'ml-4' : 'ml-8 mt-2',
                  styles.line,
                  isCompleted ? colors.line : colors.lineUpcoming
                )}
              />
            )}
          </div>
        );
      })}
    </div>
  );
};

export default Stepper;