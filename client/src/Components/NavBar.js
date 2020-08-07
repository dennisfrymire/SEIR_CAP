import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';


const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar className="container" light expand="md">
        <NavbarBrand className="headline" href="/">quotes</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto main-text-font" navbar>
            <NavItem>
              <NavLink href="/add">add new quote</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/Components/About">about</NavLink>
            </NavItem>
          </Nav>
          <NavbarBrand className="headline">be inspired</NavbarBrand>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default NavBar;