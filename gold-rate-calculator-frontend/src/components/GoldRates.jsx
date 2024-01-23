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
// }
// export default GoldRate;
// import React, { useState, useEffect } from 'react';
// import { fetchGoldRates } from './api'; // Replace with your actual API function

// const GoldRates = () => {
//   const [goldData, setGoldData] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const data = await fetchGoldRates(); // Use your API function
//         setGoldData(data);
//         setLoading(false);
//       } catch (error) {
//         setError('Error fetching gold data. Please try again.');
//         setLoading(false);
//       }
//     };

//     fetchData();
//   }, []);

//   return (
//     <div>
//       <h2>Gold Rates</h2>
//       {loading && <p>Loading...</p>}
//       {error && <p style={{ color: 'red' }}>{error}</p>}
//       {goldData.length > 0 && (
//         <ul>
//           {goldData.map((entry) => (
//             <li key={entry.id}>
//               Date: {entry.date}, Rate: {entry.rate}
//             </li>
//           ))}
//         </ul>
//       )}
//     </div>
//   );
// };

// export default GoldRates;
// GoldRate.jsx
import React, { useEffect, useState } from 'react';
import { fetchGoldRates } from './api';

const GoldRate = () => {
  const [goldRates, setGoldRates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getGoldRates = async () => {
      try {
        const data = await fetchGoldRates();
        setGoldRates(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching gold rates:', error);
        setError('Failed to fetch gold rates');
        setLoading(false);
      }
    };

    getGoldRates();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

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
};

export default GoldRate;
