import React from 'react';
import { Link } from 'react-router-dom';

import MediaQuery from 'react-responsive';
import HeaderBurger from './HeaderBurger';

const Header = () => {
  return (
    <div>
      <MediaQuery query="(min-device-width: 769px)">
        <div className="headerWrapper">
          <ul className="headerMenu">
            <li>
              <Link className="headerItem" id="headerItem1" to="/">
                ACCUEIL
              </Link>
            </li>
            <li>
              <Link className="headerItem" id="headerItem2" to="/lineup">
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
              <Link className="headerItem" id="headerItem3" to="/billeterie">
                BILLETS
              </Link>
            </li>
            <li>
              <Link className="headerItem" id="headerItem4" to="/contact">
                CONTACT
              </Link>
            </li>
            <li>
              <Link className="headerItem" to="/info">
                INFO-PRATIQUE
              </Link>
            </li>
          </ul>
          <div className="headerLogo">K-MAGRA</div>
        </div>
      </MediaQuery>

      <MediaQuery query="(max-device-width: 768px)">
        <HeaderBurger />
      </MediaQuery>
    </div>
  );
};

export default Header;
