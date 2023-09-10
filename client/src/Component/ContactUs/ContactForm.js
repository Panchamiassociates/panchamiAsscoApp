import React, { useState } from 'react';
import axios from 'axios';
import '../Resources/StyleSheets/ContactUs.css';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://panchami-associates-backend.onrender.com/api/v1/queries', formData);

      if (response.status === 201) {
        alert('Message submitted successfully!');
        setFormData({
          name: '',
          email: '',
          phoneNumber: '',
          message: '',
        });
      } else {
        alert('Failed to submit message. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting message:', error);
      alert('Failed to submit message. Please try again later.');
    }
  };

  return (
    <div className="contact-form">
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Phone Number:</label>
          <input
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Message:</label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className='btn btn-success'>Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
