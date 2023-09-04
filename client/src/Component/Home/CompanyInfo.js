import React from 'react';

function CompanyInfo() {
  return (
    <div className='row company-info-container'>
      <div className='col-lg-6 col-md-12 company-info'>
        <h2 className='info-title'>Welcome to Panchami Associates</h2>
        <p className='info-description'>
          We are a Leading Construction Company in Bangalore, specializing in building Residential & Commercial Properties. With over 30+ years of experience, we take pride in our on-time completion and delivery of projects. Our commitment to clear and transparent pricing sets us apart, and our excellent customer support ensures your journey with us is smooth and satisfying.
        </p>
        <ul className='info-points'>
          <li className='info-point'>
            <span className='info-icon'>&#10004;</span>
            Experts in building Residential & Commercial Properties
          </li>
          <li className='info-point'>
            <span className='info-icon'>&#10004;</span>
            Over 30+ years of experience
          </li>
          <li className='info-point'>
            <span className='info-icon'>&#10004;</span>
            On-time completion and delivery of projects
          </li>
          <li className='info-point'>
            <span className='info-icon'>&#10004;</span>
            Clear and Transparent Pricing
          </li>
          <li className='info-point'>
            <span className='info-icon'>&#10004;</span>
            Excellent Customer Support
          </li>
        </ul>
      </div>
      <div className='col-lg-6 col-md-12 about-col-img'>
        <div className='about-image-container'>
          <span className='experience-text'>30+ <br/>Year<br/> <span className='experience-text-exp'>Experience</span></span>
          <img className='about-image' src={require('../Resources/Images/Home-about-2.png')} alt='Company' />
        </div>
      </div>
    </div>
  );
}

export default CompanyInfo;
