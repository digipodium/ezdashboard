import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
}

const Avatar: React.FC<AvatarProps> = ({ src, alt, size = 'md' }) => {
  let sizeClasses = '';
  switch (size) {
    case 'sm':
      sizeClasses = 'h-8 w-8';
      break;
    case 'md':
      sizeClasses = 'h-12 w-12';
      break;
    case 'lg':
      sizeClasses = 'h-16 w-16';
      break;
    default:
      sizeClasses = 'h-12 w-12';
      break;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={`rounded-full object-cover ${sizeClasses}`}
    />
  );
};

export default Avatar;