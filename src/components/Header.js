import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';
import '../styles/main.scss';

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
        <Navbar color="faded" light>
          <NavbarBrand href="/" className="mr-auto">
            Festival du Gros Son
          </NavbarBrand>
          <NavbarToggler onClick={this.toggleNavbar} className="mr-2" />
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="/home/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/tickets/">Tickets</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/lineup/">Line Up</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/accomodation/">Accomodation</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/information/">Information</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/travel/">Travel</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}
