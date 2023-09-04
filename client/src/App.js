import React, { useState } from 'react';
import './App.css';
import Home from './Component/Home/Home';
import Specialization from './Component/Home/Specialization';
import NavBar from './Component/NavBar';
import Projects from './Component/Projects';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPanel from './Component/AdminPanel/AdminPanel';
import ContactForm from './Component/ContactUs/ContactForm';
import Queries from './Component/ContactUs/Queries';

function App() {
  const [auth, setAuth] = useState(false);

  const authFunc = (e) => {
    setAuth(e);
  };

  const [totalQueries, setTotalQueries] = useState(0);

  const setNumber = (e) => {
    setTotalQueries(e);
    
  };

  return (
    <Router>
      <>
        <NavBar authFunction={authFunc} adminAuth={auth} TotalQueries={totalQueries} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/About-us" element={<Specialization />} />
          <Route path="/Admin-Panel" element={<AdminPanel adminAuth={auth} />} />
          <Route path="/Contact-us" element={<ContactForm />} />
          <Route path="/Queries" element={<Queries setNumber={setNumber}  adminAuth={auth}/>} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
