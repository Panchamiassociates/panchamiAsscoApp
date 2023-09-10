import React from 'react';
import './Resources/StyleSheets/Footer.css'; // Adjust the path to your CSS file
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className='footer-container'>
      <div className='footer-content'>
      <div className='footer-section'>
          <img src={require('./Resources/Images/Logo.png')} className='Logo' alt=''></img>
        </div>
        <div className='footer-section'>
          <h3 className='footer-heading'>Address</h3>
          <a className='footer-address address' href='https://www.google.com/maps/place/SMR+Vinay+Crescent,+Hennur+Bagalur+Main+Rd,+HBR+Layout+4th+Block,+Hennur+Gardens,+Bengaluru,+Karnataka+560043/@13.0326546,77.6362062,17z/data=!3m1!4b1!4m6!3m5!1s0x3bae173eb25d0cb3:0xce63f74434e71bc1!8m2!3d13.0326546!4d77.6362062!16s%2Fg%2F12hm3hr05?entry=ttu'>
            SMR Vinay Crescent, 1st Main Rd, HBR Layout 4th Block HBR Layout, <br />
            Bengaluru, Karnataka 560043 (chrome only)
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
            <li><Link to='/Projects'>Projects</Link></li>
            <li><Link to='/Contact-us'>Contact Us</Link></li>
            <li><Link to='/Services'>Services</Link></li>
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
