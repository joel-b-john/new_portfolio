import React from 'react';
import { Link } from 'react-scroll';
import logo from '../assets/images/logo.jpg'; // Adjust the path to your logo image

const Navbar = () => {
  return (
    <nav style={navbarStyle}>
      <img src={logo} alt="Logo" style={logoStyle} /> {/* Logo on the left */}
      <ul style={navListStyle}>
        <li><Link to="home" smooth={true} style={textcol}>Home</Link></li>
        <li><Link to="about" smooth={true} style={textcol}>About</Link></li>
        <li><Link to="skills" smooth={true} style={textcol}>Skills</Link></li>
        <li><Link to="projects" smooth={true} style={textcol}>Projects</Link></li>
        <li><Link to="contact" smooth={true} style={textcol}>Contact</Link></li>
      </ul>
    </nav>
  );
}
const textcol={
  color: 'white',
}
const navbarStyle = {
  
  position: 'fixed',
  top: '0',
  width: '100%',           // Full width
  height: '80px',         // Increased height for a bigger navbar
  display: 'flex',
  alignItems: 'center',   // Center items vertically
  justifyContent: 'space-between', // Space between logo and nav items
  backgroundColor: 'black',
  padding: '0 20px',
  zIndex: 1000,
};

const logoStyle = {
  height: '60px',         // Adjust the logo height as needed
  marginRight: '20px',    // Space between the logo and nav items
};

const navListStyle = {
  listStyle: 'none',
  margin: '37px',
  padding: '40px',
  display: 'flex',
  gap: '20px',
};

export default Navbar;
