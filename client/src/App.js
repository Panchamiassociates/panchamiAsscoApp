import React, { useState } from 'react';
import './App.css';
import Home from './Component/Home/Home';
import Specialization from './Component/Home/Specialization';
import NavBar from './Component/NavBar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AdminPanel from './Component/AdminPanel/AdminPanel';
import ContactForm from './Component/ContactUs/ContactForm';
import Queries from './Component/ContactUs/Queries';
import ProjectUpload from './Component/Project/ProjectUpload';
import ProjectList from './Component/Project/ProjectList';
import Services from './Component/Services/Services';
import TestimonialForm from './Component/Form/TestimonialForm';

function App() {
  const [auth, setAuth] = useState("USER");
  const [admin, setAdmin] = useState(false);
  const [status, setStatus] = useState(false);

  const authentication = (E) => {
    setAuth(E);
    if (E === "ADMIN") {
      setAdmin(true);
    } else {
      setAdmin(false);
    }
  };

  const statusUpdate = (e) => {
    setStatus(e);
  };

  return (
    <Router>
      <>
        <NavBar authentication={authentication} admin={admin} statusUpdate={statusUpdate} status={status} />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/*" element={<div class="error">
  <img src={require('./Component/Resources/Images/error.png')} alt="Error" class="error-img" />
</div> } />
          <Route path="/Projects" element={<ProjectList />} />
          {admin && (
            <>
              <Route path="/Admin-Panel" element={<AdminPanel auth={auth} />} />
              <Route path="/Query-panel" element={<Queries />} />
              <Route path="/Project_add" element={<ProjectUpload />} />
            </>
          )}
          <Route path="/Contact-us" element={<ContactForm />} />
          <Route path="/Services" element={<Services />} />
          {status ? (
            <Route path="/Testimonial" element={<TestimonialForm />} />
          ) : null}
        </Routes>
      </>
    </Router>
  );
}

export default App;
