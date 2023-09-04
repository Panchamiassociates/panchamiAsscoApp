import React from 'react';
import '../Resources/StyleSheets/ChooseUs.css'; // Adjust the path to your CSS file

function ChooseUs() {
  return (
    <div className='cont choose-us-section'>
      <div className='row choose-use-row m-5'>
        <div className='col-lg-12 choose-us-title'>
          <h2>Why Choose Us</h2>
        </div>
      </div>
      <div className='row'>
        <div className='col-lg-4 col-md-6'>
          <div className='feature-box'>
            <div className='feature-icon'>
              <i className='fas fa-clock'></i>
            </div>
            <h4 className='feature-title'>Timely Delivery</h4>
            <p className='feature-description'>
              We are committed to delivering projects on time to ensure your satisfaction and convenience.
            </p>
          </div>
        </div>

        <div className='col-lg-4 col-md-6'>
          <div className='feature-box'>
            <div className='feature-icon'>
              <i className='fas fa-dollar-sign'></i>
            </div>
            <h4 className='feature-title'>No Hidden Charges</h4>
            <p className='feature-description'>
              We believe in transparent pricing, and there are no hidden charges in our services.
            </p>
          </div>
        </div>

        <div className='col-lg-4 col-md-6'>
          <div className='feature-box'>
            <div className='feature-icon'>
              <i className='fas fa-hammer'></i>
            </div>
            <h4 className='feature-title'>Construction Guarantee</h4>
            <p className='feature-description'>
              We stand by the quality of our work with a construction guarantee for your peace of mind.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
