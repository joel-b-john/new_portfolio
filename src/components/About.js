import React from 'react';

const About = () => {
  return (
    <section id="about" style={sectionStyle}>
      <h1>About</h1>
    </section>
  );
}

const sectionStyle = {
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'gray', // Change this to your desired color
};

export default About;
