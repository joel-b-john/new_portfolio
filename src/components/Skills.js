import React from 'react';
import { FaNode, FaPython } from 'react-icons/fa';

const Skills = () => {
  return (
    <section id="skills" style={sectionStyle}>
      <h1>Skills</h1>
      <div style={iconContainer}>
        <FaNode size={50} />
        <FaPython size={50} />
      </div>
    </section>
  );
}

const sectionStyle = {
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'red',
};

const iconContainer = {
  display: 'flex',
  gap: '20px',
};

export default Skills;
