import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../static/images/logo.svg';
import burger from '../../static/images/burger.svg';

const Header = props => {
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
};

export default Header;
