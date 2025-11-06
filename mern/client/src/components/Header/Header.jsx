import React from 'react';
import Booking from '../Booking/Booking';

function Header() {
  return (
    <>
    <header className="header">
      <div className="logo">RG</div>
      <nav>
        <ul>
          <li><a href="#">Menu</a></li>
          <li><a href="#">Bars</a></li>
          <li><a href="#">Artists</a></li>
          <li><a href="#">Events</a></li>
        </ul>
      </nav>
      <button className="login-btn">Login</button>
    </header>
    <Booking />
    </>
  );
}

export default Header;
