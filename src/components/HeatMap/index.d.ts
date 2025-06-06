import React from 'react';
interface Data {
    id: string;
    data: {
        x: string;
        y: number;
    }[];
}
declare const HeatMap: React.FC<{
    data?: Data[];
}>;
export default HeatMap;
