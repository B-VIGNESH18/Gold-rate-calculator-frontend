
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import GoldRates from './components/GoldRates';
import ChartComponent from './components/ChartComponent';

const App = () => {
  return (
    <div>
      <h1>Gold Rate Calculator</h1>
      <GoldRates />
      <ChartComponent />
      {/* Other components and functionalities */}
    </div>
  );
};

export default App;
