
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../Resources/StyleSheets/Test.css';
import { Skeleton } from '@mui/material';


const TestimonialsComponent = () => {
  const [testimonialsData , setTestimonialsData] = useState([]);
  const [loading, setLoading] = useState(true)

useEffect(()=>{
  try{
    axios.get('https://panchami-associates-backend.onrender.com/api/v1/testimonial').then(res=>{
      setTestimonialsData(res.data.data);
      setLoading(false);
    })
  }
  catch(err){
    setLoading(true);
  }
},[])


const carouselResponsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40,
  },
  tablet: {
    breakpoint: { max: 1024, min: 726 },
    items: 2,
    partialVisibilityGutter: 30,
  },
  mobile: {
    breakpoint: { max: 720, min: 0 },
    items: 1,
    partialVisibilityGutter: 10,
  },
};

// Function to render loading skeletons for at least 3 cards
function renderLoadingSkeletons() {
  const numSkeletons = Math.max(3, testimonialsData.length); // At least 3 skeletons
  const skeletons = [];

  for (let i = 0; i < numSkeletons; i++) {
    skeletons.push(
      <div key={i} className="project-item">
        <Skeleton variant="text" width={200} height={30} />
        <Skeleton variant="text" width={300} height={20} />
        <Skeleton variant="rectangular" width={300} height={200} />
      </div>
    );
  }

  return skeletons;
}

return (
  <div className="project-list">
    {testimonialsData.length > 0 ? <div>
    <h2 className="Ongoing-projects">Look what our past customers have to say about us</h2>
    {loading ? (
      <div className="loading-skeletons">{renderLoadingSkeletons()}</div>
      ) : (
        <Carousel responsive={carouselResponsive} removeArrowOnDeviceType={['tablet', 'mobile']}>
        {testimonialsData.map((project) => (
          <div key={project._id} className="test-item">
            <h3>{project.text}</h3>
            <p>- {project.author}</p>
          </div>
        ))}
      </Carousel>
    )}
    </div> : <></>}
  </div>
);
}
export default TestimonialsComponent;
