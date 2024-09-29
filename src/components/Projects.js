import React, { useRef } from 'react';
import './Projects.css'; // Import the CSS file for styling
import project1Image from '../assets/images/project1.PNG';
import project1Image1 from '../assets/images/project2.PNG';
// import project1Image2 from '../assets/images/project3.PNG';




const projectsData = [
  { title: 'Project 1', description: 'Description of Project 1', imageUrl: project1Image },
  { title: 'Project 2', description: 'Description of Project 2', imageUrl: project1Image1 },
  { title: 'Project 3', description: 'Description of Project 3', imageUrl: project1Image1 },
  { title: 'Project 4', description: 'Description of Project 4', imageUrl: project1Image1 },
  { title: 'Project 5', description: 'Description of Project 5', imageUrl: project1Image1 },
  { title: 'Project 6', description: 'Description of Project 6', imageUrl: project1Image1 },
];

const Projects = () => {
  const scrollRef = useRef(null); // Reference to the scrollable container
  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -250, behavior: 'smooth' });  // Adjust to match project-card width
  };
  
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 250, behavior: 'smooth' });  // Adjust to match project-card width
  };
  

  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-heading">Projects</h2> {/* Centered heading */}
      <div className="projects-container">
        <button className="scroll-button left" onClick={scrollLeft}>&#9664;</button> {/* Left Arrow */}
        <div className="projects-grid" ref={scrollRef}>
          {projectsData.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.imageUrl} alt={project.title} className="project-image" />
              {/* <img src={project1Image} alt="Project 1" className="project-image" /> */}




              <div className="project-details">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="scroll-button right" onClick={scrollRight}>&#9654;</button> {/* Right Arrow */}
      </div>
    </section>
  );
};

export default Projects;