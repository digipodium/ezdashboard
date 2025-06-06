// src/components/Dashboard/DashboardContent.tsx
import React from 'react';
import { DashboardData } from '../../types/ContextTypes';
import {
  Bump,
  Checkbox,
  HeatMap,
  LineChart, PieChart,
  RadialBar,
  Radio,
  ScatterPlot,
  Stepper,
  Table
} from '../index';

export interface DashboardContentProps {
  data: DashboardData;
}

const DashboardContent: React.FC<DashboardContentProps> = ({ data }) => {
  const { 
    lineChartData, barChartData, pieChartData, heatMapData, bumpData, radialBarData, scatterPlotData,
    tableData, tableHeadings, tableUniqueKeyField, stepsData, radioOptions, checkboxOptions,
    calendarData, choroplethData
  } = data;

  return (
    <div className="dashboard-content">
      {lineChartData && <LineChart key="line-chart" data={lineChartData} />}
      {pieChartData && <PieChart key="pie-chart" data={pieChartData} />}
      {heatMapData && <HeatMap key="heat-map" data={heatMapData} />}
      {bumpData && <Bump key="bump" data={bumpData} />}
      {radialBarData && <RadialBar key="radial-bar" data={radialBarData} />}
      {scatterPlotData && <ScatterPlot key="scatter-plot" data={scatterPlotData} />}
      {tableData && <Table key="table" data={tableData} headings={tableHeadings || []} uniqueKeyField={tableUniqueKeyField || 'id'} />}
      {stepsData && <Stepper key="stepper" steps={stepsData} />}
      {radioOptions && <Radio key="radio" options={radioOptions} value={radioOptions[0]?.value || ''} onChange={() => {}} name="radio" />}
      {checkboxOptions && <Checkbox key="checkbox" options={checkboxOptions} onChange={() => {}} />}
      {/* Add Calendar and ChoroplethMap if needed */}
      {/* <ChoroplethMap data={choroplethData || []} /> */}
    </div>
  );
};

export default DashboardContent;