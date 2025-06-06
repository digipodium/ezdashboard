import { ReactNode, FC } from 'react';
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
declare const Stepper: FC<StepperProps>;
export default Stepper;
