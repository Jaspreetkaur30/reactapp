import React from 'react';
import rp3 from './images/rp3.jpg'; 

const InnovateComponent = () => {
  return (
    <div className="innovate-container">
      <h2 className="innovate-heading">Innovate with Speed</h2>
      <img src={rp3} alt="Create higher quality software" className="innovate-image" />
      <p className="innovate-description">Create higher quality software, deliver on customer expectations and business goals</p>
      <button className="innovate-btn">DevOps</button>
    </div>
  );
};

export default InnovateComponent;