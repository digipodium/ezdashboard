import React from 'react';
interface PieDatum {
    id: string;
    label: string;
    value: number;
}
declare const PieChart: React.FC<{
    data?: PieDatum[];
}>;
export default PieChart;
