
// import React, { useEffect, useState } from 'react';
// import { fetchGoldRates } from './api';

// const GoldRate = () => {
//   const [goldRates, setGoldRates] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const getGoldRates = async () => {
//       try {
//         const data = await fetchGoldRates();
//         setGoldRates(data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching gold rates:', error);
//         setError('Failed to fetch gold rates');
//         setLoading(false);
//       }
//     };

//     getGoldRates();
//   }, []);

//   if (loading) {
//     return <div>Loading...</div>;
//   }

//   if (error) {
//     return <div>Error: {error}</div>;
//   }

//   return (
//     <div>
//       <h2>Gold Rates</h2>
//       <ul>
//         {goldRates.map((rate, index) => (
//           <li key={index}>
//             <p>Date: {rate.date}</p>
//             <p>rate: {rate.rate}</p>
//             {/* Render other details */}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default GoldRate;
// import React, { useState } from 'react';
// import { fetchGoldRates } from './api';

// const GoldRate = () => {
//   const [goldRates, setGoldRates] = useState([]);
//   const [weight, setWeight] = useState('');
//   const [purity, setPurity] = useState('');
//   const [calculationResult, setCalculationResult] = useState(null);

//   const handleCalculate = async () => {
//     // Validate user input
//     if (!weight || !purity) {
//       // Handle validation error, e.g., show a message to the user
//       setCalculationResult(null);
//       return;
//     }

//     try {
//       // Fetch gold rates (you can modify the fetchGoldRates function to take user input)
//       const data = await fetchGoldRates();
//       setGoldRates(data);

//       // Perform gold rate calculation based on user input
//       const calculatedResult = calculateGoldPrice(data, parseFloat(weight), parseInt(purity, 10));
//       setCalculationResult(calculatedResult);
//     } catch (error) {
//       console.error('Error fetching or calculating gold rates:', error);
//       // Handle error, e.g., show an error message to the user
//       setCalculationResult(null);
//     }
//   };

//   const calculateGoldPrice = (rates, goldWeight, goldPurity) => {
//     // Perform gold rate calculation logic here
//     // This is a basic example, you may need to adjust it based on your requirements
//     const rate = rates.find((r) => r.purity === goldPurity);
//     if (rate) {
//       const price = (goldWeight * rate.rate) / 10; // Assuming rate is per gram, adjust accordingly
//       return price.toFixed(2); // Adjust decimal places as needed
//     } else {
//       // Handle case where rate for the specified purity is not available
//       return 'Rate not available';
//     }
//   };

//   return (
//     <div>
//       <h2>Gold Rate Calculator</h2>
//       <form>
//         <label>
//           Weight of Gold (in grams):
//           <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
//         </label>
//         <br />
//         <label>
//           Purity of Gold (Carats):
//           <input type="number" value={purity} onChange={(e) => setPurity(e.target.value)} />
//         </label>
//         <br />
//         <button type="button" onClick={handleCalculate}>
//           Calculate
//         </button>
//       </form>

//       {calculationResult !== null && (
//         <div>
//           <h3>Calculation Result</h3>
//           <p>Weight: {weight} grams</p>
//           <p>Purity: {purity} Carats</p>
//           <p>Price: ${calculationResult}</p>
//         </div>
//       )}
//     </div>
//   );
// };

// export default GoldRate;
import React, { useState, useEffect } from 'react';
import { fetchGoldRates } from './api';

const GoldRate = () => {
  const [goldRates, setGoldRates] = useState([
    { purity: 20, rate: 1500 },
    { purity: 22, rate: 1600 },
    // ... other rates
  ]);
  const [weight, setWeight] = useState('');
  const [purity, setPurity] = useState('');
  const [calculationResult, setCalculationResult] = useState(null);

  useEffect(() => {
    const fetchRates = async () => {
      try {
        // const data = await fetchGoldRates(); // Use this line if you want to fetch rates dynamically
        // setGoldRates(data);

        // Hardcoding rates for example, remove this if you want to fetch rates dynamically
        setGoldRates([
          { purity: 20, rate: 1500 },
          { purity: 22, rate: 1600 },
          // ... other rates
        ]);
      } catch (error) {
        console.error('Error fetching gold rates:', error);
      }
    };

    fetchRates();
  }, []);

  const handleCalculate = () => {
    // Validate user input
    if (!weight || !purity) {
      // Handle validation error, e.g., show a message to the user
      setCalculationResult(null);
      return;
    }

    // Perform gold rate calculation based on user input
    const calculatedResult = calculateGoldPrice(parseFloat(weight), parseInt(purity, 10));
    setCalculationResult(calculatedResult);
  };

  const calculateGoldPrice = (goldWeight, goldPurity) => {
    // Perform gold rate calculation logic here
    // This is a basic example, you may need to adjust it based on your requirements
    const rate = goldRates.find((r) => r.purity === goldPurity);
    if (rate) {
      const price = (goldWeight * rate.rate) / 10; // Assuming rate is per gram, adjust accordingly
      return price.toFixed(2); // Adjust decimal places as needed
    } else {
      // Handle case where rate for the specified purity is not available
      return 'Rate not available for ' + goldPurity + ' Carats';
    }
  };

  return (
    <div>
      <h2>Gold Rate Calculator</h2>
      <form>
        <label>
          Weight of Gold (in grams):
          <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
        </label>
        <br />
        <label>
          Purity of Gold (Carats):
          <input type="number" value={purity} onChange={(e) => setPurity(e.target.value)} />
        </label>
        <br />
        <button type="button" onClick={handleCalculate}>
          Calculate
        </button>
      </form>

      {calculationResult !== null && (
        <div>
          <h3>Calculation Result</h3>
          <p>Weight: {weight} grams</p>
          <p>Purity: {purity} Carats</p>
          <p>Price: ${calculationResult}</p>
        </div>
      )}
    </div>
  );
};

export default GoldRate;
