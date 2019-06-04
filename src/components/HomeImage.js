import React from 'react';
import Landscape from '../static/images/home.jpg';
import HomeLogo from './HomeLogo';

const HomeImage = () => {
  return (
    <div>
      <HomeLogo />
      <img alt="Landscape" src={Landscape} className="homeImage" />
    </div>
  );
};

export default HomeImage;
