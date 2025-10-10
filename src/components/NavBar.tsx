import React from 'react';
import Unit from './modular/Unit';
import Section from './modular/Section';
import Logo from './Logo';
import { Link } from 'react-router-dom';
import Button from './modular/Button';

const NavBar = () => {
  return (
    <>
      <Unit
        as="div"
        layout="grid"
        gridTemplate="horizontal-3"
        gap="lg"
        height="2"
        paddingTop="md"
        paddingBottom="md"
        background="dark"
      >
        <Unit layout="flex" alignItems="center">
          <Logo></Logo>
        </Unit>
        <Unit
          layout="flex"
          justifyContent="center"
          gap="xl"
          alignItems="center"
        >
          <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
            Home
          </Link>

          <Link to="/bar" style={{ color: 'white', textDecoration: 'none' }}>
            Bar
          </Link>

          <Link to="/menu" style={{ color: 'white', textDecoration: 'none' }}>
            Menu
          </Link>

          <Link
            to="/contact"
            style={{ color: 'white', textDecoration: 'none' }}
          >
            Contact
          </Link>
        </Unit>
        <Unit layout="flex" justifyContent="right" paddingRight="xl">
          <Button>Login</Button>
        </Unit>
      </Unit>
    </>
  );
};

export default NavBar;
