import React from 'react';

const Projects = () => {
  return (
    <section id="projects" style={sectionStyle}>
      <h1>Projects</h1>
      <div style={projectsContainerStyle}>
        {/* Example project item */}
        <div style={projectItemStyle}>
          <h2>Project Title</h2>
          <p>Description of the project goes here. This could include technologies used, the purpose of the project, etc.</p>
        </div>
        {/* Add more projects as needed */}
      </div>
    </section>
  );
}

const sectionStyle = {
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'green', // Change this color as needed
};

const projectsContainerStyle = {
  textAlign: 'center', // Center text within the projects container
};

const projectItemStyle = {
  margin: '20px',
  padding: '10px',
  border: '1px solid #ccc', // Example border for project items
  borderRadius: '8px',
};

export default Projects;
