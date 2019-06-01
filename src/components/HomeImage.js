import React from 'react';
import Landscape from '../static/images/home.jpg';

const HomeImage = () => {
  const style = {
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundAttachment: 'fixed',
    height: '100vh'
  };
  return (
    <div>
      <img alt="Landscape" src={Landscape} style={style} />
    </div>
  );
};

export default HomeImage;
