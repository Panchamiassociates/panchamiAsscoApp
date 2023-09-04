import React from 'react';
import './Resources/StyleSheets/Footer.css'; // Adjust the path to your CSS file

function Footer() {
  return (
    <footer className='footer-container'>
      <div className='footer-content'>
      <div className='footer-section'>
          <img src={require('./Resources/Images/Logo.png')} className='Logo'></img>
        </div>
        <div className='footer-section'>
          <h3 className='footer-heading'>Address</h3>
          <a className='footer-address address' href='https://goo.gl/maps/4nwJ2ZfW52QWJhUE6'>
            SMR Vinay Crescent, 1st Main Rd, HBR Layout 4th Block HBR Layout, <br />
            Bengaluru, Karnataka 560043
          </a>
        </div>
        <div className='footer-section'>
          <h3 className='footer-heading'>Contact</h3>
          <p className='footer-contact'>
            <a href='tel:+919480865676'>+91 9480865676</a> <br />
            <a href='mailto:panchamiassociates@gmail.com'>panchamiassociates@gmail.com</a>
          </p>
        </div>
        <div className='footer-section'>
          <h3 className='footer-heading'>Quick Links</h3>
          <ul className='footer-links'>
            <li><a href='#'>About Us</a></li>
            <li><a href='#'>Contact Us</a></li>
            <li><a href='#'>Completed Projects</a></li>
          </ul>
        </div>
      </div>
      <div className='footer-bottom'>
        <p className='footer-copy'>&copy; Panchami Associates, All Rights Reserved. 2023</p>
      </div>
    </footer>
  );
}

export default Footer;
