// src/types/ContextTypes.ts

import React from 'react'; // This import is necessary for React.Dispatch and React.SetStateAction

export interface User {
  id: string;
  name: string;
  email: string;
  // Add any other properties your user object might have
  // e.g., role?: string;
  // e.g., accessToken?: string;
}

export interface AppDashboardInterface {
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>; // Correct type for setter function
  loggedIn: boolean;
  setLoggedIn: React.Dispatch<React.SetStateAction<boolean>>; // Correct type for setter function
  logout: () => void; // Function that takes no arguments and returns nothing
  authenticate: (user: User | null) => void; // Function that takes a User or null and returns nothing
}

// --- ADD THIS INTERFACE HERE ---
// This interface defines the structure for your dashboard's data,
// which is used by Dashboard and DashboardContent components.
export interface DashboardData {
  title?: string;
  description?: string;
  lineChartData: any[]; // Assuming it's an array of objects
  barChartData: any[]; // Assuming it's an array of objects
  pieChartData: any[]; // <-- array, not object with data property
  heatMapData: any[]; // Assuming it's an array of objects
  calendarData: any[]; // Often an object with a data array, check Nivo's expected type
  scatterPlotData: any[]; // Assuming it's an array of objects
  bumpData: any[]; // Assuming it's an array of objects
  radialBarData: any[]; // Assuming it's an array of objects
  choroplethData: any[]; // <-- array, not object with data property

  // Add any other data properties that your Dashboard or DashboardContent components
  // expect to receive, such as for the Table, Stepper, Radio, Checkbox, etc.
  tableData?: any[];
  tableHeadings?: string[];
  tableUniqueKeyField?: string;
  stepsData?: any[];
  radioOptions?: any[];
  checkboxOptions?: any[];
}