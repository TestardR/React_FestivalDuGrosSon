import React from 'react';
import Landscape from '../static/images/home.jpg';

const HomeImage = () => {
  return (
    <div>
      <img alt="Landscape" src={Landscape} className=".homeImage" />
    </div>
  );
};

export default HomeImage;
