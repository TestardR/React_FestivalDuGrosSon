import React from 'react';
import { Link } from 'react-router-dom';

import MediaQuery from 'react-responsive';
import HeaderBurger from './HeaderBurger';

const Header = () => {
  return (
    <div>
      <MediaQuery query="(min-device-width: 769px)">
        <ul className="headerMenu">
          <li>
            <Link className="headerItem" to="/">
              ACCUEIL
            </Link>
          </li>
          <li>
            <Link className="headerItem" to="/lineup">
              LINE-UP
            </Link>
          </li>
          <li>
            <Link className="headerItem" to="/restauration">
              RESTAURATION
            </Link>
          </li>
          <li>
            <Link className="headerItem" to="/hebergement">
              HEBERGEMENT
            </Link>
          </li>
          <li>
            <Link className="headerItem" to="/billeterie">
              BILLETS
            </Link>
          </li>
          <li>
            <Link className="headerItem" to="/contact">
              CONTACT
            </Link>
          </li>
          <li>
            <Link className="headerItem" to="/info">
              INFO-PRATIQUE
            </Link>
          </li>
        </ul>
      </MediaQuery>

      <MediaQuery query="(max-device-width: 768px)">
        <HeaderBurger />
      </MediaQuery>
    </div>
  );
};

export default Header;
