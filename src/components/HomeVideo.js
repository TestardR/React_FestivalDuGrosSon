import React from 'react';
import Video from '../static/videos/homepage_video.mp4';

const HomeVideo = () => {
  return (
    <div className="homeVideo">
      <video loop autoPlay>
        <source src={Video} type="video/mp4" />
        Your browser does not support the video.
      </video>
    </div>
  );
};

export default HomeVideo;
