import React, { Component } from 'react';
import Video from '../static/videos/homepage_video.mp4';
import HomeLogo from './HomeLogo';
import HomeImage from '../static/images/homeImage.png';

class HomeVideo extends Component {
  render() {
    return (
      <div className="homeVideo">
        <HomeLogo />
        {/*        <video loop autoPlay>
          <source src={Video} type="video/mp4" />
</video>*/}
        {/*<img alt="Landscape" src={HomeImage} className="homeImage" />*/}
      </div>
    );
  }
}

export default HomeVideo;
