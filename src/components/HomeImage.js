import React from 'react';
import Landscape from '../static/images/home.jpg';
import HomeLogo from './HomeLogo';
import Lineup from '../static/images/lineup2.png';

const HomeImage = () => {
  return (
    <div className="homeImage">
      <HomeLogo />
      {/*      <img alt="Landscape" src={Landscape} className="homeImage" />*/}
      <img alt="Landscape" src={Lineup} className="lineupImage" />
    </div>
  );
};

export default HomeImage;
