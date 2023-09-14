import React from 'react';
import '../Resources/StyleSheets/Home.css';
import welcomeImage from '../Resources/Images/e3.png';

function HomePage() {
 

  return (
    <div className='intro-page'>
      <div className='containers'>
        <div className='row intro-row'>
          <div className='col-lg-6 Intro'>
            <h4 className='WORDS'>WELCOME TO PANCHAMI ASSOCIATES: </h4><br></br> <p>CRAFTING THE BLUEPRINT OF EXCELLENCE IN CIVIL CONSTRUCTION</p>
          </div>
          <div className='col-lg-6 Intro'>
            <img src={welcomeImage} className='Intro-img' alt='' />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
