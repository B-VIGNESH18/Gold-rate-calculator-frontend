
// import React, { useState } from 'react';
// import GoldRates from './components/GoldRates';
// import ChartComponent from './components/ChartComponent';

// const App = () => {
//   const [user, setUser] = useState(null);
//   const [loginError, setLoginError] = useState(null);
//   const [signupError, setSignupError] = useState(null);

//   const handleLogin = (username, password) => {
//     // Perform authentication logic here (e.g., call an authentication API)
//     // For simplicity, let's consider a basic username/password check
//     // Demo credentials for testing:
//     const demoUsername = 'user';
//     const demoPassword = 'password';

//     if (username === demoUsername && password === demoPassword) {
//       setUser(username);
//       setLoginError(null);
//     } else {
//       setUser(null);
//       setLoginError('Invalid username or password');
//     }
//   };

//   const handleSignup = (newUsername, newPassword) => {
//     // Perform user registration logic here (e.g., call a signup API)
//     // For simplicity, let's consider a basic registration without backend interaction
//     if (newUsername && newPassword) {
//       setUser(newUsername);
//       setSignupError(null);
//     } else {
//       setUser(null);
//       setSignupError('Username and password are required for signup');
//     }
//   };

//   const handleLogout = () => {
//     setUser(null);
//     setLoginError(null);
//   };

//   return (
//     <div>
//       {user ? (
//         <div>
//           <h1>Welcome, {user}!</h1>
//           <button onClick={handleLogout}>Logout</button>
//         </div>
//       ) : (
//         <div>
//           <h1>Login</h1>
//           {loginError && <div style={{ color: 'red' }}>{loginError}</div>}
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               const username = e.target.elements.username.value;
//               const password = e.target.elements.password.value;
//               handleLogin(username, password);
//             }}
//           >
//             <label>
//               Username:
//               <input type="text" name="username" />
//             </label>
//             <br />
//             <label>
//               Password:
//               <input type="password" name="password" />
//             </label>
//             <br />
//             <button type="submit">Login</button>
//           </form>

//           <h1>Signup</h1>
//           {signupError && <div style={{ color: 'red' }}>{signupError}</div>}
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               const newUsername = e.target.elements.newUsername.value;
//               const newPassword = e.target.elements.newPassword.value;
//               handleSignup(newUsername, newPassword);
//             }}
//           >
//             <label>
//               New Username:
//               <input type="text" name="newUsername" />
//             </label>
//             <br />
//             <label>
//               New Password:
//               <input type="password" name="newPassword" />
//             </label>
//             <br />
//             <button type="submit">Signup</button>
//           </form>
//         </div>
//       )}

//       {/* Display gold rates and chart component */}
//       {user && (
//         <div>
//           <GoldRates />
//           <ChartComponent />
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
// import React, { useState } from 'react';
// import GoldRates from './components/GoldRates';
// import ChartComponent from './components/ChartComponent';
// import './AppStyles.css';// Import the CSS file
// const App = () => {
//   const [user, setUser] = useState(null);
//   const [loginError, setLoginError] = useState(null);
//   const [signupError, setSignupError] = useState(null);

//   const handleLogin = async (username, password) => {
//     try {
//       const response = await fetch('https://b-vignesh-gold-rate-calculator-backend.onrender.com/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setUser(data.user);
//         setLoginError(null);
//       } else {
//         setUser(null);
//         setLoginError(data.message);
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       setUser(null);
//       setLoginError('Error during login. Please try again.');
//     }
//   };

//   const handleSignup = async (newUsername, newPassword) => {
//     try {
//       const response = await fetch('https://b-vignesh-gold-rate-calculator-backend.onrender.com/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ username: newUsername, password: newPassword }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setUser(data.user);
//         setSignupError(null);
//       } else {
//         setUser(null);
//         setSignupError(data.message);
//       }
//     } catch (error) {
//       console.error('Error during signup:', error);
//       setUser(null);
//       setSignupError('Error during signup. Please try again.');
//     }
//   };

//   const handleLogout = () => {
//     setUser(null);
//     setLoginError(null);
//     setSignupError(null);
//   };

//   return (
//     // (<div> <h1>Gold Rate Calculator</h1> </div>)
//     <div>
//       {user ? (
//         <div>
//           <h1>Welcome, {user}!</h1>
//           {/* <button onClick={handleLogout}>Logout</button> */}
//            <button class="button-orange" onClick={handleLogout}>Logout</button>
//         </div>
//       ) : (
//           <div>
//             <h1>Gold Rate Calculator</h1>
//           <h2>Login</h2>
//           {loginError && <div style={{ color: 'red' }}>{loginError}</div>}
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               const username = e.target.elements.username.value;
//               const password = e.target.elements.password.value;
//               handleLogin(username, password);
//             }}
//           >
//             <label>
//               Username:
//               <input type="text" name="username" />
//             </label>
//             <br />
//             <label>
//               Password:
//               <input type="password" name="password" />
//             </label>
//             <br />
//               {/* <button type="submit">Login</button> */}
//               <button class="button-green" type="submit">Login</button>
//           </form>

//           <h2>Signup</h2>
//           {signupError && <div style={{ color: 'red' }}>{signupError}</div>}
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               const newUsername = e.target.elements.newUsername.value;
//               const newPassword = e.target.elements.newPassword.value;
//               handleSignup(newUsername, newPassword);
//             }}
//           >
//             <label>
//               New Username:
//               <input type="text" name="newUsername" />
//             </label>
//             <br />
//             <label>
//               New Password:
//               <input type="password" name="newPassword" />
//             </label>
//             <br />
//               {/* <button type="submit">Signup</button> */}
//               <button class="button-orange" type="submit">Signup</button>
//           </form>
//         </div>
//       )}

//       {/* Display gold rates and chart component */}
//       {user && (
//         <div>
//           <GoldRates />
//           <ChartComponent />
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
// import React, { useState } from 'react';
// import GoldRates from './components/GoldRates';
// import ChartComponent from './components/ChartComponent';
// import './AppStyles.css'; // Import the CSS file

// const App = () => {
//   const [user, setUser] = useState(null);
//   const [loginError, setLoginError] = useState(null);
//   const [signupError, setSignupError] = useState(null);

//   const handleLogin = async (email, password) => {
//     try {
//       const response = await fetch('https://b-vignesh-gold-rate-calculator-backend.onrender.com/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setUser(data.user);
//         setLoginError(null);
//       } else {
//         setUser(null);
//         setLoginError(data.message);
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       setUser(null);
//       setLoginError('Error during login. Please try again.');
//     }
//   };

//   const handleSignup = async (newEmail, newPassword, goldCarats) => {
//     try {
//       const response = await fetch('https://b-vignesh-gold-rate-calculator-backend.onrender.com/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email: newEmail, password: newPassword, goldCarats }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setUser(data.user);
//         setSignupError(null);
//       } else {
//         setUser(null);
//         setSignupError(data.message);
//       }
//     } catch (error) {
//       console.error('Error during signup:', error);
//       setUser(null);
//       setSignupError('Error during signup. Please try again.');
//     }
//   };

//   const handleLogout = () => {
//     setUser(null);
//     setLoginError(null);
//     setSignupError(null);
//   };

//   const handleCalculate = () => {
//     // Your calculation logic here
//   };

//   return (
//     <div>
//       {user ? (
//         <div>
//           <h1>Welcome, {user}!</h1>
//           <button className="button-orange" onClick={handleLogout}>Logout</button>
//         </div>
//       ) : (
//         <div>
//           <h1>Gold Rate Calculator</h1>
//           <h2>Login</h2>
//           {loginError && <div style={{ color: 'red' }}>{loginError}</div>}
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               const email = e.target.elements.email.value;
//               const password = e.target.elements.password.value;
//               handleLogin(email, password);
//             }}
//           >
//             <label>
//               Email:
//               <input type="text" name="email" />
//             </label>
//             <br />
//             <label>
//               Password:
//               <input type="password" name="password" />
//             </label>
//             <br />
//             <button className="button-green" type="submit">Login</button>
//           </form>

//           <h2>Signup</h2>
//           {signupError && <div style={{ color: 'red' }}>{signupError}</div>}
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               const newEmail = e.target.elements.newEmail.value;
//               const newPassword = e.target.elements.newPassword.value;
//               const goldCarats = e.target.elements.goldCarats.value;
//               handleSignup(newEmail, newPassword, goldCarats);
//             }}
//           >
//             <label>
//               New Email:
//               <input type="text" name="newEmail" />
//             </label>
//             <br />
//             <label>
//               New Password:
//               <input type="password" name="newPassword" />
//             </label>
//             <br />
//             <label>
//               Gold Carats:
//               <select name="goldCarats">
//                 <option value="20">20 Karats</option>
//                 <option value="22">22 Karats</option>
//                 <option value="24">24 Karats</option>
//               </select>
//             </label>
//             <br />
//             <button className="button-orange" type="submit">Signup</button>
//           </form>
//         </div>
//       )}

//       {/* Display gold rates and chart component */}
//       {user && (
//         <div>
//           <GoldRates />
//           <ChartComponent />
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
// import React, { useState } from 'react';
// import GoldRates from './components/GoldRates';
// import ChartComponent from './components/ChartComponent';
// import './AppStyles.css'; // Import the CSS file

// const App = () => {
//   const [user, setUser] = useState(null);
//   const [loginError, setLoginError] = useState(null);
//   const [signupError, setSignupError] = useState(null);

//   const handleLogin = async (email, password) => {
//     try {
//       const response = await fetch('https://b-vignesh-gold-rate-calculator-backend.onrender.com/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setUser(data.user);
//         setLoginError(null);
//       } else {
//         setUser(null);
//         setLoginError(data.message);
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       setUser(null);
//       setLoginError('Error during login. Please try again.');
//     }
//   };

//   const handleSignup = async (newEmail, newPassword, goldCarats) => {
//     try {
//       const response = await fetch('https://b-vignesh-gold-rate-calculator-backend.onrender.com/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email: newEmail, password: newPassword, goldCarats }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setUser(data.user);
//         setSignupError(null);
//       } else {
//         setUser(null);
//         setSignupError(data.message);
//       }
//     } catch (error) {
//       console.error('Error during signup:', error);
//       setUser(null);
//       setSignupError('Error during signup. Please try again.');
//     }
//   };

//   const handleLogout = () => {
//     setUser(null);
//     setLoginError(null);
//     setSignupError(null);
//   };

//   const handleCalculate = () => {
//     // Your calculation logic here
//   };

//   return (
//     <div>
//       {user ? (
//         <div>
//           <h1>Welcome, {user}!</h1>
//           <button className="button-orange" onClick={handleLogout}>Logout</button>
//         </div>
//       ) : (
//         <div>
//           <h1>Gold Rate Calculator</h1>

//           {/* Display signup page first */}
//           <h2>Signup</h2>
//           {signupError && <div style={{ color: 'red' }}>{signupError}</div>}
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               const newEmail = e.target.elements.newEmail.value;
//               const newPassword = e.target.elements.newPassword.value;
//               const goldCarats = e.target.elements.goldCarats.value;
//               handleSignup(newEmail, newPassword, goldCarats);
//             }}
//           >
//             <label>
//               New Email:
//               <input type="text" name="newEmail" />
//             </label>
//             <br />
//             <label>
//               New Password:
//               <input type="password" name="newPassword" />
//             </label>
//             <br />
//             <label>
//               Gold Carats:
//               <select name="goldCarats">
//                 <option value="20">20 Karats</option>
//                 <option value="22">22 Karats</option>
//                 <option value="24">24 Karats</option>
//               </select>
//             </label>
//             <br />
//             <button className="button-orange" type="submit">Signup</button>
//           </form>

//           {/* Display login page second */}
//           <h2>Login</h2>
//           {loginError && <div style={{ color: 'red' }}>{loginError}</div>}
//           <form
//             onSubmit={(e) => {
//               e.preventDefault();
//               const email = e.target.elements.email.value;
//               const password = e.target.elements.password.value;
//               handleLogin(email, password);
//             }}
//           >
//             <label>
//               Email:
//               <input type="text" name="email" />
//             </label>
//             <br />
//             <label>
//               Password:
//               <input type="password" name="password" />
//             </label>
//             <br />
//             <button className="button-green" type="submit">Login</button>
//           </form>
//         </div>
//       )}

//       {/* Display gold rates and chart component */}
//       {user && (
//         <div>
//           <GoldRates />
//           <ChartComponent />
//         </div>
//       )}
//     </div>
//   );
// };

// import React, { useState } from 'react';
// import GoldRates from './components/GoldRates';
// import ChartComponent from './components/ChartComponent';
// import './AppStyles.css'; // Import the CSS file

// const App = () => {
//   const [user, setUser] = useState(null);
//   const [loginError, setLoginError] = useState(null);
//   const [signupError, setSignupError] = useState(null);
//   const [showLogin, setShowLogin] = useState(false); // State to toggle between signup and login

//   const handleLogin = async (email, password) => {
//     try {
//       const response = await fetch('https://b-vignesh-gold-rate-calculator-backend.onrender.com/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email, password }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setUser(data.user);
//         setLoginError(null);
//       } else {
//         setUser(null);
//         setLoginError(data.message);
//       }
//     } catch (error) {
//       console.error('Error during login:', error);
//       setUser(null);
//       setLoginError('Error during login. Please try again.');
//     }
//   };

//   const handleSignup = async (newEmail, newPassword, goldCarats) => {
//     try {
//       const response = await fetch('https://b-vignesh-gold-rate-calculator-backend.onrender.com/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({ email: newEmail, password: newPassword, goldCarats }),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setUser(data.user);
//         setSignupError(null);
//       } else {
//         setUser(null);
//         setSignupError(data.message);
//       }
//     } catch (error) {
//       console.error('Error during signup:', error);
//       setUser(null);
//       setSignupError('Error during signup. Please try again.');
//     }
//   };

//   const handleLogout = () => {
//     setUser(null);
//     setLoginError(null);
//     setSignupError(null);
//   };

//   const handleCalculate = () => {
//     // Your calculation logic here
//   };

//   return (
//     <div>
//       {user ? (
//         <div>
//           <h1>Welcome, {user}!</h1>
//           <button className="button-orange" onClick={handleLogout}>Logout</button>
//         </div>
//       ) : (
//         <div>
//           <h1>Gold Rate Calculator</h1>

//           {showLogin ? (
//             // Display login page
//             <>
//               <h2>Login</h2>
//               {loginError && <div style={{ color: 'red' }}>{loginError}</div>}
//               <form
//                 onSubmit={(e) => {
//                   e.preventDefault();
//                   const email = e.target.elements.email.value;
//                   const password = e.target.elements.password.value;
//                   handleLogin(email, password);
//                 }}
//               >
//                 <label>
//                   Email:
//                   <input type="text" name="email" />
//                 </label>
//                 <br />
//                 <label>
//                   Password:
//                   <input type="password" name="password" />
//                 </label>
//                 <br />
//                 <button className="button-green" type="submit">Login</button>
//               </form>
//               <p>
//                 Don't have an account?{' '}
//                 <button className="button-orange" onClick={() => setShowLogin(false)}>Switch to Signup</button>
//               </p>
//             </>
//           ) : (
//             // Display signup page
//             <>
//               <h2>Signup</h2>
//               {signupError && <div style={{ color: 'red' }}>{signupError}</div>}
//               <form
//                 onSubmit={(e) => {
//                   e.preventDefault();
//                   const newEmail = e.target.elements.newEmail.value;
//                   const newPassword = e.target.elements.newPassword.value;
//                   const goldCarats = e.target.elements.goldCarats.value;
//                   handleSignup(newEmail, newPassword, goldCarats);
//                 }}
//               >
//                 <label>
//                   New Email:
//                   <input type="text" name="newEmail" />
//                 </label>
//                 <br />
//                 <label>
//                   New Password:
//                   <input type="password" name="newPassword" />
//                 </label>
//                 <br />
//                 <label>
//                   Gold Carats:
//                   <select name="goldCarats">
//                     <option value="20">20 Karats</option>
//                     <option value="22">22 Karats</option>
//                     <option value="24">24 Karats</option>
//                   </select>
//                 </label>
//                 <br />
//                 <button className="button-orange" type="submit">Signup</button>
//               </form>
//             </>
//           )}
//         </div>
//       )}

//       {/* Display gold rates and chart component */}
//       {user && (
//         <div>
//           <GoldRates />
//           <ChartComponent />
//         </div>
//       )}
//     </div>
//   );
// };

// export default App;
import React, { useState } from 'react';
import GoldRates from './components/GoldRates';
import ChartComponent from './components/ChartComponent';
import './AppStyles.css'; // Import the CSS file

const App = () => {
  const [user, setUser] = useState(null);
  const [loginError, setLoginError] = useState(null);
  const [signupError, setSignupError] = useState(null);
  const [showLogin, setShowLogin] = useState(true); // Start with the login form visible

  const handleLogin = async (email, password) => {
      // e.preventDefault();
    try {
      const response = await fetch('https://b-vignesh-gold-rate-calculator-backend.onrender.com/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data.user);
        setLoginError(null);
      } else {
        setUser(null);
        setLoginError(data.message);
      }
    } catch (error) {
      console.error('Error during login:', error);
      setUser(null);
      setLoginError('Error during login. Please try again.');
    }
  };

  const handleSignup = async (newEmail, newPassword, goldCarats) => {
    try {
      const response = await fetch('https://b-vignesh-gold-rate-calculator-backend.onrender.com/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: newEmail, password: newPassword, goldCarats }),
      });

      const data = await response.json();

      if (response.ok) {
        setUser(data.user);
        setSignupError(null);
        // After successful signup, switch to the login form
        setShowLogin(true);
      } else {
        setUser(null);
        setSignupError(data.message);
      }
    } catch (error) {
      console.error('Error during signup:', error);
      setUser(null);
      setSignupError('Error during signup. Please try again.');
    }
  };

  const handleLogout = () => {
    setUser(null);
    setLoginError(null);
    setSignupError(null);
  };

  const handleCalculate = () => {
    // Your calculation logic here
  };

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user}!</h1>
          <button className="button-orange" onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <h1>Gold Rate Calculator</h1>

          {showLogin ? (
            // Display login page
            <>
              <h2>Login</h2>
              {loginError && <div style={{ color: 'red' }}>{loginError}</div>}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const email = e.target.elements.email.value;
                  const password = e.target.elements.password.value;
                  handleLogin(email, password);
                }}
              >
                <label>
                  Email:
                  <input type="text" name="email" />
                </label>
                <br />
                <label>
                  Password:
                  <input type="password" name="password" />
                </label>
                <br />
                <button className="button-green" type="submit">Login</button>
              </form>
              <p>
                Don't have an account?{' '}
                <button className="button-orange" onClick={() => setShowLogin(false)}>Switch to Signup</button>
              </p>
            </>
          ) : (
            // Display signup page
            <>
              <h2>Signup</h2>
              {signupError && <div style={{ color: 'red' }}>{signupError}</div>}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  const newEmail = e.target.elements.newEmail.value;
                  const newPassword = e.target.elements.newPassword.value;
                  const goldCarats = e.target.elements.goldCarats.value;
                  handleSignup(newEmail, newPassword, goldCarats);
                }}
              >
                <label>
                  New Email:
                  <input type="text" name="newEmail" />
                </label>
                <br />
                <label>
                  New Password:
                  <input type="password" name="newPassword" />
                </label>
                <br />
                <label>
                  Gold Carats:
                  <select name="goldCarats">
                    <option value="20">20 Karats</option>
                    <option value="22">22 Karats</option>
                    <option value="24">24 Karats</option>
                  </select>
                </label>
                <br />
                <button className="button-orange" type="submit">Signup</button>
              </form>
            </>
          )}
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
