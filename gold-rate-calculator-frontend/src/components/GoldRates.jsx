
// GoldRate.jsx
import React, { useEffect, useState } from 'react';
import { fetchGoldRates } from './api';

const GoldRate = () => {
  const [goldRates, setGoldRates] = useState([]);

  useEffect(() => {
    const getGoldRates = async () => {
      try {
        const data = await fetchGoldRates();
        setGoldRates(data);
      } catch (error) {
        console.error('Error fetching gold rates:', error);
      }
    };
    getGoldRates();
  }, []);
// GoldRate.jsx

// ... existing code

return (
  <div>
    <h2>Gold Rates</h2>
    <ul>
      {goldRates.map((rate, index) => (
        <li key={index}>
          <p>Date: {rate.date}</p>
          <p>rate: {rate.rate}</p>
          {/* Render other details */}
        </li>
      ))}
    </ul>
  </div>
);

  // return (
  //   <div>
  //     <h2>Gold Rates</h2>
  //     {/* Render goldRates data */}
  //     <ul>
  //       {goldRates.map((rate, index) => (
  //         <li key={index}>{/* Display gold rate details */}</li>
  //       ))}
  //     </ul>
  //   </div>
  // );
};

export default GoldRate;
