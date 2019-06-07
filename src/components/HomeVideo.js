import React, { Component } from 'react';
import Video from '../static/videos/homepage_video.mp4';
import HomeLogo from './HomeLogo';
import Lineup from '../static/images/lineup.png';

class HomeVideo extends Component {
  render() {
    return (
      <div className="homeVideo">
        <HomeLogo />
        {/*        <video loop autoPlay>
          <source src={Video} type="video/mp4" />
</video>*/}
        <img alt="Landscape" src={Lineup} className="lineupImage" />
      </div>
    );
  }
}

export default HomeVideo;
