import React from 'react';
import { Link } from 'react-router-dom';

const Menu = props => {
  return (
    <div className="header">
      <Link to="/">Accueil</Link>
      <Link to="/lineup">Line-Up</Link>
      <Link to="/restauration">Restauration</Link>
      <Link to="/hebergement">Hébergement</Link>
      <Link to="/billeterie">Billeterie</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/info">Info-Pratiques</Link>
    </div>
  );
};

export default Menu;
