import React from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './Components/Navbar/NavBar';

// pages
import Dashboard from './pages/Dashboard/dashBoard';
import Login from './pages/Login/Login';
import Admin from './pages/Admin/Admin';


//Auth
import SignUp from './pages/Login/Auth/SignUp';

const App = () => {
  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>

      {}
      <Routes>
        <Route path="/SignUp" element={<SignUp />} />
      </Routes>
    </div>
  );
};

export default App;
