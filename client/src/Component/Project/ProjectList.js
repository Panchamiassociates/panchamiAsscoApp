import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../Resources/StyleSheets/Projects.css';
import { Skeleton } from '@mui/material';

function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await axios.get('https://panchami-associates-backend.onrender.com/projects');
        setProjects(response.data.data);
        setLoading(false); // Set loading to false when data is fetched
        console.log(response.data.data)
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    }

    fetchProjects();
  }, []);

  // Configure the carousel options
  const carouselResponsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40,
    },
    tablet: {
      breakpoint: { max: 1024, min: 735 },
      items: 2,
      partialVisibilityGutter: 30,
    },
    mobile: {
      breakpoint: { max: 735, min: 0 },
      items: 1,
      partialVisibilityGutter: 10,
    },
  };

  // Function to render loading skeletons for at least 3 cards
  function renderLoadingSkeletons() {
    const numSkeletons = Math.max(3, projects.length); // At least 3 skeletons
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
      <h2 className="Ongoing-projects">ONGOING PROJECTS</h2>
      <hr />
      {loading ? (
        <div className="loading-skeletons">{renderLoadingSkeletons()}</div>
      ) : (
        <Carousel responsive={carouselResponsive} removeArrowOnDeviceType={['tablet', 'mobile']}>
          {projects.map((project) => (
            <div key={project._id} className="project-item">
              <img
                src={`${project.imageUrl}`}
                alt="Project"
                className="img_proj"
              />
            </div>
          ))}
        </Carousel>
      )}
    </div>
  );
}

export default ProjectList;
