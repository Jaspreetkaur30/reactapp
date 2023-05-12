import React from 'react';
import p1 from './images/p1.png';

const BoldChoicesComponent = () => {
  return (
    <div className="bold-choices-container">
      <h2 className="bold-choices-heading">Make Bolder Choices</h2>
      <img src={p1} alt="Digital focused strategies" className="bold-choices-image" />
      <p className="bold-choices-description">Digital focused strategies to realize market-changing ideas</p>
      <button className="bold-choices-btn">Build Better Apps</button>
    </div>
  );
};

export default BoldChoicesComponent;