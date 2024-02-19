import React, { useState } from 'react';
import mercuryImage from './img/mercury.webp';
import venusImage from './img/venus.webp';
import earthImage from './img/earth.webp';


const planetImages = {
    Mercury: mercuryImage,
    Venus: venusImage,
    Earth: earthImage,
    Mars: 'marsImage',
  };

  const planetLeftPositions = {
    Mercury: '7.5rem',
    Venus: '13rem',
    Earth: '13rem',
    Mars: '15.5rem',
  };

  const MainContent = () => {
    const [currentPlanet, setCurrentPlanet] = useState('Earth');
    const currentLeftPosition = planetLeftPositions[currentPlanet] || '13rem';

    return (
      <>
        <p className="coords">N 46° 29' 35.173" / W 30° 43' 11.30"</p>
        <div className="ellipses-container">
          <img src={planetImages[currentPlanet]} alt={currentPlanet} className="container-image"/>
          <h2 className="greeting" style={{ left: currentLeftPosition }}>
            {currentPlanet}
          </h2>
          <div className="ellipses ellipses__outer--thin">
            <div className="ellipses ellipses__orbit"></div>
          </div>
          <div className="ellipses ellipses__outer--thick"></div>
        </div>
        <Scroller currentPlanet={currentPlanet} setCurrentPlanet={setCurrentPlanet} />
      </>
    );
  };

  const Scroller = ({ currentPlanet, setCurrentPlanet }) => {
    const elements = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune', 'Pluto'];

    return (
      <div className="scroller-container">
        {elements.map((element, index) => (
          <div className={`scroller-item ${currentPlanet === element ? "active" : ""}`} key={index} onClick={() => setCurrentPlanet(element)}>
            {element}
          </div>
        ))}
      </div>
    );
  };

  export default MainContent;
