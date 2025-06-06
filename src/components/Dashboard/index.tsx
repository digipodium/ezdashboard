// src/components/Dashboard/index.tsx
// This file acts as your main data source and renders the Dashboard component.

import React from 'react';
// Adjust the import path for your Dashboard component based on your actual file structure.
// If Dashboard.tsx is in the same folder, './Dashboard' is correct.
import Dashboard from './Dashboard';

const App: React.FC = () => {
  // THIS IS THE CRITICAL PART: WHERE YOU DEFINE actualDashboardData
  const actualDashboardData = {
    lineChartData: [
      { id: "Cars", data: [{ x: "Jan", y: 15 }, { x: "Feb", y: 22 }] },
      { id: "Bikes", data: [{ x: "Jan", y: 10 }, { x: "Feb", y: 18 }] },
    ],
    barChartData: [
      { country: "USA", "hot dog": 100, "burger": 50, "sandwich": 75 },
      { country: "Canada", "hot dog": 80, "burger": 60, "sandwich": 90 },
    ],
    pieChartData: [
      { id: "React", label: "React", value: 300 },
      { id: "Angular", label: "Angular", value: 200 },
    ],
    heatMapData: [
      { id: "A", data: [{ x: "Alpha", y: 10 }, { x: "Beta", y: 20 }] },
      { id: "B", data: [{ x: "Alpha", y: 15 }, { x: "Beta", y: 25 }] },
    ],
    calendarData: [
      { value: 10, day: "2023-01-01" },
      { value: 15, day: "2023-01-02" },
    ],
    scatterPlotData: [
      { id: "Group 1", data: [{ x: 10, y: 20 }, { x: 30, y: 40 }] },
      { id: "Group 2", data: [{ x: 50, y: 60 }, { x: 70, y: 80 }] },
    ],
    bumpData: [
      { id: "Team A", data: [{ x: 1, y: 5 }, { x: 2, y: 4 }] },
      { id: "Team B", data: [{ x: 1, y: 2 }, { x: 2, y: 3 }] },
    ],
    radialBarData: [
      { id: "January", data: [{ x: "Sales", y: 80 }] },
      { id: "February", data: [{ x: "Sales", y: 95 }] },
    ],
    choroplethData: [
      { id: "USA", value: 50 },
      { id: "CAN", value: 30 },
    ],
    tableData: [
      { id: 1, name: "Apple", price: 1.25 },
      { id: 2, name: "Banana", price: 0.75 },
      { id: 3, name: "JD", price: 250 },
    ],
    tableHeadings: ["id", "name", "price"],
    tableUniqueKeyField: "id",
    stepsData: [
      { title: 'Step 1', subtitle: 'Step 1 subtitle'},
      { title: 'Step 2', subtitle: 'Step 2 subtitle'},
      { title: 'Step 3', subtitle: 'Step 3 subtitle'}
    ],
    radioOptions: [
      { label: 'Option 1', value: 'Option 1' },
      { label: 'Option 2', value: 'Option 2' },
      { label: 'Option 3', value: 'Option 3' }
    ],
    checkboxOptions: [
      { label: 'Option 1', value: 'Option 1' },
      { label: 'Option 2', value: 'Option 2' },
      { label: 'Option 3', value: 'Option 3' }
    ]
  };

  return <Dashboard data={actualDashboardData} />;
};

export default App;