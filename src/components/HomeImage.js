import React from 'react';
import Landscape from '../static/images/home.jpg';
import HomeLogo from './HomeLogo';
import HomeImageMobile from '../static/images/homeImageMobile.png';

const HomeImage = () => {
  return (
    <div className="homeImage">
      <HomeLogo />
      {/*      <img alt="Landscape" src={Landscape} className="homeImage" />*/}
      {<img alt="Landscape" src={HomeImageMobile} className="homeImage" />}
    </div>
  );
};

export default HomeImage;
