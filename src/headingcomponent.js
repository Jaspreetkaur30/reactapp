import React from 'react';
import rp2 from './images/rp2.jpg';


const HeadingComponent = () => {
  return (
    <div className="heading-container">
      <h1 className="heading">AI + RPA is what we do</h1>
      <img src={rp2} alt="Future-Proof your business" className="image" />
      <p className="description">Future-Proof your business. Drive efficiency, profitability, and deliver on customer experience.</p>
      <button className="learn-more-btn">AI + RPA Automation</button>
    </div>
  );
};

export default HeadingComponent;
