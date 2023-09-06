// frontend/src/components/ProjectList.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Resources/StyleSheets/Projects.css';

function ProjectList() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch project data from the backend API
    async function fetchProjects() {
      try {
        const response = await axios.get('http://localhost:3001/projects');
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
    }

    fetchProjects();
  }, []);

  // Split projects into sets of three
  const projectSets = [];
  for (let i = 0; i < projects.length; i += 3) {
    projectSets.push(projects.slice(i, i + 3));
  }

  return (
    <div className="project-list">
      <h2 className="Ongoing-projects">Ongoing Projects</h2>
      {projects.length > 0 ? (
        <Carousel showThumbs={false}>
          {projectSets.map((projectSet, index) => (
            <div key={index} className="project-set">
              {projectSet.map((project) => (
                <div key={project._id} className="project-item">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <img
                    src={`data:image/png;base64,${project.image}`}
                    alt="Project"
                    className="img_proj"
                  />
                </div>
              ))}
            </div>
          ))}
        </Carousel>
      ) : (
        <p>No ongoing projects available.</p>
      )}
    </div>
  );
}

export default ProjectList;
