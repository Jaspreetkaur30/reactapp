import React from 'react';
import rp4 from './images/rp4.jpg';

const EmbraceCloudComponent = () => {
  return (
    <div className="embrace-cloud-container">
      <h2 className="embrace-cloud-heading">Embrace Cloud</h2>
      <img src={rp4} alt="Cloud-First accelerate innovation" className="embrace-cloud-image" />
      <p className="embrace-cloud-description">With Cloud-First, accelerate innovation and optimize performance</p>
      <button className="embrace-cloud-btn">Cloud Services</button>
    </div>
  );
};

export default EmbraceCloudComponent;
