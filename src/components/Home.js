import React from 'react';
import './Home.css'; // Import the CSS file
import yourImage from '../assets/images/image.png'; // Adjust the path to your image

const Home = () => {
  return (
    <section id="home">
      <div className="rectangle">
        <div className="text-container">
          <h1>Welcome to My Portfolio</h1>
          <p>This is a brief introduction about myself.</p>
        </div>
        <img src={yourImage} alt="Description" className="image" />
      </div>
    </section>
  );
}

export default Home;


