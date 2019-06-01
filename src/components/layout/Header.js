import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../static/images/logo.svg';
import burger from '../../static/images/burger.svg';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar() {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }
  render() {
    return (
      <div className="header">
        <div>
          <Link to="/">
            <img alt="logo" src={logo} className="logo" />
          </Link>
          <p>Abbots Ripton | 15-18 August | Tickets now on sale</p>
        </div>
        <div>
          <Link to="/menu">
            <img alt="burger" src={burger} className="burger" />
          </Link>
        </div>
      </div>
    );
  }
}
