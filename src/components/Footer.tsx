import React from 'react';
import Unit from './modular/Unit';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <Unit background="light" layout="flex" height="7">
      <Unit
        layout="flex"
        flexDirection="vertical"
        marginTop="xl"
        marginLeft="xl"
      >
        <Unit as="img" alt="logo"></Unit>
        <Unit as="p">The Royal George Hotel is</Unit>
        <Unit as="p">where the best night out</Unit>
        <Unit as="p">begins. Our family owned pub</Unit>
        <Unit as="p">is made up of 4 separate</Unit>
        <Unit as="p">bars including the valley's</Unit>
        <Unit as="p">largest beer garden.</Unit>
      </Unit>
      <Unit
        layout="flex"
        flexDirection="vertical"
        paddingTop="md"
        marginTop="xl"
      >
        <Unit as="h3">Quick Links</Unit>
        <Unit>
          <Link to="/menu">Menu</Link>
        </Unit>
        <Unit>
          <Link to="/bars">Bars</Link>
        </Unit>
        <Unit>
          <Link to="/about">About</Link>
        </Unit>
        <Unit>
          <Link to="/contact">Contact Us</Link>
        </Unit>
      </Unit>

      <Unit
        layout="flex"
        flexDirection="vertical"
        paddingTop="md"
        marginTop="xl"
      >
        <Unit as="h3">Resources</Unit>
        <Unit>
          <Link to="/blog">Blog</Link>
        </Unit>
        <Unit>
          <Link to="/career">Career</Link>
        </Unit>
        <Unit>
          <Link to="/privacy">Privacy</Link>
        </Unit>
        <Unit>
          <Link to="/terms">Terms</Link>
        </Unit>
      </Unit>
      <Unit
        as="div"
        borderColor="black"
        paddingLeft="xl"
        paddingRight="xl"
        marginTop="md"
        marginBottom="md"
        marginRight="md"
        width="100"
      ></Unit>
    </Unit>
  );
};

export default Footer;
