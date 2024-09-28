import React from 'react';
import aboutImage from '../assets/images/about.jpeg'; // Adjust the path to your image

const About = () => {
  return (
    <section id="about" style={aboutSectionStyle}>
      {/* Single rectangle containing both the image and content */}
      <div style={singleRectangleStyle}>
        {/* Image section */}
        <div style={imageContainerStyle}>
          <img src={aboutImage} alt="About Me" style={imageStyle} />
        </div>

        {/* Content section */}
        <div style={contentStyle}>
          <h2>About Me</h2>
          <p>
            I'm Joel B. John, a passionate Full Stack Developer with 6 years of experience in web development.
            I specialize in building responsive and dynamic applications using modern technologies.
          </p>
          <p>
          Experienced back-end developer with a strong background in web development and software engineering.
          Possessing exceptional problem-solving and communication skills, adept at developing and maintaining high-quality software projects.
          Experienced in object-oriented programming and languages such as Python, Java, Django and PHP. 
          Designed and developed web applications across multiple APIs, third-party integrations and databases. 
          Expertise in developing database systems and using SQL to query and manipulate data.
          Proven ability to work collaboratively and independently to deliver successful projects on time and within budget.Experienced back-end developer with a strong background in web development and software engineering. Possessing exceptional problem-solving and communication skills, adept at developing and maintaining high-quality software projects. Experienced in object-oriented programming and languages such as Python, Java, Django and PHP. Designed and developed web applications across multiple APIs, third-party integrations and databases. Expertise in developing database systems and using SQL to query and manipulate data. Proven ability to work collaboratively and independently to deliver successful projects on time and within budget.
         
            My expertise includes JavaScript, React, Node.js, and Python. I enjoy turning complex problems into
            elegant solutions and constantly learning new technologies to enhance my skills.
          </p>
        </div>
      </div>
    </section>
  );
};

const aboutSectionStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  backgroundColor: '#f7f7f7', // Light background color for the section
  padding: '0 20px',
};

const singleRectangleStyle = {
  display: 'flex',
  width: '100%',
  maxWidth: '1200px',
  backgroundColor: '#ffffff', // White background for the rectangle
  borderRadius: '10px',
  padding: '20px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', // Add a subtle shadow
  alignItems: 'center',
};

const imageContainerStyle = {
  flex: 1, // Image takes up 50% of the space
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  paddingRight: '20px', // Space between the image and content
};

const imageStyle = {
  maxWidth: '100%',
  maxHeight: '100%',
  borderRadius: '10px',
  objectFit: 'cover', // Ensures the image fills the space proportionally
};

const contentStyle = {
  flex: 1, // Content takes up the other 50%
  textAlign: 'left',
  color: '#333',
};

export default About;
