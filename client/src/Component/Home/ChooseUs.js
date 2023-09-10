import React from 'react';
import '../Resources/StyleSheets/ChooseUs.css'; // Adjust the path to your CSS file
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

function ChooseUs() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 10,
    },
  };

  const items = [
    // Slide 1
    <div className='car-body'>
      <div className='feature-box'>
        <div className='feature-icon'>
          <i className='fas fa-clock'></i>
        </div>
        <h4 className='feature-title'>QUALITY / TIMELY COMPLETION</h4>
        <p className='feature-description'>
          We are committed to delivering projects on time to ensure your satisfaction and convenience.
        </p>
      </div>
    </div>,

    // Slide 2
    <div className='car-body'>
      <div className='feature-box'>
        <div className='feature-icon'>
          <i className='fas fa-dollar-sign'></i>
        </div>
        <h4 className='feature-title'>WE CAN ASSIST AND IDENTIFY FOR SUITABLE PLOT</h4>
        <p className='feature-description'>
          We believe in transparent pricing, and there are no hidden charges in our services.
        </p>
      </div>
    </div>,

    // Slide 3
    <div className='car-body'>
      <div className='feature-box'>
        <div className='feature-icon'>
          <i className='fas fa-hammer'></i>
        </div>
        <h4 className='feature-title'>SEAMLESS CONSTRUCTION MANAGEMENT</h4>
        <p className='feature-description'>
          We stand by the quality of our work with a construction guarantee for your peace of mind.
        </p>
      </div>
    </div>,

    // Slide 4
    <div className='car-body'>
      <div className='feature-box'>
        <div className='feature-icon'>
          <i className='fas fa-clock'></i>
        </div>
        <h4 className='feature-title'>CUSTOM DESIGN SOLUTIONS</h4>
        <p className='feature-description'>
          We are committed to delivering projects on time to ensure your satisfaction and convenience.
        </p>
      </div>
    </div>,

    // Slide 5
    <div className='car-body'>
      <div className='feature-box'>
        <div className='feature-icon'>
          <i className='fas fa-dollar-sign'></i>
        </div>
        <h4 className='feature-title'>EXPERT FLOOR PLANS AND ARCHITECTURAL 3D ELEVATIONS</h4>
        <p className='feature-description'>
          We believe in transparent pricing, and there are no hidden charges in our services.
        </p>
      </div>
    </div>,

    // Slide 6
    <div className='car-body'>
      <div className='feature-box'>
        <div className='feature-icon'>
          <i className='fas fa-hammer'></i>
        </div>
        <h4 className='feature-title'>AS PER VASTHU PLANS</h4>
        <p className='feature-description'>
          We stand by the quality of our work with a construction guarantee for your peace of mind.
        </p>
      </div>
    </div>,
  ];

  return (
    <div className='cont choose-us-section'>
      <div className='row choose-use-row'>
        <div className='col-lg-12 choose-us-title'>
          <h2>Why Choose Us</h2>
        </div>
      </div>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={5000} // Adjust the interval (in milliseconds) between slides
        removeArrowOnDeviceType={['tablet', 'mobile']}
        dotListClass='custom-dot-list-style' // Add custom styles to dots
      >
        {items.map((item, index) => (
          <div key={index}>{item}</div>
        ))}
      </Carousel>
    </div>
  );
}

export default ChooseUs;
