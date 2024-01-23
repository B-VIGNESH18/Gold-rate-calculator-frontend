
// // ChartComponent.jsx

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
// import React, { useState, useEffect } from 'react';
// import { fetchChartData } from './api'; // Replace with your actual API function

// const ChartComponent = () => {
//   const [chartData, setChartData] = useState({});
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchChartData(); // Use your API function
//         setChartData(data);
//         setLoading(false);
//       } catch (error) {
//         setError('Error fetching chart data. Please try again.');
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h2>Chart Component</h2>
//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {/* Render your chart using chartData */}
//     </div>
//   );
// };

// export default ChartComponent;
// ChartComponent.jsx
import React, { useState, useEffect } from 'react';

const ChartComponent = () => {
  const [chartData, setChartData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch chart data from your backend API
    fetch('https://b-vignesh-gold-rate-calculator-backend.onrender.com/chart-data')
      .then((response) => response.json())
      .then((data) => {
        setChartData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching chart data:', error);
        setError('Failed to fetch chart data');
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
