// api.js
// api.js

export const fetchDataFromAPI = async (endpoint) => {
  // Your fetch logic here
  const response = await fetch(endpoint);
  const data = await response.json();
  return data;
};

export const fetchGoldRates = async () => {
  try {
    const response = await fetch(
      "https://b-vignesh-gold-rate-calculator-backend.onrender.com/gold-rates"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch gold rates");
    }
    const goldRatesData = await response.json();
    return goldRatesData;
  } catch (error) {
    console.error("Error fetching gold rates:", error);
    throw error;
  }
};
// api.js
export const fetchChartData = async () => {
  try {
    const response = await fetch(
      "https://b-vignesh-gold-rate-calculator-backend.onrender.com/chart-data"
    );
    if (!response.ok) {
      throw new Error("Failed to fetch chart data");
    }
    const chartData = await response.json();
    return chartData;
  } catch (error) {
    console.error("Error fetching chart data:", error);
    throw error;
  }
};
