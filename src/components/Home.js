import React, { Component, Fragment } from 'react';
import MediaQuery from 'react-responsive';

import HomeVideo from './HomeVideo';
import HomeImage from './HomeImage';

class Home extends Component {
  render() {
    return (
      <Fragment>
        <MediaQuery query="(min-device-width: 769px)">
          <HomeVideo />
        </MediaQuery>
        <MediaQuery query="(max-device-width: 768px)">
          <HomeImage />
        </MediaQuery>
      </Fragment>
    );
  }
}
export default Home;
