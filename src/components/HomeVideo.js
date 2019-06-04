import React from 'react';
import Video from '../static/videos/homepage_video.mp4';

const HomeVideo = () => {
  const style = {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100vh',
    overflow: 'hidden'
  };

  return (
    <div style={style}>
      <video loop autoPlay>
        <source src={Video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HomeVideo;
