import React from 'react';
import './Resources/StyleSheets/Home.css'
import './Resources/StyleSheets/Projects.css'
function Projects() {
  return (
    <div className='container card-section'>
        <h3 className='Ongoing-projects'>PROJECTS</h3>
      <div className='row'>
        <div className='col-lg-4 col-md-6 col-sm-12'>
          <div className='card-2 card'>
            <img src={require('./Resources/Images/c1.jpg')} className='card-img-top' alt='Card 1' />
            <div className='card-body'>
              <h5 className='card-title'>CIVIL AND GENERAL CONTRACTING</h5>
              <p className='card-text'>
              Providing highly qualified civil and general contractor services and dependability that they put while developing properties </p>
              
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12'>
          <div className='card-2 card'>
            <img src={require('./Resources/Images/e2.png')} className='card-img-top' alt='Card 1' />
            <div className='card-body'>
              <h5 className='card-title'>PLANNING 3D ELEVATION & DESIGNS</h5>
              <p className='card-text'>
              Get design your House by Experienced Professionals, we will be pleased to design your dream
              </p>
              
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12'>
          <div className='card-2 card'>
            <img src={require('./Resources/Images/e3.png')} className='card-img-top' alt='Card 1' />
            <div className='card-body'>
              <h5 className='card-title'>DESIGN AND BUILDING TURNKEY PROJECTS</h5>
              <p className='card-text'>
              We at Panchami manage design-build for office, retail or residential refurbishment, and fit-outs, through a systematic approach.
              </p>
              
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12'>
          <div className='card-2 card'>
            <img src={require('./Resources/Images/e5.png')} className='card-img-top' alt='Card 1' />
            <div className='card-body'>
              <h5 className='card-title'>Painting and Tiling</h5>
              <p className='card-text'>
              we at Panchami do Quality painting and tiling services. we do painting services for both interior and exterior.
              </p>
              
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12'>
          <div className='card-2 card'>
            <img src={require('./Resources/Images/e8.png')} className='card-img-top' alt='Card 1' />
            <div className='card-body'>
              <h5 className='card-title'>Interior Design</h5>
              <p className='card-text'>
              We at Panchami offer a variety of interior designing solutions as well as Turnkey Interior Design. </p>
              
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12'>
          <div className='card-2 card'>
            <img src={require('./Resources/Images/s1.jpg')} className='card-img-top' alt='Card 1' />
            <div className='card-body'>
              <h5 className='card-title'>REFURBISHMENTS AND RENOVATION</h5>
              <p className='card-text'>
              We provide renovation services for Bedrooms, kitchens, bathrooms and much more. </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
