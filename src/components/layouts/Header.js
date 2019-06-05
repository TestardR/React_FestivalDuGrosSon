import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import './Header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }
  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState(state => ({ menuOpen: !state.menuOpen }));
  }

  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="">
        <Menu
          isOpen={this.state.menuOpen}
          onStateChange={state => this.handleStateChange(state)}
        >
          <Link className="menu-item" to="/" onClick={() => this.closeMenu()}>
            Accueil
          </Link>
          <Link to="/lineup" onClick={() => this.closeMenu()}>
            Line-Up
          </Link>
          <Link to="/restauration" onClick={() => this.closeMenu()}>
            Restauration
          </Link>
          <Link to="/hebergement" onClick={() => this.closeMenu()}>
            Hébergement
          </Link>
          <Link to="/billeterie" onClick={() => this.closeMenu()}>
            Billeterie
          </Link>
          <Link to="/contact" onClick={() => this.closeMenu()}>
            Contact
          </Link>
          <Link to="/info" onClick={() => this.closeMenu()}>
            Info-Pratiques
          </Link>
        </Menu>
      </div>
    );
  }
}

export default Header;
