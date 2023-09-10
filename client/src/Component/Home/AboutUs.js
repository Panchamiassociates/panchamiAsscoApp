import React from 'react';
import '../Resources/StyleSheets/About_us.css'; // Import your CSS file for styling

const AboutUs = () => {
  return (
    <div className='about-us'>
    <div className='p-5'>
      <div className='row'>
        <div className='col-lg-6 img'>
          <img src={require('../Resources/Images/Home-About.png')} alt='About Us' className='about-us-img' />
        </div>
        <div className='col-lg-6 about-us-content'>
          <h2>About Us</h2>
          <p>
            Unique Solutions For Residentials & Industries! To realize this vision, our workforce and associates strive
            to achieve excellence in every aspect of development to enhance the quality of living for our customers. We have
            a well-experienced and professional team with deep and flexible knowledge in interior designing services.
            We provide the most innovative Home interior, Office interior, and Commercial interior designs.
          </p>
          <ul>
            <li>Ontime services</li>
            <li>24/7 hours services</li>
            <li>Verified professionals</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  
  );
};

export default AboutUs;
