// src/components/ScatterPlot/index.tsx
import { ResponsiveScatterPlot } from '@nivo/scatterplot';
import React from 'react';

interface Data {
  id: string;
  data: { x: number; y: number }[];
}

const ScatterPlot: React.FC<{ data?: Data[] }> = ({ data = [] }) => {
  if (!data.length) return <div key="no-data">No data available.</div>;
  return (
    <div style={{ height: 300 }} key="scatter-plot-container">
      <ResponsiveScatterPlot
        data={data}
        margin={{ top: 40, right: 140, bottom: 70, left: 90 }}
        xScale={{ type: 'linear', min: 'auto', max: 'auto' }}
        yScale={{ type: 'linear', min: 'auto', max: 'auto' }}
        blendMode="normal"
        nodeSize={12}
        enableGridX={true}
        enableGridY={true}
        colors={{ scheme: 'category10' }}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'X Axis',
          legendOffset: 36,
          legendPosition: 'middle',
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: 'Y Axis',
          legendOffset: -40,
          legendPosition: 'middle',
        }}
        legends={[
          {
            anchor: 'bottom-right',
            direction: 'column',
            justify: false,
            translateX: 130,
            translateY: 0,
            itemWidth: 100,
            itemHeight: 12,
            itemsSpacing: 5,
            itemDirection: 'left-to-right',
            symbolSize: 12,
            symbolShape: 'circle',
            effects: [
              {
                on: 'hover',
                style: {
                  itemOpacity: 1,
                },
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default ScatterPlot;