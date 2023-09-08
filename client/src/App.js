import React, { useState } from 'react';
import './App.css';
import Home from './Component/Home/Home';
import Specialization from './Component/Home/Specialization';
import NavBar from './Component/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPanel from './Component/AdminPanel/AdminPanel';
import ContactForm from './Component/ContactUs/ContactForm';
import Queries from './Component/ContactUs/Queries';
import Project_upload from './Component/Project/Project_upload';
import ProjectList from './Component/Project/ProjectList';
import Services from './Component/Services/Services';

function App() {
  const [auth , setAuth] = useState("USER");
  const authentication = (E)=>{
    setAuth(E);
  }
  console.log(auth)


  return (
    <Router>
      <>
        <NavBar  authentication = {authentication}/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Projects"  element={<ProjectList />}/>
          <Route path="/About-us" element={<Specialization />} />
          <Route path="/Admin-Panel" element={<AdminPanel auth= {auth}/>} />
          <Route path="/Contact-us" element={<ContactForm />} />
          <Route path="/Queries" element={<Queries  adminAuth={auth}/>} />
          <Route path="/Project_add" element={<Project_upload />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
