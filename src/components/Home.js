import React, { Component } from 'react';

class Home extends Component {
  state = {
    videoURL: '../static/videos/homepage_video.mp4'
  };

  render() {
    return (
      <video id="background-video" loop autoPlay>
        <source src={this.state.videoURL} type="video/mp4" />
        <source src={this.state.videoURL} type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    );
  }
}
export default Home;
