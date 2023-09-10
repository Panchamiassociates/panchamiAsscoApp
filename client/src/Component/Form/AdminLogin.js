import React, { useState } from 'react';
import '../Resources/StyleSheets/UserLogin.css';
import axios from 'axios';

function AdminLogin({authentication ,statusUpdate}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showToast, setShowToast] = useState(false); // State for showing the toast

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://panchami-associates-backend.onrender.com/api/v1/login ', { email, password });
      if (response.status  ===200) {
        alert("successfully logged in")
        if(response.data.role  === "ADMIN"){
          authentication("ADMIN");
        }

        
        if(response.data.status){
          statusUpdate(true)
        }
        else{
          statusUpdate(false)
        }
        
        console.log(response.data.role)
        console.log(response.data.status)
      }
      else{
        alert("wrong password")
      }
    } catch (error) {
     
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='input'>
          <label>Email</label>
          <input
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className='input'>
          <label>Password</label>
          <input
            placeholder='Password'
            type='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type='submit' className='btn btn-success my-2' data-bs-dismiss="modal">
          Login
        </button>
      </form>

      {/* Bootstrap Toast */}
      {showToast && (
        <div
          className="toast show"
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header">
            <strong className="me-auto">Success</strong>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="toast"
              aria-label="Close"
              onClick={() => setShowToast(false)} // Hide the toast on close
            ></button>
          </div>
          <div className="toast-body">Admin logged in successfully!</div>
        </div>
      )}
    </div>
  );
}

export default AdminLogin;
