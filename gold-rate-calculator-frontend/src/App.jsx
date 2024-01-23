
// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
// import GoldRates from './components/GoldRates';
// import ChartComponent from './components/ChartComponent';



// const App = () => {
//   return (
//     <div>
//       <h1>Gold Rate Calculator</h1>
//       <GoldRates />
//       <ChartComponent />
//       {/* Other components and functionalities */}
//     </div>
//   );
//   }
// export default App;
// App.jsx

// App.jsx
// import React from 'react';
import React, { useState } from 'react';
import GoldRates from './components/GoldRates';
import ChartComponent from './components/ChartComponent';


const App = () => {
  const [user, setUser] = useState(null);
  const [loginError, setLoginError] = useState(null);

  const handleLogin = (username, password) => {
    // Perform authentication logic here (e.g., call an authentication API)
    // For simplicity, let's consider a basic username/password check
    if (username === 'user' && password === 'password') {
      setUser(username);
      setLoginError(null);
    } else {
      setUser(null);
      setLoginError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    setUser(null);
    setLoginError(null);
  };

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user}!</h1>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Login</h1>
          {loginError && <div style={{ color: 'red' }}>{loginError}</div>}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              const username = e.target.elements.username.value;
              const password = e.target.elements.password.value;
              handleLogin(username, password);
            }}
          >
            <label>
              Username:
              <input type="text" name="username" />
            </label>
            <br />
            <label>
              Password:
              <input type="password" name="password" />
            </label>
            <br />
            <button type="submit">Login</button>
          </form>
        </div>
      )}

      {/* Display gold rates and chart component */}
      {user && (
        <div>
          <GoldRates />
          <ChartComponent />
        </div>
      )}
    </div>
  );
};

export default App;
