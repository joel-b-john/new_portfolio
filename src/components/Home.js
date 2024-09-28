import React from 'react';
import './Home.css'; // Import the CSS file
import yourImage from '../assets/images/image.png'; // Adjust the path to your image

const Home = () => {
  return (

    <section id="home">
      <div className="rectangle">
        <div className="text-container">
          <div className="greeting-container">
            <h2 className="greeting-text">Hello.</h2>
            <h2 className="greeting-text">I'm Joel B John,</h2>
            <div className="animated-sentence">
              <h5 className="passionate-text">A passionate</h5>
              <h1>
                <span className="animated-text">Full Stack Developer.</span>
              </h1>
            </div>
          </div>
        </div>
        <img src={yourImage} alt="Joel's profile" className="image" />
      </div>
    </section>
  );
};

export default Home;
