import React from 'react';
import MediaQuery from 'react-responsive';
import HebImage from '../static/images/hebImage.png';
import HebImageMobile from '../static/images/hebImageMobile.png';

const Hebergement = () => {
  return (
    <div>
      <MediaQuery query="(min-device-width: 769px)">
        <img alt="Landscape" src={HebImage} className="lineupImage" />
      </MediaQuery>
      <MediaQuery query="(max-device-width: 768px)">
        <img alt="Landscape" src={HebImageMobile} className="lineupImage" />
      </MediaQuery>
    </div>
  );
};

export default Hebergement;
