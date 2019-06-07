import React from 'react';
import MediaQuery from 'react-responsive';
import InfoImage from '../static/images/infoImage.png';
import InfoImageMobile from '../static/images/infoImageMobile.png';

const Info = () => {
  return (
    <div>
      <MediaQuery query="(min-device-width: 769px)">
        <img alt="Landscape" src={InfoImage} className="lineupImage" />
      </MediaQuery>
      <MediaQuery query="(max-device-width: 768px)">
        <img alt="Landscape" src={InfoImageMobile} className="lineupImage" />
      </MediaQuery>
    </div>
  );
};

export default Info;
