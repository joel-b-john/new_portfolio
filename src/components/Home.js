import React from 'react';
import './Home.css'; // Import the CSS file
import yourImage from '../assets/images/image.png'; // Adjust the path to your image

const Home = () => {
  return (
    <section id="home">
      <div className="rectangle">
        <div className="text-container">
        <div className="greeting-container">
          <h2 className="greeting-text"> I'm Joel,</h2>
          <h2 className="animated-sentence">
            I'm
            <h1> <span className="animated-text">Full Stack Developer</span></h1>
          </h2>
        </div>
        </div>
        <img src={yourImage} alt="Description" className="image" />
      </div>
    </section>
  );
}

export default Home;


