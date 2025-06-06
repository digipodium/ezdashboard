import React from 'react';
import clsx from 'clsx';

interface AvatarProps {
  src?: string;
  alt: string;
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  status?: 'online' | 'offline' | 'away' | 'busy';
  initials?: string;
  rounded?: boolean;
  bordered?: boolean;
  color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info';
}

const sizeMap = {
  xs: 'h-6 w-6 text-xs',
  sm: 'h-8 w-8 text-sm',
  md: 'h-10 w-10 text-base',
  lg: 'h-12 w-12 text-lg',
  xl: 'h-16 w-16 text-xl',
};

const statusMap = {
  online: 'bg-green-500',
  offline: 'bg-gray-500',
  away: 'bg-yellow-500',
  busy: 'bg-red-500',
};

const colorMap = {
  primary: 'bg-blue-100 text-blue-600 dark:bg-blue-900/50 dark:text-blue-300',
  secondary: 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-300',
  success: 'bg-green-100 text-green-600 dark:bg-green-900/50 dark:text-green-300',
  warning: 'bg-yellow-100 text-yellow-600 dark:bg-yellow-900/50 dark:text-yellow-300',
  danger: 'bg-red-100 text-red-600 dark:bg-red-900/50 dark:text-red-300',
  info: 'bg-sky-100 text-sky-600 dark:bg-sky-900/50 dark:text-sky-300',
};

const Avatar: React.FC<AvatarProps> = ({
  src,
  alt,
  size = 'md',
  status,
  initials,
  rounded = true,
  bordered = false,
  color = 'primary',
}) => {
  const [imageError, setImageError] = React.useState(false);

  const handleImageError = () => {
    setImageError(true);
  };

  const getInitials = () => {
    if (initials) return initials;
    return alt
      .split(' ')
      .map(word => word[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  return (
    <div className="relative inline-block">
      {src && !imageError ? (
        <img
          src={src}
          alt={alt}
          onError={handleImageError}
          className={clsx(
            sizeMap[size],
            rounded ? 'rounded-full' : 'rounded-lg',
            bordered && 'ring-2 ring-white dark:ring-gray-800',
            'object-cover'
          )}
        />
      ) : (
        <div
          className={clsx(
            sizeMap[size],
            rounded ? 'rounded-full' : 'rounded-lg',
            bordered && 'ring-2 ring-white dark:ring-gray-800',
            colorMap[color],
            'flex items-center justify-center font-semibold'
          )}
        >
          {getInitials()}
        </div>
      )}
      {status && (
        <span
          className={clsx(
            'absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-white dark:ring-gray-800',
            statusMap[status]
          )}
        />
      )}
    </div>
  );
};

export default Avatar;