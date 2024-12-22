import React, { useState, useEffect } from 'react';
import Login from "./components/Auth/Login";
import EmployeeDashboard from "./components/Dashboard/EmployeeDashboard";
import AdminDashboard from './components/Dashboard/AdminDashboard';
import { getLocalStorage } from "./utils/localStorage.jsx";

const App = () => {
  const [user, setUser] = useState(null);  // Corrected here

  const handleLogin = (email, password) => {
    if (email === 'admin@me.com' && password === 'aitisam') {
      console.log("This is admin");
      setUser("admin");
    } else if (email === 'user@me.com' && password === 'aitisam') {
      console.log("This is User");
      setUser("user");
    } else {
      alert("Invalid Credentials");
    }
  };

  useEffect(() => {
    getLocalStorage();
  }, []);  // Added dependency array to avoid infinite loop

    return (
      <>
      {!user ? <Login handleLogin= {handleLogin} /> : ''}
{user == 'admin' ? <AdminDashboard /> : <EmployeeDashboard />}
      {/* In Component Auth Login add */}
    
      </>
    )
  }

  export default App
