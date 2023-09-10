
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../Resources/StyleSheets/Services.css';


function Services() {
  const servicesArray = [
    {
      title: "Construction & Project management",
      description: "Our team of experienced professionals will oversee the entire construction process, ensuring that projects are completed on time, within budget, and to the highest quality standards.",
      img: 'fas fa-laptop-code'
    },
    {
      title: "Design and Planning",
      description: "We offer comprehensive design and build services, collaborating closely with clients to bring their vision to life while considering the functionality, aesthetics, and sustainability",
      img: 'fas fa-laptop-code'
    },
    {
      title: "Interior Solutions",
      description: "Our expertise extends to interior fit-outs, where we specialize in creating inspiring and functional spaces. We provide customized solutions that meet your specific requirements.",
      img: 'fas fa-laptop-code'
    },
    {
      title: 'Renovations & Remodeling',
      description: "Whether it's a small renovation or a complete remodeling project, we have expertise to transform spaces and create environments that meet your unique needs.",
      img: 'fas fa-laptop-code'
    },
  ];

  // Configure the carousel options
  

const carouselResponsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 736},
    items: 2,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max:735, min: 0 },
    items: 1,
    partialVisibilityGutter: 10,
  },
};



return (
  <div className="Service-list">
    <h2 className="Ongoing-Service">Services offered by us : </h2>
    
      <Carousel responsive={carouselResponsive} removeArrowOnDeviceType={['tablet', 'mobile']}>
        {servicesArray.map((Service) => (
          <div key={Service._id} className="Service-item">
            
            <h3>{Service.title}</h3>
            <p>{Service.description}</p>
          </div>
        ))}
      </Carousel>

  </div>
);
}
export default Services;
