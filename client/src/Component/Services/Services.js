import React from 'react';
import "../Resources/StyleSheets/Services.css"

function Services() {

  const servicesArray = [
    {
      title: "Construction & Project management",
      description: "Our team of experienced professionals will oversee the entire construction process, ensuring that projects are completed on time, within budget, and to the highest quality standards.",
      img: 'fas fa-laptop-code'
    },
    {
      title: "Design and Planning",
      description: "We offer comprehensive design and build services, collaborating closely with clients to bring their vision to life while considering the functionality, aesthetics and sustainability",
      img: 'fas fa-laptop-code'
    },
    {
      title: "Interior Solutions",
      description: "Our expertise extends to interior fit-outs, where we specialize in creating inspiring and functional spaces. We provide customized solutions that meet your specific requirements.",
      img: 'fas fa-laptop-code'
    },
    {
      title: 'Renovations & Remodeling',
      description: "Whether its a small renovation or a complete remodeling project, we have expertise to transform spaces and create environments that meet your unique needs.",
      img: 'fas fa-laptop-code'
    },
  ]

  return (
    <div className='services-container'>
      <h2 className='services-heading' >Services</h2>
      <hr />
      <div className='services-cards'>
      {servicesArray.map((service) => {
        return (
          <div className='services-card'>
            <h3>{service.title}</h3>
            <img src={service.img} />
            <p>{service.description}</p>
          </div>
        ) 
      })
      }
      </div>
    </div>
  )
}

export default Services