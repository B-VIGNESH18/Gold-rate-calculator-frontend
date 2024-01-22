
// ChartComponent.jsx

// import React, { useState, useEffect } from 'react';

// const ChartComponent = () => {
//   const [chartData, setChartData] = useState(null);

//   useEffect(() => {
//     // Fetch chart data from your backend API
//     fetch('https://b-vignesh-gold-rate-calculator-backend.onrender.com/chart-data')
//       .then((response) => response.json())
//       .then((data) => setChartData(data))
//       .catch((error) => console.error('Error fetching chart data:', error));
//   }, []);

//   if (!chartData || !chartData.labels || !chartData.dataPoints) {
//     return <div>No data available</div>;
//   }

//   const { labels, dataPoints } = chartData;

//   return (
//     <div>
//       <h2>Chart Data</h2>
//       <ul>
//         {labels.map((label, index) => (
//           <li key={index}>
//             {label}: {dataPoints[index]}
//           </li>
//         ))}
//       </ul>
//       {/* Render your chart using the provided data */}
//       {/* For example: <Chart data={chartData} /> */}
//     </div>
//   );
// };

// export default ChartComponent;
// ChartComponent.jsx

import React, { useState, useEffect } from 'react';
import { fetchChartDataFromAPI } from './api'; // Make sure to import the fetchChartDataFromAPI function from your api.js file

const ChartComponent = () => {
  const [chartData, setChartData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const data = await fetchChartDataFromAPI('chartEndpoint'); // Replace 'chartEndpoint' with your actual API endpoint for chart data
        setChartData(data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching chart data. Please try again later.');
        setLoading(false);
      }
    };

    fetchChartData();
  }, []);

  return (
    <div>
      <h1>Chart Component</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <div>
          {/* Render your chart using chartData here */}
        </div>
      )}
    </div>
  );
};

export default ChartComponent;
