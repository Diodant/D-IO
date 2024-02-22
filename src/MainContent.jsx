import React, { useState, useEffect } from 'react';
import mercuryImage from './img/mercury.webp';
import venusImage from './img/venus.webp';
import earthImage from './img/earth.webp';
import marsImage from './img/mars.webp';
import jupiterImage from './img/jupiter.webp';
import saturnImage from './img/saturn.webp';
import uranusImage from './img/uranus.webp';
import neptuneImage from './img/neptune.webp';
import plutoImage from './img/pluto.webp';

const planetData = {
  Mercury: {
    image: mercuryImage,
    coords: 'Ω 48,33167° / ω 29,124279°',
    specification: 'Mass 3,285E23 kg· Mean diameter 4880 km· Circulation period 88 d· Satellites	None· Temperature from −190 °С to +430 °С· Compound (O 42,0% Na 29,0% H 22,0% He 6,0% K 0,5% Other 0,5%)·'
  },
  Venus: {
    image: venusImage,
    coords: 'Ω 76,67069° / ω 54,85229°',
    specification: 'Mass 4,867E24 kg· Mean diameter 12104 km· Circulation period 225 d· Satellites	None· Temperature from 173 °C to +127 °С· Compound (CO2 96.5% N 3.5% SO2 0.015% Ar 0.0070% Other 0,001%)·'
  },
  Earth: {
    image: earthImage,
    coords: 'Ω 348,73936° / ω 114,20783°',
    specification: 'Mass 5,972E24 kg· Mean diameter 12742 km· Circulation period 365 d· Satellites	1· Temperature from +7 °C to +27 °С· Compound (N 78.08% O2 20.95% H2O ≤1% Ar 0.9340% Other 0,05%)·'
  },
  Mars: {
    image: marsImage,
    coords: 'Ω 49,57854° / ω 286,46230°',
    specification: 'Mass 6,39E23 kg· Mean diameter 6779 km· Circulation period 687 d· Satellites	2· Temperature from -110 °C to +35 °С· Compound (CO2 95.97% A 1.93% N 1.89% O 0.146% Other 0,01%)·'
  },
  Jupiter: {
    image: jupiterImage,
    coords: 'Ω 100,55615° / ω 275,066°',
    specification: 'Mass 1,898E27 kg· Mean diameter 139820 km· Circulation period 11,86 y· Satellites	39· Temperature from -107 °C to +153 °С· Compound (H 89% He 10% CH4 0.3% NH3 0.026% Other 0,003%)·'
  },
  Saturn: {
    image: saturnImage,
    coords: 'Ω 113,64281° / ω 336,01386°',
    specification: 'Mass 5,683E26 kg· Mean diameter 116460 km· Circulation period 29,46 y· Satellites	118· Temperature from −185 °C to −122 °С· Compound (H 96.3% He 3.25% CH4 0.45% NH3 0.0125% Other 0,01%)·'
  },
  Uranus: {
    image: uranusImage,
    coords: 'Ω 74.006° / ω 96.99885°',
    specification: 'Mass 8,681E25 kg· Mean diameter 50724 km· Circulation period 84 y· Satellites	27· Temperature from -224° °C to -195 °С· Compound (H 83% He 15% CH4 2.3% ND 0.009% Other 0,001%)·'
  },
  Neptune: {
    image: neptuneImage,
    coords: 'Ω 131.783° / ω 273.187°',
    specification: 'Mass 1,024E26 kg· Mean diameter 49244 km· Circulation period 164,79 y· Satellites	14· Temperature from -220° °C to −214 °С· Compound (H 80% He 19% CH4 1.5% ND 0.019% Other 0,001%)·'
  },
  Pluto: {
    image: plutoImage,
    coords: 'Ω 110.299° / ω 113.834°',
    specification: 'Mass 0,24 % Earth· Mean diameter 2280 km· Circulation period 248 y· Satellites	None· Temperature from -228° °C to -238 °С· Compound (H2 97% CH4 2.5% CO 0.5% Other 0,1%)·'
  },
};

  const planetLeftPositions = {
    default: {
      Mercury: '7.5rem',
      Venus: '13rem',
      Earth: '13rem',
      Mars: '15.5rem',
      Jupiter: '7.5rem',
      Saturn: '10.5rem',
      Uranus: '10.5rem',
      Neptune: '7.5rem',
      Pluto: '13rem',
    },
    mobile: {
      Mercury: '6rem',
      Venus: '10rem',
      Earth: '10rem',
      Mars: '11.5rem',
      Jupiter: '7rem',
      Saturn: '8rem',
      Uranus: '8rem',
      Neptune: '6rem',
      Pluto: '10rem',
    }
  };

  const MainContent = () => {
    const [currentPlanet, setCurrentPlanet] = useState('Earth');
    const planetInfo = planetData[currentPlanet];
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleResize = () => {
        setWindowWidth(window.innerWidth);
      };

      window.addEventListener('resize', handleResize);

      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);

    const getLeftPosition = (planet) => {
      if (windowWidth < 768) {
        return planetLeftPositions.mobile[planet] || planetLeftPositions.default[planet];
      } else {
        return planetLeftPositions.default[planet];
      }
    };

    return (
      <>
        <p className="coords">{planetInfo.coords}</p>
        <div className="ellipses-container">
          <img src={planetInfo.image} alt={currentPlanet} className="container-image"/>
          <h2 className="greeting" style={{ left: getLeftPosition(currentPlanet) }}>
            {currentPlanet}
          </h2>
          <div className="ellipses ellipses__outer--thin">
            <div className="ellipses ellipses__orbit"></div>
          </div>
          <div className="ellipses ellipses__outer--thick"></div>
        </div>
        <Scroller currentPlanet={currentPlanet} setCurrentPlanet={setCurrentPlanet} />
        <div className="planet_specification">{planetInfo.specification}</div>
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
