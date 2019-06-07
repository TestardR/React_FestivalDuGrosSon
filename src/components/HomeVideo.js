import React, { Component } from 'react';
import Video from '../static/videos/homepage_video.mp4';
import HomeLogo from './HomeLogo';

class HomeVideo extends Component {
  render() {
    return (
      <div className="homeVideo">
        <HomeLogo />
        {/*        <video loop autoPlay>
          <source src={Video} type="video/mp4" />
</video>*/}
      </div>
    );
  }
}

export default HomeVideo;
