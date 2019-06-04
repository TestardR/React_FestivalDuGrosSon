import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Menu from './Menu';

class Header extends Component {
  state = {
    isVisible: false
  };

  showMenu = () => {
    this.setState(prevState => ({
      isVisible: !prevState.isVisible
    }));
  };

  render() {
    const isVisible = this.state.isVisible;

    if (isVisible) {
      return <Menu />;
    }

    return (
      <div className="header">
        <button onClick={() => this.showMenu()}>Menu</button>
      </div>
    );
  }
}

export default Header;
