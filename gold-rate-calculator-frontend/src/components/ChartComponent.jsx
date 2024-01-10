
// ChartComponent.jsx

import React, { useState, useEffect } from 'react';

const ChartComponent = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Fetch chart data from your backend API
    fetch('http://localhost:3000/chart-data')
      .then((response) => response.json())
      .then((data) => setChartData(data))
      .catch((error) => console.error('Error fetching chart data:', error));
  }, []);

  if (!chartData || !chartData.labels || !chartData.dataPoints) {
    return <div>No data available</div>;
  }

  const { labels, dataPoints } = chartData;

  return (
    <div>
      <h2>Chart Data</h2>
      <ul>
        {labels.map((label, index) => (
          <li key={index}>
            {label}: {dataPoints[index]}
          </li>
        ))}
      </ul>
      {/* Render your chart using the provided data */}
      {/* For example: <Chart data={chartData} /> */}
    </div>
  );
};

export default ChartComponent;
