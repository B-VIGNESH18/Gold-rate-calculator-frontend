
// // GoldRate.jsx
// import React, { useEffect, useState } from 'react';
// import { fetchGoldRates } from './api';

// const GoldRate = () => {
//   const [goldRates, setGoldRates] = useState([]);

//   useEffect(() => {
//     const getGoldRates = async () => {
//       try {
//         const data = await fetchGoldRates();
//         setGoldRates(data);
//       } catch (error) {
//         console.error('Error fetching gold rates:', error);
//       }
//     };
//     getGoldRates();
//   }, []);
// // GoldRate.jsx

// // ... existing code

// return (
//   <div>
//     <h2>Gold Rates</h2>
//     <ul>
//       {goldRates.map((rate, index) => (
//         <li key={index}>
//           <p>Date: {rate.date}</p>
//           <p>rate: {rate.rate}</p>
//           {/* Render other details */}
//         </li>
//       ))}
//     </ul>
//   </div>
// );

//   // return (
//   //   <div>
//   //     <h2>Gold Rates</h2>
//   //     {/* Render goldRates data */}
//   //     <ul>
//   //       {goldRates.map((rate, index) => (
//   //         <li key={index}>{/* Display gold rate details */}</li>
//   //       ))}
//   //     </ul>
//   //   </div>
//   // );
// };

// export default GoldRate;
// GoldRates.jsx

import React, { useState, useEffect } from 'react';
import { fetchDataFromAPI } from './api'; // Make sure to import the fetchDataFromAPI function from your api.js file

const GoldRates = () => {
  const [goldData, setGoldData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGoldData = async () => {
      try {
        const data = await fetchDataFromAPI('goldEndpoint'); // Replace 'goldEndpoint' with your actual API endpoint for gold rates
        setGoldData(data);
        setLoading(false);
      } catch (error) {
        setError('Error fetching gold data. Please try again later.');
        setLoading(false);
      }
    };

    fetchGoldData();
  }, []);

  return (
    <div>
      <h1>Gold Rates</h1>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && (
        <ul>
          {goldData.map((entry, index) => (
            <li key={index}>{entry}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default GoldRates;
