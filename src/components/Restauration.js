import React from 'react';
import MediaQuery from 'react-responsive';
import RestoImage from '../static/images/restoImage.png';
import RestoImageMobile from '../static/images/restoImageMobile.png';

const Restauration = () => {
  return (
    <div>
      <MediaQuery query="(min-device-width: 769px)">
        <img alt="Landscape" src={RestoImage} className="lineupImage" />
      </MediaQuery>
      <MediaQuery query="(max-device-width: 768px)">
        <img alt="Landscape" src={RestoImageMobile} className="lineupImage" />
      </MediaQuery>
    </div>
  );
};

export default Restauration;
