import React from 'react';
import './Resources/StyleSheets/VisionComponent.css'; // Adjust the path to your CSS file

function VisionComponent() {
  return (
    <div className='cont vision-container'>
      <div className='row d-flex justify-content-around'>
        <div className='col-md-6 vision-image'>
          <img src={require('../Component/Resources/Images/AD.png')} alt='Vision' className='img-fluid' />
        </div>
        <div className='col-md-6 vision-content'>
            <div>
                
          <h2 className='vision-title'>OUR VISION</h2>
          <p>
            The primary goal of Panchami Associates is to provide quality construction work and customer satisfaction in this construction industry. We cater Industrial, commercial and residential construction projects. We deliver highly responsive and innovative solutions to bridge our client's execution gaps through a deep understanding of their needs and a culture of shared commitments. Thus optimizing system functionality and improving operation efficiency with outstanding service.
          </p>
            </div>
            <button className=' btn btn-outline-success'>Know-more</button>
        </div>
      </div>
    </div>
  );
}

export default VisionComponent;
