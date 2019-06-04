import React, { Component } from 'react';
import MediaQuery from 'react-responsive';

import HomeVideo from './HomeVideo';
import HomeImage from './HomeImage';

class Home extends Component {
  render() {
    return (
      <div>
        <MediaQuery query="(min-device-width: 769px)">
          <HomeVideo />
        </MediaQuery>
        <MediaQuery query="(max-device-width: 768px)">
          <HomeImage />
        </MediaQuery>
      </div>
    );
  }
}
export default Home;
