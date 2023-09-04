import React from 'react';
import '../Resources/StyleSheets/Home.css'

function CardSection() {
  return (
    <div className='container card-section'>
      <div className='row'>
        <div className='col-lg-4 col-md-6 col-sm-12'>
          <div className='card'>
            <img src={require('../Resources/Images/SI-1.png')} className='card-img-top' alt='Card 1' />
            <div className='card-body'>
              <h5 className='card-title'>CIVIL AND GENERAL CONTRACTING</h5>
              <p className='card-text'>
              Providing highly qualified civil and general contractor services and dependability that they put while developing properties </p>
              
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12'>
          <div className='card'>
            <img src={require('../Resources/Images/SI-2.png')} className='card-img-top' alt='Card 1' />
            <div className='card-body'>
              <h5 className='card-title'>PLANNING 3D ELEVATION & DESIGNS</h5>
              <p className='card-text'>
              Get design your House by Experienced Professionals, we will be pleased to design your dream
              </p>
              
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12'>
          <div className='card'>
            <img src={require('../Resources/Images/SI-3.png')} className='card-img-top' alt='Card 1' />
            <div className='card-body'>
              <h5 className='card-title'>DESIGN AND BUILDING TURNKEY PROJECTS</h5>
              <p className='card-text'>
              We at Panchami manage design-build for office, retail or residential refurbishment, and fit-outs, through a systematic approach.
              </p>
              
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12'>
          <div className='card'>
            <img src={require('../Resources/Images/SI-4.png')} className='card-img-top' alt='Card 1' />
            <div className='card-body'>
              <h5 className='card-title'>Painting and Tiling</h5>
              <p className='card-text'>
              we at Panchami do Quality painting and tiling services. we do painting services for both interior and exterior.
              </p>
              
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12'>
          <div className='card'>
            <img src={require('../Resources/Images/SI-5.png')} className='card-img-top' alt='Card 1' />
            <div className='card-body'>
              <h5 className='card-title'>Interior Design</h5>
              <p className='card-text'>
              We at Panchami offer a variety of interior designing solutions as well as Turnkey Interior Design. </p>
              
            </div>
          </div>
        </div>
        <div className='col-lg-4 col-md-6 col-sm-12'>
          <div className='card'>
            <img src={require('../Resources/Images/SI-6.png')} className='card-img-top' alt='Card 1' />
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

export default CardSection;
