import React from 'react';
interface Data {
    id: string;
    data: {
        x: number;
        y: number;
    }[];
}
declare const ScatterPlot: React.FC<{
    data?: Data[];
}>;
export default ScatterPlot;
