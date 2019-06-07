import React from 'react';
import MediaQuery from 'react-responsive';
import Lineup from '../static/images/lineupImage.png';
import LineupImageMobile from '../static/images/lineupImageMobile.png';

const LineUp = () => {
  return (
    <div className="lineup">
      <MediaQuery query="(min-device-width: 769px)">
        <img alt="Landscape" src={Lineup} className="lineupImage" />
      </MediaQuery>
      <MediaQuery query="(max-device-width: 768px)">
        <img alt="Landscape" src={LineupImageMobile} className="lineupImage" />
      </MediaQuery>
    </div>
  );
};

export default LineUp;
