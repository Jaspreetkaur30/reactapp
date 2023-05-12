import React from 'react';
import Navbar from './navbar';
import HeadingComponent from './headingcomponent';
import BoldChoicesComponent from './boldcomponent';
import InnovateComponent from './innovative';
import EmbraceCloudComponent from './embrace';
import Footer from './footer';

const App = () => {
  return (
    <div>
      <Navbar />
      <HeadingComponent />
      <BoldChoicesComponent />
      <InnovateComponent />
      <EmbraceCloudComponent />
      <Footer/>
    </div>
  );
};

export default App;