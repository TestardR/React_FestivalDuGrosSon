import React, { Component } from 'react';
import Video from '../static/videos/homepage_video.mp4';

class HomeVideo extends Component {
  render() {
    return (
      <div className="homeVideo">
        <div className="homeLogo">
          <div className="title">{`Festival 
          du 
          Graux Son`}</div>
          <div className="edition info">2nd edition</div>
          <div className="info">
            {`October 11-12-13, 2019
          Tournai, Belgique`}
          </div>
        </div>
        <video loop autoPlay>
          <source src={Video} type="video/mp4" />
        </video>
      </div>
    );
  }
}

export default HomeVideo;
