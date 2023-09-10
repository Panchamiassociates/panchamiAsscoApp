import React from 'react';
import '../Resources/StyleSheets/Home.css';
import welcomeImage from '../Resources/Images/e3.png';

function HomePage() {
 

  return (
    <div className='intro-page'>
      <div className='container'>
        <div className='row intro-row'>
          <div className='col-lg-6 Intro'>
            <h4 className='w-100 WORDS'>WELCOME TO PANCHAMI ASSOCIATION: <br></br> CRAFTING THE BLUEPRINT OF EXCELLENCE IN CIVIL CONSTRUCTION</h4>
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
