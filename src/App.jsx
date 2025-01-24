import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Login from './pages/login';
import SignupPage from './pages/Signup';
import Homepage from './pages/Home';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<SignupPage/>}/>
        <Route path='/home' element={<Homepage/>}/>
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
};

export default App;