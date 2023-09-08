import React from 'react';
import '../Resources/StyleSheets/ChooseUs.css'; // Adjust the path to your CSS file
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

function ChooseUs() {
  
  return (
    <div className='cont choose-us-section'>
      <div className='row choose-use-row'>
        <div className='col-lg-12 choose-us-title'>
          <h2>Why Choose Us</h2>
        </div>
      </div>
      <Carousel
        showArrows={true}
        showThumbs={false}
        autoPlay={true}
        infiniteLoop={true}
        interval={5000} // Adjust the interval (in milliseconds) between slides
        renderThumbs={() => {}} // Disable thumbnail navigation
        renderIndicator={() => {}} // Disable slide indicators
      >
        {/* Slide 1 */}
        <div className='row car-body'>
          <div className='col-lg-4 col-md-6'>
            <div className='feature-box'>
              <div className='feature-icon'>
                <i className='fas fa-clock'></i>
              </div>
              <h4 className='feature-title'>QUALITY / TIMELY COMPLETION</h4>
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
              <h4 className='feature-title'>WE CAN ASSIST AND IDENTIFY FOR SUITABLE PLOT</h4>
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
              <h4 className='feature-title'>SEAMLESS CONSTRUCTION MANAGEMENT</h4>
              <p className='feature-description'>
                We stand by the quality of our work with a construction guarantee for your peace of mind.
              </p>
            </div>
          </div>
        </div>

        {/* Slide 2 */}
        <div className='row'>
          <div className='col-lg-4 col-md-6'>
            <div className='feature-box'>
              <div className='feature-icon'>
                <i className='fas fa-clock'></i>
              </div>
              <h4 className='feature-title'>CUSTOM DESIGN SOLUTIONS</h4>
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
              <h4 className='feature-title'>EXPERT FLOOR PLANS AND ARCHITECTURAL 3D ELEVATIONS</h4>
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
              <h4 className='feature-title'>AS PER VASTHU PLANS</h4>
              <p className='feature-description'>
                We stand by the quality of our work with a construction guarantee for your peace of mind.
              </p>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default ChooseUs;
