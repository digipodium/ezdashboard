import React from 'react';
export interface User {
    id: string;
    name: string;
    email: string;
}
export interface AppDashboardInterface {
    user: User | null;
    setUser: React.Dispatch<React.SetStateAction<User | null>>;
    loggedIn: boolean;
    setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
    logout: () => void;
    authenticate: (user: User | null) => void;
}
export interface DashboardData {
    title?: string;
    description?: string;
    lineChartData: any[];
    barChartData: any[];
    pieChartData: any[];
    heatMapData: any[];
    calendarData: any[];
    scatterPlotData: any[];
    bumpData: any[];
    radialBarData: any[];
    choroplethData: any[];
    tableData?: any[];
    tableHeadings?: string[];
    tableUniqueKeyField?: string;
    stepsData?: any[];
    radioOptions?: any[];
    checkboxOptions?: any[];
}
