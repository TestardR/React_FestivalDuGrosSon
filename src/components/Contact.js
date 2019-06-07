import React from 'react';
import MediaQuery from 'react-responsive';
import ContactImage from '../static/images/contactImage.png';
import ContactImageMobile from '../static/images/contactImageMobile.png';

const Contact = () => {
  return (
    <div>
      <MediaQuery query="(min-device-width: 769px)">
        <img alt="Landscape" src={ContactImage} className="lineupImage" />
      </MediaQuery>
      <MediaQuery query="(max-device-width: 768px)">
        <img alt="Landscape" src={ContactImageMobile} className="lineupImage" />
      </MediaQuery>
    </div>
  );
};

export default Contact;
