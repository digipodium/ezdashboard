import React from 'react';
import { DashboardData } from '../../types/ContextTypes';
export interface DashboardContentProps {
    data: DashboardData;
}
declare const DashboardContent: React.FC<DashboardContentProps>;
export default DashboardContent;
