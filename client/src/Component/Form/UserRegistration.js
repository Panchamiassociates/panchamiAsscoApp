// UserRegistrationForm.js
import React, { useState } from 'react';
import axios from 'axios';

function UserRegistrationForm() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://panchami-associates-backend.onrender.com/api/v1/user', {
        username,
        email,
        password,
        phoneNumber,
      });

      if (response.status === 200) {
        setMessage('User added successfully');
        // Optionally, you can clear the form fields here
        setUsername('');
        setEmail('');
        setPassword('');
        setPhoneNumber('');
      }
    } catch (error) {
      setMessage('Error adding user');
    }
  };

  return (
    <div>
      <h2>Add New User</h2>
      <form onSubmit={handleSubmit}>
        <div className='input'>
          <label>Username</label>
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        <div className='input'>
          <label>Email</label>
          <input
            type='email'
            placeholder='Email'
            value={email}
            onChange={(e) => setEmail(e.target.value.toLowerCase())}
            required
          />
        </div>
        <div className='input'>
          <label>Password</label>
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className='input'>
          <label>Phone Number</label>
          <input
            type='tel'
            placeholder='Phone Number'
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
        </div>
        <button type='submit' className='btn btn-success my-2'>
          Add User
        </button>
      </form>
      {message && (
        <div className="message">
          {message}
        </div>
      )}
    </div>
  );
}

export default UserRegistrationForm;
