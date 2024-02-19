import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import './LandingPage.scss';


const App = () => {
  return (
    <div className="container">
      <div className="container__item landing-page-container">
        <div className="content__wrapper">
          <Header />
          <MainContent />
        </div>
      </div>
    </div>
  );
};

export default App;
