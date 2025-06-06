import { FC } from 'react';
interface ProgressBarProps {
    label?: string;
    value: number;
    radius?: 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    color?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger' | 'info' | 'dark' | 'light';
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
    showValue?: boolean;
    animated?: boolean;
}
declare const ProgressBar: FC<ProgressBarProps>;
export default ProgressBar;
