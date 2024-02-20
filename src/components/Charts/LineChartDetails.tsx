import React from 'react';
import { ResponsiveLine } from '@nivo/line';

const LineChartDetails: React.FC<any> = (props: any) => {
  let { data } = props;

  return (
    <>
      <ResponsiveLine
        data={data}
        margin={{ top: 0, right: 10, bottom: 50, left: 10 }}
        xScale={{ type: 'linear', min: 0, max: 'auto' }}
        yScale={{
          type: 'linear',
          min: 0,
          max: 'auto',
          stacked: false,
          reverse: false,
        }}
        curve="monotoneX"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        axisLeft={{
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
        }}
        enableArea={true} // Enable shadows
        lineWidth={2}
        colors={{ scheme: 'category10' }}
        pointSize={10}
        pointColor={{ theme: 'background' }}
        pointBorderWidth={2}
        pointBorderColor={{ from: 'serieColor' }}
        enableGridX={false}
        enableGridY={false}
      />
    </>
  );
};

export default LineChartDetails;
