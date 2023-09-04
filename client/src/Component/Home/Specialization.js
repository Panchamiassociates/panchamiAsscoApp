import React from 'react'
import '../Resources/StyleSheets/Specialization.css'

import CardSection from './CardSection'

function Specialization() {
  return (
    <div>
        <div className='row sp'>
        <span className='sp-light'>ABOUT US</span>
        <span className='sp-dark'>Constructions and Renovation Solutions</span>
        </div>
        <CardSection/>
    </div>
  )
}

export default Specialization