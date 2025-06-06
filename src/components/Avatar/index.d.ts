import React from 'react';
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
declare const Avatar: React.FC<AvatarProps>;
export default Avatar;
