import React, { useState } from 'react';
import axios from 'axios'; // Import Axios
import '../Resources/StyleSheets/Test.css';

const TestimonialForm = () => {
    const [text, setText] = useState('');
    const [author, setAuthor] = useState('');
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const response = await axios.post('https://panchami-associates-backend.onrender.com/api/v1/testimonial', {
          text,
          author,
        });
  
        if (response.status === 201) {
            alert("Testimonial sent successfully")
          setText('');
          setAuthor('');
        } else {
          console.error('Error adding testimonial');
        }
      } catch (error) {
        console.error('Error adding testimonial:', error);
      }
    };
  
    return (
      <div className="testimonial-form my-5 m-auto">
        <h2>Add Testimonial</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="text">Testimonial Text:</label>
            <textarea
              id="text"
              name="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="author">Author:</label>
            <input
              type="text"
              id="author"
              name="author"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };
  
  export default TestimonialForm;