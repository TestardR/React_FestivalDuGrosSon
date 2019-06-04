import React from 'react';
import Video from '../static/videos/homepage_video.mp4';
import Clementine from '../static/images/clementine.jpg';

const HomeVideo = () => {
  return (
    <div className="homeVideo">
      <img alt="Clementine" src={Clementine} className="homeLogo" />
      <video loop autoPlay>
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  );
};

export default HomeVideo;
