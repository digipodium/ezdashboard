// src/components/LineChart/index.tsx (This file is already correct)
import { ResponsiveLine } from '@nivo/line'
import React from 'react'

interface Data {
    id: string;
    color: string;
    data: {
        x: string; // Your x-axis values are strings (e.g., dates, categories)
        y: number // Your y-axis values are numbers
    }[];
}

const LineChart = ({ data }: { data: Data[] }) => (
    <ResponsiveLine
        data={data}

        margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
        xScale={{ type: 'point' }} // Use 'point' for categorical x-axis values (strings)
        yScale={{
            type: 'linear',
            min: 'auto',
            max: 'auto',
            stacked: false, // Set to false unless you want stacked lines
            reverse: false
        }}
        yFormat=" >-.2f" // Formats y-axis values
        axisTop={null}
        axisRight={null}
        axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'transportation', // Label for the x-axis
            legendOffset: 36,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: 'count', // Label for the y-axis
            legendOffset: -40,
            legendPosition: 'middle',
            truncateTickAt: 0
        }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        pointLabelYOffset={-12}
        enableCrosshair={true}
        useMesh={true}
        legends={[
            {
                anchor: 'bottom-right',
                direction: 'column',
                justify: false,
                translateX: 100,
                translateY: 0,
                itemsSpacing: 0,
                itemDirection: 'left-to-right',
                itemWidth: 80,
                itemHeight: 20,
                itemOpacity: 0.75,
                symbolSize: 12,
                symbolShape: 'circle',
                symbolBorderColor: 'rgba(0, 0, 0, .5)',
                effects: [
                    {
                        on: 'hover',
                        style: {
                            itemBackground: 'rgba(0, 0, 0, .03)',
                            itemOpacity: 1
                        }
                    }
                ]
            }
        ]}
    />
);

export default LineChart;