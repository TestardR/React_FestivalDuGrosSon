import React from 'react';
import Video from '../static/videos/homepage_video.mp4';

const HomeVideo = () => {
  return (
    <video id="background-video" loop autoPlay className="video">
      <source src={Video} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
};

export default HomeVideo;
