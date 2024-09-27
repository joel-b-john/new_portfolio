import React from 'react';

const Contact = () => {
  return (
    <section id="contact" style={sectionStyle}>
      <h1>Contact</h1>
      <form style={formStyle}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" required style={inputStyle} />
        
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required style={inputStyle} />
        
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" required style={inputStyle} />
        
        <button type="submit" style={buttonStyle}>Send</button>
      </form>
    </section>
  );
}

const sectionStyle = {
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'orange', // Change this color as needed
};

const formStyle = {
  display: 'flex',
  flexDirection: 'column',
  gap: '10px',
  width: '300px', // Adjust width as needed
};

const inputStyle = {
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

const buttonStyle = {
  padding: '10px',
  backgroundColor: '#007BFF',
  color: 'white',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export default Contact;
