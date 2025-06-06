import React, { FC } from 'react';
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
declare const Links: FC<LinksProps>;
export default Links;
